(function() {
  const dictionary = {
    "en": {
        "home": "Home",
        "hub": "Hub",
        "rhythm": "Rhythm",
        "moments": "Moments",
        "vault": "Vault",
        "hearthCraft": "HearthCraft",
        "cmdK": "Cmd K",
        "selectLanguage": "Select Language",
        "languageSwitched": "Language switched to English",
        "chimeSent": "Hearth chime sent to Tariq, Elena, Maya & Liam",
        "beaconSent": "Heart pulse beacon received by all devices",
        "searchPlaceholder": "Type a destination or action...",
        "escToClose": "ESC to close",
        "domesticSanctuary": "Domestic Sanctuary",
        "heroHeadline": "Domestic rhythms, shared memory & collective living.",
        "heroSubhead": "A sacred, private operating sanctuary where family tasks, emotional frequencies, and ancestral archives interlock without friction.",
        "sendChimePing": "Send Chime Ping",
        "syncHearthBeacon": "Sync Hearth Beacon",
        "enterHousehold": "Enter Household Canvas",
        "activeNodes": "4 Active Nodes",
        "obsidianCore": "Obsidian Core Shield",
        "zeroFriction": "Zero Friction",
        "livingMemosCardTitle": "Living Memos & Vault",
        "livingMemosCardDesc": "Real-time task synchronization, persistent spatial grocery pantry, and auto-shuffled family Polaroid vault.",
        "solarArcCardTitle": "Solar Arc Cadence",
        "solarArcCardDesc": "Daily domestic orbits showing family proximity, chore cadence, and resonant harmonic cycles.",
        "memoryMapCardTitle": "Memory Cartography",
        "memoryMapCardDesc": "Geographic and chronological journey pins across family milestones, vacations, and ancestral roots.",
        "cypherCardTitle": "Cryptographic Cypher",
        "cypherCardDesc": "Zero-knowledge encrypted family ledger, confidential documents, and emergency health protocols.",
        "launchHub": "Launch Hub",
        "viewCadence": "View Cadence",
        "exploreTimeline": "Explore Timeline",
        "accessVault": "Access Vault",
        "hubSuperTitle": "Family Operating Center",
        "hubMainTitle": "Domestic Operating Canvas",
        "syncBeacon": "Sync Beacon",
        "livingMemos": "Living Memos",
        "livingMemosSub": "Interactive floating notes • Drag to rearrange",
        "addMemo": "Add Note",
        "vaultMemories": "The Vault Memories",
        "vaultMemoriesSub": "Archived family polaroids • Auto-shuffling deck",
        "shuffle": "Shuffle",
        "autoShuffling": "Auto-Shuffling",
        "viewAllRecords": "View All 182 Records",
        "householdChores": "Household Chores",
        "hearthRoster": "Hearth Roster",
        "dropVault": "Drop Vault",
        "addChore": "Assign Chore",
        "dropZoneText": "Drop family records or polaroids here",
        "dropZoneSub": "Zero-knowledge local encryption automatically applied upon receipt",
        "quickReactions": "Quick Hearth Reactions:",
        "reactionHeart": "Heart",
        "reactionRadiant": "Radiant",
        "reactionWarmTea": "Warm Tea",
        "reactionProud": "Proud",
        "synchronyMeshActive": "Synchrony Mesh Active",
        "rhythmTitle": "Household Rhythm & Synchrony",
        "rhythmDesc": "Gentle daily cadences, culinary rhythms, and celestial hearth synchrony.",
        "addCheckpoint": "Add Checkpoint",
        "solarArcSimulation": "Solar Arc Simulation",
        "solarArcTitle": "Procedural Time-Loop & Celestial Hearth Cycle",
        "solarArcSubtitle": "Pills locked upright • Collision detection with elastic bounce and contact sparks • Click pill to reverse orbit",
        "tariqTrack": "Tariq (Outer Track)",
        "mayaTrack": "Maya (Inner Track)",
        "liamTrack": "Liam (Outer Track)",
        "elenaTrack": "Elena (Inner Track)",
        "solarArc": "Solar Arc",
        "goldenHour": "Golden Hour",
        "revolving": "Revolving",
        "orbitPaused": "Paused",
        "orbitHint": "Hover slows orbit • Click pills to bounce",
        "pantryTitle": "Pantry & Hearth Basket",
        "savedLocally": "Saved in local storage",
        "pantryPlaceholder": "Add pantry provision or tea...",
        "add": "Add",
        "hearthKitchen": "Hearth Kitchen",
        "grandmaChai": "Grandmother's Saffron Cardamom Chai",
        "recipeSubtitle": "Evening culinary rhythm • Tap to view recipe",
        "oralHistoryArchive": "Oral History & Spatial Ledger",
        "momentsTitle": "Temporal Resonances & Moments",
        "momentsDesc": "Harmonic memories, oral history audio recordings, and family cartography.",
        "allMoments": "All Moments",
        "kineticTitle": "Oscillating Memory Stream & Undulating Timeline",
        "kineticSubtitle": "Mathematical harmonic waves • Cursor perturbation • Click creates ripple shockwave affecting the wave",
        "activeResonance": "Active Resonance",
        "oralHistoryTape": "Oral History Tape",
        "cardamomFig": "Cardamom Fig Preserve Secrets",
        "recordedBy": "Recorded by Elena with Grandma Amira • 1988 Recipe",
        "mapTitle": "Geographic Footprint & Hearth Origins",
        "mapSub": "Interactive family journey pins • OpenStreetMap Leaflet integration",
        "wordsOfAncestors": "Words of the Hearth",
        "refreshQuote": "Fetch New Quote",
        "vaultMainTitle": "The Vault & Cryptographic Trust",
        "vaultMainDesc": "Decentralized domestic security shield, procedural cryptography mesh, and protected family records.",
        "resyncMesh": "Re-sync Mesh",
        "depositRecord": "Deposit Record",
        "tapCypherCore": "Tap Cypher Core",
        "guardianTitle": "Hardware Vault Guardian State",
        "guardianDesc": "Live decentralized state synchronized over domestic ultra-wideband mesh.",
        "armored": "Armored",
        "keyActive": "Key 44 Active",
        "encryptedArchive": "Encrypted Document Archive",
        "protectedHeirlooms": "Protected family heirlooms and essential documents",
        "allRecords": "All Records",
        "deedsProperty": "Deeds & Property",
        "medicalHealth": "Medical & Health",
        "heirloomWills": "Heirloom Wills",
        "diplomas": "Diplomas",
        "addMemoModalTitle": "Add Living Memo",
        "familyMember": "Family Member",
        "noteMessage": "Note Message",
        "notePlaceholder": "Write a gentle note, reminder, or domestic thought...",
        "floatToSandbox": "Float to Sandbox",
        "assignChoreModalTitle": "Assign Household Chore",
        "choreDescription": "Chore Description",
        "chorePlaceholder": "e.g. Tend to balcony jasmine & mint",
        "familyAssignee": "Family Assignee",
        "priorityTag": "Priority Tag",
        "addToRoster": "Add to Roster",
        "depositModalTitle": "Deposit Encrypted Record",
        "documentTitle": "Document Title",
        "archiveCategory": "Archive Category",
        "encryptAndStore": "Encrypt & Store",
        "rosterModalTitle": "The Al-Rashid Hearth Roster",
        "startGame": "Start Game",
        "chooseChampion": "Choose Your Champion",
        "confirmChampion": "Confirm Champion",
        "close": "Close",
        "pause": "Pause",
        "resume": "Resume",
        "restart": "Restart",
        "score": "Score",
        "highScore": "High Score",
        "linesCleared": "Lines Cleared",
        "biomeTier": "Biome Tier",
        "nextPiece": "Next Piece"
    },
    "ar": {
        "home": "الرئيسية",
        "hub": "المحور",
        "rhythm": "الإيقاع",
        "moments": "اللحظات",
        "vault": "الخزينة",
        "hearthCraft": "هيرث كرافت",
        "cmdK": "بحث K",
        "selectLanguage": "اختر اللغة",
        "languageSwitched": "تم تغيير اللغة إلى العربية",
        "chimeSent": "تم إرسال رنين الموقد إلى طارق، وإلينا، ومايا، وليام",
        "beaconSent": "تم استقبال إشارة نبض القلب على جميع الأجهزة",
        "searchPlaceholder": "اكتب وجهة أو أمرًا للبحث...",
        "escToClose": "ESC للإغلاق",
        "domesticSanctuary": "ملاذ عائلي",
        "heroHeadline": "إيقاعات عائلية، وذكريات مشتركة وحياة مترابطة.",
        "heroSubhead": "ملاذ عائلي خاص ومقدس تلتقي فيه مهام الأسرة، والترددات العاطفية، والأرشيف العائلي بكل انسيابية وسلاسة.",
        "sendChimePing": "إرسال رنين تنبيه",
        "syncHearthBeacon": "مزامنة منارة الموقد",
        "enterHousehold": "الدخول إلى لوحة الأسرة",
        "activeNodes": "4 أجهزة متصلة",
        "obsidianCore": "درع النواة البركانية",
        "zeroFriction": "انسيابية كاملة",
        "livingMemosCardTitle": "المذكرات الحية والخزينة",
        "livingMemosCardDesc": "مزامنة فورية للمهام، وقائمة مؤن تفاعلية، وخزينة بولارويد للذكريات العائلية متجددة تلقائيا.",
        "solarArcCardTitle": "إيقاع القوس الشمسي",
        "solarArcCardDesc": "مدارات يومية توضح تقارب العائلة، وتوزيع المهام، والدورات الإيقاعية المتناغمة.",
        "memoryMapCardTitle": "خرائط الذكريات",
        "memoryMapCardDesc": "محطات جغرافية وزمنية لأهم المناسبات العائلية، والرحلات، والجذور التراثية.",
        "cypherCardTitle": "التشفير الرقمي",
        "cypherCardDesc": "سجل عائلي مشفر، ووثائق سرية، وبروتوكولات الطوارئ الصحية المعتمدة.",
        "launchHub": "فتح المحور",
        "viewCadence": "عرض الإيقاع",
        "exploreTimeline": "استكشاف الخط الزمني",
        "accessVault": "دخول الخزينة",
        "hubSuperTitle": "مركز تشغيل الأسرة",
        "hubMainTitle": "لوحة التشغيل المنزلية",
        "syncBeacon": "مزامنة المنارة",
        "livingMemos": "المذكرات الحية",
        "livingMemosSub": "ملاحظات عائمة تفاعلية • اسحب لإعادة الترتيب",
        "addMemo": "إضافة مذكرة",
        "vaultMemories": "ذكريات الخزينة",
        "vaultMemoriesSub": "صور بولارويد عائلية مؤرشفة • تبديل تلقائي للصور",
        "shuffle": "خلط الذكريات",
        "autoShuffling": "تبديل تلقائي",
        "viewAllRecords": "عرض جميع السجلات الـ 182",
        "householdChores": "المهام المنزلية",
        "hearthRoster": "قائمة الأسرة",
        "dropVault": "إيداع الوثائق",
        "addChore": "إضافة مهمة",
        "dropZoneText": "أسقط السجلات العائلية أو صور البولارويد هنا",
        "dropZoneSub": "تشفير محلي فوري معدوم المعرفة يطبق تلقائيا فور الاستلام",
        "quickReactions": "تفاعلات الموقد السريعة:",
        "reactionHeart": "حب",
        "reactionRadiant": "إشراق",
        "reactionWarmTea": "شاي دافئ",
        "reactionProud": "فخر",
        "synchronyMeshActive": "شبكة التناغم نشطة",
        "rhythmTitle": "الإيقاع والتناغم المنزلي",
        "rhythmDesc": "إيقاعات يومية هادئة، ونبضات الطهي، وتناغم فلكي لدفء الأسرة.",
        "addCheckpoint": "إضافة محطة",
        "solarArcSimulation": "محاكاة القوس الشمسي",
        "solarArcTitle": "دورة القوس الشمسي والتناغم الفلكي",
        "solarArcSubtitle": "حلقات منتصبة محاذاة • تصادم مرن مع شرارات تلامس • اضغط على أي فرد لعكس مداره",
        "tariqTrack": "طارق (المسار الخارجي)",
        "mayaTrack": "مايا (المسار الداخلي)",
        "liamTrack": "ليام (المسار الخارجي)",
        "elenaTrack": "إلينا (المسار الداخلي)",
        "solarArc": "القوس الشمسي",
        "goldenHour": "الساعة الذهبية",
        "revolving": "يدور الآن",
        "orbitPaused": "متوقف مؤقتا",
        "orbitHint": "التمرير يبطئ المدار • اضغط على الأفراد للعكس",
        "pantryTitle": "المؤن وسلة الموقد",
        "savedLocally": "محفوظ في التخزين المحلي",
        "pantryPlaceholder": "إضافة مؤن أو شاي للمطبخ...",
        "add": "إضافة",
        "hearthKitchen": "مطبخ الموقد",
        "grandmaChai": "شاي الجدة بالهيل والزعفران",
        "recipeSubtitle": "إيقاع طهي المساء • اضغط لعرض الوصفة",
        "oralHistoryArchive": "أرشيف التاريخ الشفوي والمدار المكاني",
        "momentsTitle": "الرنين الزمني واللحظات العائلية",
        "momentsDesc": "ذكريات متناغمة، وتسجيلات صوتية للتاريخ الشفوي، وخرائط الرحلات العائلية.",
        "allMoments": "جميع اللحظات",
        "kineticTitle": "شريط الذكريات المتموج والخط الزمني الانسيابي",
        "kineticSubtitle": "موجات توافقية رياضية • تفاعل المؤشر • النقر يولد موجات صدمية تؤثر على المسار",
        "activeResonance": "رنين متصل",
        "oralHistoryTape": "تسجيل التاريخ الشفوي",
        "cardamomFig": "أسرار مربى التين بالهيل",
        "recordedBy": "سجلته إلينا مع الجدة أميرة • وصفة عام 1988",
        "mapTitle": "المحطات الجغرافية والجذور التراثية",
        "mapSub": "محطات عائلية تفاعلية • مدعومة بخرائط الشوارع المفتوحة",
        "wordsOfAncestors": "كلمات الموقد والأجداد",
        "refreshQuote": "تحديث الحكمة",
        "vaultMainTitle": "الخزينة والأمان الرقمي المشفر",
        "vaultMainDesc": "درع أمني عائلي لا مركزي، وشبكة تشفير إجرائية، وسجلات عائلية محمية.",
        "resyncMesh": "إعادة مزامنة الشبكة",
        "depositRecord": "إيداع وثيقة",
        "tapCypherCore": "انقر على نواة التشفير",
        "guardianTitle": "حالة حارس الخزينة العتادي",
        "guardianDesc": "حالة لا مركزية مباشرة متزامنة عبر شبكة النطاق فائق العرض المنزلية.",
        "armored": "مدرع ومغلق",
        "keyActive": "مفتاح 44 نشط",
        "encryptedArchive": "أرشيف الوثائق المشفرة",
        "protectedHeirlooms": "وثائق ومقتنيات عائلية ثمينة ومحمية",
        "allRecords": "جميع السجلات",
        "deedsProperty": "عقود وأملاك",
        "medicalHealth": "سجلات طبية",
        "heirloomWills": "وصايا تراثية",
        "diplomas": "شهادات ومؤهلات",
        "addMemoModalTitle": "إضافة مذكرة حية",
        "familyMember": "فرد الأسرة",
        "noteMessage": "نص المذكرة",
        "notePlaceholder": "اكتب فكرة لطيفة، أو تذكرة، أو رسالة منزلية...",
        "floatToSandbox": "إرسال إلى اللوحة",
        "assignChoreModalTitle": "تعيين مهمة منزلية",
        "choreDescription": "وصف المهمة",
        "chorePlaceholder": "مثال: الاعتناء بالياسمين والنعناع في الشرفة",
        "familyAssignee": "المسؤول عن المهمة",
        "priorityTag": "علامة الأولوية",
        "addToRoster": "إضافة للقائمة",
        "depositModalTitle": "إيداع وثيقة مشفرة",
        "documentTitle": "عنوان الوثيقة",
        "archiveCategory": "تصنيف الأرشيف",
        "encryptAndStore": "تشفير وحفظ",
        "rosterModalTitle": "قائمة عائلة الرشيد",
        "startGame": "ابدأ اللعبة",
        "chooseChampion": "اختر بطلك",
        "confirmChampion": "تأكيد البطل",
        "close": "إغلاق",
        "pause": "إيقاف مؤقت",
        "resume": "استئناف",
        "restart": "إعادة البدء",
        "score": "النقاط",
        "highScore": "أعلى نتيجة",
        "linesCleared": "الأسطر المكتملة",
        "biomeTier": "مستوى البيئة",
        "nextPiece": "القطعة التالية"
    },
    "es": {
        "home": "Inicio",
        "hub": "Centro",
        "rhythm": "Ritmo",
        "moments": "Momentos",
        "vault": "Bóveda",
        "hearthCraft": "HearthCraft",
        "cmdK": "Comando K",
        "selectLanguage": "Seleccionar idioma",
        "languageSwitched": "Idioma cambiado a Español",
        "chimeSent": "Timbre enviado a Tariq, Elena, Maya y Liam",
        "beaconSent": "Baliza del corazón recibida en todos los dispositivos",
        "searchPlaceholder": "Escribe un destino o comando...",
        "escToClose": "ESC para cerrar",
        "domesticSanctuary": "Santuario Doméstico",
        "heroHeadline": "Ritmos domésticos, memoria compartida y vida colectiva.",
        "heroSubhead": "Un santuario operativo sagrado y privado donde las tareas familiares, frecuencias emocionales y archivos ancestrales se entrelazan sin fricción.",
        "sendChimePing": "Enviar Timbre",
        "syncHearthBeacon": "Sincronizar Baliza",
        "enterHousehold": "Entrar al Hogar",
        "activeNodes": "4 Nodos Activos",
        "obsidianCore": "Núcleo de Obsidiana",
        "zeroFriction": "Cero Fricción",
        "livingMemosCardTitle": "Notas Vivas y Bóveda",
        "livingMemosCardDesc": "Sincronización de tareas en tiempo real, despensa espacial y bóveda Polaroid de barajado automático.",
        "solarArcCardTitle": "Cadencia de Arco Solar",
        "solarArcCardDesc": "Órbitas domésticas diarias que muestran la proximidad familiar y ciclos armónicos resonantes.",
        "memoryMapCardTitle": "Cartografía de Recuerdos",
        "memoryMapCardDesc": "Rutas geográficas y cronológicas a través de hitos familiares, vacaciones y raíces ancestrales.",
        "cypherCardTitle": "Cifrado Criptográfico",
        "cypherCardDesc": "Libro familiar cifrado con conocimiento cero, documentos confidenciales y protocolos médicos.",
        "launchHub": "Abrir Centro",
        "viewCadence": "Ver Cadencia",
        "exploreTimeline": "Explorar Línea",
        "accessVault": "Acceder Bóveda",
        "hubSuperTitle": "Centro de Operaciones Familiar",
        "hubMainTitle": "Lienzo Operativo Doméstico",
        "syncBeacon": "Sincronizar Baliza",
        "livingMemos": "Notas Vivas",
        "livingMemosSub": "Notas flotantes interactivas • Arrastra para reorganizar",
        "addMemo": "Añadir Nota",
        "vaultMemories": "Recuerdos de la Bóveda",
        "vaultMemoriesSub": "Polaroids familiares archivadas • Barajado automático",
        "shuffle": "Barajar",
        "autoShuffling": "Barajando Auto",
        "viewAllRecords": "Ver Todos los 182 Registros",
        "householdChores": "Tareas del Hogar",
        "hearthRoster": "Registro del Hogar",
        "dropVault": "Bóveda de Depósito",
        "addChore": "Asignar Tarea",
        "dropZoneText": "Arrastra registros familiares o polaroids aquí",
        "dropZoneSub": "Cifrado local de conocimiento cero aplicado automáticamente",
        "quickReactions": "Reacciones Rápidas del Hogar:",
        "reactionHeart": "Corazón",
        "reactionRadiant": "Radiante",
        "reactionWarmTea": "Té Caliente",
        "reactionProud": "Orgullo",
        "synchronyMeshActive": "Malla de Sincronía Activa",
        "rhythmTitle": "Ritmo y Sincronía del Hogar",
        "rhythmDesc": "Cadencias diarias suaves, ritmos culinarios y sincronía celestial del hogar.",
        "addCheckpoint": "Añadir Punto",
        "solarArcSimulation": "Simulación de Arco Solar",
        "solarArcTitle": "Bucle Temporal Procesal y Ciclo Celestial",
        "solarArcSubtitle": "Pastillas en posición vertical • Rebote elástico con chispas de contacto • Clic para invertir órbita",
        "tariqTrack": "Tariq (Pista Exterior)",
        "mayaTrack": "Maya (Pista Interior)",
        "liamTrack": "Liam (Pista Exterior)",
        "elenaTrack": "Elena (Pista Interior)",
        "solarArc": "Arco Solar",
        "goldenHour": "Hora Dorada",
        "revolving": "Girando",
        "orbitPaused": "Pausado",
        "orbitHint": "Pasar el cursor frena la órbita • Clic para rebotar",
        "pantryTitle": "Despensa y Cesta del Hogar",
        "savedLocally": "Guardado localmente",
        "pantryPlaceholder": "Añadir provisiones o té...",
        "add": "Añadir",
        "hearthKitchen": "Cocina del Hogar",
        "grandmaChai": "Té Chai con Azafrán de la Abuela",
        "recipeSubtitle": "Ritmo culinario vespertino • Toca para ver receta",
        "oralHistoryArchive": "Historia Oral y Registro Espacial",
        "momentsTitle": "Resonancias Temporales y Momentos",
        "momentsDesc": "Recuerdos armónicos, grabaciones de historia oral y cartografía familiar.",
        "allMoments": "Todos los Momentos",
        "kineticTitle": "Flujo de Memoria Oscilante y Línea Ondulante",
        "kineticSubtitle": "Ondas armónicas matemáticas • Perturbación del cursor • Clic crea onda de choque",
        "activeResonance": "Resonancia Activa",
        "oralHistoryTape": "Cinta de Historia Oral",
        "cardamomFig": "Secretos de Conserva de Higo y Cardamomo",
        "recordedBy": "Grabado por Elena con la Abuela Amira • Receta de 1988",
        "mapTitle": "Huella Geográfica y Orígenes Familiares",
        "mapSub": "Marcadores familiares interactivos • OpenStreetMap Leaflet",
        "wordsOfAncestors": "Palabras del Hogar",
        "refreshQuote": "Actualizar Cita",
        "vaultMainTitle": "La Bóveda y Confianza Criptográfica",
        "vaultMainDesc": "Escudo de seguridad doméstico descentralizado, malla criptográfica y registros familiares protegidos.",
        "resyncMesh": "Resincronizar Malla",
        "depositRecord": "Depositar Documento",
        "tapCypherCore": "Tocar Núcleo Criptográfico",
        "guardianTitle": "Estado Guardián de Bóveda Hardware",
        "guardianDesc": "Estado descentralizado en vivo sincronizado mediante malla de banda ultraancha.",
        "armored": "Acorazado",
        "keyActive": "Clave 44 Activa",
        "encryptedArchive": "Archivo de Documentos Cifrados",
        "protectedHeirlooms": "Documentos esenciales y reliquias familiares protegidas",
        "allRecords": "Todos los Registros",
        "deedsProperty": "Títulos y Propiedad",
        "medicalHealth": "Salud y Medicina",
        "heirloomWills": "Testamentos Familiares",
        "diplomas": "Diplomas",
        "addMemoModalTitle": "Añadir Nota Viva",
        "familyMember": "Miembro Familiar",
        "noteMessage": "Mensaje de la Nota",
        "notePlaceholder": "Escribe un pensamiento cariñoso, recordatorio o idea...",
        "floatToSandbox": "Enviar al Tablero",
        "assignChoreModalTitle": "Asignar Tarea del Hogar",
        "choreDescription": "Descripción de la Tarea",
        "chorePlaceholder": "ej. Cuidar jazmín y menta del balcón",
        "familyAssignee": "Familiar Asignado",
        "priorityTag": "Etiqueta de Prioridad",
        "addToRoster": "Añadir al Roster",
        "depositModalTitle": "Depositar Registro Cifrado",
        "documentTitle": "Título del Documento",
        "archiveCategory": "Categoría de Archivo",
        "encryptAndStore": "Cifrar y Guardar",
        "rosterModalTitle": "Roster Familiar Al-Rashid",
        "startGame": "Iniciar Juego",
        "chooseChampion": "Elige tu Campeón",
        "confirmChampion": "Confirmar Campeón",
        "close": "Cerrar",
        "pause": "Pausar",
        "resume": "Reanudar",
        "restart": "Reiniciar",
        "score": "Puntuación",
        "highScore": "Récord",
        "linesCleared": "Líneas Limpiadas",
        "biomeTier": "Nivel de Bioma",
        "nextPiece": "Siguiente Pieza"
    },
    "fr": {
        "home": "Accueil",
        "hub": "Centre",
        "rhythm": "Rythme",
        "moments": "Moments",
        "vault": "Coffre",
        "hearthCraft": "HearthCraft",
        "cmdK": "Commande K",
        "selectLanguage": "Choisir la langue",
        "languageSwitched": "Langue changée en Français",
        "chimeSent": "Carillon envoyé à Tariq, Elena, Maya et Liam",
        "beaconSent": "Signal du foyer reçu sur tous les appareils",
        "searchPlaceholder": "Tapez une destination ou action...",
        "escToClose": "ÉCHAP pour fermer",
        "domesticSanctuary": "Sanctuaire Domestique",
        "heroHeadline": "Rythmes domestiques, mémoire partagée et vie collective.",
        "heroSubhead": "Un sanctuaire privé où les tâches familiales, fréquences émotionnelles et archives ancestrales s'harmonisent sans friction.",
        "sendChimePing": "Envoyer Carillon",
        "syncHearthBeacon": "Synchroniser Signal",
        "enterHousehold": "Entrer dans le Foyer",
        "activeNodes": "4 Nœuds Actifs",
        "obsidianCore": "Cœur d'Obsidienne",
        "zeroFriction": "Zéro Friction",
        "livingMemosCardTitle": "Notes Vivantes & Coffre",
        "livingMemosCardDesc": "Synchronisation des tâches en temps réel, garde-manger spatial et coffre Polaroid avec mélange automatique.",
        "solarArcCardTitle": "Cadence d'Arc Solaire",
        "solarArcCardDesc": "Orbites domestiques quotidiennes reflétant la proximité familiale et les cycles harmoniques.",
        "memoryMapCardTitle": "Cartographie des Souvenirs",
        "memoryMapCardDesc": "Parcours géographiques et chronologiques à travers les jalons familiaux, voyages et racines.",
        "cypherCardTitle": "Chiffrement Cryptographique",
        "cypherCardDesc": "Registre familial confidentiel chiffré à divulgation nulle de connaissance et protocoles de santé.",
        "launchHub": "Ouvrir Centre",
        "viewCadence": "Voir Cadence",
        "exploreTimeline": "Explorer Frise",
        "accessVault": "Accéder Coffre",
        "hubSuperTitle": "Centre d'Opérations Familial",
        "hubMainTitle": "Toile Opérationnelle Domestique",
        "syncBeacon": "Synchroniser Signal",
        "livingMemos": "Notes Vivantes",
        "livingMemosSub": "Notes flottantes interactives • Glissez pour réorganiser",
        "addMemo": "Ajouter Note",
        "vaultMemories": "Mémoires du Coffre",
        "vaultMemoriesSub": "Polaroids de famille archivés • Mélange automatique",
        "shuffle": "Mélanger",
        "autoShuffling": "Mélange Auto",
        "viewAllRecords": "Voir les 182 Documents",
        "householdChores": "Tâches Ménagères",
        "hearthRoster": "Registre du Foyer",
        "dropVault": "Dépôt Sécurisé",
        "addChore": "Attribuer Tâche",
        "dropZoneText": "Déposez les documents de famille ou polaroids ici",
        "dropZoneSub": "Chiffrement local sans connaissance appliqué automatiquement à la réception",
        "quickReactions": "Réactions Rapides du Foyer:",
        "reactionHeart": "Cœur",
        "reactionRadiant": "Rayonnant",
        "reactionWarmTea": "Thé Chaud",
        "reactionProud": "Fierté",
        "synchronyMeshActive": "Maillage de Synchronie Actif",
        "rhythmTitle": "Rythme et Synchronie du Foyer",
        "rhythmDesc": "Cadences quotidiennes douces, rythmes culinaires et synchronie céleste du foyer.",
        "addCheckpoint": "Ajouter Point",
        "solarArcSimulation": "Simulation d'Arc Solaire",
        "solarArcTitle": "Boucle Temporelle Céleste et Cycle Domestique",
        "solarArcSubtitle": "Pilules maintenues droites • Rebond élastique avec étincelles de contact • Cliquez pour inverser l'orbite",
        "tariqTrack": "Tariq (Piste Externe)",
        "mayaTrack": "Maya (Piste Interne)",
        "liamTrack": "Liam (Piste Externe)",
        "elenaTrack": "Elena (Piste Interne)",
        "solarArc": "Arc Solaire",
        "goldenHour": "Heure Dorée",
        "revolving": "En Révolution",
        "orbitPaused": "En Pause",
        "orbitHint": "Survoler ralentit l'orbite • Cliquer pour rebondir",
        "pantryTitle": "Garde-manger et Panier du Foyer",
        "savedLocally": "Enregistré localement",
        "pantryPlaceholder": "Ajouter provision ou thé...",
        "add": "Ajouter",
        "hearthKitchen": "Cuisine du Foyer",
        "grandmaChai": "Thé Chai au Safran et Cardamome de Grand-mère",
        "recipeSubtitle": "Rituel culinaire du soir • Touchez pour voir la recette",
        "oralHistoryArchive": "Histoire Orale et Registre Spatial",
        "momentsTitle": "Résonances Temporelles et Moments",
        "momentsDesc": "Souvenirs harmoniques, enregistrements d'histoire orale et cartographie familiale.",
        "allMoments": "Tous les Moments",
        "kineticTitle": "Flux de Mémoire Oscillant et Ligne Temporelle Ondulante",
        "kineticSubtitle": "Ondes harmoniques mathématiques • Perturbation du curseur • Clic crée une onde de choc",
        "activeResonance": "Résonance Active",
        "oralHistoryTape": "Bande d'Histoire Orale",
        "cardamomFig": "Secrets de Confiture de Figue et Cardamome",
        "recordedBy": "Enregistré par Elena avec Grand-mère Amira • Recette de 1988",
        "mapTitle": "Empreinte Géographique et Racines Familiales",
        "mapSub": "Repères familiaux interactifs • Intégration OpenStreetMap Leaflet",
        "wordsOfAncestors": "Paroles du Foyer",
        "refreshQuote": "Actualiser Citation",
        "vaultMainTitle": "Le Coffre et la Confiance Cryptographique",
        "vaultMainDesc": "Bouclier de sécurité domestique décentralisé, maillage cryptographique et archives familiales protégées.",
        "resyncMesh": "Resynchroniser Maillage",
        "depositRecord": "Déposer Document",
        "tapCypherCore": "Toucher Cœur Cryptographique",
        "guardianTitle": "État Gardien du Coffre Matériel",
        "guardianDesc": "État décentralisé en direct synchronisé sur maillage domestique à ultra-large bande.",
        "armored": "Blindé & Verrouillé",
        "keyActive": "Clé 44 Active",
        "encryptedArchive": "Archives de Documents Chiffrés",
        "protectedHeirlooms": "Documents essentiels et trésors familiaux protégés",
        "allRecords": "Tous les Documents",
        "deedsProperty": "Titres & Propriétés",
        "medicalHealth": "Santé & Médecine",
        "heirloomWills": "Testaments de Famille",
        "diplomas": "Diplômes",
        "addMemoModalTitle": "Ajouter une Note Vivante",
        "familyMember": "Membre de la Famille",
        "noteMessage": "Message de la Note",
        "notePlaceholder": "Écrivez une douce pensée, un rappel ou un mot doux...",
        "floatToSandbox": "Flotter sur le Tableau",
        "assignChoreModalTitle": "Attribuer une Tâche Ménagère",
        "choreDescription": "Description de la Tâche",
        "chorePlaceholder": "ex. Arroser le jasmin et la menthe du balcon",
        "familyAssignee": "Responsable",
        "priorityTag": "Niveau de Priorité",
        "addToRoster": "Ajouter au Registre",
        "depositModalTitle": "Déposer un Document Chiffré",
        "documentTitle": "Titre du Document",
        "archiveCategory": "Catégorie d'Archive",
        "encryptAndStore": "Chiffrer et Enregistrer",
        "rosterModalTitle": "Registre de la Famille Al-Rashid",
        "startGame": "Commencer le Jeu",
        "chooseChampion": "Choisissez votre Champion",
        "confirmChampion": "Confirmer le Champion",
        "close": "Fermer",
        "pause": "Pause",
        "resume": "Reprendre",
        "restart": "Recommencer",
        "score": "Score",
        "highScore": "Meilleur Score",
        "linesCleared": "Lignes Effacées",
        "biomeTier": "Niveau de Biome",
        "nextPiece": "Pièce Suivante"
    },
    "de": {
        "home": "Start",
        "hub": "Zentrum",
        "rhythm": "Rhythmus",
        "moments": "Momente",
        "vault": "Tresor",
        "hearthCraft": "HearthCraft",
        "cmdK": "Befehl K",
        "selectLanguage": "Sprache wählen",
        "languageSwitched": "Sprache auf Deutsch umgestellt",
        "chimeSent": "Familiengong an Tariq, Elena, Maya und Liam gesendet",
        "beaconSent": "Herzschlag-Signal auf allen Geräten empfangen",
        "searchPlaceholder": "Ziel oder Befehl eingeben...",
        "escToClose": "ESC zum Schließen",
        "domesticSanctuary": "Häusliches Refugium",
        "heroHeadline": "Häusliche Rhythmen, geteilte Erinnerungen & gemeinsames Leben.",
        "heroSubhead": "Ein geschütztes privates Refugium, in dem familiäre Aufgaben, emotionale Frequenzen und generationenübergreifende Archive harmonisch ineinandergreifen.",
        "sendChimePing": "Familiengong senden",
        "syncHearthBeacon": "Signal synchronisieren",
        "enterHousehold": "Haushalt betreten",
        "activeNodes": "4 Aktive Knoten",
        "obsidianCore": "Obsidian-Kernsicherheitsfeld",
        "zeroFriction": "Reibungslos",
        "livingMemosCardTitle": "Lebendige Notizen & Tresor",
        "livingMemosCardDesc": "Echtzeit-Aufgabensynchronisation, räumliche Vorratskammer und automatisch gemischtes Familien-Polaroid-Archiv.",
        "solarArcCardTitle": "Sonnenbogen-Rhythmus",
        "solarArcCardDesc": "Tägliche Familienumlaufbahnen zur Darstellung von Nähe, Aufgabenverteilung und harmonischen Zyklen.",
        "memoryMapCardTitle": "Erinnerungskartographie",
        "memoryMapCardDesc": "Geografische und chronologische Wegpunkte über Familienmeilensteine, Urlaube und generationelle Wurzeln.",
        "cypherCardTitle": "Kryptographischer Schutz",
        "cypherCardDesc": "Zero-Knowledge-verschlüsseltes Familienbuch, vertrauliche Urkunden und medizinische Notfallprotokolle.",
        "launchHub": "Zentrum öffnen",
        "viewCadence": "Rhythmus ansehen",
        "exploreTimeline": "Zeitachse erkunden",
        "accessVault": "Tresor öffnen",
        "hubSuperTitle": "Familien-Operationszentrum",
        "hubMainTitle": "Häusliche Operationsfläche",
        "syncBeacon": "Signal synchronisieren",
        "livingMemos": "Lebendige Notizen",
        "livingMemosSub": "Interaktive schwebende Notizen • Zum Neuanordnen ziehen",
        "addMemo": "Notiz hinzufügen",
        "vaultMemories": "Tresor-Erinnerungen",
        "vaultMemoriesSub": "Archivierte Familien-Polaroids • Automatisches Mischen",
        "shuffle": "Mischen",
        "autoShuffling": "Automatisches Mischen",
        "viewAllRecords": "Alle 182 Dokumente ansehen",
        "householdChores": "Haushaltsaufgaben",
        "hearthRoster": "Haushalts-Mitglieder",
        "dropVault": "Tresor-Ablage",
        "addChore": "Aufgabe zuweisen",
        "dropZoneText": "Familienunterlagen oder Polaroids hier ablegen",
        "dropZoneSub": "Lokale Zero-Knowledge-Verschlüsselung wird beim Empfang automatisch angewendet",
        "quickReactions": "Schnelle Familienreaktionen:",
        "reactionHeart": "Herz",
        "reactionRadiant": "Strahlend",
        "reactionWarmTea": "Warmer Tee",
        "reactionProud": "Stolz",
        "synchronyMeshActive": "Synchronitätsnetz Aktiv",
        "rhythmTitle": "Haushaltsrhythmus & Synchronität",
        "rhythmDesc": "Sanfte Tagesrhythmen, kulinarische Rituale und himmlische Synchronität.",
        "addCheckpoint": "Punkt hinzufügen",
        "solarArcSimulation": "Sonnenbogen-Simulation",
        "solarArcTitle": "Prozedurale Zeitschleife & Himmlischer Zyklus",
        "solarArcSubtitle": "Aufrecht fixierte Elemente • Elastischer Rückprall mit Kontaktfunken • Klicken zum Umkehren der Bahn",
        "tariqTrack": "Tariq (Äußere Bahn)",
        "mayaTrack": "Maya (Innere Bahn)",
        "liamTrack": "Liam (Äußere Bahn)",
        "elenaTrack": "Elena (Innere Bahn)",
        "solarArc": "Sonnenbogen",
        "goldenHour": "Goldene Stunde",
        "revolving": "In Umlauf",
        "orbitPaused": "Pausiert",
        "orbitHint": "Mauszeiger verlangsamt Orbit • Klicken zum Abprallen",
        "pantryTitle": "Vorratskammer & Haushaltskorb",
        "savedLocally": "Lokal gespeichert",
        "pantryPlaceholder": "Vorräte oder Tee hinzufügen...",
        "add": "Hinzufügen",
        "hearthKitchen": "Haushaltsküche",
        "grandmaChai": "Großmutters Safran-Kardamom-Chai",
        "recipeSubtitle": "Abendliches Kochritual • Tippen für Rezept",
        "oralHistoryArchive": "Mündliche Überlieferung & Raumbuch",
        "momentsTitle": "Zeitliche Resonanzen & Momente",
        "momentsDesc": "Harmonische Erinnerungen, Audioaufnahmen der Familiengeschichte und Karten.",
        "allMoments": "Alle Momente",
        "kineticTitle": "Schwingender Erinnerungsstrom & Wellenförmige Zeitachse",
        "kineticSubtitle": "Mathematische harmonische Wellen • Zeigerstörung • Klicken erzeugt Stoßwellen auf der Linie",
        "activeResonance": "Aktive Resonanz",
        "oralHistoryTape": "Tonband der Familiengeschichte",
        "cardamomFig": "Geheimnisse der Kardamom-Feigen-Konfitüre",
        "recordedBy": "Aufgenommen von Elena mit Oma Amira • Rezept von 1988",
        "mapTitle": "Geografischer Fußabdruck & Wurzeln",
        "mapSub": "Interaktive Familienstationen • OpenStreetMap Leaflet-Integration",
        "wordsOfAncestors": "Worte des Hauses",
        "refreshQuote": "Zitat erneuern",
        "vaultMainTitle": "Der Tresor & Kryptographisches Vertrauen",
        "vaultMainDesc": "Dezentraler Hausschirm, prozedurales Krypto-Geflecht und geschützte Familiendokumente.",
        "resyncMesh": "Netz resynchronisieren",
        "depositRecord": "Dokument hinterlegen",
        "tapCypherCore": "Krypto-Kern berühren",
        "guardianTitle": "Hardware-Tresorwächter-Zustand",
        "guardianDesc": "Dezentraler Live-Zustand, synchronisiert über das Ultra-Breitband-Haushaltsnetzwerk.",
        "armored": "Gepanzert & Gesichert",
        "keyActive": "Schlüssel 44 Aktiv",
        "encryptedArchive": "Verschlüsseltes Dokumentenarchiv",
        "protectedHeirlooms": "Geschützte Familienerbstücke und essentielle Urkunden",
        "allRecords": "Alle Dokumente",
        "deedsProperty": "Urkunden & Eigentum",
        "medicalHealth": "Medizin & Gesundheit",
        "heirloomWills": "Testamente & Nachlass",
        "diplomas": "Diplome & Zeugnisse",
        "addMemoModalTitle": "Lebendige Notiz hinzufügen",
        "familyMember": "Familienmitglied",
        "noteMessage": "Nachricht",
        "notePlaceholder": "Schreibe einen lieben Gedanken, eine Erinnerung oder Idee...",
        "floatToSandbox": "Auf Fläche schweben lassen",
        "assignChoreModalTitle": "Haushaltsaufgabe zuweisen",
        "choreDescription": "Aufgabenbeschreibung",
        "chorePlaceholder": "z.B. Jasmin und Minze auf dem Balkon gießen",
        "familyAssignee": "Zugewiesen an",
        "priorityTag": "Prioritäts-Tag",
        "addToRoster": "Zur Liste hinzufügen",
        "depositModalTitle": "Verschlüsseltes Dokument hinterlegen",
        "documentTitle": "Dokumententitel",
        "archiveCategory": "Archivkategorie",
        "encryptAndStore": "Verschlüsseln & Speichern",
        "rosterModalTitle": "Al-Rashid Familienmitglieder",
        "startGame": "Spiel starten",
        "chooseChampion": "Wähle deinen Champion",
        "confirmChampion": "Champion bestätigen",
        "close": "Schließen",
        "pause": "Pause",
        "resume": "Fortsetzen",
        "restart": "Neu starten",
        "score": "Punktzahl",
        "highScore": "Höchstpunktzahl",
        "linesCleared": "Gereinigte Linien",
        "biomeTier": "Biom-Stufe",
        "nextPiece": "Nächstes Teil"
    },
    "ja": {
        "home": "ホーム",
        "hub": "ハブ",
        "rhythm": "リズム",
        "moments": "モーメント",
        "vault": "保管庫",
        "hearthCraft": "ハースクラフト",
        "cmdK": "コマンド K",
        "selectLanguage": "言語を選択",
        "languageSwitched": "言語を日本語に切り替えました",
        "chimeSent": "タリク、エレナ、マヤ、リアムにチャイムを送信しました",
        "beaconSent": "全デバイスでハートビート信号を受信しました",
        "searchPlaceholder": "行き先やアクションを入力...",
        "escToClose": "ESCで閉じる",
        "domesticSanctuary": "家庭のサンクチュアリ",
        "heroHeadline": "家庭のリズム、共有される思い出、そして温かな共同生活。",
        "heroSubhead": "家族のタスク、感情の波長、代々の記録が摩擦なく調和する、神聖でプライベートな家庭運営の拠点。",
        "sendChimePing": "チャイムを鳴らす",
        "syncHearthBeacon": "ビーコンを同期",
        "enterHousehold": "家庭キャンバスを開く",
        "activeNodes": "4台の端末が接続中",
        "obsidianCore": "黒曜石コアシールド",
        "zeroFriction": "フリクションゼロ",
        "livingMemosCardTitle": "リビングメモ＆保管庫",
        "livingMemosCardDesc": "リアルタイムのタスク同期、持続可能な食材パントリー、自動シャッフルされるポラロイド保管庫。",
        "solarArcCardTitle": "ソーラーアークの歩調",
        "solarArcCardDesc": "家族の距離感、家事の歩調、調和のとれた周期を示す日々の家庭軌道。",
        "memoryMapCardTitle": "思い出の地図帳",
        "memoryMapCardDesc": "家族の節目、休暇、先祖のルーツを辿る地理的・年代記的な足跡。",
        "cypherCardTitle": "暗号化セキュリティ",
        "cypherCardDesc": "ゼロ知識証明で保護された家族台帳、機密書類、緊急時医療プロトコル。",
        "launchHub": "ハブを開く",
        "viewCadence": "歩調を確認",
        "exploreTimeline": "年表を探索",
        "accessVault": "保管庫へ入る",
        "hubSuperTitle": "ファミリー運営センター",
        "hubMainTitle": "家庭運営キャンバス",
        "syncBeacon": "ビーコン同期",
        "livingMemos": "リビングメモ",
        "livingMemosSub": "インタラクティブな付箋 • ドラッグで自由に並べ替え",
        "addMemo": "メモを追加",
        "vaultMemories": "保管庫の思い出",
        "vaultMemoriesSub": "家族のポラロイド写真 • 自動シャッフルデッキ",
        "shuffle": "シャッフル",
        "autoShuffling": "自動シャッフル中",
        "viewAllRecords": "全182件の記録を見る",
        "householdChores": "家事リスト",
        "hearthRoster": "家族名簿",
        "dropVault": "保管庫へ預託",
        "addChore": "家事を割り当て",
        "dropZoneText": "家族の書類やポラロイドをここにドロップ",
        "dropZoneSub": "受領と同時にゼロ知識ローカル暗号化が自動適用されます",
        "quickReactions": "クイック家族リアクション:",
        "reactionHeart": "ハート",
        "reactionRadiant": "輝き",
        "reactionWarmTea": "温かいお茶",
        "reactionProud": "誇り",
        "synchronyMeshActive": "同調メッシュ稼働中",
        "rhythmTitle": "家庭のリズムとシンクロ",
        "rhythmDesc": "穏やかな日々のリズム、料理の時間、そして温かな家族の調和。",
        "addCheckpoint": "予定を追加",
        "solarArcSimulation": "ソーラーアークシミュレーション",
        "solarArcTitle": "自律型タイムループと天体家庭周期",
        "solarArcSubtitle": "直立固定されたピル • 弾性バウンスと火花 • クリックで軌道を反転",
        "tariqTrack": "タリク (外周軌道)",
        "mayaTrack": "マヤ (内周軌道)",
        "liamTrack": "リアム (外周軌道)",
        "elenaTrack": "エレナ (内周軌道)",
        "solarArc": "ソーラーアーク",
        "goldenHour": "ゴールデンアワー",
        "revolving": "公転中",
        "orbitPaused": "一時停止中",
        "orbitHint": "ホバーで減速 • クリックで反転バウンス",
        "pantryTitle": "パントリー＆バスケット",
        "savedLocally": "ローカル保存済み",
        "pantryPlaceholder": "食材やお茶を追加...",
        "add": "追加",
        "hearthKitchen": "家庭の台所",
        "grandmaChai": "祖母のサフラン＆カルダモンチャイ",
        "recipeSubtitle": "夕方の料理の歩調 • タップしてレシピを見る",
        "oralHistoryArchive": "口述歴史と空間台帳",
        "momentsTitle": "時間の共鳴とモーメント",
        "momentsDesc": "調和のとれた思い出、口述歴史の録音、そして家族の地図帳。",
        "allMoments": "すべての瞬間",
        "kineticTitle": "振動する記憶のストリームと波打つタイムライン",
        "kineticSubtitle": "数学的和声波 • カーソル干渉 • クリックで衝撃波紋を生成",
        "activeResonance": "アクティブ共鳴",
        "oralHistoryTape": "口述歴史テープ",
        "cardamomFig": "カルダモンイチジク保存食の秘訣",
        "recordedBy": "エレナがアミラ祖母と録音 • 1988年のレシピ",
        "mapTitle": "思い出の足跡とルーツ",
        "mapSub": "インタラクティブな家族の足跡 • OpenStreetMap Leaflet連携",
        "wordsOfAncestors": "先祖の言葉",
        "refreshQuote": "名言を更新",
        "vaultMainTitle": "暗号保管庫とデジタル信頼",
        "vaultMainDesc": "分散型家庭セキュリティシールド、手続き型暗号メッシュ、保護された家族記録。",
        "resyncMesh": "メッシュを再同期",
        "depositRecord": "記録を預託",
        "tapCypherCore": "暗号コアをタップ",
        "guardianTitle": "ハードウェア保管庫ガーディアン状態",
        "guardianDesc": "超広帯域家庭メッシュ経由で同期されたリアルタイム分散状態。",
        "armored": "装甲ロック中",
        "keyActive": "キー44稼働中",
        "encryptedArchive": "暗号化ドキュメントアーカイブ",
        "protectedHeirlooms": "保護された家族の家宝と重要書類",
        "allRecords": "すべての記録",
        "deedsProperty": "権利書・不動産",
        "medicalHealth": "医療・健康記録",
        "heirloomWills": "家宝・遺言書",
        "diplomas": "修了証・学位記",
        "addMemoModalTitle": "リビングメモを追加",
        "familyMember": "家族メンバー",
        "noteMessage": "メッセージ内容",
        "notePlaceholder": "思いやりやメモ、家庭のアイデアを書いてください...",
        "floatToSandbox": "ボードに浮かべる",
        "assignChoreModalTitle": "家事を割り当てる",
        "choreDescription": "家事の内容",
        "chorePlaceholder": "例：バルコニーのジャスミンとミントの水やり",
        "familyAssignee": "担当者",
        "priorityTag": "優先度タグ",
        "addToRoster": "リストに追加",
        "depositModalTitle": "暗号化記録を預託する",
        "documentTitle": "書類のタイトル",
        "archiveCategory": "アーカイブ分類",
        "encryptAndStore": "暗号化して保存",
        "rosterModalTitle": "アル・ラシード家 名簿",
        "startGame": "ゲーム開始",
        "chooseChampion": "勇者を選択",
        "confirmChampion": "勇者を確定",
        "close": "閉じる",
        "pause": "一時停止",
        "resume": "再開",
        "restart": "リスタート",
        "score": "スコア",
        "highScore": "ハイスコア",
        "linesCleared": "クリアしたライン",
        "biomeTier": "バイオーム層",
        "nextPiece": "次のピース"
    },
    "hi": {
        "home": "होम",
        "hub": "हब",
        "rhythm": "ताल",
        "moments": "क्षण",
        "vault": "वॉल्ट",
        "hearthCraft": "हार्थक्राफ्ट",
        "cmdK": "कमांड K",
        "selectLanguage": "भाषा चुनें",
        "languageSwitched": "भाषा बदलकर हिंदी कर दी गई है",
        "chimeSent": "तारिक, एलेना, माया और लियाम को पारिवारिक चाइम भेजा गया",
        "beaconSent": "सभी उपकरणों पर दिल की धड़कन का संकेत प्राप्त हुआ",
        "searchPlaceholder": "गंतव्य या क्रिया टाइप करें...",
        "escToClose": "बंद करने के लिए ESC दबाएं",
        "domesticSanctuary": "घरेलू अभयारण्य",
        "heroHeadline": "घरेलू लय, साझा यादें और सामूहिक जीवन।",
        "heroSubhead": "एक पवित्र, निजी परिचालन अभयारण्य जहां पारिवारिक कार्य, भावनात्मक तरंगें और पैतृक अभिलेखागार बिना किसी घर्षण के आपस में जुड़ते हैं।",
        "sendChimePing": "चाइम पिंग भेजें",
        "syncHearthBeacon": "बीकन सिंक करें",
        "enterHousehold": "घर के कैनवास में प्रवेश करें",
        "activeNodes": "4 सक्रिय नोड्स",
        "obsidianCore": "ओब्सीडियन कोर शील्ड",
        "zeroFriction": "शून्य घर्षण",
        "livingMemosCardTitle": "जीवंत मेमो और वॉल्ट",
        "livingMemosCardDesc": "रीयल-टाइम कार्य सिंक्रनाइज़ेशन, स्थायी पेंट्री और स्वतः शफ़ल होने वाला पारिवारिक पोलरॉइड वॉल्ट।",
        "solarArcCardTitle": "सौर चाप ताल",
        "solarArcCardDesc": "पारिवारिक निकटता, काम की गति और मधुर लय दर्शाने वाली दैनिक घरेलू कक्षाएं।",
        "memoryMapCardTitle": "स्मृति मानचित्रण",
        "memoryMapCardDesc": "पारिवारिक मील के पत्थर, छुट्टियों और पूर्वजों की जड़ों के भौगोलिक और कालानुक्रमिक पदचिह्न।",
        "cypherCardTitle": "क्रिप्टोग्राफ़िक साइफ़र",
        "cypherCardDesc": "शून्य-ज्ञान एन्क्रिप्टेड पारिवारिक लेज़र, गोपनीय दस्तावेज़ और आपातकालीन स्वास्थ्य प्रोटोकॉल।",
        "launchHub": "हब खोलें",
        "viewCadence": "ताल देखें",
        "exploreTimeline": "समयरेखा देखें",
        "accessVault": "वॉल्ट खोलें",
        "hubSuperTitle": "पारिवारिक संचालन केंद्र",
        "hubMainTitle": "घरेलू संचालन कैनवास",
        "syncBeacon": "बीकन सिंक करें",
        "livingMemos": "जीवंत मेमो",
        "livingMemosSub": "इंटरैक्टिव फ्लोटिंग नोट्स • पुनर्व्यवस्थित करने के लिए खींचें",
        "addMemo": "नोट जोड़ें",
        "vaultMemories": "वॉल्ट की यादें",
        "vaultMemoriesSub": "संग्रहीत पारिवारिक पोलरॉइड • स्वतः शफ़ल होने वाला डेक",
        "shuffle": "शफ़ल करें",
        "autoShuffling": "स्वतः शफ़ल हो रहा है",
        "viewAllRecords": "सभी 182 रिकॉर्ड देखें",
        "householdChores": "घरेलू कार्य",
        "hearthRoster": "गृह रोस्टर",
        "dropVault": "वॉल्ट में डालें",
        "addChore": "कार्य सौंपें",
        "dropZoneText": "पारिवारिक रिकॉर्ड या पोलरॉइड यहाँ छोड़ें",
        "dropZoneSub": "प्राप्ति पर शून्य-ज्ञान स्थानीय एन्क्रिप्शन स्वचालित रूप से लागू होता है",
        "quickReactions": "त्वरित पारिवारिक प्रतिक्रियाएं:",
        "reactionHeart": "दिल",
        "reactionRadiant": "दीप्तिमान",
        "reactionWarmTea": "गर्म चाय",
        "reactionProud": "गर्व",
        "synchronyMeshActive": "तालमेल मेश सक्रिय",
        "rhythmTitle": "घरेलू लय और समन्वय",
        "rhythmDesc": "सौम्य दैनिक ताल, पाक कला लय और आकाशीय पारिवारिक समन्वय।",
        "addCheckpoint": "चेकपॉइंट जोड़ें",
        "solarArcSimulation": "सौर चाप अनुकरण",
        "solarArcTitle": "प्रक्रियात्मक टाइम-लूप और आकाशीय चक्र",
        "solarArcSubtitle": "सीधी लॉक की गई पिल्स • लोचदार बाउंस और संपर्क स्पार्क्स • कक्षा उलटने के लिए क्लिक करें",
        "tariqTrack": "तारिक (बाहरी ट्रैक)",
        "mayaTrack": "माया (आंतरिक ट्रैक)",
        "liamTrack": "लियाम (बाहरी ट्रैक)",
        "elenaTrack": "एलेना (आंतरिक ट्रैक)",
        "solarArc": "सौर चाप",
        "goldenHour": "स्वर्णिम पहर",
        "revolving": "घूम रहा है",
        "orbitPaused": "रुक गया है",
        "orbitHint": "होवर करने से गति धीमी होती है • बाउंस के लिए क्लिक करें",
        "pantryTitle": "पेंट्री और घरेलू टोकरी",
        "savedLocally": "स्थानीय रूप से सहेजा गया",
        "pantryPlaceholder": "सामग्री या चाय जोड़ें...",
        "add": "जोड़ें",
        "hearthKitchen": "पारिवारिक रसोई",
        "grandmaChai": "दादी की केसर-इलायची चाय",
        "recipeSubtitle": "शाम का पाक अनुष्ठान • रेसिपी देखने के लिए टैप करें",
        "oralHistoryArchive": "मौखिक इतिहास और स्थानिक लेज़र",
        "momentsTitle": "समय की प्रतिध्वनि और क्षण",
        "momentsDesc": "मधुर यादें, मौखिक इतिहास ऑडियो रिकॉर्डिंग और पारिवारिक मानचित्रण।",
        "allMoments": "सभी क्षण",
        "kineticTitle": "दोलनशील स्मृति धारा और लहरदार समयरेखा",
        "kineticSubtitle": "गणितीय तरंगें • कर्सर हलचल • क्लिक करने पर तरंगें उत्पन्न होती हैं",
        "activeResonance": "सक्रिय अनुनाद",
        "oralHistoryTape": "मौखिक इतिहास टेप",
        "cardamomFig": "इलायची अंजीर मुरब्बा के रहस्य",
        "recordedBy": "एलेना द्वारा दादी अमीरा के साथ रिकॉर्ड किया गया • 1988 की रेसिपी",
        "mapTitle": "भौगोलिक पदचिह्न और पारिवारिक जड़ें",
        "mapSub": "इंटरैक्टिव पारिवारिक पड़ाव • ओपनस्ट्रीटमैप लीफ़लेट एकीकरण",
        "wordsOfAncestors": "पूर्वजों के शब्द",
        "refreshQuote": "विचार ताज़ा करें",
        "vaultMainTitle": "वॉल्ट और क्रिप्टोग्राफ़िक विश्वास",
        "vaultMainDesc": "विकेंद्रीकृत घरेलू सुरक्षा शील्ड, प्रक्रियात्मक क्रिप्टोग्राफी मेश और संरक्षित पारिवारिक रिकॉर्ड।",
        "resyncMesh": "मेश पुनः सिंक करें",
        "depositRecord": "दस्तावेज़ जमा करें",
        "tapCypherCore": "साइफ़र कोर पर टैप करें",
        "guardianTitle": "हार्डवेयर वॉल्ट गार्जियन स्थिति",
        "guardianDesc": "घरेलू अल्ट्रा-वाइडबैंड मेश पर लाइव विकेंद्रीकृत स्थिति सिंक्रनाइज़ की गई।",
        "armored": "कवच बंद",
        "keyActive": "कुंजी 44 सक्रिय",
        "encryptedArchive": "एन्क्रिप्टेड दस्तावेज़ संग्रह",
        "protectedHeirlooms": "सुरक्षित पारिवारिक धरोहर और आवश्यक दस्तावेज़",
        "allRecords": "सभी रिकॉर्ड",
        "deedsProperty": "दस्तावेज़ और संपत्ति",
        "medicalHealth": "चिकित्सा और स्वास्थ्य",
        "heirloomWills": "पारिवारिक वसीयत",
        "diplomas": "डिप्लोमा और डिग्री",
        "addMemoModalTitle": "जीवंत मेमो जोड़ें",
        "familyMember": "परिवार का सदस्य",
        "noteMessage": "संदेश सामग्री",
        "notePlaceholder": "कोई कोमल विचार, अनुस्मारक या बात लिखें...",
        "floatToSandbox": "बोर्ड पर तैरने दें",
        "assignChoreModalTitle": "घरेलू कार्य सौंपें",
        "choreDescription": "कार्य विवरण",
        "chorePlaceholder": "उदा. बालकनी के चमेली और पुदीने को पानी दें",
        "familyAssignee": "जिम्मेदार सदस्य",
        "priorityTag": "प्राथमिकता टैग",
        "addToRoster": "रोस्टर में जोड़ें",
        "depositModalTitle": "एन्क्रिप्टेड रिकॉर्ड जमा करें",
        "documentTitle": "दस्तावेज़ शीर्षक",
        "archiveCategory": "संग्रह श्रेणी",
        "encryptAndStore": "एन्क्रिप्ट करें और सहेजें",
        "rosterModalTitle": "अल-रशीद परिवार रोस्टर",
        "startGame": "खेल शुरू करें",
        "chooseChampion": "अपना विजेता चुनें",
        "confirmChampion": "विजेता की पुष्टि करें",
        "close": "बंद करें",
        "pause": "विराम",
        "resume": "फिर से शुरू",
        "restart": "पुनः आरंभ करें",
        "score": "स्कोर",
        "highScore": "सर्वोच्च स्कोर",
        "linesCleared": "हटाई गई पंक्तियाँ",
        "biomeTier": "बायोम स्तर",
        "nextPiece": "अगला टुकड़ा"
    },
    "zh": {
        "home": "首页",
        "hub": "中心",
        "rhythm": "节奏",
        "moments": "瞬间",
        "vault": "保管库",
        "hearthCraft": "炉火方块",
        "cmdK": "指令 K",
        "selectLanguage": "选择语言",
        "languageSwitched": "语言已切换为中文",
        "chimeSent": "家庭提示音已发送给塔里克、埃琳娜、玛雅和利亚姆",
        "beaconSent": "所有设备均已接收心跳信号",
        "searchPlaceholder": "输入目的地或操作指令...",
        "escToClose": "按 ESC 关闭",
        "domesticSanctuary": "家庭避风港",
        "heroHeadline": "家庭节奏、共享记忆与温馨集体生活。",
        "heroSubhead": "神圣而私密的家庭运行空间，将家务分工、情感同频与家族档案无缝交织。",
        "sendChimePing": "发送温馨提示",
        "syncHearthBeacon": "同步家庭信号",
        "enterHousehold": "进入家庭画布",
        "activeNodes": "4个在线节点",
        "obsidianCore": "黑曜石核心护盾",
        "zeroFriction": "丝滑无阻",
        "livingMemosCardTitle": "灵动便签与宝库",
        "livingMemosCardDesc": "实时任务同步、持久化食材备忘以及自动洗牌的宝丽来回忆宝库。",
        "solarArcCardTitle": "日弧韵律步调",
        "solarArcCardDesc": "每日家庭轨道展示成员距离、家务进度与和谐共鸣周期。",
        "memoryMapCardTitle": "记忆地图足迹",
        "memoryMapCardDesc": "贯穿家庭重要时刻、度假旅行与祖辈根基的地理年代足迹。",
        "cypherCardTitle": "加密安全防护",
        "cypherCardDesc": "零知识加密家庭账本、机密文档与紧急健康保障协议。",
        "launchHub": "打开中心",
        "viewCadence": "查看步调",
        "exploreTimeline": "探索时间线",
        "accessVault": "访问保管库",
        "hubSuperTitle": "家庭运营中心",
        "hubMainTitle": "家庭运行画布",
        "syncBeacon": "同步信号",
        "livingMemos": "灵动便签",
        "livingMemosSub": "交互式漂浮便签 • 拖拽自由重新排列",
        "addMemo": "添加便签",
        "vaultMemories": "宝库回忆",
        "vaultMemoriesSub": "已归档家庭宝丽来 • 自动随机洗牌",
        "shuffle": "洗牌切换",
        "autoShuffling": "自动轮播中",
        "viewAllRecords": "查看全部182份记录",
        "householdChores": "家庭杂务",
        "hearthRoster": "家庭花名册",
        "dropVault": "存入保管库",
        "addChore": "分派家务",
        "dropZoneText": "将家庭档案或宝丽来拖放到此处",
        "dropZoneSub": "接收后自动应用零知识本地加密保护",
        "quickReactions": "家庭温馨快捷互动:",
        "reactionHeart": "爱心",
        "reactionRadiant": "光芒",
        "reactionWarmTea": "热茶",
        "reactionProud": "自豪",
        "synchronyMeshActive": "同频网络在线",
        "rhythmTitle": "家庭节奏与协调",
        "rhythmDesc": "温馨的日常节奏、烹饪韵律与和谐的天文家庭同步。",
        "addCheckpoint": "添加节点",
        "solarArcSimulation": "日弧天体模拟",
        "solarArcTitle": "自律时间回环与天体家庭周期",
        "solarArcSubtitle": "药丸锁定直立 • 弹性反弹接触火花 • 点击药丸反转轨道",
        "tariqTrack": "塔里克 (外层轨道)",
        "mayaTrack": "玛雅 (内层轨道)",
        "liamTrack": "利亚姆 (外层轨道)",
        "elenaTrack": "埃琳娜 (内层轨道)",
        "solarArc": "日弧",
        "goldenHour": "黄金时刻",
        "revolving": "公转运转中",
        "orbitPaused": "已暂停",
        "orbitHint": "悬停减缓公转 • 点击药丸反弹",
        "pantryTitle": "食品储藏与采购篮",
        "savedLocally": "已本地安全存储",
        "pantryPlaceholder": "添加食品物资或茶饮...",
        "add": "添加",
        "hearthKitchen": "家庭厨房",
        "grandmaChai": "祖母的藏红花豆蔻奶茶",
        "recipeSubtitle": "傍晚烹饪仪式 • 点击查看食谱",
        "oralHistoryArchive": "口述历史与空间账本",
        "momentsTitle": "时光共鸣与珍贵瞬间",
        "momentsDesc": "和谐记忆、口述历史录音与家庭地图足迹。",
        "allMoments": "所有瞬间",
        "kineticTitle": "振荡记忆流与波浪时间线",
        "kineticSubtitle": "数学调和波 • 光标扰动交互 • 点击产生波纹冲击波",
        "activeResonance": "共鸣在线",
        "oralHistoryTape": "口述历史磁带",
        "cardamomFig": "豆蔻无花果果酱秘方",
        "recordedBy": "埃琳娜与阿米拉奶奶录制 • 1988年食谱",
        "mapTitle": "地理足迹与家族发祥地",
        "mapSub": "交互式家庭足迹 • 基于OpenStreetMap Leaflet",
        "wordsOfAncestors": "先辈箴言",
        "refreshQuote": "刷新名言",
        "vaultMainTitle": "加密保管库与数字信任",
        "vaultMainDesc": "去中心化家庭安全防护盾、程序化加密网络与受保护的家庭记录。",
        "resyncMesh": "重新同步网络",
        "depositRecord": "存入记录",
        "tapCypherCore": "轻触加密核心",
        "guardianTitle": "硬件保险库守护状态",
        "guardianDesc": "通过家庭超宽带网络同步的实时去中心化状态。",
        "armored": "装甲锁定保护",
        "keyActive": "密钥 44 激活",
        "encryptedArchive": "加密文档档案库",
        "protectedHeirlooms": "受保护的家族传家宝与重要文件",
        "allRecords": "所有记录",
        "deedsProperty": "地契与产权",
        "medicalHealth": "医疗与健康",
        "heirloomWills": "家族遗嘱",
        "diplomas": "毕业文凭",
        "addMemoModalTitle": "添加灵动便签",
        "familyMember": "家庭成员",
        "noteMessage": "便签内容",
        "notePlaceholder": "写下一句暖心话语、备忘提醒或生活灵感...",
        "floatToSandbox": "漂浮到画布",
        "assignChoreModalTitle": "分派家庭杂务",
        "choreDescription": "家务描述",
        "chorePlaceholder": "例：照看阳台上的茉莉花与薄荷",
        "familyAssignee": "执行成员",
        "priorityTag": "优先级标签",
        "addToRoster": "加入任务表",
        "depositModalTitle": "存入加密机密文档",
        "documentTitle": "文档名称",
        "archiveCategory": "档案类别",
        "encryptAndStore": "加密并存储",
        "rosterModalTitle": "阿尔·拉希德家族名册",
        "startGame": "开始游戏",
        "chooseChampion": "选择你的勇士",
        "confirmChampion": "确认勇士",
        "close": "关闭",
        "pause": "暂停",
        "resume": "继续",
        "restart": "重新开始",
        "score": "得分",
        "highScore": "最高得分",
        "linesCleared": "消除行数",
        "biomeTier": "生态层级",
        "nextPiece": "下一方块"
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

    const navItems = {
      home: dict.home,
      hub: dict.hub,
      rhythm: dict.rhythm,
      moments: dict.moments,
      vault: dict.vault,
      tetris: dict.hearthCraft
    };
    Object.keys(navItems).forEach(function(key) {
      document.querySelectorAll('.nav-item[data-view="' + key + '"]').forEach(function(el) {
        el.textContent = navItems[key];
      });
    });

    document.querySelectorAll('#search-trigger-btn span:last-child').forEach(function(el) {
      el.textContent = dict.cmdK;
    });
    const cmdInput = document.getElementById('cmd-input');
    if (cmdInput) cmdInput.placeholder = dict.searchPlaceholder;

    document.querySelectorAll('.overline-marker span:last-child').forEach(function(el) {
      el.textContent = dict.domesticSanctuary;
    });

    document.querySelectorAll('.hero-headline').forEach(function(el) {
      if (lang === 'ar') {
        el.innerHTML = 'إيقاعات عائلية، <span class="wavy-accent">وذكريات مشتركة</span> وحياة مترابطة.';
      } else if (lang === 'en') {
        el.innerHTML = 'Domestic rhythms, <span class="wavy-accent">shared memory</span> &amp; collective living.';
      } else {
        el.textContent = dict.heroHeadline;
      }
    });

    document.querySelectorAll('.hero-subhead').forEach(function(el) {
      el.textContent = dict.heroSubhead;
    });

    document.querySelectorAll('[data-jump="hub"] span:first-child').forEach(function(el) {
      el.textContent = dict.enterHousehold;
    });

    document.querySelectorAll('#hero-quick-ping-btn').forEach(function(btn) {
      const icon = btn.querySelector('.material-symbols-outlined');
      const iconHtml = icon ? icon.outerHTML : '';
      btn.innerHTML = iconHtml + ' <span>' + dict.sendChimePing + '</span>';
    });

    document.querySelectorAll('#hero-sync-beacon-btn').forEach(function(btn) {
      const icon = btn.querySelector('.material-symbols-outlined');
      const iconHtml = icon ? icon.outerHTML : '';
      btn.innerHTML = iconHtml + ' <span>' + dict.syncHearthBeacon + '</span>';
    });

    const pulsePills = document.querySelectorAll('.pulse-pill');
    if (pulsePills.length >= 3) {
      const p0 = pulsePills[0].querySelector('span:last-child');
      if (p0) p0.textContent = dict.activeNodes;
      const p1 = pulsePills[1].querySelector('span:last-child');
      if (p1) p1.textContent = dict.obsidianCore;
      const p2 = pulsePills[2].querySelector('span:last-child');
      if (p2) p2.textContent = dict.zeroFriction;
    }

    const heroCards = document.querySelectorAll('.hero-feature-card');
    if (heroCards.length >= 4) {
      const titles = [dict.livingMemosCardTitle, dict.solarArcCardTitle, dict.memoryMapCardTitle, dict.cypherCardTitle];
      const descs = [dict.livingMemosCardDesc, dict.solarArcCardDesc, dict.memoryMapCardDesc, dict.cypherCardDesc];
      const tags = [dict.launchHub, dict.viewCadence, dict.exploreTimeline, dict.accessVault];
      for (let i = 0; i < 4; i++) {
        const t = heroCards[i].querySelector('h2, h3');
        if (t) t.textContent = titles[i];
        const d = heroCards[i].querySelector('p');
        if (d) d.textContent = descs[i];
        const tag = heroCards[i].querySelector('.feature-card-tag');
        if (tag) tag.innerHTML = tags[i] + ' <span class="material-symbols-outlined" style="font-size: 14px;">arrow_forward</span>';
      }
    }

    document.querySelectorAll('.hub-supertitle').forEach(function(el) {
      el.textContent = dict.hubSuperTitle;
    });
    document.querySelectorAll('.hub-maintitle').forEach(function(el) {
      el.textContent = dict.hubMainTitle;
    });
    document.querySelectorAll('#beacon-sync-btn span:last-child').forEach(function(el) {
      el.textContent = dict.syncBeacon;
    });
    document.querySelectorAll('.memo-sandbox-card .memo-card-title').forEach(function(el) {
      el.textContent = dict.livingMemos;
    });
    document.querySelectorAll('.memo-sandbox-card .memo-card-header span:not(.memo-card-title)').forEach(function(el) {
      el.textContent = dict.livingMemosSub;
    });
    document.querySelectorAll('#add-memo-btn span:last-child').forEach(function(el) {
      el.textContent = dict.addMemo;
    });
    document.querySelectorAll('.vault-memory-card .memo-card-title').forEach(function(el) {
      el.textContent = dict.vaultMemories;
    });
    document.querySelectorAll('.vault-memory-card .vault-card-header span:not(.memo-card-title)').forEach(function(el) {
      el.textContent = dict.vaultMemoriesSub;
    });
    document.querySelectorAll('#vault-shuffle-manual span:last-child').forEach(function(el) {
      el.textContent = dict.shuffle;
    });
    const shuffleStatus = document.getElementById('shuffle-status-text');
    if (shuffleStatus) shuffleStatus.textContent = dict.autoShuffling;
    document.querySelectorAll('.shuffle-footer button[data-jump="vault"] span:first-child').forEach(function(el) {
      el.textContent = dict.viewAllRecords;
    });
    document.querySelectorAll('.workspace-tab-btn[data-tab="chores"]').forEach(function(el) {
      el.textContent = dict.householdChores;
    });
    document.querySelectorAll('.workspace-tab-btn[data-tab="roster"]').forEach(function(el) {
      el.textContent = dict.hearthRoster;
    });
    document.querySelectorAll('.workspace-tab-btn[data-tab="deposit"]').forEach(function(el) {
      el.textContent = dict.dropVault;
    });
    document.querySelectorAll('#add-chore-btn span:last-child').forEach(function(el) {
      el.textContent = dict.addChore;
    });
    document.querySelectorAll('.drop-zone-text').forEach(function(el) {
      el.textContent = dict.dropZoneText;
    });
    document.querySelectorAll('.drop-zone-subtext').forEach(function(el) {
      el.textContent = dict.dropZoneSub;
    });
    document.querySelectorAll('.reactions-cluster > span').forEach(function(el) {
      el.textContent = dict.quickReactions;
    });
    const reactionBtns = document.querySelectorAll('.ping-reaction-btn');
    if (reactionBtns.length >= 4) {
      const rxLabels = [dict.reactionHeart, dict.reactionRadiant, dict.reactionWarmTea, dict.reactionProud];
      for (let i = 0; i < 4; i++) {
        const textSpan = reactionBtns[i].querySelector('span:not(.reaction-count)');
        if (textSpan) textSpan.textContent = rxLabels[i];
      }
    }

    document.querySelectorAll('.rhythm-title').forEach(function(el) {
      el.textContent = dict.rhythmTitle;
    });
    document.querySelectorAll('.rhythm-desc').forEach(function(el) {
      el.textContent = dict.rhythmDesc;
    });
    document.querySelectorAll('#add-checkpoint-btn span:last-child').forEach(function(el) {
      el.textContent = dict.addCheckpoint;
    });
    document.querySelectorAll('.orbit-card-header .badge').forEach(function(el) {
      el.textContent = dict.solarArcSimulation;
    });
    document.querySelectorAll('.orbit-card-title').forEach(function(el) {
      el.textContent = dict.solarArcTitle;
    });
    document.querySelectorAll('.orbit-card-subtitle').forEach(function(el) {
      el.textContent = dict.solarArcSubtitle;
    });
    document.querySelectorAll('.telemetry-pill[data-target-member="tariq"] span:last-child').forEach(function(el) {
      el.textContent = dict.tariqTrack;
    });
    document.querySelectorAll('.telemetry-pill[data-target-member="maya"] span:last-child').forEach(function(el) {
      el.textContent = dict.mayaTrack;
    });
    document.querySelectorAll('.telemetry-pill[data-target-member="liam"] span:last-child').forEach(function(el) {
      el.textContent = dict.liamTrack;
    });
    document.querySelectorAll('.telemetry-pill[data-target-member="elena"] span:last-child').forEach(function(el) {
      el.textContent = dict.elenaTrack;
    });
    document.querySelectorAll('.solar-status').forEach(function(el) {
      el.textContent = dict.goldenHour;
    });
    const orbitStatus = document.getElementById('orbit-status-label');
    if (orbitStatus) {
      orbitStatus.textContent = orbitStatus.textContent.toLowerCase().includes('paused') ? dict.orbitPaused : dict.revolving;
    }
    document.querySelectorAll('.orbit-controls-bar .orbit-ctrl-group:last-child span:last-child').forEach(function(el) {
      el.textContent = dict.orbitHint;
    });
    document.querySelectorAll('.pantry-card .pantry-title').forEach(function(el) {
      el.textContent = dict.pantryTitle;
    });
    document.querySelectorAll('.pantry-card .pantry-header span:not(.pantry-counter)').forEach(function(el) {
      el.textContent = dict.savedLocally;
    });
    const pantryInput = document.getElementById('pantry-input');
    if (pantryInput) pantryInput.placeholder = dict.pantryPlaceholder;
    document.querySelectorAll('#pantry-add-form button[type="submit"]').forEach(function(el) {
      el.textContent = dict.add;
    });
    document.querySelectorAll('.recipe-drawer-card .badge').forEach(function(el) {
      el.textContent = dict.hearthKitchen;
    });
    document.querySelectorAll('.recipe-drawer-card .pantry-title').forEach(function(el) {
      el.textContent = dict.grandmaChai;
    });
    document.querySelectorAll('.recipe-drawer-card .recipe-trigger-btn span:nth-child(3)').forEach(function(el) {
      el.textContent = dict.recipeSubtitle;
    });

    document.querySelectorAll('.moments-supertitle').forEach(function(el) {
      el.textContent = dict.oralHistoryArchive;
    });
    document.querySelectorAll('.moments-title').forEach(function(el) {
      el.textContent = dict.momentsTitle;
    });
    document.querySelectorAll('.moments-desc').forEach(function(el) {
      el.textContent = dict.momentsDesc;
    });
    document.querySelectorAll('.filter-chips-row button[data-filter="all"]').forEach(function(el) {
      el.textContent = dict.allMoments;
    });
    document.querySelectorAll('.kinetic-title').forEach(function(el) {
      el.textContent = dict.kineticTitle;
    });
    document.querySelectorAll('.kinetic-subtitle').forEach(function(el) {
      el.textContent = dict.kineticSubtitle;
    });
    const streamStatus = document.getElementById('stream-status');
    if (streamStatus) streamStatus.textContent = dict.activeResonance;
    document.querySelectorAll('.audio-title-group .badge').forEach(function(el) {
      el.textContent = dict.oralHistoryTape;
    });
    document.querySelectorAll('.audio-title').forEach(function(el) {
      el.textContent = dict.cardamomFig;
    });
    document.querySelectorAll('.audio-narrator').forEach(function(el) {
      el.textContent = dict.recordedBy;
    });
    document.querySelectorAll('.map-title').forEach(function(el) {
      el.textContent = dict.mapTitle;
    });
    document.querySelectorAll('.cartography-card .card-header span:last-child').forEach(function(el) {
      el.textContent = dict.mapSub;
    });
    document.querySelectorAll('.quote-tag span:last-child').forEach(function(el) {
      el.textContent = dict.wordsOfAncestors;
    });
    document.querySelectorAll('#refresh-quote-btn').forEach(function(btn) {
      btn.title = dict.refreshQuote;
    });

    document.querySelectorAll('.vault-title').forEach(function(el) {
      el.textContent = dict.vaultMainTitle;
    });
    document.querySelectorAll('.vault-desc').forEach(function(el) {
      el.textContent = dict.vaultMainDesc;
    });
    document.querySelectorAll('#resync-mesh-btn span:last-child').forEach(function(el) {
      el.textContent = dict.resyncMesh;
    });
    document.querySelectorAll('#deposit-record-btn span:last-child').forEach(function(el) {
      el.textContent = dict.depositRecord;
    });
    document.querySelectorAll('.vault-core-hint').forEach(function(el) {
      el.textContent = dict.tapCypherCore;
    });
    document.querySelectorAll('.guardian-title').forEach(function(el) {
      el.textContent = dict.guardianTitle;
    });
    document.querySelectorAll('.guardian-desc').forEach(function(el) {
      el.textContent = dict.guardianDesc;
    });
    const lockText = document.getElementById('lockStatusText');
    if (lockText) {
      lockText.textContent = lockText.textContent.includes('44') ? dict.keyActive : dict.armored;
    }
    document.querySelectorAll('.archive-title').forEach(function(el) {
      el.textContent = dict.encryptedArchive;
    });
    document.querySelectorAll('.archive-header > div > span').forEach(function(el) {
      el.textContent = dict.protectedHeirlooms;
    });
    document.querySelectorAll('.archive-filter-tab[data-filter="all"]').forEach(function(el) {
      el.textContent = dict.allRecords;
    });
    document.querySelectorAll('.archive-filter-tab[data-filter="deeds"]').forEach(function(el) {
      el.textContent = dict.deedsProperty;
    });
    document.querySelectorAll('.archive-filter-tab[data-filter="medical"]').forEach(function(el) {
      el.textContent = dict.medicalHealth;
    });
    document.querySelectorAll('.archive-filter-tab[data-filter="wills"]').forEach(function(el) {
      el.textContent = dict.heirloomWills;
    });
    document.querySelectorAll('.archive-filter-tab[data-filter="diplomas"]').forEach(function(el) {
      el.textContent = dict.diplomas;
    });

    const addMemoTitle = document.getElementById('add-memo-title');
    if (addMemoTitle) addMemoTitle.textContent = dict.addMemoModalTitle;
    const memoText = document.getElementById('memo-text-input');
    if (memoText) memoText.placeholder = dict.notePlaceholder;
    document.querySelectorAll('#add-memo-form button[type="submit"]').forEach(function(btn) {
      btn.textContent = dict.floatToSandbox;
    });

    const addChoreTitle = document.getElementById('add-chore-title');
    if (addChoreTitle) addChoreTitle.textContent = dict.assignChoreModalTitle;
    const choreInput = document.getElementById('chore-title-input');
    if (choreInput) choreInput.placeholder = dict.chorePlaceholder;
    document.querySelectorAll('#add-chore-form button[type="submit"]').forEach(function(btn) {
      btn.textContent = dict.addToRoster;
    });

    const depositTitle = document.getElementById('deposit-modal-title');
    if (depositTitle) depositTitle.textContent = dict.depositModalTitle;
    document.querySelectorAll('#deposit-form button[type="submit"]').forEach(function(btn) {
      btn.textContent = dict.encryptAndStore;
    });

    const rosterTitle = document.getElementById('profile-modal-title');
    if (rosterTitle) rosterTitle.textContent = dict.rosterModalTitle;

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

    if (!translateBtn || !translateMenu) return;

    translateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = translateMenu.classList.contains('open');
      translateMenu.classList.toggle('open', !isOpen);
      translateBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });

    translateMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      const btn = e.target.closest('.lang-option');
      if (!btn) return;
      const lang = btn.getAttribute('data-lang');
      if (lang && dictionary[lang]) {
        applyLanguage(lang);
        translateMenu.classList.remove('open');
        translateBtn.setAttribute('aria-expanded', 'false');
        if (window.showToast) {
          window.showToast(dictionary[lang].languageSwitched, 'translate');
        }
      }
    });

    document.addEventListener('click', function(e) {
      if (!translateMenu.contains(e.target) && e.target !== translateBtn && !translateBtn.contains(e.target)) {
        translateMenu.classList.remove('open');
        translateBtn.setAttribute('aria-expanded', 'false');
      }
    });

    applyLanguage(currentLang);
  }

  window.setAqaaribLanguage = applyLanguage;
  window.getAqaaribLanguage = function() { return currentLang; };

  document.addEventListener('DOMContentLoaded', initTranslateUI);
  window.addEventListener('viewchanged', function() {
    applyLanguage(currentLang);
  });
})();
