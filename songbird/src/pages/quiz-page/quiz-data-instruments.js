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
];

export default instruments