(function() {
  function initCypherShield() {
    const ringOuter = document.getElementById('cypherRingOuter');
    const ringMid = document.getElementById('cypherRingMid');
    const orbitRing = document.getElementById('orbitalRingGroup');
    const coreBtn = document.getElementById('vaultCoreButton');
    const coreIconWrap = document.getElementById('coreIconContainer');
    const lockIcon = document.getElementById('lockIcon');
    const lockText = document.getElementById('lockStatusText');

    if (!coreBtn) return;

    let isArmored = true;
    let burstTimer = null;

    coreBtn.addEventListener('click', function() {
      isArmored = !isArmored;

      if (ringOuter) ringOuter.classList.add('turbo-spin');
      if (ringMid) ringMid.classList.add('turbo-spin');
      if (orbitRing) orbitRing.classList.add('turbo-spin');

      coreBtn.style.transform = 'scale(1.06)';

      if (isArmored) {
        if (lockIcon) lockIcon.textContent = 'shield_locked';
        if (lockText) lockText.textContent = 'Armored';
        if (coreIconWrap) {
          coreIconWrap.style.backgroundColor = 'var(--primary-container)';
          coreIconWrap.style.color = 'var(--on-primary-container)';
        }
        if (window.showToast) window.showToast('Cypher Shield Re-armored (Zero-Knowledge)', 'shield');
      } else {
        if (lockIcon) lockIcon.textContent = 'lock_open';
        if (lockText) lockText.textContent = 'Key 44 Active';
        if (coreIconWrap) {
          coreIconWrap.style.backgroundColor = 'var(--secondary-container)';
          coreIconWrap.style.color = 'var(--on-secondary-container)';
        }
        if (window.showToast) window.showToast('Cypher Key 44 Decrypted for Hearth Cluster', 'vpn_key');
      }

      clearTimeout(burstTimer);
      burstTimer = setTimeout(function() {
        if (ringOuter) ringOuter.classList.remove('turbo-spin');
        if (ringMid) ringMid.classList.remove('turbo-spin');
        if (orbitRing) orbitRing.classList.remove('turbo-spin');
        coreBtn.style.transform = '';
      }, 1200);
    });
  }

  function initArchiveFilter() {
    const filterTabs = document.querySelectorAll('.archive-filter-tab');
    const items = document.querySelectorAll('.archive-item');

    filterTabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        filterTabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');
        items.forEach(function(item) {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    document.querySelectorAll('.archive-preview-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const title = btn.closest('.archive-item').querySelector('.archive-item-title').textContent;
        if (window.showToast) window.showToast('Decrypting preview for ' + title, 'visibility');
      });
    });

    document.querySelectorAll('.archive-download-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const title = btn.closest('.archive-item').querySelector('.archive-item-title').textContent;
        if (window.showToast) window.showToast('Downloading encrypted archive for ' + title, 'download');
      });
    });
  }

  function initDepositModal() {
    const depositBtn = document.getElementById('deposit-record-btn');
    const modal = document.getElementById('deposit-modal');
    const closeBtn = document.getElementById('close-deposit-modal');
    const form = document.getElementById('deposit-form');
    const grid = document.getElementById('archive-grid');

    if (!depositBtn || !modal || !form) return;

    depositBtn.addEventListener('click', function() {
      modal.classList.add('open');
      document.getElementById('record-title-input').focus();
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
      const title = document.getElementById('record-title-input').value.trim();
      const category = document.getElementById('record-category-select').value;
      if (!title) return;

      if (grid) {
        const card = document.createElement('div');
        card.className = 'archive-item';
        card.setAttribute('data-category', category);
        card.innerHTML = '<div class="archive-item-top"><div class="archive-icon"><span class="material-symbols-outlined">description</span></div><div class="archive-info"><span class="archive-item-title">' + title + '</span><span class="archive-item-date">Deposited today • Encrypted Node 01</span></div></div><div class="archive-actions"><span class="archive-badge">' + category + '</span><div style="display: flex; gap: 0.25rem;"><button class="icon-btn archive-preview-btn" title="Preview"><span class="material-symbols-outlined" style="font-size: 16px;">visibility</span></button><button class="icon-btn archive-download-btn" title="Download"><span class="material-symbols-outlined" style="font-size: 16px;">download</span></button></div></div>';

        card.querySelector('.archive-preview-btn').addEventListener('click', function() {
          if (window.showToast) window.showToast('Decrypting preview for ' + title, 'visibility');
        });
        card.querySelector('.archive-download-btn').addEventListener('click', function() {
          if (window.showToast) window.showToast('Downloading encrypted archive for ' + title, 'download');
        });

        grid.prepend(card);
      }

      form.reset();
      modal.classList.remove('open');
      if (window.showToast) window.showToast('Record "' + title + '" encrypted into Vault', 'shield');
    });
  }

  function initResync() {
    const resyncBtn = document.getElementById('resync-mesh-btn');
    if (!resyncBtn) return;

    resyncBtn.addEventListener('click', function() {
      const icon = resyncBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.style.transition = 'transform 0.8s ease';
        icon.style.transform = 'rotate(360deg)';
        setTimeout(function() {
          icon.style.transform = 'none';
        }, 850);
      }
      if (window.showToast) window.showToast('Hardware security nodes synchronized across mesh', 'verified');
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initCypherShield();
    initArchiveFilter();
    initDepositModal();
    initResync();
  });

  window.addEventListener('viewchanged', function(e) {
    if (e.detail.view === 'vault') {
      initCypherShield();
    }
  });
})();
