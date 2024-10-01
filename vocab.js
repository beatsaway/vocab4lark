const vocabData = [
  {
    chapter: 0,
      words: [
        { word: "whining", explanation: "Making a long, high-pitched complaining sound", ukrainian: "Скиглення", malay: "Merengek", turkish: "Sızlanma", pashto: "ژړا", albanian: "Vajtim" },
        { word: "vanished", explanation: "Disappeared suddenly and completely", ukrainian: "Зник", malay: "Lenyap", turkish: "Kayboldu", pashto: "ورک شو", albanian: "U zhduk" },
        { word: "skeletons", explanation: "The internal framework of bones of a vertebrate", ukrainian: "Скелети", malay: "Rangka", turkish: "İskeletler", pashto: "هډوکي", albanian: "Skeletë" },
        { word: "weirdest", explanation: "Most strange, bizarre, or unusual", ukrainian: "Найдивніший", malay: "Paling pelik", turkish: "En tuhaf", pashto: "تر ټولو عجیب", albanian: "Më i çuditshmi" },
        { word: "portage", explanation: "The carrying of boats or goods between navigable waters", ukrainian: "Волок", malay: "Pemindahan", turkish: "Taşıma", pashto: "لېږد", albanian: "Bartje" },
        { word: "snapping", explanation: "Making a sharp cracking sound", ukrainian: "Клацання", malay: "Menjentik", turkish: "Çıtırdama", pashto: "ټک کول", albanian: "Kërcitje" },
        { word: "mouthful", explanation: "The amount of food that fills the mouth", ukrainian: "Повний рот", malay: "Sesuap penuh", turkish: "Ağız dolusu", pashto: "خوله ډکه", albanian: "Gojë plot" },
        { word: "thrust", explanation: "Push suddenly or violently in a specified direction", ukrainian: "Поштовх", malay: "Menolak", turkish: "İtme", pashto: "ټیل وهل", albanian: "Shtytje" },
        { word: "snarled", explanation: "Made an angry, threatening sound", ukrainian: "Гарчав", malay: "Menggeram", turkish: "Hırladı", pashto: "غړمبېدل", albanian: "Hungëroi" },
        { word: "muddy", explanation: "Covered in or full of mud", ukrainian: "Брудний", malay: "Berlumpur", turkish: "Çamurlu", pashto: "خټین", albanian: "Baltosur" },
        { word: "otherwise", explanation: "In circumstances different from those present or considered", ukrainian: "Інакше", malay: "Sebaliknya", turkish: "Aksi takdirde", pashto: "په بل ډول", albanian: "Përndryshe" },
        { word: "nonsense", explanation: "Foolish or unacceptable behavior", ukrainian: "Нісенітниця", malay: "Omong kosong", turkish: "Saçmalık", pashto: "بې معنی", albanian: "Marrëzi" },
        { word: "sod", explanation: "A piece of grass and the soil beneath it held together by roots", ukrainian: "Дерен", malay: "Tanah berumput", turkish: "Çim", pashto: "چمن", albanian: "Lëndinë" },
        { word: "spluttering", explanation: "Making a series of short, explosive spitting or choking sounds", ukrainian: "Булькотіння", malay: "Tersedak-sedak", turkish: "Tükürürcesine konuşma", pashto: "ټوخېدل", albanian: "Duke u mbytur" },
        { word: "daft", explanation: "Silly; foolish", ukrainian: "Дурний", malay: "Bodoh", turkish: "Aptal", pashto: "احمق", albanian: "Budalla" },
        { word: "snot", explanation: "Nasal mucus", ukrainian: "Шмарклі", malay: "Hingus", turkish: "Sümük", pashto: "پوزې", albanian: "Hundë" },
        { word: "shoved", explanation: "Pushed roughly", ukrainian: "Штовхнув", malay: "Menolak", turkish: "İtti", pashto: "ټېل وهل", albanian: "Shtyu" },
        { word: "scampered", explanation: "Ran with quick light steps", ukrainian: "Дременув", malay: "Bergegas", turkish: "Koşturdu", pashto: "منډې وهل", albanian: "Vrapoi" },
        { word: "hardness", explanation: "The quality of being solid, firm, and resistant to pressure", ukrainian: "Твердість", malay: "Kekerasan", turkish: "Sertlik", pashto: "کلکوالی", albanian: "Fortësi" },
        { word: "expecting", explanation: "Regarding something as likely to happen", ukrainian: "Очікування", malay: "Mengharapkan", turkish: "Beklemek", pashto: "تمه لرل", albanian: "Duke pritur" },
        { word: "distance", explanation: "The amount of space between two things or people", ukrainian: "Відстань", malay: "Jarak", turkish: "Mesafe", pashto: "واټن", albanian: "Distancë" }
    ]
  },
  {
    chapter: 1,
    words: [
      { word: "stroll", explanation: "A leisurely walk", ukrainian: "Прогулянка", malay: "Berjalan santai", turkish: "Gezinti", pashto: "ګرځېدل", albanian: "Shëtitje" },
      { word: "lark", explanation: "A small ground-dwelling songbird", ukrainian: "Жайворонок", malay: "Burung lark", turkish: "Tarlakuşu", pashto: "چرګ", albanian: "Laverthi" },
      { word: "scramble", explanation: "Move quickly with difficulty", ukrainian: "Дряпатися", malay: "Merangkak", turkish: "Tırmanmak", pashto: "په تیزۍ سره خوځېدل", albanian: "Ngjitje e shpejtë" },
      { word: "knackered", explanation: "Extremely tired", ukrainian: "Виснажений", malay: "Sangat penat", turkish: "Bitkin", pashto: "ډېر ستړی", albanian: "I rraskapitur" },
      { word: "nipper", explanation: "A young child (informal)", ukrainian: "Малюк", malay: "Budak", turkish: "Çocuk", pashto: "ماشوم", albanian: "Fëmijë" },
      { word: "moors", explanation: "Open uncultivated upland areas", ukrainian: "Пустища", malay: "Padang rumput", turkish: "Fundalık", pashto: "لوړې ځمکې", albanian: "Toka të larta" },
      { word: "traced", explanation: "Found or discovered by investigation", ukrainian: "Простежив", malay: "Menjejaki", turkish: "İzini sürdü", pashto: "پیدا کړل", albanian: "Gjurmoi" },
      { word: "curved", explanation: "Having a rounded or bent shape", ukrainian: "Вигнутий", malay: "Melengkung", turkish: "Eğri", pashto: "کږ", albanian: "I lakuar" },
      { word: "set off", explanation: "Begin a journey", ukrainian: "Вирушити", malay: "Bertolak", turkish: "Yola çıkmak", pashto: "روانېدل", albanian: "Nisur" },
      { word: "crammed", explanation: "Filled to capacity", ukrainian: "Напханий", malay: "Sesak", turkish: "Tıka basa dolu", pashto: "ډک", albanian: "I mbushur plot" }
    ]
  },
  {
    chapter: 2,
    words: [
      { word: "dangling", explanation: "Hanging or swinging loosely", ukrainian: "Теліпання", malay: "Tergantung", turkish: "Sallanan", pashto: "ځړېدل", albanian: "Varur" },
      { word: "tartan", explanation: "A woolen cloth with a distinctive pattern of colored stripes", ukrainian: "Тартан", malay: "Kain tartan", turkish: "Ekose", pashto: "ټارټن", albanian: "Tartan" },
      { word: "grumpy", explanation: "Bad-tempered and irritable", ukrainian: "Буркотливий", malay: "Pemarah", turkish: "Huysuz", pashto: "بد مزاجه", albanian: "I paqejf" },
      { word: "fluffy", explanation: "Covered with or resembling fluff", ukrainian: "Пухнастий", malay: "Berbulu halus", turkish: "Tüylü", pashto: "پستکی", albanian: "I pushpushur" },
      { word: "sniffed", explanation: "Smelled something by inhaling through the nose", ukrainian: "Понюхав", malay: "Menghidu", turkish: "Kokladı", pashto: "بوی کړ", albanian: "Nuajtur" },
      { word: "proper", explanation: "Genuine or real", ukrainian: "Належний", malay: "Betul", turkish: "Doğru", pashto: "سم", albanian: "I duhur" },
      { word: "jolly", explanation: "Happy and cheerful", ukrainian: "Веселий", malay: "Riang", turkish: "Neşeli", pashto: "خوشحاله", albanian: "I gëzuar" },
      { word: "screwed up", explanation: "Made a mistake or ruined something", ukrainian: "Зіпсував", malay: "Tersalah", turkish: "Berbat etti", pashto: "خراب کړل", albanian: "Prishi" },
      { word: "filthy", explanation: "Disgustingly dirty", ukrainian: "Брудний", malay: "Sangat kotor", turkish: "Pis", pashto: "چټل", albanian: "I ndyrë" },
      { word: "nodded", explanation: "Inclined one's head briefly as a sign of agreement", ukrainian: "Кивнув", malay: "Mengangguk", turkish: "Başını salladı", pashto: "سر وخوځاوه", albanian: "Tundi kokën" }
    ]
  },
  {
    chapter: 3,
    words: [
      { word: "thundering", explanation: "Making a loud, resonant sound", ukrainian: "Гуркотливий", malay: "Menggelegar", turkish: "Gürleyen", pashto: "غړمبېدونکی", albanian: "Gjëmues" },
      { word: "lark", explanation: "A small ground-dwelling songbird", ukrainian: "Жайворонок", malay: "Burung lark", turkish: "Tarlakuşu", pashto: "چرګ", albanian: "Laverthi" },
      { word: "alone", explanation: "Having no one else present", ukrainian: "Самотній", malay: "Sendirian", turkish: "Yalnız", pashto: "یوازې", albanian: "Vetëm" },
      { word: "sparrowhawk", explanation: "A small hawk with short broad wings", ukrainian: "Яструб", malay: "Helang belalang", turkish: "Atmaca", pashto: "باز", albanian: "Skifter" },
      { word: "animal refuge", explanation: "A place where animals are protected and cared for", ukrainian: "Притулок для тварин", malay: "Tempat perlindungan haiwan", turkish: "Hayvan barınağı", pashto: "د حیواناتو پناه ځای", albanian: "Strehë kafshësh" },
      { word: "bleak", explanation: "Cold and miserable; bare and inhospitable", ukrainian: "Похмурий", malay: "Suram", turkish: "Kasvetli", pashto: "تیاره", albanian: "I zymtë" },
      { word: "node", explanation: "A point of connection or intersection", ukrainian: "Вузол", malay: "Nod", turkish: "Düğüm", pashto: "غوټه", albanian: "Nyje" },
      { word: "ploughed", explanation: "Turned up the earth with a plow", ukrainian: "Зорав", malay: "Membajak", turkish: "Sürülmüş", pashto: "قلبه کړل", albanian: "Lëruar" },
      { word: "steadily", explanation: "In a regular and continuous manner", ukrainian: "Постійно", malay: "Dengan tetap", turkish: "Kararlı bir şekilde", pashto: "په دوامداره توګه", albanian: "Vazhdimisht" },
      { word: "seeped", explanation: "Slowly flowed or oozed through", ukrainian: "Просочився", malay: "Meresap", turkish: "Sızdı", pashto: "څڅېدل", albanian: "U përshkoi" },
      { word: "scarves", explanation: "Lengths or squares of fabric worn around the neck or head", ukrainian: "Шарфи", malay: "Selendang", turkish: "Atkılar", pashto: "شالونه", albanian: "Shalle" },
      { word: "scrawny", explanation: "Unattractively thin and bony", ukrainian: "Худорлявий", malay: "Kurus kering", turkish: "Sıska", pashto: "ډنګر", albanian: "I dobët" },
      { word: "spades", explanation: "Tools for digging with a sharp-edged, typically rectangular blade", ukrainian: "Лопати", malay: "Sekop", turkish: "Kürekler", pashto: "بېلونه", albanian: "Lopata" },
      { word: "cuddle", explanation: "Hold close in one's arms as a way of showing love or affection", ukrainian: "Обійми", malay: "Pelukan", turkish: "Kucaklaşma", pashto: "غېږ نیول", albanian: "Përqafim" }
    ]
  },
  {
    chapter: 4,
    words: [
      { word: "sniff", explanation: "Draw air audibly up the nose to detect a smell", ukrainian: "Нюхати", malay: "Menghidu", turkish: "Koklamak", pashto: "بوی کول", albanian: "Nuhatje" },
      { word: "peed", explanation: "Urinated (informal)", ukrainian: "Помочився", malay: "Kencing", turkish: "İşedi", pashto: "تشو متیازو کول", albanian: "Urinuar" },
      { word: "witty", explanation: "Clever and humorous", ukrainian: "Дотепний", malay: "Jenaka", turkish: "Esprili", pashto: "هوښیار", albanian: "I mprehtë" },
      { word: "snap off", explanation: "Break or remove something quickly and sharply", ukrainian: "Відламати", malay: "Mematahkan", turkish: "Koparıp almak", pashto: "په چټکۍ سره ماتول", albanian: "Këputje e menjëhershme" },
      { word: "icicle", explanation: "A hanging, tapering piece of ice formed by freezing of dripping water", ukrainian: "Бурулька", malay: "Tongkat ais", turkish: "Buz sarkıtı", pashto: "د یخ څڅوبی", albanian: "Akull i varur" },
      { word: "despite the fact that", explanation: "Notwithstanding; even though", ukrainian: "Незважаючи на те, що", malay: "Walaupun", turkish: "Gerçeğine rağmen", pashto: "د دې حقیقت سره سره", albanian: "Pavarësisht faktit që" },
      { word: "huddling", explanation: "Crowding together", ukrainian: "Тулитися", malay: "Berkerumun", turkish: "Birbirine sokulma", pashto: "سره راټولېدل", albanian: "Duke u mbledhur" },
      { word: "mucky arses", explanation: "Dirty bottoms (vulgar)", ukrainian: "Брудні зади", malay: "Punggung kotor", turkish: "Pis kıçlar", pashto: "چټل کونونه", albanian: "Prapanica të ndyra" },
      { word: "definitely", explanation: "Without doubt", ukrainian: "Безумовно", malay: "Pasti", turkish: "Kesinlikle", pashto: "یقیناً", albanian: "Padyshim" },
      { word: "recognise", explanation: "Identify from previous encounters or knowledge", ukrainian: "Впізнати", malay: "Mengenali", turkish: "Tanımak", pashto: "پېژندل", albanian: "Njohje" },
      { word: "blob", explanation: "A small drop or lump of something viscid or thick", ukrainian: "Крапля", malay: "Titik", turkish: "Damla", pashto: "څاڅکی", albanian: "Pikë" },
      { word: "wipes", explanation: "Cleans or removes by rubbing with a cloth, paper, etc.", ukrainian: "Витирає", malay: "Mengelap", turkish: "Siler", pashto: "پاکول", albanian: "Fshin" },
      { word: "probably", explanation: "Almost certainly; as far as one knows or can tell", ukrainian: "Ймовірно", malay: "Mungkin", turkish: "Muhtemelen", pashto: "احتمالاً", albanian: "Ndoshta" },
      { word: "noticed", explanation: "Became aware of", ukrainian: "Помітив", malay: "Perasan", turkish: "Fark etti", pashto: "پام شو", albanian: "Vuri re" },
      { word: "blizzard", explanation: "A severe snowstorm with high winds", ukrainian: "Заметіль", malay: "Ribut salji", turkish: "Kar fırtınası", pashto: "واورې طوفان", albanian: "Stuhi bore" },
      { word: "snot", explanation: "Nasal mucus", ukrainian: "Шмарклі", malay: "Hingus", turkish: "Sümük", pashto: "پوزې", albanian: "Hundë" },
      { word: "dripped", explanation: "Fell in drops", ukrainian: "Капав", malay: "Menitis", turkish: "Damladı", pashto: "څڅېدل", albanian: "Pikoi" },
      { word: "dabbed", explanation: "Pressed lightly with a soft or absorbent material", ukrainian: "Промокнув", malay: "Menyapu", turkish: "Hafifçe dokundu", pashto: "پاک کړل", albanian: "Fshiu lehtë" },
      { word: "hunched", explanation: "Raised one's shoulders and bend the top of one's body forward", ukrainian: "Горбився", malay: "Membongkok", turkish: "Kamburlaştı", pashto: "ټیټ شو", albanian: "U përkul" },
      { word: "unwrapped", explanation: "Removed the wrapping from", ukrainian: "Розгорнув", malay: "Membuka bungkusan", turkish: "Açtı", pashto: "پرانیست", albanian: "Zbërtheu" },
      { word: "yanked", explanation: "Pulled with a jerk", ukrainian: "Смикнув", malay: "Menarik", turkish: "Çekti", pashto: "راکش کړل", albanian: "Tërhoqi me forcë" },
      { word: "instantly", explanation: "Immediately; at once", ukrainian: "Миттєво", malay: "Serta-merta", turkish: "Anında", pashto: "سمدلاسه", albanian: "Menjëherë" },
      { word: "snapped", explanation: "Broke suddenly and completely", ukrainian: "Зламався", malay: "Patah", turkish: "Kırıldı", pashto: "مات شو", albanian: "U thye" },
      { word: "shrugged", explanation: "Raised one's shoulders slightly to express doubt, indifference, or dismissal", ukrainian: "Знизав плечима", malay: "Mengangkat bahu", turkish: "Omuz silkti", pashto: "اوږې پورته کړې", albanian: "Ngritje supesh" }
    ]
  },
  {
      chapter: 5,
      words: [
        { word: "trudging", explanation: "Walk slowly and with heavy steps", ukrainian: "Тяжко йти", malay: "Berjalan dengan susah payah", turkish: "Sürüklenerek yürümek", pashto: "په سختۍ تګ", albanian: "Ecje e rëndë" },
        { word: "clumsy", explanation: "Awkward in movement or handling things", ukrainian: "Незграбний", malay: "Ceroboh", turkish: "Sakar", pashto: "بې لاسه پښې", albanian: "I tollomboshët" },
        { word: "gloves", explanation: "Coverings for the hands with separate parts for each finger", ukrainian: "Рукавички", malay: "Sarung tangan", turkish: "Eldivenler", pashto: "لاسپوښونه", albanian: "Doreza" },
        { word: "retracing", explanation: "Go back over (the same route)", ukrainian: "Повертатися", malay: "Menjejaki semula", turkish: "Geri dönmek", pashto: "بیرته تګ", albanian: "Rikthim" },
        { word: "reckon", explanation: "Calculate or estimate", ukrainian: "Вважати", malay: "Mengira", turkish: "Hesaplamak", pashto: "اټکل کول", albanian: "Llogarit" },
        { word: "clamber", explanation: "Climb or move in an awkward and laborious way", ukrainian: "Дертися", malay: "Memanjat", turkish: "Tırmanmak", pashto: "په سختۍ ختل", albanian: "Ngjitje e vështirë" },
        { word: "stacked", explanation: "Arranged in a pile or heap", ukrainian: "Складений", malay: "Ditimbun", turkish: "İstiflenmiş", pashto: "پرله پسې اېښودل", albanian: "Grumbulluar" },
        { word: "craftsmanship", explanation: "Skill in a particular craft", ukrainian: "Майстерність", malay: "Kemahiran", turkish: "Ustalık", pashto: "مهارت", albanian: "Mjeshtëri" },
        { word: "paced", explanation: "Walked at a steady speed", ukrainian: "Крокував", malay: "Melangkah", turkish: "Adımladı", pashto: "قدم وهل", albanian: "Eci" },
        { word: "nervously", explanation: "In a way that shows nervousness or anxiety", ukrainian: "Нервово", malay: "Dengan gelisah", turkish: "Sinirli bir şekilde", pashto: "په اندېښنې", albanian: "Në mënyrë nervore" },
        { word: "along", explanation: "Moving in a constant direction on", ukrainian: "Вздовж", malay: "Sepanjang", turkish: "Boyunca", pashto: "په اوږدو کې", albanian: "Përgjatë" },
        { word: "sort", explanation: "Arrange systematically in groups", ukrainian: "Сортувати", malay: "Menyusun", turkish: "Sıralamak", pashto: "ترتیبول", albanian: "Rendit" },
        { word: "drifts", explanation: "Masses of snow or leaves piled up by the wind", ukrainian: "Замети", malay: "Timbunan", turkish: "Kar yığınları", pashto: "واورې پرتې", albanian: "Grumbullime" },
        { word: "satisfying", explanation: "Giving fulfillment or the pleasure associated with this", ukrainian: "Задовільний", malay: "Memuaskan", turkish: "Tatmin edici", pashto: "قناعت بښونکی", albanian: "I kënaqshëm" },
        { word: "clunk", explanation: "Make a dull clinking sound", ukrainian: "Стукіт", malay: "Bunyi debuk", turkish: "Tak sesi", pashto: "ټک", albanian: "Tingull i mbytur" },
        { word: "laid", explanation: "Put down carefully or in position for use", ukrainian: "Поклав", malay: "Meletakkan", turkish: "Yerleştirdi", pashto: "کېښودل", albanian: "Vendosi" },
        { word: "straightened", explanation: "Make or become straight", ukrainian: "Випрямив", malay: "Meluruskan", turkish: "Düzeltti", pashto: "سم کړل", albanian: "Drejtoi" },
        { word: "gaze up", explanation: "Look steadily and intently upwards", ukrainian: "Дивитися вгору", malay: "Memandang ke atas", turkish: "Yukarı bakmak", pashto: "پورته کتل", albanian: "Vështrim lart" }
      ]
    }
];
