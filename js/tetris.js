(function() {
  'use strict';
  class SoundSynth {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.initOnInteraction();
    }
    initOnInteraction() {
      const unlock = () => {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) {
            this.ctx = new AudioContext();
          }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        window.removeEventListener('keydown', unlock);
        window.removeEventListener('click', unlock);
        window.removeEventListener('touchstart', unlock);
      };
      window.addEventListener('keydown', unlock);
      window.addEventListener('click', unlock);
      window.addEventListener('touchstart', unlock);
    }
    playMove() {
      if (!this.enabled || !this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    }
    playRotate() {
      if (!this.enabled || !this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(480, this.ctx.currentTime + 0.07);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.07);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    }
    playDrop() {
      if (!this.enabled || !this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    }
    playLineClear(lines) {
      if (!this.enabled || !this.ctx) return;
      const notes = lines === 4 ? [261.6, 329.6, 392.0, 523.3, 659.3] : [329.6, 392.0, 523.3];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.3);
      });
    }
    playLevelUp() {
      if (!this.enabled || !this.ctx) return;
      const notes = [392.0, 440.0, 523.3, 587.3, 659.3, 784.0];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.05);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.05 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.05);
        osc.stop(this.ctx.currentTime + idx * 0.05 + 0.25);
      });
    }
    playDragonRoar() {
      if (!this.enabled || !this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(90, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(140, this.ctx.currentTime + 0.3);
      osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.9);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.9);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.9);
    }
    playBeacon() {
      if (!this.enabled || !this.ctx) return;
      const chord = [523.25, 659.25, 783.99, 1046.50];
      chord.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 1.2);
      });
    }
    playGameOver() {
      if (!this.enabled || !this.ctx) return;
      const notes = [440, 415.3, 392, 349.2];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.15);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.15 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.15);
        osc.stop(this.ctx.currentTime + idx * 0.15 + 0.35);
      });
    }
  }
  const sound = new SoundSynth();
  const textureCache = {};
  function createNoiseCanvas(baseColor, noiseColors) {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, 16, 16);
    for (let x = 0; x < 16; x++) {
      for (let y = 0; y < 16; y++) {
        if (Math.random() < 0.35) {
          ctx.fillStyle = noiseColors[Math.floor(Math.random() * noiseColors.length)];
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
    return canvas;
  }
  function getMinecraftTexture(type) {
    if (textureCache[type]) return textureCache[type];
    let canvas;
    if (type === 'grass') {
      canvas = createNoiseCanvas('#4a8528', ['#3c7020', '#569932', '#2f5b18']);
    } else if (type === 'grass_side') {
      canvas = createNoiseCanvas('#866043', ['#684830', '#573d28', '#9c7352']);
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#4a8528';
      ctx.fillRect(0, 0, 16, 4);
      for (let x = 0; x < 16; x += 2) {
        ctx.fillRect(x, 4, 1, Math.floor(Math.random() * 3));
      }
    } else if (type === 'wood') {
      canvas = createNoiseCanvas('#b8945f', ['#a27f4c', '#cbab75', '#8f6e3e']);
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(0, 3, 16, 1);
      ctx.fillRect(0, 7, 16, 1);
      ctx.fillRect(0, 11, 16, 1);
      ctx.fillRect(0, 15, 16, 1);
    } else if (type === 'stone') {
      canvas = createNoiseCanvas('#7b7b7b', ['#5d5d5d', '#929292', '#444444', '#a1a1a1']);
    } else if (type === 'gold') {
      canvas = createNoiseCanvas('#fed83d', ['#e5b922', '#fff182', '#bf9110', '#ffd025']);
    } else if (type === 'redstone') {
      canvas = createNoiseCanvas('#990000', ['#cc0000', '#ff3333', '#660000', '#ff6666']);
    } else if (type === 'diamond') {
      canvas = createNoiseCanvas('#4dedf4', ['#2bc5cf', '#8bf7fc', '#1aa0a9', '#ffffff']);
    } else if (type === 'obsidian') {
      canvas = createNoiseCanvas('#181226', ['#120c1e', '#281e3d', '#3b2c59', '#0d0817']);
    } else if (type === 'magma') {
      canvas = createNoiseCanvas('#801c1c', ['#e65c00', '#ff9900', '#4d0000', '#ffcc00']);
    } else if (type === 'endstone') {
      canvas = createNoiseCanvas('#dfdf9f', ['#c7c784', '#ececb3', '#b2b26c', '#f5f5c9']);
    } else {
      canvas = createNoiseCanvas('#888888', ['#666666', '#aaaaaa']);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    textureCache[type] = texture;
    return texture;
  }
  const materialsCache = {};
  function getBlockMaterial(blockKey) {
    if (materialsCache[blockKey]) return materialsCache[blockKey];
    let mat;
    if (blockKey === 'grass') {
      const topTex = getMinecraftTexture('grass');
      const sideTex = getMinecraftTexture('grass_side');
      const dirtTex = getMinecraftTexture('wood');
      mat = [
        new THREE.MeshLambertMaterial({ map: sideTex }),
        new THREE.MeshLambertMaterial({ map: sideTex }),
        new THREE.MeshLambertMaterial({ map: topTex }),
        new THREE.MeshLambertMaterial({ map: dirtTex }),
        new THREE.MeshLambertMaterial({ map: sideTex }),
        new THREE.MeshLambertMaterial({ map: sideTex })
      ];
    } else if (blockKey === 'wood') {
      mat = new THREE.MeshLambertMaterial({ map: getMinecraftTexture('wood') });
    } else if (blockKey === 'stone') {
      mat = new THREE.MeshLambertMaterial({ map: getMinecraftTexture('stone') });
    } else if (blockKey === 'gold') {
      mat = new THREE.MeshStandardMaterial({
        map: getMinecraftTexture('gold'),
        metalness: 0.6,
        roughness: 0.3
      });
    } else if (blockKey === 'redstone') {
      mat = new THREE.MeshStandardMaterial({
        map: getMinecraftTexture('redstone'),
        emissive: new THREE.Color(0xaa0000),
        emissiveIntensity: 0.4,
        roughness: 0.4
      });
    } else if (blockKey === 'diamond') {
      mat = new THREE.MeshStandardMaterial({
        map: getMinecraftTexture('diamond'),
        metalness: 0.4,
        roughness: 0.2,
        emissive: new THREE.Color(0x005577),
        emissiveIntensity: 0.3
      });
    } else if (blockKey === 'obsidian') {
      mat = new THREE.MeshStandardMaterial({
        map: getMinecraftTexture('obsidian'),
        roughness: 0.2,
        metalness: 0.3
      });
    } else if (blockKey === 'endstone') {
      mat = new THREE.MeshLambertMaterial({ map: getMinecraftTexture('endstone') });
    } else {
      mat = new THREE.MeshLambertMaterial({ map: getMinecraftTexture('stone') });
    }
    materialsCache[blockKey] = mat;
    return mat;
  }
  const BLOCK_TYPES = {
    grass: { name: 'Dirt / Grass', pts: 10, color: '#4caf50' },
    wood: { name: 'Oak Planks', pts: 15, color: '#b8945f' },
    stone: { name: 'Cobblestone', pts: 20, color: '#757575' },
    gold: { name: 'Gold Ore', pts: 35, color: '#ffd700' },
    redstone: { name: 'Redstone', pts: 50, color: '#f44336' },
    diamond: { name: 'Diamond Block', pts: 75, color: '#00e5ff' },
    obsidian: { name: 'Obsidian / Nether', pts: 100, color: '#311b92' },
    endstone: { name: 'End Stone / Purpur', pts: 150, color: '#fff59d' }
  };
  const TETROMINOES = {
    I: {
      shape: [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      defaultBlock: 'diamond'
    },
    O: {
      shape: [
        [1, 1],
        [1, 1]
      ],
      defaultBlock: 'gold'
    },
    T: {
      shape: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
      ],
      defaultBlock: 'obsidian'
    },
    S: {
      shape: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
      ],
      defaultBlock: 'grass'
    },
    Z: {
      shape: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
      ],
      defaultBlock: 'redstone'
    },
    J: {
      shape: [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ],
      defaultBlock: 'stone'
    },
    L: {
      shape: [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
      ],
      defaultBlock: 'wood'
    }
  };
  const BIOMES = [
    {
      level: 1,
      name: 'Plains & Oak Forest',
      icon: 'forest',
      scoreThreshold: 0,
      nextThreshold: 1500,
      nextName: 'Desert & Badlands',
      skyColor: 0x87ceeb,
      ambientColor: 0xffffff,
      fogDensity: 0.008,
      speed: 800, 
      blockWeights: ['grass', 'grass', 'wood', 'stone']
    },
    {
      level: 2,
      name: 'Desert & Badlands',
      icon: 'wb_sunny',
      scoreThreshold: 1500,
      nextThreshold: 3500,
      nextName: 'Deepslate Caverns',
      skyColor: 0xd4a373,
      ambientColor: 0xfff4e6,
      fogDensity: 0.012,
      speed: 680,
      blockWeights: ['wood', 'stone', 'gold', 'gold']
    },
    {
      level: 3,
      name: 'Deepslate Caverns',
      icon: 'diamond',
      scoreThreshold: 3500,
      nextThreshold: 6500,
      nextName: 'The Nether',
      skyColor: 0x1a2130,
      ambientColor: 0x4a6572,
      fogDensity: 0.02,
      speed: 560,
      blockWeights: ['stone', 'redstone', 'diamond', 'diamond']
    },
    {
      level: 4,
      name: 'The Nether',
      icon: 'local_fire_department',
      scoreThreshold: 6500,
      nextThreshold: 10000,
      nextName: 'The End (Boss)',
      skyColor: 0x3d0c0c,
      ambientColor: 0xff5722,
      fogDensity: 0.025,
      speed: 460,
      blockWeights: ['stone', 'redstone', 'obsidian', 'obsidian']
    },
    {
      level: 5,
      name: 'The End (Boss Siege)',
      icon: 'military_tech',
      scoreThreshold: 10000,
      nextThreshold: Infinity,
      nextName: 'Victory Achieved!',
      skyColor: 0x0a0515,
      ambientColor: 0xb388ff,
      fogDensity: 0.018,
      speed: 380,
      blockWeights: ['obsidian', 'diamond', 'endstone', 'endstone']
    }
  ];
  const CHAMPIONS = {
    tariq: {
      id: 'tariq',
      name: 'Tariq Al-Rashid',
      shortName: 'Tariq',
      title: 'The Architect',
      role: 'Parent',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf3drIRR9u1Ao6F01u-XRF_lGNTACLK25df1Ve_v0T98_JyE8kpN0VJvJ8s2cYdmkrXKq4QMSKGbi25xiuYXqKs2k1k0AhG83WIjp7NGRYZRFDBipR6585MS1n9eI8lJGVtrDzEzc0XNTB75o7C_UdTuad5xD7bpAhigiDYASR5L3L7_zfTdfPGIpFZXq5uCOI4uDQ2sNDL-ijN3WyI6kw-IiSs-_rtye2OElnAaxp9VzOn5qJDgkH3g',
      passiveDesc: 'Structural Foundation: +25% bonus points on all Stone and Obsidian blocks.',
      applyScoreBonus: (blockType, pts) => {
        if (blockType === 'stone' || blockType === 'obsidian') {
          return Math.round(pts * 1.25);
        }
        return pts;
      }
    },
    elena: {
      id: 'elena',
      name: 'Elena Al-Rashid',
      shortName: 'Elena',
      title: 'The Hearthkeeper',
      role: 'Parent',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeA_ZPiSUEHr2kWeks14JOMcoRNBPn2DaEmwt07zX-U1X6sLrIAWWmspZfBrv9G-YBaZEqNeT6Y_LF8wxf3gJSGIUPw8bOR12Jl4evrduhLZlhzrpylDt5Bf59CytEq8cn7ujVED8-0VmHCqy4LbJx4mMIRiX7kKXGakYCsBkqfTt-A6s4wh4XhFOeUFLmwczmvx12KUApM3izP5cS4kztUtspTT9_7m6pnb6CRMqWysCVGggiI5NYGA',
      passiveDesc: 'Harmonic Resonance: +50% bonus points on Multi-Line Clears (Doubles/Triples/Tetrises).',
      applyLineBonus: (lines, pts) => {
        return lines >= 2 ? Math.round(pts * 1.5) : pts;
      }
    },
    maya: {
      id: 'maya',
      name: 'Maya Al-Rashid',
      shortName: 'Maya',
      title: 'The Explorer',
      role: 'Child',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCunoiZJOk3-luigCSpKh4dSsP8rVhmYASPJsBmoc9ng65ZqpguPUbfS1p1RzI8aAoSwpdtBCG3rEOlVCvIxbzdTf4JqFDIcHHJYtJmfdzcWkf2AvM5ZcT8JCY-tOHH9CZEtXEgOTJEdxh80ysu9WOJFBlT1sCVtv7cumq6jAglLfCFH8JJmpXsamP1HNZnS3V6rh5x9H7WAzS9bj9nEWK9FmflWAgm8r88L-TgQS6zf0nYPSOe2zLiLQ',
      passiveDesc: 'Ore Discovery: +35% higher chance of spawning rare Gold and Diamond pieces.',
      modifyBlockType: (type) => {
        if (Math.random() < 0.35 && (type === 'stone' || type === 'wood')) {
          return Math.random() < 0.5 ? 'diamond' : 'gold';
        }
        return type;
      }
    },
    liam: {
      id: 'liam',
      name: 'Liam Al-Rashid',
      shortName: 'Liam',
      title: 'The Redstone Prodigy',
      role: 'Child',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNC1ebBryzewR9eKSzvd2A4p5gryOHBI_S8cEr1mSBDXELum4mCJvnCxf8hHGOJDv20JXW-Eph4ULtJYQw7eb-sYJehTuwPXrsHO-zvu6FJXehyCb07JxSNI5G7LovOCiRHHoI94brI4k6LHP5pz5L1aCCJW1RbjZsYSy5N2sqwsHbp4PrhiJO3AEXfWr08PnVBHdMVSSyIVbN6uoMeMPrWhO5juvY10IQYP76sdA4cXrogabsoAQi2Q',
      passiveDesc: 'Kinetic Surge: +150 bonus points on Hard Drops; Beacon charges 30% faster.',
      applyDropBonus: () => 150
    }
  };
  const FAMILY_QUOTES = {
    start: [
      { who: 'Tariq', text: 'All family gear synced! Let’s lay a solid bedrock foundation.' },
      { who: 'Elena', text: 'Take a breath and find your rhythm. The hearth is with you.' },
      { who: 'Liam', text: 'Fast drop ready! Let’s see if we can reach the Nether today!' },
      { who: 'Maya', text: 'I packed my pickaxe for diamonds! Let’s explore!' }
    ],
    biomeUp: [
      { who: 'Tariq', text: 'New biome reached! Notice how the terrain changes structure.' },
      { who: 'Elena', text: 'Such beautiful colors! Stay focused as the tempo quickens.' },
      { who: 'Liam', text: 'Woohoo! Level up! The pieces are falling faster now!' },
      { who: 'Maya', text: 'Look at the sky! We’re getting deeper into the expedition!' }
    ],
    dragonIntro: [
      { who: 'Liam', text: 'DRAGON SPOTTED! Target the crystals by clearing lines!' },
      { who: 'Tariq', text: 'Hold the formation! Tetris clears will deal massive damage to Jean!' },
      { who: 'Elena', text: 'We believe in you! Clear those lines with courage!' },
      { who: 'Maya', text: 'Watch the purple breath! Go for the victory, family!' }
    ],
    tetris: [
      { who: 'Tariq', text: 'Magnificent 4-line clear! That’s master craftsmanship!' },
      { who: 'Elena', text: 'Pure domestic harmony! What a spectacular move!' },
      { who: 'Liam', text: 'BOOM! 4 lines erased! That was legendary!' },
      { who: 'Maya', text: 'Diamond level skill right there! Keep going!' }
    ],
    beacon: [
      { who: 'Elena', text: 'Hearth Beacon activated! Feel the warmth clearing the path!' },
      { who: 'Tariq', text: 'The beacon restored our base! Exceptional timing!' },
      { who: 'Liam', text: 'Full power synergy! Redstone overdrive!' },
      { who: 'Maya', text: 'Sparkles everywhere! Let’s push for the high score!' }
    ],
    danger: [
      { who: 'Tariq', text: 'Careful! The stack is nearing the upper limit!' },
      { who: 'Elena', text: 'Stay calm, look for quick single or double clears.' },
      { who: 'Liam', text: 'Use the hold piece or activate the Beacon if ready!' }
    ],
    victory: [
      { who: 'Tariq', text: 'The Ender Dragon has fallen! The Al-Rashid hearth is victorious!' },
      { who: 'Elena', text: 'We did it together! The Dragon Egg belongs to our family!' },
      { who: 'Liam', text: 'WE BEAT MINECRAFT TETRIS! Highest honors for the hearth!' },
      { who: 'Maya', text: 'Best day ever! The entire Nether and End conquered!' }
    ]
  };
  class HearthCraftGame {
    constructor() {
      this.COLS = 10;
      this.ROWS = 20;
      this.grid = []; 
      this.score = 0;
      this.highScore = 18400;
      this.lines = 0;
      this.level = 1;
      this.currentBiome = BIOMES[0];
      this.activeChampion = CHAMPIONS.tariq;
      this.beaconEnergy = 0; 
      this.hasStarted = false;
      this.isPaused = true;
      this.isGameOver = false;
      this.dragonActive = false;
      this.dragonHp = 100;
      this.dragonMaxHp = 100;
      this.dragonDefeated = false;
      this.dragonMesh = null;
      this.crystals = [];
      this.currentPiece = null;
      this.nextPiece = null;
      this.heldPiece = null;
      this.canHold = true;
      this.dropCounter = 0;
      this.lastTime = 0;
      this.cameraMode = 'iso'; 
      this.particles = [];
      this.floatingTexts = [];
      this.shakeIntensity = 0;
      this.initDomReferences();
      this.initThree();
      this.initLeaderboard();
      this.initChampionPicker();
      this.initControls();
      this.loadSavedState();
      this.initEmptyBoard();
      this.animate = this.animate.bind(this);
      requestAnimationFrame(this.animate);
    }
    initDomReferences() {
      this.canvas = document.getElementById('game-canvas');
      this.viewportWrap = document.getElementById('viewport-wrap');
      this.statScore = document.getElementById('stat-score');
      this.statHighScore = document.getElementById('stat-high-score');
      this.statLines = document.getElementById('stat-lines');
      this.statLevel = document.getElementById('stat-level');
      this.hudScoreCounter = document.getElementById('hud-score-counter');
      this.hudSpeedVal = document.getElementById('hud-speed-val');
      this.hudComboAlert = document.getElementById('hud-combo-alert');
      this.comboTitle = document.getElementById('combo-title');
      this.comboSub = document.getElementById('combo-sub');
      this.gameStartOverlay = document.getElementById('game-start-overlay');
      this.btnStartGame = document.getElementById('btn-start-game');
      this.biomeNameText = document.getElementById('biome-name-text');
      this.biomeIconWrap = document.getElementById('biome-icon-wrap');
      this.biomeLevelLabel = document.getElementById('biome-level-label');
      this.biomePtsNext = document.getElementById('biome-pts-next');
      this.biomeProgressFill = document.getElementById('biome-progress-fill');
      this.bossBarWrap = document.getElementById('boss-bar-wrap');
      this.bossHealthFill = document.getElementById('boss-health-fill');
      this.bossHpText = document.getElementById('boss-hp-text');
      this.beaconBarFill = document.getElementById('beacon-bar-fill');
      this.beaconPctText = document.getElementById('beacon-pct-text');
      this.activateBeaconBtn = document.getElementById('activate-beacon-btn');
      this.champMiniImg = document.getElementById('champ-mini-img');
      this.champMiniName = document.getElementById('champ-mini-name');
      this.champCardImg = document.getElementById('champ-card-img');
      this.champCardName = document.getElementById('champ-card-name');
      this.champCardRole = document.getElementById('champ-card-role');
      this.champCardDesc = document.getElementById('champ-card-desc');
      this.champPillBtn = document.getElementById('champ-pill-btn');
      this.familyStream = document.getElementById('family-stream');
      this.gameoverModal = document.getElementById('gameover-modal');
      this.victoryModal = document.getElementById('victory-modal');
      this.championModal = document.getElementById('champion-modal');
      this.pauseBtn = document.getElementById('pause-btn');
      this.restartBtn = document.getElementById('restart-btn');
      this.soundToggleBtn = document.getElementById('sound-toggle-btn');
      this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    }
    initThree() {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(this.currentBiome.skyColor);
      this.scene.fog = new THREE.FogExp2(this.currentBiome.skyColor, this.currentBiome.fogDensity);
      const width = this.viewportWrap.clientWidth || 800;
      const height = this.viewportWrap.clientHeight || 600;
      this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      this.setCameraPosition('iso');
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        alpha: false
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
      this.scene.add(this.ambientLight);
      this.dirLight = new THREE.DirectionalLight(0xfff4e6, 0.9);
      this.dirLight.position.set(15, 30, 20);
      this.dirLight.castShadow = true;
      this.dirLight.shadow.mapSize.width = 1024;
      this.dirLight.shadow.mapSize.height = 1024;
      this.scene.add(this.dirLight);
      this.pointLight = new THREE.PointLight(0xffb74d, 0.5, 30);
      this.pointLight.position.set(4.5, 10, 5);
      this.scene.add(this.pointLight);
      this.buildBoardFrame();
      this.initMiniPreview('hold-canvas', 'hold');
      this.initMiniPreview('next-canvas', 'next');
      this.biomeEnvGroup = new THREE.Group();
      this.scene.add(this.biomeEnvGroup);
      this.buildBiomeScenery();
      window.addEventListener('resize', () => {
        const w = this.viewportWrap.clientWidth;
        const h = this.viewportWrap.clientHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
      });
    }
    setCameraPosition(mode) {
      this.cameraMode = mode;
      if (mode === 'iso') {
        this.targetCamPos = new THREE.Vector3(4.5, 11, 23);
        this.targetCamLook = new THREE.Vector3(4.5, 9, 0);
      } else if (mode === 'front') {
        this.targetCamPos = new THREE.Vector3(4.5, 9.5, 24);
        this.targetCamLook = new THREE.Vector3(4.5, 9.5, 0);
      } else if (mode === 'cinematic') {
        this.targetCamPos = new THREE.Vector3(8.5, 6, 18);
        this.targetCamLook = new THREE.Vector3(4.5, 10, 0);
      }
      this.camera.position.copy(this.targetCamPos);
      this.camera.lookAt(this.targetCamLook);
    }
    buildBoardFrame() {
      this.boardGroup = new THREE.Group();
      this.scene.add(this.boardGroup);
      const bedrockGeo = new THREE.BoxGeometry(this.COLS + 2, 1, 3);
      const bedrockMat = new THREE.MeshStandardMaterial({
        map: getMinecraftTexture('obsidian'),
        roughness: 0.8
      });
      const bedrockMesh = new THREE.Mesh(bedrockGeo, bedrockMat);
      bedrockMesh.position.set(4.5, -0.6, 0);
      this.boardGroup.add(bedrockMesh);
      const pillarGeo = new THREE.BoxGeometry(0.8, this.ROWS + 1, 1.2);
      const pillarMat = new THREE.MeshStandardMaterial({
        map: getMinecraftTexture('obsidian'),
        roughness: 0.3
      });
      const leftPillar = new THREE.Mesh(pillarGeo, pillarMat);
      leftPillar.position.set(-0.9, 9.5, 0);
      this.boardGroup.add(leftPillar);
      const rightPillar = new THREE.Mesh(pillarGeo, pillarMat);
      rightPillar.position.set(this.COLS - 0.1, 9.5, 0);
      this.boardGroup.add(rightPillar);
      const topBeamGeo = new THREE.BoxGeometry(this.COLS + 2, 0.6, 1.2);
      const topBeam = new THREE.Mesh(topBeamGeo, pillarMat);
      topBeam.position.set(4.5, this.ROWS + 0.3, 0);
      this.boardGroup.add(topBeam);
      const backPlaneGeo = new THREE.PlaneGeometry(this.COLS, this.ROWS);
      const backPlaneMat = new THREE.MeshBasicMaterial({
        color: 0x05070a,
        transparent: true,
        opacity: 0.45
      });
      const backPlane = new THREE.Mesh(backPlaneGeo, backPlaneMat);
      backPlane.position.set(4.5, 9.5, -0.55);
      this.boardGroup.add(backPlane);
      const gridHelper = new THREE.GridHelper(this.COLS, this.COLS, 0x4a4a4a, 0x222222);
      gridHelper.rotation.x = Math.PI / 2;
      gridHelper.position.set(4.5, 9.5, -0.54);
      gridHelper.scale.set(1, 1, this.ROWS / this.COLS);
      this.boardGroup.add(gridHelper);
    }
    initMiniPreview(canvasId, type) {
      const cvs = document.getElementById(canvasId);
      if (!cvs) return;
      const scene = new THREE.Scene();
      scene.background = null;
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0, 7);
      const ambLight = new THREE.AmbientLight(0xffffff, 0.85);
      scene.add(ambLight);
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight.position.set(5, 5, 5);
      scene.add(dirLight);
      const renderer = new THREE.WebGLRenderer({ canvas: cvs, alpha: true, antialias: true });
      renderer.setSize(140, 110);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const pieceGroup = new THREE.Group();
      scene.add(pieceGroup);
      if (type === 'hold') {
        this.holdScene = scene;
        this.holdGroup = pieceGroup;
        this.holdRenderer = renderer;
        this.holdCamera = camera;
      } else {
        this.nextScene = scene;
        this.nextGroup = pieceGroup;
        this.nextRenderer = renderer;
        this.nextCamera = camera;
      }
    }
    updateMiniPreview(type) {
      const isHold = type === 'hold';
      const grp = isHold ? this.holdGroup : this.nextGroup;
      const rnd = isHold ? this.holdRenderer : this.nextRenderer;
      const scn = isHold ? this.holdScene : this.nextScene;
      const cam = isHold ? this.holdCamera : this.nextCamera;
      const piece = isHold ? this.heldPiece : this.nextPiece;
      while (grp.children.length > 0) {
        grp.remove(grp.children[0]);
      }
      if (piece) {
        const mat = getBlockMaterial(piece.blockType);
        const geo = new THREE.BoxGeometry(0.85, 0.85, 0.85);
        const shape = piece.shape;
        const size = shape.length;
        const offset = (size - 1) * 0.5;
        for (let r = 0; r < size; r++) {
          for (let c = 0; c < size; c++) {
            if (shape[r][c]) {
              const mesh = new THREE.Mesh(geo, mat);
              mesh.position.set(c - offset, offset - r, 0);
              grp.add(mesh);
            }
          }
        }
      }
      rnd.render(scn, cam);
    }
    buildBiomeScenery() {
      while (this.biomeEnvGroup.children.length > 0) {
        this.biomeEnvGroup.remove(this.biomeEnvGroup.children[0]);
      }
      this.dragonMesh = null;
      this.crystals = [];
      const biome = this.currentBiome;
      this.scene.background.setHex(biome.skyColor);
      this.scene.fog.color.setHex(biome.skyColor);
      this.scene.fog.density = biome.fogDensity;
      if (biome.level === 1) {
        const treeMat = getBlockMaterial('wood');
        const leafMat = getBlockMaterial('grass');
        for (let i = -3; i <= 3; i++) {
          if (Math.abs(i) < 2) continue;
          const trunkGeo = new THREE.BoxGeometry(0.8, 6, 0.8);
          const trunk = new THREE.Mesh(trunkGeo, treeMat);
          trunk.position.set(i * 6 + 4.5, 3, -12);
          this.biomeEnvGroup.add(trunk);
          const leafGeo = new THREE.BoxGeometry(3.5, 3.5, 3.5);
          const leaves = new THREE.Mesh(leafGeo, leafMat);
          leaves.position.set(i * 6 + 4.5, 7, -12);
          this.biomeEnvGroup.add(leaves);
        }
        const cloudMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 });
        for (let c = 0; c < 5; c++) {
          const cloud = new THREE.Mesh(new THREE.BoxGeometry(8 + Math.random() * 4, 1.5, 4), cloudMat);
          cloud.position.set((c - 2) * 12 + 4.5, 22 + Math.random() * 4, -18);
          this.biomeEnvGroup.add(cloud);
        }
      } else if (biome.level === 2) {
        const sandMat = getBlockMaterial('gold');
        const cactusMat = getBlockMaterial('grass');
        for (let i = -4; i <= 4; i += 2) {
          if (Math.abs(i) < 2) continue;
          const cactus = new THREE.Mesh(new THREE.BoxGeometry(0.9, 5 + Math.random() * 3, 0.9), cactusMat);
          cactus.position.set(i * 5 + 4.5, 2.5, -10);
          this.biomeEnvGroup.add(cactus);
        }
      } else if (biome.level === 3) {
        const stalactiteMat = getBlockMaterial('stone');
        for (let s = -3; s <= 3; s++) {
          const cone = new THREE.Mesh(new THREE.ConeGeometry(1.2, 5, 4), stalactiteMat);
          cone.rotation.x = Math.PI;
          cone.position.set(s * 5 + 4.5, 22, -8);
          this.biomeEnvGroup.add(cone);
        }
      } else if (biome.level === 4) {
        const lavaPlane = new THREE.Mesh(
          new THREE.PlaneGeometry(60, 40),
          new THREE.MeshStandardMaterial({
            map: getMinecraftTexture('magma'),
            emissive: new THREE.Color(0xff4500),
            emissiveIntensity: 0.6,
            roughness: 0.3
          })
        );
        lavaPlane.rotation.x = -Math.PI / 2;
        lavaPlane.position.set(4.5, -1, -5);
        this.biomeEnvGroup.add(lavaPlane);
        const basaltMat = getBlockMaterial('obsidian');
        for (let p = -3; p <= 3; p += 2) {
          const pillar = new THREE.Mesh(new THREE.BoxGeometry(2, 25, 2), basaltMat);
          pillar.position.set(p * 8 + 4.5, 10, -14);
          this.biomeEnvGroup.add(pillar);
        }
      } else if (biome.level === 5) {
        const endStoneMat = getBlockMaterial('endstone');
        const obsMat = getBlockMaterial('obsidian');
        const island = new THREE.Mesh(new THREE.CylinderGeometry(15, 8, 4, 8), endStoneMat);
        island.position.set(4.5, -3, -12);
        this.biomeEnvGroup.add(island);
        const crystalMat = new THREE.MeshStandardMaterial({
          color: 0xff00ff,
          emissive: 0xff00ff,
          emissiveIntensity: 0.8,
          wireframe: false
        });
        const pillarPositions = [-10, 19];
        pillarPositions.forEach(xPos => {
          const pillar = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 20, 8), obsMat);
          pillar.position.set(xPos, 8, -12);
          this.biomeEnvGroup.add(pillar);
          const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(1.2), crystalMat);
          crystal.position.set(xPos, 19, -12);
          this.biomeEnvGroup.add(crystal);
          this.crystals.push(crystal);
        });
        this.buildEnderDragon();
      }
    }
    buildEnderDragon() {
      const dragon = new THREE.Group();
      const dragonMat = new THREE.MeshStandardMaterial({
        color: 0x141414,
        roughness: 0.4,
        metalness: 0.2
      });
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0xda70d6 }); 
      const body = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.8, 6), dragonMat);
      dragon.add(body);
      const neck = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 3), dragonMat);
      neck.position.set(0, 0.8, 4);
      neck.rotation.x = -Math.PI / 8;
      dragon.add(neck);
      const headGroup = new THREE.Group();
      headGroup.position.set(0, 1.8, 5.8);
      const head = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 2), dragonMat);
      headGroup.add(head);
      const snout = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.8, 1.8), dragonMat);
      snout.position.set(0, -0.2, 1.6);
      headGroup.add(snout);
      const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, 0.1), eyeMat);
      leftEye.position.set(-0.75, 0.2, 1);
      headGroup.add(leftEye);
      const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, 0.1), eyeMat);
      rightEye.position.set(0.75, 0.2, 1);
      headGroup.add(rightEye);
      dragon.add(headGroup);
      const wingGeo = new THREE.BoxGeometry(7, 0.15, 3.5);
      const leftWing = new THREE.Mesh(wingGeo, dragonMat);
      leftWing.position.set(-4.5, 0.6, 0);
      dragon.add(leftWing);
      this.dragonLeftWing = leftWing;
      const rightWing = new THREE.Mesh(wingGeo, dragonMat);
      rightWing.position.set(4.5, 0.6, 0);
      dragon.add(rightWing);
      this.dragonRightWing = rightWing;
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 5), dragonMat);
      tail.position.set(0, 0.2, -5);
      dragon.add(tail);
      dragon.position.set(4.5, 16, -14);
      dragon.scale.set(1.4, 1.4, 1.4);
      this.biomeEnvGroup.add(dragon);
      this.dragonMesh = dragon;
      this.dragonActive = true;
    }
    initEmptyBoard() {
      if (this.gridGroup) {
        this.scene.remove(this.gridGroup);
      }
      this.gridGroup = new THREE.Group();
      this.scene.add(this.gridGroup);
      this.grid = [];
      for (let r = 0; r < this.ROWS; r++) {
        this.grid[r] = new Array(this.COLS).fill(null);
      }
      this.currentPiece = null;
      this.nextPiece = null;
      this.heldPiece = null;
      this.canHold = true;
      this.updateHud();
      this.buildBiomeScenery();
    }
    reset() {
      if (this.gridGroup) {
        this.scene.remove(this.gridGroup);
      }
      this.gridGroup = new THREE.Group();
      this.scene.add(this.gridGroup);
      this.grid = [];
      for (let r = 0; r < this.ROWS; r++) {
        this.grid[r] = new Array(this.COLS).fill(null);
      }
      this.score = 0;
      this.lines = 0;
      this.level = 1;
      this.currentBiome = BIOMES[0];
      this.beaconEnergy = 0;
      this.isGameOver = false;
      this.isPaused = false;
      this.dragonActive = false;
      this.dragonHp = 100;
      this.dragonDefeated = false;
      this.currentPiece = this.generatePiece();
      this.nextPiece = this.generatePiece();
      this.heldPiece = null;
      this.canHold = true;
      this.updateHud();
      this.buildBiomeScenery();
      this.postFamilyCheer('start');
    }
    generatePiece() {
      const keys = Object.keys(TETROMINOES);
      const chosenKey = keys[Math.floor(Math.random() * keys.length)];
      const tet = TETROMINOES[chosenKey];
      const weights = this.currentBiome.blockWeights;
      let blockType = weights[Math.floor(Math.random() * weights.length)];
      if (this.activeChampion.modifyBlockType) {
        blockType = this.activeChampion.modifyBlockType(blockType);
      }
      const shape = tet.shape.map(row => [...row]);
      const x = Math.floor((this.COLS - shape[0].length) / 2);
      const y = this.ROWS - shape.length;
      const piece = {
        key: chosenKey,
        shape: shape,
        blockType: blockType,
        x: x,
        y: y,
        meshGroup: new THREE.Group()
      };
      this.buildPieceMesh(piece);
      return piece;
    }
    buildPieceMesh(piece) {
      while (piece.meshGroup.children.length > 0) {
        piece.meshGroup.remove(piece.meshGroup.children[0]);
      }
      const mat = getBlockMaterial(piece.blockType);
      const geo = new THREE.BoxGeometry(0.94, 0.94, 0.94);
      for (let r = 0; r < piece.shape.length; r++) {
        for (let c = 0; c < piece.shape[r].length; c++) {
          if (piece.shape[r][c]) {
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(c, -r, 0);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            piece.meshGroup.add(mesh);
          }
        }
      }
      this.gridGroup.add(piece.meshGroup);
      this.updatePiecePosition(piece);
    }
    updatePiecePosition(piece) {
      piece.meshGroup.position.set(piece.x, piece.y, 0);
      this.updateGhostPiece();
    }
    updateGhostPiece() {
      if (!this.ghostGroup) {
        this.ghostGroup = new THREE.Group();
        this.gridGroup.add(this.ghostGroup);
      }
      while (this.ghostGroup.children.length > 0) {
        this.ghostGroup.remove(this.ghostGroup.children[0]);
      }
      if (!this.currentPiece) return;
      const ghostY = this.getDropPosition();
      const ghostMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.25
      });
      const geo = new THREE.BoxGeometry(0.95, 0.95, 0.95);
      for (let r = 0; r < this.currentPiece.shape.length; r++) {
        for (let c = 0; c < this.currentPiece.shape[r].length; c++) {
          if (this.currentPiece.shape[r][c]) {
            const mesh = new THREE.Mesh(geo, ghostMat);
            mesh.position.set(this.currentPiece.x + c, ghostY - r, 0);
            this.ghostGroup.add(mesh);
          }
        }
      }
    }
    getDropPosition() {
      let y = this.currentPiece.y;
      while (!this.checkCollision(this.currentPiece.x, y - 1, this.currentPiece.shape)) {
        y--;
      }
      return y;
    }
    checkCollision(x, y, shape) {
      for (let r = 0; r < shape.length; r++) {
        for (let c = 0; c < shape[r].length; c++) {
          if (shape[r][c]) {
            const boardX = x + c;
            const boardY = y - r;
            if (boardX < 0 || boardX >= this.COLS || boardY < 0) {
              return true;
            }
            if (boardY < this.ROWS && this.grid[boardY][boardX] !== null) {
              return true;
            }
          }
        }
      }
      return false;
    }
    move(dirX) {
      if (!this.hasStarted || this.isPaused || this.isGameOver || !this.currentPiece) return;
      if (!this.checkCollision(this.currentPiece.x + dirX, this.currentPiece.y, this.currentPiece.shape)) {
        this.currentPiece.x += dirX;
        this.updatePiecePosition(this.currentPiece);
        sound.playMove();
      }
    }
    rotate() {
      if (!this.hasStarted || this.isPaused || this.isGameOver || !this.currentPiece) return;
      const originalShape = this.currentPiece.shape;
      const n = originalShape.length;
      const rotated = [];
      for (let r = 0; r < n; r++) {
        rotated[r] = [];
        for (let c = 0; c < n; c++) {
          rotated[r][c] = originalShape[n - 1 - c][r];
        }
      }
      const kicks = [0, -1, 1, -2, 2];
      let kicked = false;
      for (const kick of kicks) {
        if (!this.checkCollision(this.currentPiece.x + kick, this.currentPiece.y, rotated)) {
          this.currentPiece.x += kick;
          this.currentPiece.shape = rotated;
          this.buildPieceMesh(this.currentPiece);
          sound.playRotate();
          kicked = true;
          break;
        }
      }
    }
    softDrop() {
      if (!this.hasStarted || this.isPaused || this.isGameOver || !this.currentPiece) return;
      if (!this.checkCollision(this.currentPiece.x, this.currentPiece.y - 1, this.currentPiece.shape)) {
        this.currentPiece.y--;
        this.score += 1;
        this.updatePiecePosition(this.currentPiece);
        this.updateHud();
      } else {
        this.lockPiece();
      }
    }
    hardDrop() {
      if (!this.hasStarted || this.isPaused || this.isGameOver || !this.currentPiece) return;
      const dropY = this.getDropPosition();
      const droppedDistance = this.currentPiece.y - dropY;
      this.currentPiece.y = dropY;
      this.score += droppedDistance * 2;
      if (this.activeChampion.applyDropBonus) {
        this.score += this.activeChampion.applyDropBonus();
      }
      this.triggerScreenShake(0.3);
      sound.playDrop();
      this.lockPiece();
    }
    hold() {
      if (!this.hasStarted || !this.canHold || this.isPaused || this.isGameOver || !this.currentPiece) return;
      this.gridGroup.remove(this.currentPiece.meshGroup);
      if (!this.heldPiece) {
        this.heldPiece = {
          key: this.currentPiece.key,
          shape: TETROMINOES[this.currentPiece.key].shape.map(r => [...r]),
          blockType: this.currentPiece.blockType
        };
        this.currentPiece = this.nextPiece;
        this.nextPiece = this.generatePiece();
      } else {
        const temp = {
          key: this.currentPiece.key,
          shape: TETROMINOES[this.currentPiece.key].shape.map(r => [...r]),
          blockType: this.currentPiece.blockType
        };
        this.currentPiece = {
          key: this.heldPiece.key,
          shape: this.heldPiece.shape.map(r => [...r]),
          blockType: this.heldPiece.blockType,
          x: Math.floor((this.COLS - this.heldPiece.shape[0].length) / 2),
          y: this.ROWS - this.heldPiece.shape.length,
          meshGroup: new THREE.Group()
        };
        this.buildPieceMesh(this.currentPiece);
        this.heldPiece = temp;
      }
      this.canHold = false;
      this.updateMiniPreview('hold');
      this.updateMiniPreview('next');
      sound.playRotate();
    }
    lockPiece() {
      let pieceBlockPoints = 0;
      const blockDef = BLOCK_TYPES[this.currentPiece.blockType] || BLOCK_TYPES.stone;
      let ptsPerBlock = blockDef.pts;
      if (this.activeChampion.applyScoreBonus) {
        ptsPerBlock = this.activeChampion.applyScoreBonus(this.currentPiece.blockType, ptsPerBlock);
      }
      const shape = this.currentPiece.shape;
      for (let r = 0; r < shape.length; r++) {
        for (let c = 0; c < shape[r].length; c++) {
          if (shape[r][c]) {
            const boardX = this.currentPiece.x + c;
            const boardY = this.currentPiece.y - r;
            if (boardY >= this.ROWS) {
              this.triggerGameOver();
              return;
            }
            const mat = getBlockMaterial(this.currentPiece.blockType);
            const geo = new THREE.BoxGeometry(0.94, 0.94, 0.94);
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(boardX, boardY, 0);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            this.gridGroup.add(mesh);
            this.grid[boardY][boardX] = {
              blockType: this.currentPiece.blockType,
              mesh: mesh
            };
            pieceBlockPoints += ptsPerBlock;
            this.spawnPlacementParticles(boardX, boardY, this.currentPiece.blockType);
          }
        }
      }
      this.score += pieceBlockPoints;
      this.addBeaconEnergy(8);
      this.gridGroup.remove(this.currentPiece.meshGroup);
      let highestRow = 0;
      for (let r = this.ROWS - 1; r >= 0; r--) {
        if (this.grid[r].some(cell => cell !== null)) {
          highestRow = r;
          break;
        }
      }
      if (highestRow >= 16) {
        this.postFamilyCheer('danger');
      }
      this.clearLines();
      this.currentPiece = this.nextPiece;
      this.nextPiece = this.generatePiece();
      this.canHold = true;
      if (this.checkCollision(this.currentPiece.x, this.currentPiece.y, this.currentPiece.shape)) {
        this.triggerGameOver();
        return;
      }
      this.updateMiniPreview('next');
      this.checkBiomeProgression();
      this.updateHud();
    }
    clearLines() {
      const fullRows = [];
      for (let r = 0; r < this.ROWS; r++) {
        if (this.grid[r].every(cell => cell !== null)) {
          fullRows.push(r);
        }
      }
      if (fullRows.length === 0) return;
      const numLines = fullRows.length;
      this.lines += numLines;
      let baseLineScore = 0;
      if (numLines === 1) baseLineScore = 100 * this.level;
      else if (numLines === 2) baseLineScore = 300 * this.level;
      else if (numLines === 3) baseLineScore = 600 * this.level;
      else if (numLines >= 4) baseLineScore = 1200 * this.level;
      if (this.activeChampion.applyLineBonus) {
        baseLineScore = this.activeChampion.applyLineBonus(numLines, baseLineScore);
      }
      this.score += baseLineScore;
      this.addBeaconEnergy(numLines * 15);
      fullRows.forEach(rowIdx => {
        for (let col = 0; col < this.COLS; col++) {
          const cell = this.grid[rowIdx][col];
          if (cell) {
            this.spawnExplosionParticles(col, rowIdx, cell.blockType);
            this.gridGroup.remove(cell.mesh);
          }
        }
      });
      for (let i = fullRows.length - 1; i >= 0; i--) {
        const clearedY = fullRows[i];
        for (let y = clearedY; y < this.ROWS - 1; y++) {
          this.grid[y] = this.grid[y + 1];
          for (let x = 0; x < this.COLS; x++) {
            if (this.grid[y][x]) {
              this.grid[y][x].mesh.position.y = y;
            }
          }
        }
        this.grid[this.ROWS - 1] = new Array(this.COLS).fill(null);
      }
      sound.playLineClear(numLines);
      this.triggerScreenShake(numLines * 0.15);
      if (this.dragonActive) {
        let dragonDmg = 10;
        if (numLines === 2) dragonDmg = 25;
        if (numLines === 3) dragonDmg = 45;
        if (numLines >= 4) dragonDmg = 80;
        this.damageDragon(dragonDmg);
      }
      if (numLines >= 4) {
        this.showComboAlert('TETRIS!', `+${baseLineScore} PTS • MASSIVE CLEAR!`);
        this.postFamilyCheer('tetris');
      } else if (numLines >= 2) {
        this.showComboAlert(numLines === 2 ? 'DOUBLE CLEAR!' : 'TRIPLE CLEAR!', `+${baseLineScore} PTS!`);
      }
    }
    damageDragon(dmg) {
      if (this.dragonDefeated) return;
      this.dragonHp = Math.max(0, this.dragonHp - dmg);
      this.updateDragonHealthBar();
      sound.playDragonRoar();
      if (this.dragonMesh) {
        this.dragonMesh.traverse(child => {
          if (child.isMesh && child.material) {
            child.material.color.setHex(0xff0000);
            setTimeout(() => child.material && child.material.color.setHex(0x141414), 200);
          }
        });
      }
      if (this.dragonHp <= 0) {
        this.defeatDragon();
      }
    }
    defeatDragon() {
      this.dragonDefeated = true;
      this.score += 5000; 
      sound.playLevelUp();
      this.postFamilyCheer('victory');
      if (this.dragonMesh) {
        let riseStep = 0;
        const deathAnim = () => {
          riseStep++;
          this.dragonMesh.position.y += 0.2;
          this.dragonMesh.rotation.y += 0.05;
          if (riseStep < 40) {
            requestAnimationFrame(deathAnim);
          } else {
            this.scene.remove(this.dragonMesh);
            this.showVictoryModal();
          }
        };
        deathAnim();
      } else {
        this.showVictoryModal();
      }
    }
    checkBiomeProgression() {
      for (let i = BIOMES.length - 1; i >= 0; i--) {
        if (this.score >= BIOMES[i].scoreThreshold) {
          if (this.currentBiome.level !== BIOMES[i].level) {
            this.currentBiome = BIOMES[i];
            this.level = this.currentBiome.level;
            sound.playLevelUp();
            this.buildBiomeScenery();
            this.showComboAlert(`ENTERED ${this.currentBiome.name.toUpperCase()}!`, 'The expedition advances!');
            if (this.level === 5) {
              this.postFamilyCheer('dragonIntro');
            } else {
              this.postFamilyCheer('biomeUp');
            }
          }
          break;
        }
      }
    }
    addBeaconEnergy(amount) {
      if (this.activeChampion.id === 'liam') {
        amount = Math.round(amount * 1.3);
      }
      this.beaconEnergy = Math.min(100, this.beaconEnergy + amount);
      this.updateBeaconUI();
    }
    activateHearthBeacon() {
      if (!this.hasStarted || this.beaconEnergy < 100 || this.isPaused || this.isGameOver) return;
      this.beaconEnergy = 0;
      this.updateBeaconUI();
      sound.playBeacon();
      for (let col = 0; col < this.COLS; col++) {
        if (this.grid[0][col]) {
          this.spawnExplosionParticles(col, 0, 'gold');
          this.gridGroup.remove(this.grid[0][col].mesh);
          this.grid[0][col] = null;
        }
      }
      for (let y = 0; y < this.ROWS - 1; y++) {
        this.grid[y] = this.grid[y + 1];
        for (let x = 0; x < this.COLS; x++) {
          if (this.grid[y][x]) {
            this.grid[y][x].mesh.position.y = y;
          }
        }
      }
      this.grid[this.ROWS - 1] = new Array(this.COLS).fill(null);
      this.score += 500;
      this.showComboAlert('HEARTH BEACON ACTIVATED!', 'The bottom line has been cleared with love!');
      this.postFamilyCheer('beacon');
      this.triggerScreenShake(0.4);
    }
    spawnPlacementParticles(x, y, blockType) {
      const col = BLOCK_TYPES[blockType]?.color || '#888888';
      const count = 4;
      for (let i = 0; i < count; i++) {
        const p = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, 0.12, 0.12),
          new THREE.MeshBasicMaterial({ color: col })
        );
        p.position.set(x + (Math.random() - 0.5) * 0.8, y - 0.4, 0.1);
        this.scene.add(p);
        this.particles.push({
          mesh: p,
          vel: new THREE.Vector3((Math.random() - 0.5) * 0.08, Math.random() * 0.08, (Math.random() - 0.5) * 0.08),
          life: 1.0,
          decay: 0.06
        });
      }
    }
    spawnExplosionParticles(x, y, blockType) {
      const col = BLOCK_TYPES[blockType]?.color || '#ffffff';
      const count = 10;
      for (let i = 0; i < count; i++) {
        const p = new THREE.Mesh(
          new THREE.BoxGeometry(0.18, 0.18, 0.18),
          new THREE.MeshBasicMaterial({ color: col })
        );
        p.position.set(x, y, 0);
        this.scene.add(p);
        this.particles.push({
          mesh: p,
          vel: new THREE.Vector3(
            (Math.random() - 0.5) * 0.25,
            (Math.random() - 0.2) * 0.3,
            (Math.random() - 0.5) * 0.25
          ),
          life: 1.0,
          decay: 0.03
        });
      }
    }
    updateParticles() {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.life -= p.decay;
        p.mesh.position.add(p.vel);
        p.vel.y -= 0.008; 
        p.mesh.scale.multiplyScalar(0.96);
        if (p.life <= 0) {
          this.scene.remove(p.mesh);
          this.particles.splice(i, 1);
        }
      }
    }
    triggerScreenShake(intensity) {
      this.shakeIntensity = Math.min(1.0, this.shakeIntensity + intensity);
    }
    showComboAlert(title, sub) {
      this.comboTitle.textContent = title;
      this.comboSub.textContent = sub;
      this.hudComboAlert.classList.add('show');
      setTimeout(() => {
        this.hudComboAlert.classList.remove('show');
      }, 1800);
    }
    postFamilyCheer(eventType) {
      const quotes = FAMILY_QUOTES[eventType];
      if (!quotes || quotes.length === 0) return;
      const pick = quotes[Math.floor(Math.random() * quotes.length)];
      const champ = Object.values(CHAMPIONS).find(c => c.shortName === pick.who) || this.activeChampion;
      const item = document.createElement('div');
      item.className = 'cheer-msg';
      item.innerHTML = `
        <img class="cheer-avatar" src="${champ.avatar}" alt="${champ.shortName}"/>
        <div class="cheer-content">
          <span class="cheer-author">${champ.shortName}</span>
          <span class="cheer-body">${pick.text}</span>
        </div>
      `;
      this.familyStream.prepend(item);
      while (this.familyStream.children.length > 6) {
        this.familyStream.removeChild(this.familyStream.lastChild);
      }
    }
    updateHud() {
      this.statScore.textContent = this.score.toLocaleString();
      this.statLines.textContent = this.lines;
      this.statLevel.textContent = this.level;
      this.hudScoreCounter.textContent = this.score.toLocaleString();
      if (this.score > this.highScore) {
        this.highScore = this.score;
        this.saveHighScore();
      }
      this.statHighScore.textContent = this.highScore.toLocaleString();
      this.biomeNameText.textContent = this.currentBiome.name;
      this.biomeIconWrap.innerHTML = `<span class="material-symbols-outlined" style="font-size: 18px;">${this.currentBiome.icon}</span>`;
      this.biomeLevelLabel.textContent = `Biome Tier ${this.currentBiome.level} of 5`;
      if (this.currentBiome.level === 5) {
        this.biomePtsNext.textContent = 'Boss Battle Active!';
        this.biomeProgressFill.style.width = '100%';
        this.bossBarWrap.classList.add('active');
        this.updateDragonHealthBar();
      } else {
        const currBase = this.currentBiome.scoreThreshold;
        const nextBase = this.currentBiome.nextThreshold;
        const progress = Math.min(100, Math.max(0, ((this.score - currBase) / (nextBase - currBase)) * 100));
        this.biomeProgressFill.style.width = `${progress}%`;
        const needed = Math.max(0, nextBase - this.score);
        this.biomePtsNext.textContent = `${needed.toLocaleString()} pts to ${this.currentBiome.nextName}`;
        this.bossBarWrap.classList.remove('active');
      }
      const speedMult = (800 / this.currentBiome.speed).toFixed(1);
      this.hudSpeedVal.textContent = `${speedMult}x`;
    }
    updateDragonHealthBar() {
      const pct = Math.max(0, (this.dragonHp / this.dragonMaxHp) * 100);
      this.bossHealthFill.style.width = `${pct}%`;
      this.bossHpText.textContent = `${this.dragonHp} / ${this.dragonMaxHp} HP`;
    }
    updateBeaconUI() {
      this.beaconBarFill.style.width = `${this.beaconEnergy}%`;
      this.beaconPctText.textContent = `${this.beaconEnergy}%`;
      if (this.beaconEnergy >= 100) {
        this.activateBeaconBtn.disabled = false;
        this.activateBeaconBtn.classList.add('ready');
      } else {
        this.activateBeaconBtn.disabled = true;
        this.activateBeaconBtn.classList.remove('ready');
      }
    }
    triggerGameOver() {
      this.isGameOver = true;
      sound.playGameOver();
      document.getElementById('modal-final-score').textContent = this.score.toLocaleString();
      document.getElementById('modal-final-biome').textContent = this.currentBiome.name;
      document.getElementById('modal-final-lines').textContent = this.lines;
      document.getElementById('modal-final-champ').textContent = this.activeChampion.name;
      this.saveLeaderboardEntry();
      this.gameoverModal.classList.add('open');
    }
    showVictoryModal() {
      document.getElementById('victory-final-score').textContent = this.score.toLocaleString();
      this.saveLeaderboardEntry();
      this.victoryModal.classList.add('open');
    }
    initLeaderboard() {
      const defaultScores = [
        { champ: 'Liam', biome: 'The End', score: 18400 },
        { champ: 'Tariq', biome: 'The Nether', score: 14200 },
        { champ: 'Elena', biome: 'Deepslate Caverns', score: 11500 },
        { champ: 'Maya', biome: 'Deepslate Caverns', score: 9800 },
        { champ: 'Tariq', biome: 'Desert & Badlands', score: 6200 }
      ];
      const stored = localStorage.getItem('aqaarib_hearthcraft_scores');
      if (stored) {
        try {
          this.leaderboard = JSON.parse(stored);
        } catch (e) {
          this.leaderboard = defaultScores;
        }
      } else {
        this.leaderboard = defaultScores;
      }
      this.renderLeaderboard();
    }
    renderLeaderboard() {
      const tbody = document.getElementById('leaderboard-body');
      tbody.innerHTML = '';
      this.leaderboard.slice(0, 5).forEach((item, idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="rank-cell">${idx + 1}</td>
          <td><strong>${item.champ}</strong></td>
          <td><span style="font-size: 0.75rem; color: var(--outline);">${item.biome}</span></td>
          <td><strong>${item.score.toLocaleString()}</strong></td>
        `;
        tbody.appendChild(row);
      });
      if (this.leaderboard.length > 0) {
        this.highScore = this.leaderboard[0].score;
        this.statHighScore.textContent = this.highScore.toLocaleString();
      }
    }
    saveLeaderboardEntry() {
      this.leaderboard.push({
        champ: this.activeChampion.shortName,
        biome: this.currentBiome.name,
        score: this.score
      });
      this.leaderboard.sort((a, b) => b.score - a.score);
      this.leaderboard = this.leaderboard.slice(0, 10);
      localStorage.setItem('aqaarib_hearthcraft_scores', JSON.stringify(this.leaderboard));
      this.renderLeaderboard();
    }
    saveHighScore() {
      localStorage.setItem('aqaarib_hearthcraft_highscore', this.highScore);
    }
    loadSavedState() {
      const hs = localStorage.getItem('aqaarib_hearthcraft_highscore');
      if (hs) {
        this.highScore = parseInt(hs, 10) || 18400;
        this.statHighScore.textContent = this.highScore.toLocaleString();
      }
    }
    initChampionPicker() {
      const list = document.getElementById('champ-picker-list');
      list.innerHTML = '';
      Object.values(CHAMPIONS).forEach(c => {
        const card = document.createElement('div');
        card.className = `champ-choice-card ${c.id === this.activeChampion.id ? 'selected' : ''}`;
        card.dataset.id = c.id;
        card.innerHTML = `
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <img src="${c.avatar}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary);" alt="${c.shortName}"/>
            <div>
              <div style="font-weight: 700; font-size: 0.9rem;">${c.name}</div>
              <div style="font-size: 0.75rem; color: var(--outline);">${c.title} • ${c.role}</div>
            </div>
          </div>
          <p style="font-size: 0.75rem; color: var(--on-surface-variant); line-height: 1.35; margin: 0;">${c.passiveDesc}</p>
        `;
        card.addEventListener('click', () => {
          document.querySelectorAll('.champ-choice-card').forEach(el => el.classList.remove('selected'));
          card.classList.add('selected');
          this.tempSelectedChampion = c;
        });
        list.appendChild(card);
      });
      this.champPillBtn.addEventListener('click', () => {
        this.promptChampionPicker();
      });
      document.getElementById('champ-confirm-btn').addEventListener('click', () => {
        if (this.tempSelectedChampion) {
          this.setChampion(this.tempSelectedChampion);
        }
        this.championModal.classList.remove('open');
        if (!this.hasStarted) {
          this.startNewGame();
        }
      });
      document.getElementById('champ-cancel-btn').addEventListener('click', () => {
        this.championModal.classList.remove('open');
      });
    }
    promptChampionPicker() {
      this.tempSelectedChampion = this.activeChampion;
      this.championModal.classList.add('open');
    }
    startNewGame() {
      this.hasStarted = true;
      this.isPaused = false;
      if (this.gameStartOverlay) {
        this.gameStartOverlay.classList.add('hidden');
      }
      const pauseIcon = document.getElementById('pause-icon');
      if (pauseIcon) pauseIcon.textContent = 'pause';
      const pauseLabel = document.getElementById('pause-label');
      if (pauseLabel) pauseLabel.textContent = 'Pause';
      this.reset();
    }
    setChampion(champ) {
      this.activeChampion = champ;
      this.champMiniImg.src = champ.avatar;
      this.champMiniName.textContent = `${champ.shortName} (${champ.title.split(' ')[1] || 'Champ'})`;
      this.champCardImg.src = champ.avatar;
      this.champCardName.textContent = champ.name;
      this.champCardRole.textContent = champ.title;
      this.champCardDesc.innerHTML = `<strong>Passive Gift</strong><br/>${champ.passiveDesc}`;
    }
    initControls() {
      window.addEventListener('keydown', e => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        switch (e.code) {
          case 'ArrowLeft':
          case 'KeyA':
            this.move(-1);
            break;
          case 'ArrowRight':
          case 'KeyD':
            this.move(1);
            break;
          case 'ArrowDown':
          case 'KeyS':
            this.softDrop();
            break;
          case 'ArrowUp':
          case 'KeyW':
          case 'KeyX':
            this.rotate();
            break;
          case 'Space':
            e.preventDefault();
            this.hardDrop();
            break;
          case 'KeyC':
          case 'ShiftLeft':
          case 'ShiftRight':
            this.hold();
            break;
          case 'KeyF':
            this.activateHearthBeacon();
            break;
          case 'KeyP':
          case 'Escape':
            this.togglePause();
            break;
        }
      });
      document.getElementById('btn-touch-left')?.addEventListener('click', () => this.move(-1));
      document.getElementById('btn-touch-right')?.addEventListener('click', () => this.move(1));
      document.getElementById('btn-touch-rot')?.addEventListener('click', () => this.rotate());
      document.getElementById('btn-touch-down')?.addEventListener('click', () => this.softDrop());
      document.getElementById('btn-touch-drop')?.addEventListener('click', () => this.hardDrop());
      document.getElementById('btn-touch-hold')?.addEventListener('click', () => this.hold());
      this.activateBeaconBtn.addEventListener('click', () => this.activateHearthBeacon());
      const camIso = document.getElementById('cam-iso');
      const camFront = document.getElementById('cam-front');
      const camCin = document.getElementById('cam-cinematic');
      camIso.addEventListener('click', () => {
        [camIso, camFront, camCin].forEach(b => b.classList.remove('active'));
        camIso.classList.add('active');
        this.setCameraPosition('iso');
      });
      camFront.addEventListener('click', () => {
        [camIso, camFront, camCin].forEach(b => b.classList.remove('active'));
        camFront.classList.add('active');
        this.setCameraPosition('front');
      });
      camCin.addEventListener('click', () => {
        [camIso, camFront, camCin].forEach(b => b.classList.remove('active'));
        camCin.classList.add('active');
        this.setCameraPosition('cinematic');
      });
      this.btnStartGame?.addEventListener('click', () => {
        this.promptChampionPicker();
      });
      this.pauseBtn.addEventListener('click', () => this.togglePause());
      this.restartBtn.addEventListener('click', () => {
        if (!this.hasStarted) {
          this.promptChampionPicker();
        } else {
          this.reset();
        }
      });
      document.getElementById('modal-retry-btn')?.addEventListener('click', () => {
        this.gameoverModal.classList.remove('open');
        this.promptChampionPicker();
      });
      document.getElementById('victory-continue-btn')?.addEventListener('click', () => {
        this.victoryModal.classList.remove('open');
        this.dragonHp = 150;
        this.dragonMaxHp = 150;
        this.dragonDefeated = false;
        this.buildEnderDragon();
      });
      document.getElementById('victory-newgame-btn')?.addEventListener('click', () => {
        this.victoryModal.classList.remove('open');
        this.promptChampionPicker();
      });
      this.soundToggleBtn.addEventListener('click', () => {
        sound.enabled = !sound.enabled;
        const icon = document.getElementById('sound-icon');
        icon.textContent = sound.enabled ? 'volume_up' : 'volume_off';
      });
      this.initThemeSync();
      const profileBtn = document.getElementById('profile-avatar-btn');
      const profileModal = document.getElementById('profile-modal-backdrop');
      const profileClose = document.getElementById('profile-modal-close');
      if (profileBtn && profileModal) {
        profileBtn.addEventListener('click', () => profileModal.classList.add('open'));
        profileClose?.addEventListener('click', () => profileModal.classList.remove('open'));
        profileModal.addEventListener('click', e => {
          if (e.target === profileModal) profileModal.classList.remove('open');
        });
      }
    }
    togglePause() {
      if (!this.hasStarted) return;
      this.isPaused = !this.isPaused;
      document.getElementById('pause-icon').textContent = this.isPaused ? 'play_arrow' : 'pause';
      document.getElementById('pause-label').textContent = this.isPaused ? 'Resume' : 'Pause';
    }
    initThemeSync() {
      const savedTheme = localStorage.getItem('aqaarib_theme');
      const isDark = savedTheme === 'dark';
      this.applyTheme(isDark);
      this.themeToggleBtn.addEventListener('click', () => {
        const currentlyDark = document.body.classList.contains('dark') || document.documentElement.classList.contains('dark');
        const nextDark = !currentlyDark;
        this.applyTheme(nextDark);
        localStorage.setItem('aqaarib_theme', nextDark ? 'dark' : 'light');
      });
    }
    applyTheme(isDark) {
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
      if (icon) icon.textContent = isDark ? 'light_mode' : 'bedtime';
    }
    animate(time) {
      requestAnimationFrame(this.animate);
      const deltaTime = time - this.lastTime;
      this.lastTime = time;
      if (this.hasStarted && !this.isPaused && !this.isGameOver) {
        this.dropCounter += deltaTime;
        if (this.dropCounter > this.currentBiome.speed) {
          this.dropCounter = 0;
          this.softDrop();
        }
      }
      this.updateParticles();
      if (this.shakeIntensity > 0) {
        this.camera.position.x = this.targetCamPos.x + (Math.random() - 0.5) * this.shakeIntensity;
        this.camera.position.y = this.targetCamPos.y + (Math.random() - 0.5) * this.shakeIntensity;
        this.shakeIntensity = Math.max(0, this.shakeIntensity - 0.02);
      } else {
        this.camera.position.lerp(this.targetCamPos, 0.08);
      }
      if (this.crystals && this.crystals.length > 0) {
        this.crystals.forEach(c => {
          c.rotation.y += 0.02;
          c.rotation.x += 0.01;
        });
      }
      if (this.dragonMesh && this.dragonActive && !this.dragonDefeated) {
        const t = time * 0.0015;
        this.dragonMesh.position.x = 4.5 + Math.sin(t) * 9;
        this.dragonMesh.position.y = 15 + Math.cos(t * 1.5) * 3;
        this.dragonMesh.position.z = -14 + Math.sin(t * 2) * 4;
        this.dragonMesh.rotation.y = Math.cos(t) * 0.6 + Math.PI;
        const flap = Math.sin(time * 0.008) * 0.5;
        if (this.dragonLeftWing) this.dragonLeftWing.rotation.z = flap;
        if (this.dragonRightWing) this.dragonRightWing.rotation.z = -flap;
      }
      this.renderer.render(this.scene, this.camera);
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    window.hearthCraft = new HearthCraftGame();
  });
})();
