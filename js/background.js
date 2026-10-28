(function() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = 0;
  let height = 0;
  let dpr = 1;
  const spacing = 18;
  const baseRadius = 0.95;
  const hoverRadius = 1.35;
  const maxProximity = 100;
  
  let mouse = { x: -9999, y: -9999, active: false };
  let ripples = [];
  let particles = [];
  const particleCount = 36;

  function isOverInteractive(el) {
    if (!el) return false;
    return Boolean(el.closest('button, a, input, select, textarea, [role="button"], label, .card, .hero-feature-card, .memo-node, .polaroid-slot, .orbit-node, .timeline-node-pill, .modal-card, .cmd-palette, .nav-pill, .header-inner, header, .drop-zone, .pantry-item, .chore-item, .ping-card, .archive-item'));
  }

  function initParticles() {
    particles = [];
    const colors = [
      { r: 224, g: 109, b: 83 },
      { r: 245, g: 189, b: 98 },
      { r: 190, g: 84,  b: 60 },
      { r: 138, g: 154, b: 134 }
    ];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || window.innerHeight),
        radius: 1.5 + Math.random() * 2.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.22,
        vy: -0.15 - Math.random() * 0.28,
        baseAlpha: 0.12 + Math.random() * 0.22,
        pulseSpeed: 0.008 + Math.random() * 0.012,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (particles.length === 0) initParticles();
  }
  
  window.addEventListener('resize', resize);
  resize();
  initParticles();
  
  window.addEventListener('pointermove', function(e) {
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (isOverInteractive(el)) {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    } else {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }
  });
  
  window.addEventListener('pointerleave', function() {
    mouse.active = false;
    mouse.x = -9999;
    mouse.y = -9999;
  });
  
  window.addEventListener('click', function(e) {
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (isOverInteractive(el)) return;

    ripples.push({
      x: e.clientX,
      y: e.clientY,
      radius: 0,
      maxRadius: 280,
      opacity: 0.35,
      speed: 1.8,
      lineWidth: 1.5,
      decay: 0.0035,
      color: 'rgba(224, 109, 83, '
    });
    ripples.push({
      x: e.clientX,
      y: e.clientY,
      radius: 0,
      maxRadius: 200,
      opacity: 0.22,
      speed: 1.25,
      lineWidth: 1.0,
      decay: 0.003,
      color: 'rgba(245, 189, 98, '
    });
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulsePhase += p.pulseSpeed;

      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      const alpha = Math.max(0, p.baseAlpha + Math.sin(p.pulsePhase) * 0.08);
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.2);
      grad.addColorStop(0, 'rgba(' + p.color.r + ',' + p.color.g + ',' + p.color.b + ',' + alpha + ')');
      grad.addColorStop(1, 'rgba(' + p.color.r + ',' + p.color.g + ',' + p.color.b + ', 0)');

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }
    
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += r.speed;
      r.opacity -= r.decay;
      
      if (r.opacity <= 0 || r.radius >= r.maxRadius) {
        ripples.splice(i, 1);
        continue;
      }
      
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      ctx.strokeStyle = r.color + Math.max(0, r.opacity) + ')';
      ctx.lineWidth = r.lineWidth;
      ctx.stroke();
    }
    
    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;
    const startX = (width % spacing) / 2;
    const startY = (height % spacing) / 2;
    
    for (let c = 0; c < cols; c++) {
      for (let row = 0; row < rows; row++) {
        const x = startX + c * spacing;
        const y = startY + row * spacing;
        
        let distToMouse = 9999;
        if (mouse.active) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          distToMouse = Math.hypot(dx, dy);
        }
        
        let rippleBonus = 0;
        for (let j = 0; j < ripples.length; j++) {
          const rip = ripples[j];
          const dR = Math.hypot(rip.x - x, rip.y - y);
          const diff = Math.abs(dR - rip.radius);
          if (diff < 26) {
            rippleBonus = Math.max(rippleBonus, (1 - diff / 26) * rip.opacity);
          }
        }
        
        let radius = baseRadius;
        let opacity = 0.085;
        
        if (distToMouse < maxProximity) {
          const factor = 1 - (distToMouse / maxProximity);
          radius = baseRadius + (hoverRadius - baseRadius) * factor;
          opacity = 0.085 + 0.24 * factor;
        }
        
        if (rippleBonus > 0) {
          opacity = Math.min(0.40, opacity + rippleBonus * 0.3);
          radius = Math.min(1.4, radius + rippleBonus * 0.4);
        }
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(224, 109, 83, ' + opacity + ')';
        ctx.fill();
      }
    }
    
    requestAnimationFrame(draw);
  }
  
  requestAnimationFrame(draw);
})();
