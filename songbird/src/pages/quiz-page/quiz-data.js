const instruments = [
  //strings
  [
    {
      name: "guitar",
      nameRU: "гитара",
      mp3: require("./../../assets/sounds/guitar.mp3"),
      png: require("./../../assets/images/guitar.png"),
      descript: "The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand.",
      descriptRU: "Гитара — это ладовый музыкальный инструмент, который обычно имеет шесть струн. Применяется в качестве аккомпанирующего или сольного инструмента во многих стилях и направлениях музыки, среди которых романс, блюз, кантри, фламенко, рок, джаз. Изобретённая в XX веке электрическая гитара произвела значительные изменения в музыке и тем самым оказала сильное влияние на массовую культуру.",
    },
    {
      name: "balalaika",
      nameRU: "балалайка",
      mp3: require("./../../assets/sounds/balalaika.mp3"),
      png: require("./../../assets/images/balalaika.png"),
      descript: "The balalaika is a stringed musical instrument with a characteristic triangular wooden, hollow body, fretted neck and three strings. Two strings are usually tuned to the same note and the third string is a perfect fourth higher. The higher-pitched balalaikas are used to play melodies and chords. The instrument generally has a short sustain, necessitating rapid strumming or plucking when it is used to play melodies.",
      descriptRU: "Балала́йка — русский, белорусский и украинский народный струнный щипковый музыкальный инструмент с треугольной или овальной формы корпусом, имеющий от двух до шести струн. Характерными приёмами звукоизвлечения являются бряцание и тремоло — удары указательным пальцем по всем струнам одновременно.",
    },
    {
      name: "gusli",
      nameRU: "гусли",
      mp3: require("./../../assets/sounds/gusli.mp3"),
      png: require("./../../assets/images/gusli.png"),
      descript: "The balalaika is a stringed musical instrument with a characteristic triangular wooden, hollow body, fretted neck and three strings. Two strings are usually tuned to the same note and the third string is a perfect fourth higher. The higher-pitched balalaikas are used to play melodies and chords. The instrument generally has a short sustain, necessitating rapid strumming or plucking when it is used to play melodies.",
      descriptRU: "Гусли — русский народный струнный щипковый музыкальный инструмент, в общем виде представляющий собой резонаторный корпус с натянутыми над ним 5—20 струнами, образующими диатонический звукоряд. Относятся к семейству цитр, гусли с игровым окном — к лирам.",
    },
    {
      name: "harp",
      nameRU: "арфа",
      mp3: require("./../../assets/sounds/harp.mp3"),
      png: require("./../../assets/images/harp.png"),
      descript: "The harp is a stringed musical instrument that has a number of individual strings running at an angle to its soundboard; the strings are plucked with the fingers. Harps can be made and played in various ways, standing or sitting and in orchestras or concerts. Its most common form is triangular in shape and made of wood. Some have multiple rows of strings and pedal attachments.",
      descriptRU: "Арфа - струнный щипковый музыкальный инструмент, состоит из двух расположенных под углом рам, между которыми натянуто множество струн. Один из древнейших инструментов, символ Ирландии. В XVIII столетии была изобретена педальная арфа, ставшая стандартом в классической музыке.",
    },
    {
      name: "violin",
      nameRU: "скрипка",
      mp3: require("./../../assets/sounds/violin.mp3"),
      png: require("./../../assets/images/violin.png"),
      descript: "The violin, sometimes known as a fiddle, is a wooden chordophone (string instrument) in the violin family. Most violins have a hollow wooden body. It is the smallest and thus highest-pitched instrument (soprano) in the family in regular use.",
      descriptRU: "Скрипка — смычковый музыкальный инструмент с четырьмя струнами, настроенными по квинтам: Gм D1 A1 E2. Самая высокая регистровая разновидность скрипичного семейства, ниже которой располагаются альт, виолончель и контрабас.",
    },
    {
      name: "cello",
      nameRU: "виолончель",
      mp3: require("./../../assets/sounds/cello.mp3"),
      png: require("./../../assets/images/cello.png"),
      descript: "The cello or violoncello is a bowed (sometimes plucked and occasionally hit) string instrument of the violin family. Its four strings are usually tuned in perfect fifths: from low to high, C2, G2, D3 and A3. The viola's four strings are each an octave higher. Music for the cello is generally written in the bass clef, with tenor clef, or alto clef, and treble clef used for higher-range passages.",
      descriptRU: "Виолонче́ль — смычковый музыкальный инструмент с 4-мя струнами, настроенными по квинтам: Cб Gб Dм Aм. По высоте звучания занимает промежуточное положение между более высоким альтом и низким контрабасом.",
    },
  ],
  //wind
  [
    {
      name: "flute",
      nameRU: "флейта",
      mp3: require("./../../assets/sounds/flute.mp3"),
      png: require("./../../assets/images/flute.png"),
      descript: "The flute is a family of classical music instrument in the woodwind group. Like all woodwinds, flutes are aerophones, meaning they make sound by vibrating a column of air. However, unlike woodwind instruments with reeds, a flute is a reedless wind instrument that produces its sound from the flow of air across an opening.",
      descriptRU: "Флейта — лабиальный духовой музыкальный инструмент, в котором первичным источником колебаний является воздушная струя, рассекающаяся о край стенки инструмента, называемого ла́биум (лат. labium — губа). Источник колебаний приводит в движение воздушный столб в канале флейты и образуется звук определённой высоты. Один из древнейших музыкальных инструментов. Относится к группе деревянных духовых.",
    },
    {
      name: "saxophone",
      nameRU: "саксофон",
      mp3: require("./../../assets/sounds/saxophone.mp3"),
      png: require("./../../assets/images/saxophone.png"),
      descript: "The saxophone (referred to colloquially as the sax) is a type of single-reed woodwind instrument with a conical body, usually made of brass. As with all single-reed instruments, sound is produced when a reed on a mouthpiece vibrates to produce a sound wave inside the instrument's body.",
      descriptRU: "Саксофон — тростевой духовой музыкальный инструмент, по принципу звукоизвлечения принадлежащий к семейству язычковых деревянных духовых музыкальных инструментов. Семейство саксофонов сконструировано в 1842 году бельгийским музыкальным мастером Адольфом Саксом и запатентовано им четыре года спустя. С середины XIX века саксофон используется в духовом оркестре, реже — в симфоническом, также в качестве солирующего инструмента в сопровождении оркестра (ансамбля). Является одним из основных инструментов джаза и родственных ему жанров, а также эстрадной музыки. Инструмент обладает полным и мощным звучанием, певучим тембром и большой технической подвижностью.",
    },
    {
      name: "french horn",
      nameRU: "волторна",
      mp3: require("./../../assets/sounds/horn.mp3"),
      png: require("./../../assets/images/horn.png"),
      descript: "A horn (or french horn) is any of a family of musical instruments made of a tube, usually made of metal and often curved in various ways, with one narrow end into which the musician blows, and a wide end from which sound emerges. In horns, unlike some other brass instruments such as the trumpet, the bore gradually increases in width through most of its length—that is to say, it is conical rather than cylindrical.",
      descriptRU: "Валторна — медный духовой музыкальный инструмент тенорового регистра. Произошла от охотничьего сигнального рога, в оркестр вошла в середине XVII века. До 1830-х годов, подобно другим медным инструментам, не имела вентилей и была натуральным инструментом с ограниченным звукорядом (так называемая «натуральная валторна», которую использовали ещё в классической и барочной музыке, в том числе Бах, Моцарт, Бетховен).",
    },
    {
      name: "trumpet",
      nameRU: "труба",
      mp3: require("./../../assets/sounds/trumpet.mp3"),
      png: require("./../../assets/images/trumpet.png"),
      descript: "The trumpet is a brass instrument commonly used in classical and jazz ensembles. The trumpet group ranges from the piccolo trumpet—with the highest register in the brass family—to the bass trumpet, pitched one octave below the standard B♭ or C trumpet.",
      descriptRU: "Труба — медный духовой музыкальный инструмент альтово-сопранового регистра, самый высокий по звучанию среди медных духовых. С древнейших времён натуральная труба использовалась в качестве сигнального инструмента, примерно с XVII века вошла в состав оркестра. С изобретением механизма вентилей труба получила полный хроматический звукоряд и с середины XIX века стала полноценным инструментом классической музыки. Обладает ярким, блестящим тембром, используется как сольный инструмент или в симфоническом и духовом оркестрах, а также в джазе и других жанрах.",
    },
    {
      name: "bagpipes",
      nameRU: "волынка",
      mp3: require("./../../assets/sounds/bagpipes.mp3"),
      // TODO
      png: require("./../../assets/images/collage-main.png"),
      descript: "Bagpipes are a woodwind instrument using enclosed reeds fed from a constant reservoir of air in the form of a bag. The Scottish Great Highland bagpipes are the best known examples in the Anglophone world, but people have played bagpipes for centuries throughout large parts of Europe, Northern Africa, Western Asia, around the Persian Gulf and northern parts of South Asia.The term bagpipe is equally correct in the singular or the plural, though pipers usually refer to the bagpipes as \"the pipes\", \"a set of pipes\" or \"a stand of pipes\"",
      descriptRU: "Волынка — традиционный музыкальный духовой язычковый инструмент многих народов Европы. В Шотландии — главный национальный инструмент. Представляет собой мешок, который обыкновенно делается из воловьей, телячьей или козьей шкуры, снятой целиком, в виде бурдюка, зашитой наглухо и снабжённой сверху трубкой для наполнения меха воздухом, с прикреплёнными снизу одной, двумя или тремя игральными язычковыми трубами, клавишами и ступками, служащими для создания многоголосия.",
    },
    {
      name: "organ",
      nameRU: "орган",
      mp3: require("./../../assets/sounds/organ.mp3"),
      //TODO
      png: require("./../../assets/images/collage-main.png"),
      descript: "The organ is a keyboard instrument of one or more pipe divisions or other means for producing tones, each played from its own manual, with the hands, or pedalboard, with the feet.",
      descriptRU: "Орган — клавишный духовой музыкальный инструмент. Большие концертные органы превосходят по габаритам все прочие музыкальные инструменты. Основу конструкции органа составляют духовые трубы разной длины и диаметра, устройство для нагнетания воздуха, пульт с клавиатурами, трактура. Звуковое своеобразие органа определяют специфические тембры («регистры»), набор которых индивидуален для каждого инструмента. Оформ­ле­ние кор­пу­са (большого акустического) органа иногда пред­став­ля­ет не мень­шую ху­дожественную цен­ность, чем его зву­ча­ние.",
    },
  ],
  //keyboards 
  [
    {
      name: "piano",
      nameRU: "фортепиано",
      mp3: require("./../../assets/sounds/piano.mp3"),
      png: require("./../../assets/images/piano.png"),
      descript: "The piano is a stringed keyboard instrument in which the strings are struck by wooden hammers that are coated with a softer material. It is played using a keyboard, which is a row of keys (small levers) that the performer presses down or strikes with the fingers and thumbs of both hands to cause the hammers to strike the strings. It was invented in Italy by Bartolomeo Cristofori around the year 1700.",
      descriptRU: "Фортепиано — клавишный струнный инструмент с горизонтальным (рояль) или вертикальным (пианино) расположением струн. На звучание фортепиано большое влияние оказывает его конструкция, с XVIII в. претерпевшая значительные изменения. Фортепиано состоит из акустического аппарата (резонансная дека, струнная одежда), клавишного механизма, опорных конструкций (футор, металлическая рама, вирбельбанк). Сложная система рычагов механизма позволяет передать усилие от играющего через клавишу к молоточку, удар которого по струне производит звук. Современный диапазон фортепиано — 71⁄4 октав (88 клавиш).",
    },
    {
      name: "accordion",
      nameRU: "аккордеон",
      mp3: require("./../../assets/sounds/accordion.mp3"),
      png: require("./../../assets/images/accordion.png"),
      descript: "The saxophone (referred to colloquially as the sax) is a type of single-reed woodwind instrument with a conical body, usually made of brass. As with all single-reed instruments, sound is produced when a reed on a mouthpiece vibrates to produce a sound wave inside the instrument's body.",
      descriptRU: "Аккордеон — хроматическая ручная гармоника с клавиатурой мелодии фортепианного (наиболее часто) типа. Клавиатура аккомпанемента такая же как у баяна: с 5—6 рядами кнопок, звучащими басами и аккордами (готовый аккордеон) или отдельными нотами (выборный или готово-выборный аккордеон).",
    },
    {
      name: "synthesizer",
      nameRU: "синтезатор",
      // TODO
      mp3: require("./../../assets/sounds/horn.mp3"),
      // TODO
      png: require("./../../assets/images/horn.png"),
      descript: "A synthesizer is an electronic musical instrument that generates audio signals. Synthesizers typically create sounds by generating waveforms through methods including subtractive synthesis, additive synthesis and frequency modulation synthesis. These sounds may be altered by components such as filters, which cut or boost frequencies; envelopes, which control articulation, or how notes begin and end; and low-frequency oscillators, which modulate parameters such as pitch, volume, or filter characteristics affecting timbre. Synthesizers are typically played with keyboards or controlled by sequencers, software or other instruments, and may be synchronized to other equipment via MIDI.",
      descriptRU: "Синтезатор — электронный клавишный музыкальный инструмент. В зависимости от способа генерации звуковых волн и их преобразования синтез звука можно классифицировать следующим образом: суммирующий, вычитающий, операторный, физический, сэплерный, волновой, гибритный. С развитием микроэлектроники начиная с конца 1970-х годов выпускаются простейшие синтезаторы как в виде отдельных инструментов, так и являющиеся составной частью других устройств, например, калькуляторов. Такие синтезаторы обычно позволяют воспроизводить только один тон одновременно.",
    },
    {
      name: "harpsichord",
      nameRU: "клавесин",
      //TODO
      mp3: require("./../../assets/sounds/trumpet.mp3"),
      //TODO
      png: require("./../../assets/images/trumpet.png"),
      descript: "The trumpet is a brass instrument commonly used in classical and jazz ensembles. The trumpet group ranges from the piccolo trumpet—with the highest register in the brass family—to the bass trumpet, pitched one octave below the standard B♭ or C trumpet.",
      descriptRU: "Клавесин — клавишный струнный музыкальный инструмент с щипковым способом звукоизвлечения. Музыканта, исполняющего произведения на клавесине и его разновидностях, называют клавесини́стом. Звук клавесина — блестящий, но мало певучий, отрывистый, не поддающийся динамическим изменениям[3], то есть плавное увеличение и уменьшение громкости на клавесине невозможно. Тем не менее, разнообразных динамических эффектов можно добиться, умело управляя количеством и скоростью взятия звуков, взаимодействием с резонансом.",
    },
    {
      name: "button accordion",
      nameRU: "баян",
      // TODO
      mp3: require("./../../assets/sounds/bagpipes.mp3"),
      // TODO
      png: require("./../../assets/images/collage-main.png"),
      descript: "A chromatic button accordion is a type of button accordion where the melody-side keyboard consists of rows of buttons arranged chromatically. The bass-side keyboard is usually the Stradella system or one of the various free-bass systems. Included among chromatic button accordions are the Russian bayan and Schrammel accordion. There can be 3 to 5 rows of vertical treble buttons. In a 5 row chromatic, two additional rows repeat the first 2 rows to facilitate options in fingering.",
      descriptRU: "Баян — русская хроматическая ручная гармоника имеющая от 3 и более рядов круглых кнопок на клавиатуре мелодии и 5—6 рядов кнопок на клавиатуре аккомпанемента, клавиши которого звучат басами и аккордами (готовый аккомпанемент) или отдельными нотами (выборный или готово-выборный аккомпанемент).Современные баяны выпускают с двумя основными видами правой клавиатуры: трёхрядные и пятирядные. В пятирядной клавиатуре ряды 2 и 1 (считая от меха) являются вспомогательными, они дублируют ноты 5-го и 4-го рядов соответственно. Баян входит в состав оркестра русских народных инструментов.",
    },
    {
      name: "celesta",
      nameRU: "челеста",
      //TODO
      mp3: require("./../../assets/sounds/organ.mp3"),
      //TODO
      png: require("./../../assets/images/collage-main.png"),
      descript: "The celesta, also called a bell-piano, is a struck idiophone operated by a keyboard. It looks similar to an upright piano (four- or five-octave), albeit with smaller keys and a much smaller cabinet, or a large wooden music box (three-octave). The keys connect to hammers that strike a graduated set of metal (usually steel) plates or bars suspended over wooden resonators. Four- or five-octave models usually have a damper pedal that sustains or damps the sound. The three-octave instruments do not have a pedal because of their small \"table-top\" design. One of the best-known works that uses the celesta is Pyotr Ilyich Tchaikovsky's \"Dance of the Sugar Plum Fairy\" from The Nutcracker.",
      descriptRU: "Челеста — клавишный металлофон, по технике игры и внешне напоминающий небольшое пианино или фисгармонию. Ударный музыкальный инструмент, звучащим телом которого являются стальные пластинки. Челеста нашла применение не только как академический инструмент, но используется и в джазе, рок-музыке, других направлениях популярной музыки. В 1930-е годы Фэтс Уоллер иногда играл на челесте правой рукой и одновременно на фортепиано левой.",
    },
  ],
  //other
  [
    {
      name: "xylophone",
      nameRU: "ксилофон",
      mp3: require("./../../assets/sounds/xylophone.mp3"),
      png: require("./../../assets/images/xylophone.png"),
      descript: "The xylophone   is a musical instrument in the percussion family that consists of wooden bars struck by mallets. Like the glockenspiel (which uses metal bars), the xylophone essentially consists of a set of tuned wooden keys arranged in the fashion of the keyboard of a piano.",
      descriptRU: "Ксилофон — ударный музыкальный инструмент с определённой высотой звучания. Представляет собой ряд деревянных брусков разной величины, настроенных на определённые ноты. По брускам ударяют палочками с шарообразными наконечниками (малетами) или специальными молоточками, похожими на небольшие ложки. Диапазон современного ксилофона составляет 3,5 октавы.",
    },
    {
      name: "drum",
      nameRU: "барабан",
      mp3: require("./../../assets/sounds/drum.mp3"),
      png: require("./../../assets/images/drum.png"),
      descript: "The drum is a member of the percussion group of musical instruments. In the Hornbostel-Sachs classification system, it is a membranophone. Drums consist of at least one membrane, called a drumhead or drum skin, that is stretched over a shell and struck, either directly with the player's hands, or with a percussion mallet, to produce sound.",
      descriptRU: "Барабан — музыкальный инструмент из семейства ударных. Типичным представителем является мембранный барабан, состоящий из полого корпуса-резонатора определённой формы или рамы, на которую натянута кожаная или пластиковая мембрана. Её натяжением регулируется относительная высота звука. Звук извлекают ударом по мембране деревянной колотушкой с мягким наконечником, палочкой, щётками, руками, а иногда и трением.",
    },
    {
      name: "triangle",
      nameRU: "треугольник",
      mp3: require("./../../assets/sounds/triangle.mp3"),
      png: require("./../../assets/images/triangle.png"),
      descript: "The triangle is a musical instrument in the percussion family, and is classified as an idiophone in the Hornbostel-Sachs classification system. Triangles are made from a variety of metals. The metal is formed into a triangle shape by bending or casting methods. The instrument is usually held by a loop of some form of thread or wire at the top curve.",
      descriptRU: "Треугольник — ударный музыкальный инструмент в виде металлического прута (обычно из стали или алюминия), изогнутого в форме треугольника. Один из углов оставлен открытым (концы прута почти касаются). Треугольник принадлежит к инструментам с неопределённой высотой звука, имеет блестящий и яркий тембр, способный украсить даже мощное оркестровое тутти. Треугольник подвешивается за один из углов на тонкой проволоке или тесьме, которую держат в руке или прикрепляют к пюпитру. По треугольнику ударяют металлической (реже деревянной) палочкой (на жаргоне музыкантов эта палочка называется «гвоздь»).",
    },
    {
      name: "maracas",
      nameRU: "мараки",
      mp3: require("./../../assets/sounds/maracas.mp3"),
      png: require("./../../assets/images/maracas.png"),
      descript: "A maracas, sometimes called shaker or chac-chac, is a rattle which appears in many genres of Caribbean and Latin music. It is shaken by a handle and usually played as part of a pair.",
      descriptRU: "Марака — древнейший ударно-шумовой инструмент коренных жителей Антильских островов — индейцев таино, разновидность погремушки, издающей при потряхивании характерный шуршащий звук. В настоящее время мараки популярны на всей территории Латинской Америки и являются одним из символов латиноамериканской музыки. Как правило, музыкант, играющий на мараках, использует пару погремушек — по одной в каждой руке.",
    },
    {
      name: "vargan",
      nameRU: "варган",
      // TODO
      mp3: require("./../../assets/sounds/bagpipes.mp3"),
      // TODO
      png: require("./../../assets/images/collage-main.png"),
      descript: "The vargan is a lamellophone instrument, consisting of a flexible metal or bamboo tongue or reed attached to a frame. Contrary to the name, the harp originated in Mongolia and has no relation to the Jewish people. Vargan may be categorized as idioglot or heteroglot (whether or not the frame and the tine are one piece); by the shape of the frame (rod or plaque); by the number of tines, and whether the tines are plucked, joint-tapped, or string-pulled.",
      descriptRU: "Варган — музыкальный инструмент в виде свободно колеблющегося в проёме рамки язычка, приводимого в движение пальцем или дёрганием за нитку. Инструмент устанавливают в области рта. Ротовая полость и глотка, а также носовая полость и нижние дыхательные пути служат резонатором, усиливающим громкость. Управляя работой артикуляционного аппарата и дыхания, изменяют тембр звучания варгана за счёт усиления тех или иных обертонов в его звуковом спектре, при этом основной тон звучит постоянным бурдоном.",
    },
    {
      name: "timpani",
      nameRU: "литавры",
      //TODO
      mp3: require("./../../assets/sounds/organ.mp3"),
      //TODO
      png: require("./../../assets/images/collage-main.png"),
      descript: "Timpani are musical instruments in the percussion family. A type of drum categorised as a hemispherical drum, they consist of a membrane called a head stretched over a large bowl traditionally made of copper. Thus timpani are an example of kettle drums, also known as vessel drums and semispherical drums, whose body is similar to a section of a sphere whose cut conforms the head. Most modern timpani are pedal timpani and can be tuned quickly and accurately to specific pitches by skilled players through the use of a movable foot-pedal. ",
      descriptRU: "Литавры — ударный музыкальный инструмент с определённой высотой звучания. Литавры представляют собой систему от двух до семи металлических котлообразных чаш, открытая сторона которых затянута кожей или пластиком, а нижняя часть может иметь отверстие. На литаврах возможно достичь огромных градаций звука — от едва слышного пианиссимо до оглушительного фортиссимо. Среди особых эффектов — приглушённое звучание литавр, покрытых кусками мягкого сукна.",
    },
  ],
];

export default instruments