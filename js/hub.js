(function() {
  const defaultMemos = [
    { id: 1, author: 'Liam', color: 'var(--surface-high)', text: 'Math workbook submitted on portal', x: 24, y: 30, dx: 0.22, dy: 0.18 },
    { id: 2, author: 'Elena', color: 'var(--secondary-container)', text: 'Call clinic for annual checkup', x: 190, y: 70, dx: -0.2, dy: 0.24 },
    { id: 3, author: 'Maya', color: 'var(--tertiary-fixed)', text: 'Need watercolor paper for studio', x: 80, y: 160, dx: 0.25, dy: -0.18 }
  ];

  const defaultChores = [
    { id: 1, title: 'Prune balcony jasmine and mint', assignee: 'Tariq', tag: 'sage', completed: false },
    { id: 2, title: 'Organize studio linen closet', assignee: 'Elena', tag: 'amber', completed: true },
    { id: 3, title: 'Pack telescope model for school science', assignee: 'Liam', tag: 'terracotta', completed: false },
    { id: 4, title: 'Feed tortoises and refill clean water', assignee: 'Maya', tag: 'sage', completed: false }
  ];

  let nodes = [];
  let memoAnimFrame = null;
  let isDraggingNode = false;

  function loadMemos() {
    try {
      const saved = localStorage.getItem('aqaarib_memos');
      return saved ? JSON.parse(saved) : defaultMemos;
    } catch (e) {
      return defaultMemos;
    }
  }

  function saveMemos(list) {
    try {
      localStorage.setItem('aqaarib_memos', JSON.stringify(list));
    } catch (e) {}
  }

  function loadChores() {
    try {
      const saved = localStorage.getItem('aqaarib_chores');
      return saved ? JSON.parse(saved) : defaultChores;
    } catch (e) {
      return defaultChores;
    }
  }

  function saveChores(list) {
    try {
      localStorage.setItem('aqaarib_chores', JSON.stringify(list));
    } catch (e) {}
  }

  function initMemos() {
    const sandbox = document.getElementById('memo-sandbox');
    if (!sandbox) return;

    sandbox.innerHTML = '';
    const memosData = loadMemos();
    nodes = [];

    memosData.forEach(function(item) {
      createMemoElement(item, sandbox);
    });

    if (memoAnimFrame) cancelAnimationFrame(memoAnimFrame);

    function updateNodes() {
      if (!sandbox) return;
      const boundW = sandbox.clientWidth;
      const boundH = sandbox.clientHeight;

      nodes.forEach(function(node) {
        if (!node.isDragging) {
          node.x += node.dx;
          node.y += node.dy;

          const w = node.el.offsetWidth || 180;
          const h = node.el.offsetHeight || 60;

          if (node.x <= 4 || node.x + w >= boundW - 4) node.dx *= -1;
          if (node.y <= 4 || node.y + h >= boundH - 4) node.dy *= -1;

          node.el.style.left = node.x + 'px';
          node.el.style.top = node.y + 'px';
        }
      });
      memoAnimFrame = requestAnimationFrame(updateNodes);
    }
    memoAnimFrame = requestAnimationFrame(updateNodes);
  }

  function createMemoElement(item, sandbox) {
    const el = document.createElement('div');
    el.className = 'memo-node';
    el.style.left = item.x + 'px';
    el.style.top = item.y + 'px';
    if (item.color) el.style.backgroundColor = item.color;

    el.innerHTML = '<div class="memo-author-strip"><div class="memo-author-info"><span class="memo-author-dot"></span><span class="memo-author-name">' + item.author + '</span></div><button class="memo-delete-btn" title="Delete Note"><span class="material-symbols-outlined" style="font-size: 14px;">close</span></button></div><p class="memo-text">' + item.text + '</p>';

    const deleteBtn = el.querySelector('.memo-delete-btn');
    deleteBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      el.remove();
      const current = loadMemos().filter(function(m) { return m.id !== item.id; });
      saveMemos(current);
      nodes = nodes.filter(function(n) { return n.el !== el; });
      if (window.showToast) window.showToast('Note deleted', 'delete');
    });

    sandbox.appendChild(el);

    const nodeObj = {
      id: item.id,
      el: el,
      x: item.x,
      y: item.y,
      dx: item.dx || (Math.random() - 0.5) * 0.4,
      dy: item.dy || (Math.random() - 0.5) * 0.4,
      isDragging: false
    };

    let startX = 0;
    let startY = 0;

    function onPointerDown(e) {
      if (e.target.closest('.memo-delete-btn')) return;
      nodeObj.isDragging = true;
      isDraggingNode = true;
      startX = e.clientX - nodeObj.x;
      startY = e.clientY - nodeObj.y;
      el.style.zIndex = '35';

      function onPointerMove(e) {
        if (!nodeObj.isDragging) return;
        nodeObj.x = e.clientX - startX;
        nodeObj.y = e.clientY - startY;
        el.style.left = nodeObj.x + 'px';
        el.style.top = nodeObj.y + 'px';
      }

      function onPointerUp() {
        nodeObj.isDragging = false;
        isDraggingNode = false;
        el.style.zIndex = '10';
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);

        const current = loadMemos();
        const found = current.find(function(m) { return m.id === item.id; });
        if (found) {
          found.x = nodeObj.x;
          found.y = nodeObj.y;
          saveMemos(current);
        }
      }

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    }

    el.addEventListener('pointerdown', onPointerDown);
    nodes.push(nodeObj);
  }

  function initAddMemoModal() {
    const addBtn = document.getElementById('add-memo-btn');
    const modal = document.getElementById('add-memo-modal');
    const closeBtn = document.getElementById('close-memo-modal');
    const form = document.getElementById('add-memo-form');
    const sandbox = document.getElementById('memo-sandbox');

    if (!addBtn || !modal || !form) return;

    addBtn.addEventListener('click', function() {
      modal.classList.add('open');
      document.getElementById('memo-text-input').focus();
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        modal.classList.remove('open');
      });
    }

    modal.addEventListener('click', function(e) {
      if (e.target === modal) modal.classList.remove('open');
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const text = document.getElementById('memo-text-input').value.trim();
      const author = document.getElementById('memo-author-select').value;
      if (!text) return;

      const colors = {
        Liam: 'var(--surface-high)',
        Elena: 'var(--secondary-container)',
        Maya: 'var(--tertiary-fixed)',
        Tariq: 'var(--primary-fixed)'
      };

      const newItem = {
        id: Date.now(),
        author: author,
        color: colors[author] || 'var(--surface-lowest)',
        text: text,
        x: Math.floor(Math.random() * 120 + 20),
        y: Math.floor(Math.random() * 80 + 20),
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      };

      const current = loadMemos();
      current.push(newItem);
      saveMemos(current);

      if (sandbox) createMemoElement(newItem, sandbox);

      form.reset();
      modal.classList.remove('open');
      if (window.showToast) window.showToast('Note added from ' + author, 'edit_note');
    });
  }

  function initPolaroidShuffle() {
    const stack = document.getElementById('polaroid-stack-container');
    const vaultCard = document.getElementById('vault-memory-card');
    const manualBtn = document.getElementById('vault-shuffle-manual');
    const shuffleDot = document.getElementById('shuffle-dot');
    const shuffleStatus = document.getElementById('shuffle-status-text');

    if (!stack) return;

    const cards = Array.from(stack.querySelectorAll('.polaroid-slot'));
    const total = cards.length;
    let order = cards.map(function(_, i) { return i; });
    let isAnimating = false;
    let isPaused = false;
    let shuffleTimer = null;

    const slotStyles = [
      {
        transform: 'translate(0px, 8px) rotate(1deg) scale(1.02)',
        zIndex: 25,
        opacity: 1,
        boxShadow: '0 20px 30px -10px rgba(30,27,24,0.18), 0 8px 16px -6px rgba(30,27,24,0.1)'
      },
      {
        transform: 'translate(68px, 2px) rotate(6.5deg) scale(0.96)',
        zIndex: 18,
        opacity: 0.95,
        boxShadow: '0 12px 24px -8px rgba(30,27,24,0.14)'
      },
      {
        transform: 'translate(-68px, 6px) rotate(-6.5deg) scale(0.95)',
        zIndex: 12,
        opacity: 0.9,
        boxShadow: '0 10px 20px -8px rgba(30,27,24,0.12)'
      },
      {
        transform: 'translate(0px, -18px) rotate(-1.5deg) scale(0.88)',
        zIndex: 5,
        opacity: 0.7,
        boxShadow: '0 6px 14px -6px rgba(30,27,24,0.08)'
      }
    ];

    function applyStyles(instant) {
      order.forEach(function(cardIdx, slotIdx) {
        const card = cards[cardIdx];
        const style = slotStyles[slotIdx];
        if (!card) return;

        if (instant) {
          card.style.transition = 'none';
        } else {
          card.style.transition = 'transform 0.65s cubic-bezier(0.34, 1.35, 0.64, 1), opacity 0.5s ease, box-shadow 0.5s ease';
        }

        card.style.transform = style.transform;
        card.style.zIndex = style.zIndex;
        card.style.opacity = style.opacity;
        card.style.boxShadow = style.boxShadow;

        if (instant) {
          card.offsetHeight;
          card.style.transition = '';
        }
      });
    }

    applyStyles(true);

    function shuffleNext() {
      if (isAnimating || total < 2) return;
      isAnimating = true;

      const frontCardIdx = order[0];
      const frontCard = cards[frontCardIdx];

      frontCard.style.zIndex = '35';
      frontCard.style.transform = 'translate(-140px, -24px) rotate(-15deg) scale(1.05)';
      frontCard.style.opacity = '0.75';

      setTimeout(function() {
        order.push(order.shift());
        frontCard.style.zIndex = '2';
        frontCard.style.transform = 'translate(80px, -36px) rotate(10deg) scale(0.84)';
        frontCard.style.opacity = '0.35';

        setTimeout(function() {
          applyStyles(false);
          setTimeout(function() {
            isAnimating = false;
          }, 450);
        }, 160);
      }, 340);
    }

    function startTimer() {
      if (shuffleTimer) clearInterval(shuffleTimer);
      shuffleTimer = setInterval(function() {
        if (!isPaused) shuffleNext();
      }, 3800);
    }

    startTimer();

    if (vaultCard) {
      vaultCard.addEventListener('mouseenter', function() {
        isPaused = true;
        if (shuffleDot) shuffleDot.classList.add('paused');
        if (shuffleStatus) shuffleStatus.textContent = 'Paused (Hovering)';
      });

      vaultCard.addEventListener('mouseleave', function() {
        isPaused = false;
        if (shuffleDot) shuffleDot.classList.remove('paused');
        if (shuffleStatus) shuffleStatus.textContent = 'Auto-Shuffling';
      });
    }

    if (manualBtn) {
      manualBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        shuffleNext();
      });
    }

    cards.forEach(function(card) {
      card.addEventListener('click', function(e) {
        e.stopPropagation();
        shuffleNext();
      });
    });
  }

  function initChores() {
    const listContainer = document.getElementById('chore-list');
    if (!listContainer) return;

    function render() {
      listContainer.innerHTML = '';
      const chores = loadChores();

      chores.forEach(function(chore) {
        const item = document.createElement('div');
        item.className = 'chore-item' + (chore.completed ? ' completed' : '');
        item.innerHTML = '<input class="chore-checkbox" type="checkbox"' + (chore.completed ? ' checked' : '') + '/><div class="chore-content"><span class="chore-title">' + chore.title + '</span><div class="chore-meta"><span class="chore-assignee">' + chore.assignee + '</span><span class="chore-tag ' + chore.tag + '">' + chore.tag + '</span></div></div><button class="chore-delete-btn" title="Remove Chore"><span class="material-symbols-outlined" style="font-size: 16px;">delete</span></button>';

        const checkbox = item.querySelector('.chore-checkbox');
        checkbox.addEventListener('change', function() {
          chore.completed = checkbox.checked;
          saveChores(chores);
          render();
        });

        const deleteBtn = item.querySelector('.chore-delete-btn');
        deleteBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          const filtered = loadChores().filter(function(c) { return c.id !== chore.id; });
          saveChores(filtered);
          render();
          if (window.showToast) window.showToast('Chore removed', 'delete');
        });

        listContainer.appendChild(item);
      });
    }

    render();

    const addChoreBtn = document.getElementById('add-chore-btn');
    const modal = document.getElementById('add-chore-modal');
    const closeBtn = document.getElementById('close-chore-modal');
    const form = document.getElementById('add-chore-form');

    if (addChoreBtn && modal && form) {
      addChoreBtn.addEventListener('click', function() {
        modal.classList.add('open');
        document.getElementById('chore-title-input').focus();
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', function() {
          modal.classList.remove('open');
        });
      }

      modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.classList.remove('open');
      });

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('chore-title-input').value.trim();
        const assignee = document.getElementById('chore-assignee-select').value;
        const tag = document.getElementById('chore-tag-select').value;
        if (!title) return;

        const current = loadChores();
        current.push({
          id: Date.now(),
          title: title,
          assignee: assignee,
          tag: tag,
          completed: false
        });
        saveChores(current);
        render();

        form.reset();
        modal.classList.remove('open');
        if (window.showToast) window.showToast('Chore assigned to ' + assignee, 'check_circle');
      });
    }
  }

  function initWorkspaceTabs() {
    const tabs = document.querySelectorAll('.workspace-tab-btn');
    const panes = document.querySelectorAll('.workspace-pane');

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        const target = tab.getAttribute('data-tab');
        tabs.forEach(function(t) { t.classList.remove('active'); });
        panes.forEach(function(p) { p.classList.remove('active'); });

        tab.classList.add('active');
        const activePane = document.getElementById('pane-' + target);
        if (activePane) activePane.classList.add('active');
      });
    });
  }

  function initReactionPills() {
    document.querySelectorAll('.ping-reaction-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const countSpan = btn.querySelector('.reaction-count');
        if (countSpan) {
          const count = parseInt(countSpan.textContent, 10) || 0;
          countSpan.textContent = count + 1;
        }
      });
    });
  }

  function initDropZone() {
    const dropZone = document.getElementById('hub-drop-zone');
    if (!dropZone) return;

    dropZone.addEventListener('dragover', function(e) {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', function() {
      dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', function(e) {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      if (window.showToast) window.showToast('Item received and encrypted into Vault', 'shield');
    });

    dropZone.addEventListener('click', function() {
      if (window.showToast) window.showToast('Vault file dialog opened', 'folder_open');
    });
  }

  function initClock() {
    const clockEl = document.getElementById('live-gst-clock');
    if (!clockEl) return;

    function update() {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const gst = new Date(utc + (3600000 * 4));
      const h = String(gst.getHours()).padStart(2, '0');
      const m = String(gst.getMinutes()).padStart(2, '0');
      clockEl.textContent = h + ':' + m + ' GST (Abu Dhabi)';
    }

    update();
    setInterval(update, 30000);
  }

  document.addEventListener('DOMContentLoaded', function() {
    initMemos();
    initAddMemoModal();
    initPolaroidShuffle();
    initChores();
    initWorkspaceTabs();
    initReactionPills();
    initDropZone();
    initClock();
  });

  window.addEventListener('viewchanged', function(e) {
    if (e.detail.view === 'hub') {
      initMemos();
    }
  });
})();
