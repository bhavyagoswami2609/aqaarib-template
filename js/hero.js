(function() {
  function initHero() {
    const pingBtn = document.getElementById('hero-quick-ping-btn');
    if (pingBtn) {
      pingBtn.addEventListener('click', function() {
        if (window.showToast) {
          window.showToast('Hearth chime sent to Tariq, Elena, Maya & Liam', 'done_all');
        }
      });
    }

    const beaconBtn = document.getElementById('hero-sync-beacon-btn');
    if (beaconBtn) {
      beaconBtn.addEventListener('click', function() {
        if (window.showToast) {
          window.showToast('Heart pulse beacon received by all devices', 'favorite');
        }
      });
    }

    function updateTimeAndWeather() {
      const weatherTemp = document.getElementById('live-weather-temp');
      if (weatherTemp) {
        const hours = new Date().getHours();
        const baseTemp = hours >= 11 && hours <= 16 ? 31 : 27;
        weatherTemp.textContent = baseTemp + '°C';
      }
    }
    updateTimeAndWeather();
  }

  document.addEventListener('DOMContentLoaded', initHero);
  window.addEventListener('viewchanged', function(e) {
    if (e.detail.view === 'home' || e.detail.view === 'hero') {
      initHero();
    }
  });
})();