(function() {
  const dictionary = {
    en: {
      home: 'Home',
      hub: 'Hub',
      rhythm: 'Rhythm',
      moments: 'Moments',
      vault: 'Vault',
      hearthCraft: 'HearthCraft',
      hearthActive: 'Hearth Active',
      cmdK: 'Cmd K',
      selectLanguage: 'Select Language',
      languageSwitched: 'Language switched to English',
      chimeSent: 'Hearth chime sent to Tariq, Elena, Maya & Liam',
      beaconSent: 'Heart pulse beacon received by all devices',
      domesticSanctuary: 'Domestic Sanctuary',
      heroHeadline: 'Domestic rhythms, shared memory & collective living.',
      heroSubhead: 'A sacred, private operating sanctuary where family tasks, emotional frequencies, and ancestral archives interlock without friction.',
      sendChimePing: 'Send Chime Ping',
      syncHearthBeacon: 'Sync Hearth Beacon',
      activeNodes: '4 Active Nodes',
      obsidianCore: 'Obsidian Core Shield',
      zeroFriction: 'Zero Friction',
      livingMemosCardTitle: 'Living Memos & Vault',
      livingMemosCardDesc: 'Real-time task synchronization, persistent spatial grocery pantry, and auto-shuffled family Polaroid vault.',
      solarArcCardTitle: 'Solar Arc Cadence',
      solarArcCardDesc: 'Daily domestic orbits showing family proximity, chore cadence, and resonant harmonic cycles.',
      memoryMapCardTitle: 'Memory Cartography',
      memoryMapCardDesc: 'Geographic and chronological journey pins across family milestones, vacations, and ancestral roots.',
      cypherCardTitle: 'Cryptographic Cypher',
      cypherCardDesc: 'Zero-knowledge encrypted family ledger, confidential documents, and emergency health protocols.',
      presenceKinConnected: '4 / 4 kin connected to hearth beacon',
      presenceLiveAbuDhabi: 'Live in Abu Dhabi',
      presenceAlRashid: 'Al-Rashid Clan',
      presenceSync: 'Synchronized',
      householdChores: 'Household Chores',
      groceryPantry: 'Grocery Pantry',
      vaultMemories: 'The Vault Memories',
      addMemo: 'Add Memo',
      addChore: 'Add Chore',
      addGrocery: 'Add Item',
      shuffle: 'Shuffle',
      solarArcTitle: 'Solar Arc & Harmonious Cadence',
      interactiveOrbit: 'Interactive Planetary Orbit',
      memoryCartographyTitle: 'Memory Cartography & Moments',
      quoteTitle: 'Inspiring Hearth Reflection',
      vaultTitle: 'Procedural Cryptography Vault',
      vaultSubtitle: 'Decentralized family ledger protected by dynamic obsidian cipher matrices.',
      rotateMesh: 'Accelerate Core',
      emergencyLockdown: 'Emergency Lockdown',
      startGame: 'Start Game',
      chooseChampion: 'Choose Your Champion',
      confirmChampion: 'Confirm Champion',
      close: 'Close',
      pause: 'Pause',
      resume: 'Resume',
      restart: 'Restart',
      score: 'Score',
      highScore: 'High Score',
      linesCleared: 'Lines Cleared',
      biomeTier: 'Biome Tier',
      nextPiece: 'Next Piece'
    },
    ar: {
      home: 'الرئيسية',
      hub: 'المحور',
      rhythm: 'الإيقاع',
      moments: 'اللحظات',
      vault: 'الخزينة',
      hearthCraft: 'هيرث كرافت',
      hearthActive: 'الموقد نشط',
      cmdK: 'بحث K',
      selectLanguage: 'اختر اللغة',
      languageSwitched: 'تم تغيير اللغة إلى العربية',
      chimeSent: 'تم إرسال رنين الموقد إلى طارق، وإلينا، ومايا، وليام',
      beaconSent: 'تم استقبال إشارة نبض القلب على جميع الأجهزة',
      domesticSanctuary: 'ملاذ عائلي',
      heroHeadline: 'إيقاعات عائلية، وذكريات مشتركة وحياة مترابطة.',
      heroSubhead: 'ملاذ عائلي خاص ومقدس تلتقي فيه مهام الأسرة، والترددات العاطفية، والأرشيف العائلي بكل انسيابية وسلاسة.',
      sendChimePing: 'إرسال رنين تنبيه',
      syncHearthBeacon: 'مزامنة منارة الموقد',
      activeNodes: '4 أجهزة متصلة',
      obsidianCore: 'درع النواة البركانية',
      zeroFriction: 'انسيابية كاملة',
      livingMemosCardTitle: 'المذكرات الحية والخزينة',
      livingMemosCardDesc: 'مزامنة فورية للمهام، وقائمة مؤن تفاعلية، وخزينة بولارويد للذكريات العائلية متجددة تلقائيا.',
      solarArcCardTitle: 'إيقاع القوس الشمسي',
      solarArcCardDesc: 'مدارات يومية توضح تقارب العائلة، وتوزيع المهام، والدورات الإيقاعية المتناغمة.',
      memoryMapCardTitle: 'خرائط الذكريات',
      memoryMapCardDesc: 'محطات جغرافية وزمنية لأهم المناسبات العائلية، والرحلات، والجذور التراثية.',
      cypherCardTitle: 'التشفير الرقمي',
      cypherCardDesc: 'سجل عائلي مشفر، ووثائق سرية، وبروتوكولات الطوارئ الصحية المعتمدة.',
      presenceKinConnected: '4 من 4 أفراد متصلون بمنارة الموقد',
      presenceLiveAbuDhabi: 'مباشرة من أبوظبي',
      presenceAlRashid: 'عائلة الرشيد',
      presenceSync: 'متزامن',
      householdChores: 'المهام المنزلية',
      groceryPantry: 'قائمة المؤن',
      vaultMemories: 'ذكريات الخزينة',
      addMemo: 'إضافة مذكرة',
      addChore: 'إضافة مهمة',
      addGrocery: 'إضافة غرض',
      shuffle: 'خلط الذكريات',
      solarArcTitle: 'القوس الشمسي والإيقاع المتناغم',
      interactiveOrbit: 'المدار الفلكي التفاعلي',
      memoryCartographyTitle: 'خرائط الذكريات واللحظات',
      quoteTitle: 'حكمة عائلية ملهمة',
      vaultTitle: 'خزينة التشفير الإجرائية',
      vaultSubtitle: 'سجل عائلي لا مركزي محمي بمصفوفات التشفير البركانية الديناميكية.',
      rotateMesh: 'تسريع النواة',
      emergencyLockdown: 'إغلاق الطوارئ',
      startGame: 'ابدأ اللعبة',
      chooseChampion: 'اختر بطلك',
      confirmChampion: 'تأكيد البطل',
      close: 'إغلاق',
      pause: 'إيقاف مؤقت',
      resume: 'استئناف',
      restart: 'إعادة البدء',
      score: 'النقاط',
      highScore: 'أعلى نتيجة',
      linesCleared: 'الأسطر المكتملة',
      biomeTier: 'مستوى البيئة',
      nextPiece: 'القطعة التالية'
    },
    es: {
      home: 'Inicio',
      hub: 'Centro',
      rhythm: 'Ritmo',
      moments: 'Momentos',
      vault: 'Bóveda',
      hearthCraft: 'HearthCraft',
      hearthActive: 'Hogar Activo',
      cmdK: 'Comando K',
      selectLanguage: 'Seleccionar idioma',
      languageSwitched: 'Idioma cambiado a Español',
      chimeSent: 'Timbre enviado a Tariq, Elena, Maya y Liam',
      beaconSent: 'Baliza del corazón recibida en todos los dispositivos',
      domesticSanctuary: 'Santuario Doméstico',
      heroHeadline: 'Ritmos domésticos, memoria compartida y vida colectiva.',
      heroSubhead: 'Un santuario operativo sagrado y privado donde las tareas familiares, frecuencias emocionales y archivos ancestrales se entrelazan sin fricción.',
      sendChimePing: 'Enviar Timbre',
      syncHearthBeacon: 'Sincronizar Baliza',
      activeNodes: '4 Nodos Activos',
      obsidianCore: 'Núcleo de Obsidiana',
      zeroFriction: 'Cero Fricción',
      livingMemosCardTitle: 'Notas Vivas y Bóveda',
      livingMemosCardDesc: 'Sincronización de tareas en tiempo real, despensa espacial y bóveda Polaroid de barajado automático.',
      solarArcCardTitle: 'Cadencia de Arco Solar',
      solarArcCardDesc: 'Órbitas domésticas diarias que muestran la proximidad familiar y ciclos armónicos resonantes.',
      memoryMapCardTitle: 'Cartografía de Recuerdos',
      memoryMapCardDesc: 'Rutas geográficas y cronológicas a través de hitos familiares, vacaciones y raíces ancestrales.',
      cypherCardTitle: 'Cifrado Criptográfico',
      cypherCardDesc: 'Libro familiar cifrado con conocimiento cero, documentos confidenciales y protocolos médicos.',
      presenceKinConnected: '4 / 4 familiares conectados a la baliza',
      presenceLiveAbuDhabi: 'En directo en Abu Dhabi',
      presenceAlRashid: 'Clan Al-Rashid',
      presenceSync: 'Sincronizado',
      householdChores: 'Tareas del Hogar',
      groceryPantry: 'Despensa y Compras',
      vaultMemories: 'Recuerdos de la Bóveda',
      addMemo: 'Añadir Nota',
      addChore: 'Añadir Tarea',
      addGrocery: 'Añadir Artículo',
      shuffle: 'Barajar',
      solarArcTitle: 'Arco Solar y Cadencia Armónica',
      interactiveOrbit: 'Órbita Planetaria Interactiva',
      memoryCartographyTitle: 'Cartografía de Recuerdos y Momentos',
      quoteTitle: 'Reflexión Inspiradora del Hogar',
      vaultTitle: 'Bóveda Criptográfica Procesal',
      vaultSubtitle: 'Registro familiar descentralizado protegido por matrices de cifrado de obsidiana.',
      rotateMesh: 'Acelerar Núcleo',
      emergencyLockdown: 'Bloqueo de Emergencia',
      startGame: 'Iniciar Juego',
      chooseChampion: 'Elige tu Campeón',
      confirmChampion: 'Confirmar Campeón',
      close: 'Cerrar',
      pause: 'Pausar',
      resume: 'Reanudar',
      restart: 'Reiniciar',
      score: 'Puntuación',
      highScore: 'Récord',
      linesCleared: 'Líneas Limpiadas',
      biomeTier: 'Nivel de Bioma',
      nextPiece: 'Siguiente Pieza'
    },
    fr: {
      home: 'Accueil',
      hub: 'Hub',
      rhythm: 'Rythme',
      moments: 'Moments',
      vault: 'Coffre',
      hearthCraft: 'HearthCraft',
      hearthActive: 'Foyer Actif',
      cmdK: 'Cmd K',
      selectLanguage: 'Choisir la langue',
      languageSwitched: 'Langue changée en Français',
      chimeSent: 'Carillon envoyé à Tariq, Elena, Maya et Liam',
      beaconSent: 'Signal de pulsation reçu par tous les appareils',
      domesticSanctuary: 'Sanctuaire Domestique',
      heroHeadline: 'Rythmes familiaux, mémoire partagée et vie collective.',
      heroSubhead: 'Un sanctuaire intime et sacré où les devoirs familiaux, les résonances affectives et les archives ancestrales fusionnent sans heurts.',
      sendChimePing: 'Envoyer Carillon',
      syncHearthBeacon: 'Synchroniser Balise',
      activeNodes: '4 Nœuds Actifs',
      obsidianCore: 'Bouclier d Obsidienne',
      zeroFriction: 'Zéro Friction',
      livingMemosCardTitle: 'Mémos Vivants & Coffre',
      livingMemosCardDesc: 'Synchronisation des tâches en temps réel, garde-manger spatial et coffre Polaroid réorganisé automatiquement.',
      solarArcCardTitle: 'Cadence de l Arc Solaire',
      solarArcCardDesc: 'Orbites domestiques quotidiennes reflétant la proximité familiale et les cycles harmoniques.',
      memoryMapCardTitle: 'Cartographie Mémorielle',
      memoryMapCardDesc: 'Points d étape géographiques et chronologiques des souvenirs de voyage et des racines familiales.',
      cypherCardTitle: 'Chiffrement Cryptographique',
      cypherCardDesc: 'Registre familial chiffré sans divulgation de connaissance, documents confidentiels et protocoles d urgence.',
      presenceKinConnected: '4 / 4 proches connectés à la balise',
      presenceLiveAbuDhabi: 'En direct d Abou Dhabi',
      presenceAlRashid: 'Clan Al-Rashid',
      presenceSync: 'Synchronisé',
      householdChores: 'Tâches Ménagères',
      groceryPantry: 'Garde-Manger',
      vaultMemories: 'Souvenirs du Coffre',
      addMemo: 'Ajouter Mémo',
      addChore: 'Ajouter Tâche',
      addGrocery: 'Ajouter Article',
      shuffle: 'Mélanger',
      solarArcTitle: 'Arc Solaire & Cadence Harmonique',
      interactiveOrbit: 'Orbite Planétaire Interactive',
      memoryCartographyTitle: 'Cartographie des Moments & Souvenirs',
      quoteTitle: 'Méditation Inspirante du Foyer',
      vaultTitle: 'Coffre Cryptographique Procédural',
      vaultSubtitle: 'Registre familial décentralisé sous matrice de chiffrement obsidienne dynamique.',
      rotateMesh: 'Accélérer Noyau',
      emergencyLockdown: 'Verrouillage d Urgence',
      startGame: 'Commencer la Partie',
      chooseChampion: 'Choisissez votre Champion',
      confirmChampion: 'Confirmer le Champion',
      close: 'Fermer',
      pause: 'Pause',
      resume: 'Reprendre',
      restart: 'Recommencer',
      score: 'Score',
      highScore: 'Meilleur Score',
      linesCleared: 'Lignes Effacées',
      biomeTier: 'Niveau de Biome',
      nextPiece: 'Pièce Suivante'
    },
    de: {
      home: 'Startseite',
      hub: 'Zentrale',
      rhythm: 'Rhythmus',
      moments: 'Momente',
      vault: 'Tresor',
      hearthCraft: 'HearthCraft',
      hearthActive: 'Herd Aktiv',
      cmdK: 'Cmd K',
      selectLanguage: 'Sprache auswählen',
      languageSwitched: 'Sprache geändert zu Deutsch',
      chimeSent: 'Herd-Gong an Tariq, Elena, Maya und Liam gesendet',
      beaconSent: 'Herzschlag-Signal von allen Geräten empfangen',
      domesticSanctuary: 'Familiäre Zuflucht',
      heroHeadline: 'Häusliche Rhythmen, geteilte Erinnerung und gemeinsames Leben.',
      heroSubhead: 'Ein geschützter, privater Raum, in dem Familienaufgaben, emotionale Frequenzen und Ahnenarchive reibungslos ineinandergreifen.',
      sendChimePing: 'Gong Senden',
      syncHearthBeacon: 'Herd-Signal Synchronisieren',
      activeNodes: '4 Aktive Knoten',
      obsidianCore: 'Obsidian-Kernschild',
      zeroFriction: 'Reibungslos',
      livingMemosCardTitle: 'Lebendige Memos & Tresor',
      livingMemosCardDesc: 'Echtzeit-Aufgabensynchronisierung, Vorratskammer und automatisch gemischter Familien-Polaroid-Tresor.',
      solarArcCardTitle: 'Sonnenbogen-Rhythmus',
      solarArcCardDesc: 'Tägliche häusliche Umlaufbahnen für familiäre Nähe, Aufgabenrhythmen und harmonische Zyklen.',
      memoryMapCardTitle: 'Erinnerungs-Kartografie',
      memoryMapCardDesc: 'Geografische und chronologische Meilensteine durch Familienreisen und Herkunftswurzeln.',
      cypherCardTitle: 'Kryptografische Chiffre',
      cypherCardDesc: 'Zero-Knowledge verschlüsseltes Familienbuch, vertrauliche Dokumente und Notfallprotokolle.',
      presenceKinConnected: '4 / 4 Verwandte mit Signalfeuer verbunden',
      presenceLiveAbuDhabi: 'Live in Abu Dhabi',
      presenceAlRashid: 'Clan Al-Rashid',
      presenceSync: 'Synchronisiert',
      householdChores: 'Haushaltsaufgaben',
      groceryPantry: 'Vorratskammer',
      vaultMemories: 'Tresor-Erinnerungen',
      addMemo: 'Memo Hinzufügen',
      addChore: 'Aufgabe Hinzufügen',
      addGrocery: 'Artikel Hinzufügen',
      shuffle: 'Mischen',
      solarArcTitle: 'Sonnenbogen & Harmonische Resonanz',
      interactiveOrbit: 'Interaktiver Planetenorbit',
      memoryCartographyTitle: 'Erinnerungs-Kartografie & Momente',
      quoteTitle: 'Inspirierender Herd-Gedanke',
      vaultTitle: 'Prozeduraler Kryptotresor',
      vaultSubtitle: 'Dezentrales Familienregister geschützt durch Obsidian-Chiffriermatrizen.',
      rotateMesh: 'Kern Beschleunigen',
      emergencyLockdown: 'Notfall-Abriegelung',
      startGame: 'Spiel Starten',
      chooseChampion: 'Wähle deinen Champion',
      confirmChampion: 'Champion Bestätigen',
      close: 'Schließen',
      pause: 'Pause',
      resume: 'Fortsetzen',
      restart: 'Neustart',
      score: 'Punkte',
      highScore: 'Höchstpunktzahl',
      linesCleared: 'Gelöschte Linien',
      biomeTier: 'Biom-Stufe',
      nextPiece: 'Nächster Block'
    },
    ja: {
      home: 'ホーム',
      hub: 'ハブ',
      rhythm: 'リズム',
      moments: 'モーメント',
      vault: '保管庫',
      hearthCraft: 'ハースクラフト',
      hearthActive: '炉心稼働中',
      cmdK: 'Cmd K',
      selectLanguage: '言語を選択',
      languageSwitched: '言語を日本語に変更しました',
      chimeSent: 'タリク、エレナ、マヤ、リアムにチャイムを送信しました',
      beaconSent: '全端末でハートパルスビーコンを受信しました',
      domesticSanctuary: '家庭の聖域',
      heroHeadline: '家庭のリズム、分かち合う記憶、共に紡ぐ暮らし。',
      heroSubhead: '家族の役割、心の波動、祖先の記憶が摩擦なく調和する、親密で神聖なプライベート空間。',
      sendChimePing: 'チャイムを送信',
      syncHearthBeacon: 'ビーコンを同期',
      activeNodes: '4つの接続ノード',
      obsidianCore: '黒曜石コアシールド',
      zeroFriction: '完全な調和',
      livingMemosCardTitle: 'リビングメモ＆保管庫',
      livingMemosCardDesc: 'リアルタイムのタスク同期、パントリー管理、自動シャッフルされるポラロイド保管庫。',
      solarArcCardTitle: 'ソーラーアークの歩調',
      solarArcCardDesc: '家族の距離感、家事のサイクル、調和的なリズムを描き出す日々の周回軌道。',
      memoryMapCardTitle: '記憶の地図制作',
      memoryMapCardDesc: '旅の記憶、家族の節目、ルーツを巡る地理的・時系列の軌跡。',
      cypherCardTitle: '暗号化サイファー',
      cypherCardDesc: 'ゼロ知識証明で保護された家族台帳、重要書類、緊急医療プロトコル。',
      presenceKinConnected: '4 / 4人の家族がビーコンに接続中',
      presenceLiveAbuDhabi: 'アブダビから中継',
      presenceAlRashid: 'アル・ラシード家',
      presenceSync: '同期完了',
      householdChores: '家事タスク',
      groceryPantry: '食料庫パントリー',
      vaultMemories: '保管庫の記憶',
      addMemo: 'メモを追加',
      addChore: 'タスクを追加',
      addGrocery: '品物を追加',
      shuffle: 'シャッフル',
      solarArcTitle: 'ソーラーアークと調和の軌道',
      interactiveOrbit: 'インタラクティブ惑星軌道',
      memoryCartographyTitle: '記憶の地図とモーメント',
      quoteTitle: '炉心のインスピレーション',
      vaultTitle: 'プロシージャル暗号保管庫',
      vaultSubtitle: '動的な黒曜石暗号マトリックスで保護された分散型家族台帳。',
      rotateMesh: 'コア加速',
      emergencyLockdown: '緊急封鎖',
      startGame: 'ゲーム開始',
      chooseChampion: 'チャンピオンを選択',
      confirmChampion: 'チャンピオンを確定',
      close: '閉じる',
      pause: '一時停止',
      resume: '再開',
      restart: 'リスタート',
      score: 'スコア',
      highScore: 'ハイスコア',
      linesCleared: 'クリアライン数',
      biomeTier: 'バイオーム階層',
      nextPiece: '次のピース'
    },
    hi: {
      home: 'होम',
      hub: 'हब',
      rhythm: 'रिदम',
      moments: 'मोमेंट्स',
      vault: 'वॉल्ट',
      hearthCraft: 'हार्थक्राफ्ट',
      hearthActive: 'चूल्हा सक्रिय',
      cmdK: 'खोज Cmd K',
      selectLanguage: 'भाषा चुनें',
      languageSwitched: 'भाषा हिन्दी में बदल दी गई है',
      chimeSent: 'तारिक, एलेना, माया और लियाम को चाइम भेजी गई',
      beaconSent: 'सभी उपकरणों पर हृदय पल्स बीकन प्राप्त हुआ',
      domesticSanctuary: 'पारिवारिक अभयारण्य',
      heroHeadline: 'पारिवारिक लय, साझा यादें और सामूहिक जीवन।',
      heroSubhead: 'एक पवित्र और निजी संचालन अभयारण्य जहां पारिवारिक कार्य, भावनात्मक तरंगें और पूर्वजों के अभिलेख बिना किसी बाधा के मिलते हैं।',
      sendChimePing: 'चाइम पिंग भेजें',
      syncHearthBeacon: 'बीकन सिंक करें',
      activeNodes: '4 सक्रिय नोड्स',
      obsidianCore: 'ऑब्सिडियन कोर शील्ड',
      zeroFriction: 'शून्य घर्षण',
      livingMemosCardTitle: 'जीवंत मेमो और वॉल्ट',
      livingMemosCardDesc: 'वास्तविक समय कार्य समन्वय, किराना पैंट्री और ऑटो-शफल पारिवारिक पोलरॉइड वॉल्ट।',
      solarArcCardTitle: 'सोलर आर्क ताल',
      solarArcCardDesc: 'पारिवारिक समीपता, कार्यों की लय और सामंजस्यपूर्ण चक्र दिखाने वाली दैनिक कक्षाएं।',
      memoryMapCardTitle: 'स्मृति मानचित्रण',
      memoryMapCardDesc: 'पारिवारिक उपलब्धियों, छुट्टियों और पूर्वजों की जड़ों के भौगोलिक और कालानुक्रमिक पड़ाव।',
      cypherCardTitle: 'क्रिप्टोग्राफिक सिफर',
      cypherCardDesc: 'शून्य-ज्ञान एन्क्रिप्टेड पारिवारिक बहीखाता, गोपनीय दस्तावेज और आपातकालीन प्रोटोकॉल।',
      presenceKinConnected: '4 / 4 परिजन बीकन से जुड़े हैं',
      presenceLiveAbuDhabi: 'अबू धाबी से लाइव',
      presenceAlRashid: 'अल-रशीद कबीला',
      presenceSync: 'सिंक्रनाइज़्ड',
      householdChores: 'घरेलू काम',
      groceryPantry: 'किराना सामग्री',
      vaultMemories: 'वॉल्ट की यादें',
      addMemo: 'मेमो जोड़ें',
      addChore: 'कार्य जोड़ें',
      addGrocery: 'वस्तु जोड़ें',
      shuffle: 'शफल करें',
      solarArcTitle: 'सोलर आर्क और सामंजस्यपूर्ण ताल',
      interactiveOrbit: 'इंटरैक्टिव ग्रहीय कक्षा',
      memoryCartographyTitle: 'स्मृति मानचित्रण और पल',
      quoteTitle: 'प्रेरणादायक पारिवारिक विचार',
      vaultTitle: 'प्रक्रियात्मक क्रिप्टोग्राफी वॉल्ट',
      vaultSubtitle: 'गतिशील ऑब्सिडियन सिफर मेट्रिसेस द्वारा संरक्षित विकेंद्रीकृत पारिवारिक बहीखाता।',
      rotateMesh: 'कोर गति बढ़ाएं',
      emergencyLockdown: 'आपातकालीन लॉकडाउन',
      startGame: 'खेल शुरू करें',
      chooseChampion: 'अपना चैंपियन चुनें',
      confirmChampion: 'चैंपियन की पुष्टि करें',
      close: 'बंद करें',
      pause: 'रोकें',
      resume: 'पुनः शुरू करें',
      restart: 'फिर से शुरू करें',
      score: 'स्कोर',
      highScore: 'सर्वोच्च स्कोर',
      linesCleared: 'हटाई गई पंक्तियां',
      biomeTier: 'बायोम स्तर',
      nextPiece: 'अगला टुकड़ा'
    },
    zh: {
      home: '首页',
      hub: '枢纽',
      rhythm: '节奏',
      moments: '时刻',
      vault: '保险库',
      hearthCraft: '炉火方块',
      hearthActive: '炉火活跃',
      cmdK: '指令 K',
      selectLanguage: '选择语言',
      languageSwitched: '语言已切换为中文',
      chimeSent: '已向塔里克、艾琳娜、玛雅和利亚姆发送家庭提示音',
      beaconSent: '所有设备均已接收脉冲信标',
      domesticSanctuary: '家庭圣所',
      heroHeadline: '家庭律动、共同回忆与温情共处。',
      heroSubhead: '一个神圣私密的家庭运转空间，让亲情事务、情感共鸣与家族记忆无缝融合。',
      sendChimePing: '发送提示音',
      syncHearthBeacon: '同步炉火信标',
      activeNodes: '4个活跃连接',
      obsidianCore: '黑曜石核心护盾',
      zeroFriction: '流畅无间',
      livingMemosCardTitle: '动态备忘录与珍藏库',
      livingMemosCardDesc: '实时任务同步、常驻杂货储备与自动轮换的家庭宝丽来记忆。',
      solarArcCardTitle: '太阳弧运转律动',
      solarArcCardDesc: '展示家庭成员日常距离、家务周期与和谐共振的日常运转轨道。',
      memoryMapCardTitle: '记忆地图志',
      memoryMapCardDesc: '串联家族里程碑、度假旅程与祖源脉络的地理时间轴。',
      cypherCardTitle: '数字密码库',
      cypherCardDesc: '零知识加密的家族账本、机密文件与紧急健康保障方案。',
      presenceKinConnected: '4 / 4 位家人已连接信标',
      presenceLiveAbuDhabi: '阿布扎比现场直连',
      presenceAlRashid: '阿尔·拉希德家族',
      presenceSync: '已同步',
      householdChores: '家务清单',
      groceryPantry: '日常补给',
      vaultMemories: '珍藏回忆',
      addMemo: '新建备忘',
      addChore: '新建家务',
      addGrocery: '添加物品',
      shuffle: '随机轮播',
      solarArcTitle: '太阳弧与和谐韵律',
      interactiveOrbit: '交互式行星轨道',
      memoryCartographyTitle: '记忆地图与精彩瞬间',
      quoteTitle: '炉边温馨感悟',
      vaultTitle: '程序化加密保险库',
      vaultSubtitle: '由动态黑曜石密码矩阵守护的去中心化家庭数字账本。',
      rotateMesh: '核心加速',
      emergencyLockdown: '紧急封锁',
      startGame: '开始游戏',
      chooseChampion: '选择你的勇士',
      confirmChampion: '确认勇士',
      close: '关闭',
      pause: '暂停',
      resume: '继续',
      restart: '重新开始',
      score: '得分',
      highScore: '最高得分',
      linesCleared: '消除行数',
      biomeTier: '生态层级',
      nextPiece: '下一方块'
    }
  };

  let currentLang = localStorage.getItem('aqaarib_language') || 'en';

  function applyLanguage(lang) {
    if (!dictionary[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('aqaarib_language', lang);

    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    const dict = dictionary[lang];

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    const navHome = document.querySelector('.nav-item[data-view="home"]');
    if (navHome) navHome.textContent = dict.home;

    const navHub = document.querySelector('.nav-item[data-view="hub"]');
    if (navHub) navHub.textContent = dict.hub;

    const navRhythm = document.querySelector('.nav-item[data-view="rhythm"]');
    if (navRhythm) navRhythm.textContent = dict.rhythm;

    const navMoments = document.querySelector('.nav-item[data-view="moments"]');
    if (navMoments) navMoments.textContent = dict.moments;

    const navVault = document.querySelector('.nav-item[data-view="vault"]');
    if (navVault) navVault.textContent = dict.vault;

    const navTetris = document.querySelector('.nav-item[data-view="tetris"]');
    if (navTetris) navTetris.textContent = dict.hearthCraft;

    const brandBadge = document.querySelector('.brand-badge');
    if (brandBadge) {
      brandBadge.innerHTML = '<span class="pulse-dot"></span>' + dict.hearthActive;
    }

    const cmdKBtn = document.querySelector('#search-trigger-btn span:last-child');
    if (cmdKBtn) {
      cmdKBtn.textContent = dict.cmdK;
    }

    const heroOverline = document.querySelector('.overline-marker span:last-child');
    if (heroOverline) heroOverline.textContent = dict.domesticSanctuary;

    const heroHeadline = document.querySelector('.hero-headline');
    if (heroHeadline) {
      if (lang === 'ar') {
        heroHeadline.innerHTML = 'إيقاعات عائلية، <span class="wavy-accent">وذكريات مشتركة</span> وحياة مترابطة.';
      } else if (lang === 'en') {
        heroHeadline.innerHTML = 'Domestic rhythms, <span class="wavy-accent">shared memory</span> &amp; collective living.';
      } else {
        heroHeadline.textContent = dict.heroHeadline;
      }
    }

    const heroSubhead = document.querySelector('.hero-subhead');
    if (heroSubhead) heroSubhead.textContent = dict.heroSubhead;

    const pingBtn = document.getElementById('hero-quick-ping-btn');
    if (pingBtn) {
      const icon = pingBtn.querySelector('.material-symbols-outlined');
      const iconHtml = icon ? icon.outerHTML : '';
      pingBtn.innerHTML = iconHtml + ' ' + dict.sendChimePing;
    }

    const beaconBtn = document.getElementById('hero-sync-beacon-btn');
    if (beaconBtn) {
      const icon = beaconBtn.querySelector('.material-symbols-outlined');
      const iconHtml = icon ? icon.outerHTML : '';
      beaconBtn.innerHTML = iconHtml + ' ' + dict.syncHearthBeacon;
    }

    const pulsePills = document.querySelectorAll('.pulse-pill');
    if (pulsePills.length >= 3) {
      const p0 = pulsePills[0].querySelector('span:last-child');
      if (p0) p0.textContent = dict.activeNodes;
      const p1 = pulsePills[1].querySelector('span:last-child');
      if (p1) p1.textContent = dict.obsidianCore;
      const p2 = pulsePills[2].querySelector('span:last-child');
      if (p2) p2.textContent = dict.zeroFriction;
    }

    const cards = document.querySelectorAll('.hero-feature-card');
    if (cards.length >= 4) {
      const c0Title = cards[0].querySelector('h3');
      const c0Desc = cards[0].querySelector('p');
      if (c0Title) c0Title.textContent = dict.livingMemosCardTitle;
      if (c0Desc) c0Desc.textContent = dict.livingMemosCardDesc;

      const c1Title = cards[1].querySelector('h3');
      const c1Desc = cards[1].querySelector('p');
      if (c1Title) c1Title.textContent = dict.solarArcCardTitle;
      if (c1Desc) c1Desc.textContent = dict.solarArcCardDesc;

      const c2Title = cards[2].querySelector('h3');
      const c2Desc = cards[2].querySelector('p');
      if (c2Title) c2Title.textContent = dict.memoryMapCardTitle;
      if (c2Desc) c2Desc.textContent = dict.memoryMapCardDesc;

      const c3Title = cards[3].querySelector('h3');
      const c3Desc = cards[3].querySelector('p');
      if (c3Title) c3Title.textContent = dict.cypherCardTitle;
      if (c3Desc) c3Desc.textContent = dict.cypherCardDesc;
    }

    const startBtn = document.getElementById('btn-start-game');
    if (startBtn) {
      const icon = startBtn.querySelector('.material-symbols-outlined');
      const iconHtml = icon ? icon.outerHTML : '';
      startBtn.innerHTML = iconHtml + ' ' + dict.startGame;
    }

    const modalTitle = document.querySelector('#champion-modal .modal-title');
    if (modalTitle) modalTitle.textContent = dict.chooseChampion;

    const champConfirmBtn = document.getElementById('champ-confirm-btn');
    if (champConfirmBtn) {
      const span = champConfirmBtn.querySelector('span');
      if (span) span.textContent = dict.confirmChampion;
    }

    const champCancelBtn = document.getElementById('champ-cancel-btn');
    if (champCancelBtn) {
      const span = champCancelBtn.querySelector('span');
      if (span) span.textContent = dict.close;
    }

    const startTitle = document.querySelector('.start-title');
    if (startTitle) startTitle.textContent = dict.hearthCraft;

    document.querySelectorAll('.lang-option').forEach(function(opt) {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    window.dispatchEvent(new CustomEvent('languagechanged', { detail: { language: lang } }));
  }

  function initTranslateUI() {
    const translateBtn = document.getElementById('translate-btn');
    const translateMenu = document.getElementById('translate-menu');

    if (translateBtn && translateMenu) {
      translateBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const isOpen = translateMenu.classList.contains('open');
        translateMenu.classList.toggle('open', !isOpen);
        translateBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      });

      document.addEventListener('click', function(e) {
        if (!translateMenu.contains(e.target) && e.target !== translateBtn && !translateBtn.contains(e.target)) {
          translateMenu.classList.remove('open');
          translateBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    document.querySelectorAll('.lang-option').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
        if (translateMenu) {
          translateMenu.classList.remove('open');
        }
        if (translateBtn) {
          translateBtn.setAttribute('aria-expanded', 'false');
        }
        if (window.showToast) {
          window.showToast(dictionary[lang].languageSwitched, 'translate');
        }
      });
    });

    applyLanguage(currentLang);
  }

  window.setAqaaribLanguage = applyLanguage;
  window.getAqaaribLanguage = function() { return currentLang; };

  document.addEventListener('DOMContentLoaded', initTranslateUI);
})();