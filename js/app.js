(function() {
  const views = ['home', 'hub', 'rhythm', 'moments', 'vault'];
  let currentView = 'home';

  function initTheme() {
    const savedTheme = localStorage.getItem('aqaarib_theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && systemDark);
    applyTheme(isDark);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('aqaarib_theme')) {
        applyTheme(e.matches);
      }
    });

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function() {
        const currentlyDark = document.documentElement.classList.contains('dark') || document.documentElement.getAttribute('data-theme') === 'dark';
        const nextDark = !currentlyDark;
        applyTheme(nextDark);
        localStorage.setItem('aqaarib_theme', nextDark ? 'dark' : 'light');
        showToast(nextDark ? 'Switched to Obsidian Warmth' : 'Switched to Alabaster Hearth', nextDark ? 'bedtime' : 'light_mode');
      });
    }

    const inlineThemeBtn = document.getElementById('theme-toggle-inline');
    if (inlineThemeBtn) {
      inlineThemeBtn.addEventListener('click', function() {
        const currentlyDark = document.documentElement.classList.contains('dark');
        applyTheme(!currentlyDark);
        localStorage.setItem('aqaarib_theme', !currentlyDark ? 'dark' : 'light');
      });
    }
  }

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
      document.body.classList.remove('dark');
    }
    const icon = document.querySelector('#theme-toggle-btn .material-symbols-outlined');
    if (icon) {
      icon.textContent = isDark ? 'light_mode' : 'bedtime';
    }
    const favicon = document.getElementById('site-favicon');
    if (favicon) {
      favicon.href = isDark ? 'Aqaarib Favicons/heart_darkmode.png' : 'Aqaarib Favicons/heart_lightmode.png';
    }
  }

  function switchView(viewName) {
    if (viewName === 'hero') viewName = 'home';
    if (!views.includes(viewName)) viewName = 'home';
    currentView = viewName;

    document.querySelectorAll('.view-section').forEach(function(sec) {
      sec.classList.remove('active');
    });

    const activeSec = document.getElementById('view-' + viewName) || (viewName === 'home' ? document.getElementById('view-hero') : null);
    if (activeSec) {
      activeSec.classList.add('active');
    }

    document.querySelectorAll('.nav-item').forEach(function(item) {
      const v = item.getAttribute('data-view');
      if (v === viewName || (viewName === 'home' && v === 'hero')) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    if (window.location.hash !== '#' + viewName) {
      history.pushState(null, '', '#' + viewName);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    window.dispatchEvent(new CustomEvent('viewchanged', { detail: { view: viewName } }));
  }

  window.switchView = switchView;

  function initNavigation() {
    document.querySelectorAll('.nav-item').forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetView = item.getAttribute('data-view');
        switchView(targetView);
      });
    });

    document.addEventListener('click', function(e) {
      const jumpTrigger = e.target.closest('[data-jump]');
      if (jumpTrigger) {
        e.preventDefault();
        const targetView = jumpTrigger.getAttribute('data-jump');
        switchView(targetView);
      }
    });

    const brandEl = document.getElementById('brand-home-btn');
    if (brandEl) {
      brandEl.addEventListener('click', function() {
        switchView('home');
      });
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const roleBtn = e.target.closest('[role="button"]');
        if (roleBtn && roleBtn.tagName !== 'BUTTON' && roleBtn.tagName !== 'A') {
          e.preventDefault();
          roleBtn.click();
        }
      } else if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.open, #cmd-palette-backdrop.open, #profile-modal-backdrop.open, .recipe-drawer.open').forEach(function(m) {
          m.classList.remove('open');
        });
      }
    });

    window.addEventListener('popstate', function() {
      let hash = window.location.hash.replace('#', '');
      if (hash === 'hero') hash = 'home';
      if (views.includes(hash)) {
        switchView(hash);
      } else {
        switchView('home');
      }
    });

    const pathName = window.location.pathname.toLowerCase();
    let initialFromPath = '';
    views.forEach(function(v) {
      if (pathName.includes(v)) initialFromPath = v;
    });

    const activeSec = document.querySelector('.view-section.active');
    const defaultFromDom = activeSec ? activeSec.id.replace('view-', '') : 'home';

    let initialHash = window.location.hash.replace('#', '');
    if (initialHash === 'hero') initialHash = 'home';
    if (views.includes(initialHash)) {
      switchView(initialHash);
    } else if (initialFromPath) {
      switchView(initialFromPath);
    } else {
      switchView(defaultFromDom === 'hero' ? 'home' : defaultFromDom);
    }
  }

  function showToast(message, icon) {
    icon = icon || 'info';
    const rack = document.getElementById('toast-rack');
    if (!rack) return;

    while (rack.firstChild) {
      rack.removeChild(rack.firstChild);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<span class="material-symbols-outlined text-primary-fixed">' + icon + '</span><span>' + message + '</span>';
    rack.appendChild(toast);

    requestAnimationFrame(function() {
      toast.classList.add('show');
    });

    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() {
        if (toast.parentNode === rack) {
          rack.removeChild(toast);
        }
      }, 250);
    }, 2200);
  }

  window.showToast = showToast;

  function initCommandPalette() {
    const backdrop = document.getElementById('cmd-palette-backdrop');
    const input = document.getElementById('cmd-input');
    const trigger = document.getElementById('search-trigger-btn');
    const list = document.getElementById('cmd-list');

    if (!backdrop || !input) return;

    function openPalette() {
      backdrop.classList.add('open');
      input.value = '';
      renderCmdItems('');
      input.focus();
    }

    function closePalette() {
      backdrop.classList.remove('open');
    }

    if (trigger) {
      trigger.addEventListener('click', openPalette);
    }

    window.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (backdrop.classList.contains('open')) {
          closePalette();
        } else {
          openPalette();
        }
      } else if (e.key === 'Escape' && backdrop.classList.contains('open')) {
        closePalette();
      }
    });

    backdrop.addEventListener('click', function(e) {
      if (e.target === backdrop) {
        closePalette();
      }
    });

    const commands = [
      { title: 'Launch Hearth Hub', hint: 'Overview & Chores', icon: 'hub', action: function() { switchView('hub'); } },
      { title: 'View Solar Arc Rhythms', hint: 'Cadence & Orbit', icon: 'all_inclusive', action: function() { switchView('rhythm'); } },
      { title: 'Explore Temporal Moments', hint: 'Wave Timeline & Map', icon: 'auto_stories', action: function() { switchView('moments'); } },
      { title: 'Open Cypher Vault', hint: 'Encryption & Archive', icon: 'shield_locked', action: function() { switchView('vault'); } },
      { title: 'Return to Hearth Home', hint: 'Home Landing', icon: 'home', action: function() { switchView('home'); } },
      { title: 'View User Account & Hearth Roster', hint: 'Family presence details', icon: 'person', action: function() { document.getElementById('profile-avatar-btn')?.click(); } },
      { title: 'Toggle Theme Appearance', hint: 'Light / Dark mode', icon: 'palette', action: function() { document.getElementById('theme-toggle-btn')?.click(); } },
      { title: 'Send Hearth Broadcast Ping', hint: 'Notify all members', icon: 'notifications_active', action: function() { showToast('Gentle hearth chime broadcasted', 'done_all'); } }
    ];

    function renderCmdItems(query) {
      list.innerHTML = '';
      const filtered = commands.filter(function(cmd) {
        return cmd.title.toLowerCase().includes(query.toLowerCase()) || cmd.hint.toLowerCase().includes(query.toLowerCase());
      });

      if (filtered.length === 0) {
        list.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--outline);">No commands found</div>';
        return;
      }

      filtered.forEach(function(cmd, idx) {
        const item = document.createElement('div');
        item.className = 'cmd-item' + (idx === 0 ? ' selected' : '');
        item.innerHTML = '<span class="material-symbols-outlined cmd-item-icon">' + cmd.icon + '</span><span class="cmd-item-title">' + cmd.title + '</span><span class="cmd-item-hint">' + cmd.hint + '</span>';
        item.addEventListener('click', function() {
          cmd.action();
          closePalette();
        });
        list.appendChild(item);
      });
    }

    input.addEventListener('input', function() {
      renderCmdItems(input.value);
    });
  }

  function initProfileModal() {
    const avatarBtn = document.getElementById('profile-avatar-btn');
    const modal = document.getElementById('profile-modal-backdrop');
    const closeBtn = document.getElementById('profile-modal-close');

    if (!avatarBtn || !modal) return;

    avatarBtn.addEventListener('click', function() {
      modal.classList.add('open');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        modal.classList.remove('open');
      });
    }

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initCommandPalette();
    initProfileModal();
  });
})();