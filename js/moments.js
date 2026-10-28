(function() {
  const fallbackQuotes = [
    { text: "The hearth is not simply a hearth of fire, but a gathering of souls who keep one another warm.", author: "Domestic Heirloom Record" },
    { text: "In every shared rhythm, memory becomes the anchor that binds our wandering lives.", author: "Elena Al-Rashid" },
    { text: "We do not remember days, we remember moments steeped in laughter, mint tea, and quiet afternoons.", author: "Cesare Pavese" },
    { text: "A home is woven from the small cadences repeated with love until they become sacred.", author: "Tariq Al-Rashid" },
    { text: "Memory is the diary that we all carry about with us, bound in linen and worn with care.", author: "Oscar Wilde" }
  ];

  const hearthLocations = [
    { name: "Abu Dhabi", country: "UAE", lat: 24.4539, lng: 54.3773, polaroids: 182, histories: 9, root: true, desc: "Primary Hearth Root: Balcony garden and central hearth hub." },
    { name: "Kyoto", country: "Japan", lat: 35.0116, lng: 135.7681, polaroids: 46, histories: 3, root: false, desc: "Summer bamboo grove walk and ceramic tea bowls." },
    { name: "Edinburgh", country: "UK", lat: 55.9533, lng: -3.1883, polaroids: 34, histories: 2, root: false, desc: "Autumn castle climb and fireside book journals." },
    { name: "Beirut", country: "Lebanon", lat: 33.8938, lng: 35.5018, polaroids: 68, histories: 5, root: false, desc: "Grandmother's kitchen and olive oil harvest." },
    { name: "Florence", country: "Italy", lat: 43.7696, lng: 11.2558, polaroids: 29, histories: 2, root: false, desc: "Artisan paper-making studio and sunset bridges." }
  ];

  function initWaveRibbons() {
    const stage = document.getElementById('kinetic-stage');
    const ribbon1 = document.getElementById('ribbon-line-1');
    const ribbon2 = document.getElementById('ribbon-line-2');
    const ribbon3 = document.getElementById('ribbon-line-3');
    const ribbonGlow = document.getElementById('ribbon-glow');
    const toggleBtn = document.getElementById('stream-toggle-btn');
    const statusText = document.getElementById('stream-status');
    const cursorGlow = document.getElementById('canvas-cursor-glow');
    const shockwaveBox = document.getElementById('shockwave-box');
    const meshCanvas = document.getElementById('particle-mesh-canvas');

    if (!stage || !ribbon1 || !meshCanvas) return;

    let isStreamActive = true;
    let mouseX = -1000;
    let mouseY = -1000;
    let mouseHovering = false;
    let scrubPerturbation = 0;
    let targetPerturbation = 0;
    let animId = null;

    let ctx = meshCanvas.getContext('2d');
    let width = 0;
    let height = 0;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const rect = stage.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      meshCanvas.width = width * dpr;
      meshCanvas.height = height * dpr;
      ctx = meshCanvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    stage.addEventListener('pointermove', function(e) {
      const rect = stage.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseHovering = true;
      targetPerturbation = ((mouseY / height) - 0.5) * 65;

      if (cursorGlow) {
        cursorGlow.style.opacity = '1';
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
      }
    });

    stage.addEventListener('pointerleave', function() {
      mouseHovering = false;
      targetPerturbation = 0;
      if (cursorGlow) cursorGlow.style.opacity = '0';
    });

    stage.addEventListener('click', function(e) {
      if (e.target.closest('.timeline-node-pill, button')) return;
      const rect = stage.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      if (shockwaveBox) {
        const rip = document.createElement('div');
        rip.className = 'shockwave-ripple';
        const size = Math.min(width, height) * 0.45;
        rip.style.width = size + 'px';
        rip.style.height = size + 'px';
        rip.style.left = clickX + 'px';
        rip.style.top = clickY + 'px';
        shockwaveBox.appendChild(rip);
        setTimeout(function() {
          rip.remove();
        }, 1000);
      }

      targetPerturbation = (clickY < height / 2 ? 80 : -80);
    });

    window.triggerTimelineRipple = function(normX) {
      if (!stage || width === 0) return;
      const rippleX = (normX !== undefined ? normX : 0.5) * width;
      const rippleY = height * 0.5;

      if (shockwaveBox) {
        const rip = document.createElement('div');
        rip.className = 'shockwave-ripple';
        const size = Math.min(width, height) * 0.5;
        rip.style.width = size + 'px';
        rip.style.height = size + 'px';
        rip.style.left = rippleX + 'px';
        rip.style.top = rippleY + 'px';
        shockwaveBox.appendChild(rip);
        setTimeout(function() {
          rip.remove();
        }, 1000);
      }

      targetPerturbation = (Math.random() > 0.5 ? 70 : -70);
    };

    function buildWave(time, freq, amp, phase, baseY, influence) {
      const points = [];
      const steps = 30;
      const totalW = 1200;

      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * (totalW + 100) - 50;
        const normX = i / steps;

        const primary = Math.sin(time * 0.0022 * freq + normX * 4.2 + phase) * amp;
        const secondary = Math.cos(time * 0.0015 * freq + normX * 2.8 - phase * 0.5) * (amp * 0.45);

        let local = 0;
        if (mouseHovering && width > 0) {
          const mouseNormX = mouseX / width;
          const dist = Math.abs(normX - mouseNormX);
          if (dist < 0.35) {
            const bell = Math.cos((dist / 0.35) * (Math.PI / 2));
            local = influence * bell * Math.sin(time * 0.006 + dist * 10);
          }
        }

        points.push({ x: x, y: baseY + primary + secondary + local });
      }

      let d = 'M ' + points[0].x.toFixed(1) + ' ' + points[0].y.toFixed(1);
      for (let j = 1; j < points.length - 1; j++) {
        const xc = (points[j].x + points[j + 1].x) / 2;
        const yc = (points[j].y + points[j + 1].y) / 2;
        d += ' Q ' + points[j].x.toFixed(1) + ' ' + points[j].y.toFixed(1) + ', ' + xc.toFixed(1) + ' ' + yc.toFixed(1);
      }
      d += ' T ' + points[points.length - 1].x.toFixed(1) + ' ' + points[points.length - 1].y.toFixed(1);
      return d;
    }

    function renderDots(time) {
      if (!ctx || width === 0 || height === 0) return;
      ctx.clearRect(0, 0, width, height);

      const spacingX = 40;
      const spacingY = 32;
      const cols = Math.ceil(width / spacingX) + 1;
      const rows = Math.ceil(height / spacingY) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const px = c * spacingX;
          const py = r * spacingY;

          const waveOffsetY = isStreamActive
            ? Math.sin(time * 0.0018 + (px / width) * 3 + (py / height) * 2) * 3
            : 0;
          const curY = py + waveOffsetY;

          let alpha = 0.12;
          let radius = 1.3;
          let dotColor = 'rgba(138, 114, 108, ';

          if (mouseHovering) {
            const dist = Math.hypot(mouseX - px, mouseY - curY);
            if (dist < 140) {
              const factor = 1 - (dist / 140);
              alpha = 0.12 + factor * 0.65;
              radius = 1.3 + factor * 2.2;
              dotColor = factor > 0.5 ? 'rgba(190, 84, 60, ' : 'rgba(245, 189, 98, ';
            }
          }

          ctx.fillStyle = dotColor + alpha.toFixed(2) + ')';
          ctx.beginPath();
          ctx.arc(px, curY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function loop(timestamp) {
      if (!isStreamActive) {
        renderDots(0);
        return;
      }

      scrubPerturbation += (targetPerturbation - scrubPerturbation) * 0.06;

      if (ribbon1 && ribbonGlow) {
        const path1 = buildWave(timestamp, 1.0, 36, 0.0, 190, scrubPerturbation);
        ribbon1.setAttribute('d', path1);
        ribbonGlow.setAttribute('d', path1);
      }

      if (ribbon2) {
        const path2 = buildWave(timestamp, 0.85, 28, 2.1, 215, scrubPerturbation * -0.7);
        ribbon2.setAttribute('d', path2);
      }

      if (ribbon3) {
        const path3 = buildWave(timestamp, 1.15, 22, 4.2, 175, scrubPerturbation * 0.5);
        ribbon3.setAttribute('d', path3);
      }

      renderDots(timestamp);
      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    if (toggleBtn && statusText) {
      toggleBtn.addEventListener('click', function() {
        isStreamActive = !isStreamActive;
        const icon = document.getElementById('stream-toggle-icon');
        const nodes = document.querySelectorAll('.timeline-node-pill');

        if (isStreamActive) {
          statusText.textContent = 'Active Resonance';
          toggleBtn.classList.remove('opacity-60');
          if (icon) icon.textContent = 'motion_photos_on';
          nodes.forEach(function(n) { n.style.animationPlayState = 'running'; });
          cancelAnimationFrame(animId);
          animId = requestAnimationFrame(loop);
        } else {
          statusText.textContent = 'Stream Paused';
          toggleBtn.classList.add('opacity-60');
          if (icon) icon.textContent = 'motion_photos_paused';
          nodes.forEach(function(n) { n.style.animationPlayState = 'paused'; });
          cancelAnimationFrame(animId);
          renderDots(0);
        }
      });
    }

    document.querySelectorAll('.timeline-node-pill').forEach(function(pill) {
      pill.addEventListener('click', function(e) {
        e.stopPropagation();
        targetPerturbation = 75;
      });
    });
  }

  function initAudioPlayer() {
    const playBtn = document.getElementById('audio-play-btn');
    const playIcon = document.getElementById('play-icon');
    const timeDisplay = document.getElementById('audio-time');
    const waveform = document.getElementById('waveform-container');
    if (!playBtn) return;

    let isPlaying = false;
    let timer = null;
    let seconds = 78;

    function formatTime(s) {
      const m = Math.floor(s / 60).toString().padStart(2, '0');
      const sec = (s % 60).toString().padStart(2, '0');
      return m + ':' + sec + ' / 02:44';
    }

    playBtn.addEventListener('click', function() {
      isPlaying = !isPlaying;
      if (isPlaying) {
        if (playIcon) playIcon.textContent = 'pause';
        timer = setInterval(function() {
          if (seconds < 164) {
            seconds++;
            if (timeDisplay) timeDisplay.textContent = formatTime(seconds);
          } else {
            clearInterval(timer);
            isPlaying = false;
            if (playIcon) playIcon.textContent = 'play_arrow';
          }
        }, 1000);
      } else {
        if (playIcon) playIcon.textContent = 'play_arrow';
        clearInterval(timer);
      }
    });

    if (waveform && timeDisplay) {
      waveform.addEventListener('click', function() {
        seconds = Math.floor(Math.random() * 150);
        timeDisplay.textContent = formatTime(seconds);
      });
    }
  }

  function initFilterChips() {
    const chips = document.querySelectorAll('.filter-chip');
    const pills = document.querySelectorAll('.timeline-node-pill');

    chips.forEach(function(chip) {
      chip.addEventListener('click', function() {
        chips.forEach(function(c) { c.classList.remove('active'); });
        chip.classList.add('active');

        const filter = chip.getAttribute('data-filter') || chip.textContent.trim();

        if (filter === 'all' || filter === 'All Moments') {
          pills.forEach(function(pill) {
            pill.classList.remove('dimmed');
            pill.classList.remove('highlighted');
          });
          if (window.showToast) {
            window.showToast('Showing all family timeline moments', 'auto_awesome_motion');
          }
          if (window.triggerTimelineRipple) {
            window.triggerTimelineRipple(0.5);
          }
        } else {
          let foundCount = 0;
          let targetXNorm = 0.5;
          pills.forEach(function(pill) {
            const pillYear = pill.getAttribute('data-year');
            if (pillYear === filter) {
              pill.classList.remove('dimmed');
              pill.classList.add('highlighted');
              foundCount++;
              const leftPct = parseFloat(pill.style.left) || 50;
              targetXNorm = leftPct / 100;
            } else {
              pill.classList.remove('highlighted');
              pill.classList.add('dimmed');
            }
          });

          if (window.showToast) {
            window.showToast('Filtered timeline to ' + filter + ' moments (' + foundCount + ' active)', 'filter_alt');
          }
          if (window.triggerTimelineRipple) {
            window.triggerTimelineRipple(targetXNorm);
          }
        }
      });
    });
  }

  function initQuoteApi() {
    const quoteText = document.getElementById('hearth-quote-text');
    const quoteAuthor = document.getElementById('hearth-quote-author');
    const refreshBtn = document.getElementById('refresh-quote-btn');
    if (!quoteText) return;

    function applyQuote(text, author) {
      quoteText.style.opacity = '0';
      setTimeout(function() {
        quoteText.textContent = '"' + text + '"';
        if (quoteAuthor) quoteAuthor.textContent = author;
        quoteText.style.opacity = '1';
      }, 150);
    }

    function fetchQuote() {
      if (refreshBtn) {
        const icon = refreshBtn.querySelector('.material-symbols-outlined');
        if (icon) icon.classList.add('spin');
      }

      fetch('https://dummyjson.com/quotes/random')
        .then(function(res) {
          if (!res.ok) throw new Error('Network error');
          return res.json();
        })
        .then(function(data) {
          applyQuote(data.quote, data.author);
        })
        .catch(function() {
          const item = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
          applyQuote(item.text, item.author);
        })
        .finally(function() {
          if (refreshBtn) {
            const icon = refreshBtn.querySelector('.material-symbols-outlined');
            if (icon) icon.classList.remove('spin');
          }
        });
    }

    if (refreshBtn) {
      refreshBtn.addEventListener('click', fetchQuote);
    }
    fetchQuote();
  }

  function initMemoryMap() {
    const mapContainer = document.getElementById('memory-map-frame');
    if (!mapContainer) return;

    if (typeof L !== 'undefined') {
      try {
        const map = L.map('memory-map-frame', {
          center: [24.4539, 54.3773],
          zoom: 4,
          scrollWheelZoom: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        hearthLocations.forEach(function(loc) {
          const marker = L.marker([loc.lat, loc.lng]).addTo(map);
          const popupContent = '<div style="font-family: var(--font-sans); padding: 4px;"><strong style="font-family: var(--font-serif); font-size: 15px; color: var(--primary);">' + loc.name + ', ' + loc.country + '</strong><p style="font-size: 12px; margin: 4px 0;">' + loc.desc + '</p><small style="color: var(--outline);">' + loc.polaroids + ' Polaroids • ' + loc.histories + ' Oral Histories</small></div>';
          marker.bindPopup(popupContent);
        });

        document.querySelectorAll('[data-city]').forEach(function(btn) {
          btn.addEventListener('click', function() {
            const cityName = btn.getAttribute('data-city');
            const target = hearthLocations.find(function(l) { return l.name === cityName; });
            if (target) {
              map.flyTo([target.lat, target.lng], 9, { duration: 1.5 });
            }
          });
        });
        return;
      } catch (err) {}
    }

    renderFallbackVectorMap(mapContainer);
  }

  function renderFallbackVectorMap(container) {
    container.innerHTML = '<div style="position: relative; width: 100%; height: 100%; background: radial-gradient(circle at center, var(--surface-container-low), var(--surface-container)); display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden;"><svg width="100%" height="100%" viewBox="0 0 800 400" style="position: absolute; inset: 0;"><path d="M 120 180 Q 200 120 340 160 T 560 140 T 720 200" fill="none" stroke="rgba(224, 109, 83, 0.25)" stroke-dasharray="4 6" stroke-width="2"/><g transform="translate(480, 180)"><circle r="8" fill="var(--primary)"/><circle r="14" fill="none" stroke="var(--primary)" opacity="0.4" class="ping-ring"/></g><g transform="translate(680, 130)"><circle r="6" fill="var(--tertiary)"/></g><g transform="translate(240, 110)"><circle r="6" fill="var(--secondary)"/></g><g transform="translate(440, 140)"><circle r="6" fill="var(--primary)"/></g><g transform="translate(320, 150)"><circle r="6" fill="var(--tertiary)"/></g></svg><div style="position: relative; z-index: 10; background: var(--surface-lowest); padding: 0.85rem 1.4rem; border-radius: 9999px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 0.65rem;"><span class="material-symbols-outlined text-primary">pin_drop</span><span style="font-family: var(--font-label); font-size: 13px; font-weight: 600;">Abu Dhabi (Primary Root) • 8 Connected Origins</span></div></div>';

    document.querySelectorAll('[data-city]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const cityName = btn.getAttribute('data-city');
        const target = hearthLocations.find(function(l) { return l.name === cityName; });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initWaveRibbons();
    initAudioPlayer();
    initFilterChips();
    initQuoteApi();
    initMemoryMap();
  });

  window.addEventListener('viewchanged', function(e) {
    if (e.detail.view === 'moments') {
      initWaveRibbons();
    }
  });
})();
