(function() {
  const defaultGroceries = [
    { id: 1, text: 'Cardamom pods (green, organic)', checked: true },
    { id: 2, text: 'Medjool dates (Al Ain harvest)', checked: false },
    { id: 3, text: 'Oat barista milk (unpasteurized)', checked: false },
    { id: 4, text: 'Saffron threads (Kashmiri Grade 1)', checked: false },
    { id: 5, text: 'Orange blossom water', checked: true }
  ];

  function loadGroceries() {
    try {
      const saved = localStorage.getItem('aqaarib_groceries');
      return saved ? JSON.parse(saved) : defaultGroceries;
    } catch (e) {
      return defaultGroceries;
    }
  }

  function saveGroceries(list) {
    try {
      localStorage.setItem('aqaarib_groceries', JSON.stringify(list));
    } catch (e) {}
  }

  let orbitInitialized = false;

  function initOrbit() {
    if (orbitInitialized) return;
    const stage = document.getElementById('orbit-interactive-stage');
    const nodesStage = document.getElementById('nodes-orbit-stage');
    if (!stage || !nodesStage) return;
    orbitInitialized = true;

    const nodes = {
      tariq: {
        el: document.getElementById('orbit-node-tariq'),
        rx: 360,
        ry: 145,
        track: 'outer',
        angle: 3.4,
        speed: 0.0036,
        name: 'Tariq',
        x: 0,
        y: 0,
        recoilTimer: 0,
        recoilScale: 1.0,
        isDragging: false
      },
      maya: {
        el: document.getElementById('orbit-node-maya'),
        rx: 240,
        ry: 95,
        track: 'inner',
        angle: 0.95,
        speed: 0.0052,
        name: 'Maya',
        x: 0,
        y: 0,
        recoilTimer: 0,
        recoilScale: 1.0,
        isDragging: false
      },
      liam: {
        el: document.getElementById('orbit-node-liam'),
        rx: 360,
        ry: 145,
        track: 'outer',
        angle: 5.75,
        speed: 0.0039,
        name: 'Liam',
        x: 0,
        y: 0,
        recoilTimer: 0,
        recoilScale: 1.0,
        isDragging: false
      },
      elena: {
        el: document.getElementById('orbit-node-elena'),
        rx: 240,
        ry: 95,
        track: 'inner',
        angle: 2.3,
        speed: 0.0048,
        name: 'Elena',
        x: 0,
        y: 0,
        recoilTimer: 0,
        recoilScale: 1.0,
        isDragging: false
      }
    };

    let isPaused = false;
    let speedMult = 1.0;
    let targetSpeedMult = 1.0;
    let lastCollisionTime = 0;

    const pauseToggle = document.getElementById('orbit-pause-toggle');
    const pauseIcon = document.getElementById('pause-icon');
    const statusLabel = document.getElementById('orbit-status-label');
    const velocityTag = document.getElementById('orbit-velocity-tag');

    if (pauseToggle) {
      pauseToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        isPaused = !isPaused;
        if (isPaused) {
          if (pauseIcon) pauseIcon.textContent = 'play_circle';
          if (statusLabel) statusLabel.textContent = 'Paused';
          if (velocityTag) velocityTag.textContent = '0.0x idle';
        } else {
          if (pauseIcon) pauseIcon.textContent = 'pause_circle';
          if (statusLabel) statusLabel.textContent = 'Revolving';
          if (velocityTag) velocityTag.textContent = speedMult.toFixed(1) + 'x mesh';
        }
      });
    }

    stage.addEventListener('mouseenter', function() {
      if (!isPaused) targetSpeedMult = 0.4;
    });

    stage.addEventListener('mouseleave', function() {
      if (!isPaused) targetSpeedMult = 1.0;
    });

    document.querySelectorAll('[data-target-member]').forEach(function(pill) {
      pill.addEventListener('click', function(e) {
        e.stopPropagation();
        const memberKey = pill.getAttribute('data-target-member');
        if (nodes[memberKey]) {
          nodes[memberKey].angle = Math.PI / 2;
          const el = nodes[memberKey].el;
          if (el) {
            el.style.transform += ' scale(1.15)';
            setTimeout(function() {
              el.style.transform = el.style.transform.replace(' scale(1.15)', '');
            }, 600);
          }
        }
      });
    });

    function triggerSpark(midX, midY) {
      const spark = document.createElement('div');
      spark.className = 'collision-spark-particle';
      spark.style.left = 'calc(50% + ' + midX + 'px)';
      spark.style.top = 'calc(50% + ' + midY + 'px)';
      spark.style.width = '36px';
      spark.style.height = '36px';
      nodesStage.appendChild(spark);
      setTimeout(function() {
        spark.remove();
      }, 520);
    }

    Object.keys(nodes).forEach(function(key) {
      const node = nodes[key];
      if (!node.el) return;

      let didDrag = false;
      let startX = 0;
      let startY = 0;

      node.el.addEventListener('pointerdown', function(e) {
        e.stopPropagation();
        node.isDragging = true;
        didDrag = false;
        startX = e.clientX;
        startY = e.clientY;

        function onPointerMove(ev) {
          if (Math.hypot(ev.clientX - startX, ev.clientY - startY) > 5) {
            didDrag = true;
            const rect = stage.getBoundingClientRect();
            const relX = ev.clientX - (rect.left + rect.width / 2);
            const relY = ev.clientY - (rect.top + rect.height / 2);
            node.angle = Math.atan2(relY / node.ry, relX / node.rx);
          }
        }

        function onPointerUp() {
          node.isDragging = false;
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('pointerup', onPointerUp);
        }

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
      });

      node.el.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!didDrag) {
          node.speed = -node.speed;
          node.recoilScale = 1.15;
          node.recoilTimer = 16;
        }
      });
    });

    function checkCollisions() {
      const now = performance.now();
      if (now - lastCollisionTime < 450) return;

      const keys = Object.keys(nodes);
      for (let i = 0; i < keys.length; i++) {
        for (let j = i + 1; j < keys.length; j++) {
          const a = nodes[keys[i]];
          const b = nodes[keys[j]];
          if (a.track !== b.track) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 55) {
            let dAngle = b.angle - a.angle;
            while (dAngle > Math.PI) dAngle -= 2 * Math.PI;
            while (dAngle < -Math.PI) dAngle += 2 * Math.PI;

            const relSpeed = b.speed - a.speed;
            const isConverging = (dAngle * relSpeed) < 0;
            if (!isConverging) continue;

            lastCollisionTime = now;

            if (dAngle > 0) {
              a.speed = -Math.abs(a.speed);
              b.speed = Math.abs(b.speed);
            } else {
              a.speed = Math.abs(a.speed);
              b.speed = -Math.abs(b.speed);
            }

            a.recoilScale = 1.18;
            b.recoilScale = 1.18;
            a.recoilTimer = 20;
            b.recoilTimer = 20;

            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            triggerSpark(midX, midY);
            return;
          }
        }
      }
    }

    function loop() {
      speedMult += (targetSpeedMult - speedMult) * 0.05;

      Object.keys(nodes).forEach(function(key) {
        const node = nodes[key];
        if (!node.el) return;

        if (!isPaused && !node.isDragging) {
          node.angle += node.speed * speedMult;
          if (node.angle > Math.PI * 2) node.angle -= Math.PI * 2;
          if (node.angle < 0) node.angle += Math.PI * 2;
        }

        const normRx = Math.min(node.rx, (stage.clientWidth / 2) - 30);
        const normRy = Math.min(node.ry, (stage.clientHeight / 2) - 30);

        node.x = Math.cos(node.angle) * normRx;
        node.y = Math.sin(node.angle) * normRy;

        const sinA = Math.sin(node.angle);
        const zIndex = sinA >= 0 ? 25 : 5;
        const scaleBase = 0.92 + (sinA + 1) * 0.08;
        const opacity = 0.82 + (sinA + 1) * 0.09;

        if (node.recoilTimer > 0) {
          node.recoilTimer--;
          if (node.recoilTimer === 0) node.recoilScale = 1.0;
        }

        const finalScale = scaleBase * node.recoilScale;

        node.el.style.transform = 'translate3d(calc(-50% + ' + node.x.toFixed(1) + 'px), calc(-50% + ' + node.y.toFixed(1) + 'px), 0px) scale(' + finalScale.toFixed(3) + ')';
        node.el.style.zIndex = zIndex;
        node.el.style.opacity = opacity.toFixed(2);
      });

      checkCollisions();
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  }

  function initPantry() {
    const list = document.getElementById('pantry-list-container');
    const form = document.getElementById('pantry-add-form');
    const input = document.getElementById('pantry-input');
    const counter = document.getElementById('pantry-counter');
    if (!list) return;

    function render() {
      list.innerHTML = '';
      const items = loadGroceries();

      items.forEach(function(item) {
        const row = document.createElement('label');
        row.className = 'pantry-item' + (item.checked ? ' checked' : '');
        row.innerHTML = '<input class="pantry-checkbox" type="checkbox"' + (item.checked ? ' checked' : '') + '/><span class="pantry-text">' + item.text + '</span><button class="pantry-del-btn" title="Remove" style="opacity: 0.4; cursor: pointer;"><span class="material-symbols-outlined" style="font-size: 14px;">close</span></button>';

        const cb = row.querySelector('.pantry-checkbox');
        cb.addEventListener('change', function() {
          item.checked = cb.checked;
          saveGroceries(items);
          render();
        });

        const del = row.querySelector('.pantry-del-btn');
        del.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          const filtered = loadGroceries().filter(function(g) { return g.id !== item.id; });
          saveGroceries(filtered);
          render();
        });

        list.appendChild(row);
      });

      if (counter) {
        counter.textContent = items.length + ' item' + (items.length === 1 ? '' : 's');
      }
    }

    render();

    if (form && input) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const val = input.value.trim();
        if (!val) return;

        const current = loadGroceries();
        current.push({
          id: Date.now(),
          text: val,
          checked: false
        });
        saveGroceries(current);
        render();

        input.value = '';
        if (window.showToast) window.showToast('Added ' + val + ' to pantry basket', 'shopping_basket');
      });
    }
  }

  function initRecipeDrawer() {
    const trigger = document.getElementById('recipe-trigger');
    const drawer = document.getElementById('recipe-drawer');
    const closeBtn = document.getElementById('close-recipe-btn');

    if (trigger && drawer) {
      trigger.addEventListener('click', function() {
        drawer.classList.toggle('open');
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', function() {
        drawer.classList.remove('open');
      });
    }
  }

  function initBroadcastPings() {
    const banner = document.getElementById('ping-status-banner');
    document.querySelectorAll('.ping-card').forEach(function(card) {
      card.addEventListener('click', function() {
        const title = card.querySelector('.ping-card-title')?.textContent || 'Hearth Ping';
        if (banner) {
          banner.textContent = 'Broadcast sent to hearth mesh: "' + title + '"';
          banner.classList.add('show');
          setTimeout(function() {
            banner.classList.remove('show');
          }, 3500);
        }
        if (window.showToast) {
          window.showToast('Broadcast: ' + title, 'broadcast_on_home');
        }
      });
    });

    const addCheckpointBtn = document.getElementById('add-checkpoint-btn');
    if (addCheckpointBtn) {
      addCheckpointBtn.addEventListener('click', function() {
        const title = prompt('Enter new cadence checkpoint (e.g. Balcony Jasmine Tea 21:00):');
        if (title && window.showToast) {
          window.showToast('Checkpoint "' + title + '" queued for hearth synchrony', 'alarm_on');
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    initOrbit();
    initPantry();
    initRecipeDrawer();
    initBroadcastPings();
  });

  window.addEventListener('viewchanged', function(e) {
    if (e.detail.view === 'rhythm') {
      initOrbit();
    }
  });
})();
