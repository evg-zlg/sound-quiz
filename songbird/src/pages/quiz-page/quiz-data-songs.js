const songs = [
  // 0
  {  
    name: "piano",
    answers: ["drum", "guitar", "piano", "accordion", "cello", "guitar"],
    answer: "piano",
    mp3: require("./../../assets/sounds/piano.mp3"),
    png: require("./../../assets/images/piano.png"),
    descript: "The piano is a stringed keyboard instrument in which the strings are struck by wooden hammers that are coated with a softer material. It is played using a keyboard, which is a row of keys (small levers) that the performer presses down or strikes with the fingers and thumbs of both hands to cause the hammers to strike the strings. It was invented in Italy by Bartolomeo Cristofori around the year 1700.",
    music: require("./../../assets/sounds/piano-music.mp3"),
  },
  //1
  {  
    name: "maracas",
    answers: ["maracas", "guitar", "tambourine", "xylophone", "cello"],
    answer: "maracas",
    mp3: require("./../../assets/sounds/maracas.mp3"),
    png: require("./../../assets/images/maracas.png"),
    descript: "A maracas, sometimes called shaker or chac-chac, is a rattle which appears in many genres of Caribbean and Latin music. It is shaken by a handle and usually played as part of a pair.",
    music: require("./../../assets/sounds/maracas-music.mp3"),
  },
  //2
  {  
    name: "accordion",
    answers: ["trumpet", "horn", "piano", "triangle", "accordion"],
    answer: "accordion",
    mp3: require("./../../assets/sounds/accordion.mp3"),
    png: require("./../../assets/images/accordion.png"),
    descript: "Accordions (from 19th-century German Akkordeon, from Akkord—'musical chord, concord of sounds') are a family of box-shaped musical instruments of the bellows-driven free-reed aerophone type (producing sound as air flows past a reed in a frame), colloquially referred to as a squeezebox. ",
    music: require("./../../assets/sounds/accordion-music.mp3"),
  },
  //3
  {  
    name: "synthesizer",
    answers: ["drum", "cello", "piano", "saxophone", "violin"],
    answer: "cello",
    // TODO
    mp3: require("./../../assets/sounds/cello.mp3"),
    // TODO
    png: require("./../../assets/images/cello.png"),
    descript: "The cello or violoncello is a bowed (sometimes plucked and occasionally hit) string instrument of the violin family. Its four strings are usually tuned in perfect fifths: from low to high, C2, G2, D3 and A3. The viola's four strings are each an octave higher. Music for the cello is generally written in the bass clef, with tenor clef, or alto clef, and treble clef used for higher-range passages.",
    music: require("./../../assets/sounds/cello-music.mp3"),
  },
  //4
  {
    name: "drum",
    answers: ["flute", "tambourine", "trumpet", "drum", "maracas"],
    answer: "drum",
    mp3: require("./../../assets/sounds/drum.mp3"),
    png: require("./../../assets/images/drum.png"),
    descript: "The drum is a member of the percussion group of musical instruments. In the Hornbostel-Sachs classification system, it is a membranophone. Drums consist of at least one membrane, called a drumhead or drum skin, that is stretched over a shell and struck, either directly with the player's hands, or with a percussion mallet, to produce sound.",
    music: require("./../../assets/sounds/drum-music.mp3"),
  },
  //5
  {
    name: "flute",
    answers: ["guitar", "piano", "triangle", "flute", "xylophone"],
    answer: "flute",
    mp3: require("./../../assets/sounds/flute.mp3"),
    png: require("./../../assets/images/flute.png"),
    descript: "The flute is a family of classical music instrument in the woodwind group. Like all woodwinds, flutes are aerophones, meaning they make sound by vibrating a column of air. However, unlike woodwind instruments with reeds, a flute is a reedless wind instrument that produces its sound from the flow of air across an opening.",
    music: require("./../../assets/sounds/flute-music.mp3"),
  },
  //6
  {
    name: "guitar",
    answers: ["guitar", "violin", "accordion", "horn", "piano"],
    answer: "guitar",
    mp3: require("./../../assets/sounds/guitar.mp3"),
    png: require("./../../assets/images/guitar.png"),
    descript: "The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand.",
    music: require("./../../assets/sounds/guitar-music.mp3"),
  },
  //7
  {
    name: "horn",
    answers: ["cello", "trumpet", "violin", "horn", "guitar"],
    answer: "horn",
    mp3: require("./../../assets/sounds/horn.mp3"),
    png: require("./../../assets/images/horn.png"),
    descript: "A horn is any of a family of musical instruments made of a tube, usually made of metal and often curved in various ways, with one narrow end into which the musician blows, and a wide end from which sound emerges. In horns, unlike some other brass instruments such as the trumpet, the bore gradually increases in width through most of its length—that is to say, it is conical rather than cylindrical.",
    music: require("./../../assets/sounds/horn-music.mp3"),
  },
  //8
  {
    name: "saxophone",
    answers: ["saxophone", "trumpet", "violin", "flute", "accordion"],
    answer: "saxophone",
    mp3: require("./../../assets/sounds/saxophone.mp3"),
    png: require("./../../assets/images/saxophone.png"),
    descript: "The saxophone (referred to colloquially as the sax) is a type of single-reed woodwind instrument with a conical body, usually made of brass. As with all single-reed instruments, sound is produced when a reed on a mouthpiece vibrates to produce a sound wave inside the instrument's body.",
    music: require("./../../assets/sounds/saxophone-music.mp3"),
  },
  //9
  {
    name: "tambourine",
    answers: ["xylophone", "tambourine", "triangle", "flute", "drum"],
    answer: "tambourine",
    mp3: require("./../../assets/sounds/tambourine.mp3"),
    png: require("./../../assets/images/tambourine.png"),
    descript: "The tambourine is a musical instrument in the percussion family consisting of a frame, often of wood or plastic, with pairs of small metal jingles, called 'zills'. Classically the term tambourine denotes an instrument with a drumhead, though some variants may not have a head.",
    music: require("./../../assets/sounds/tambourine-music.mp3"),
  },
  //10
  {
    name: "triangle",
    answers: ["violin", "accordion", "xylophone", "triangle", "maracas"],
    answer: "triangle",
    mp3: require("./../../assets/sounds/triangle.mp3"),
    png: require("./../../assets/images/triangle.png"),
    descript: "The triangle is a musical instrument in the percussion family, and is classified as an idiophone in the Hornbostel-Sachs classification system. Triangles are made from a variety of metals. The metal is formed into a triangle shape by bending or casting methods. The instrument is usually held by a loop of some form of thread or wire at the top curve.",
    music: require("./../../assets/sounds/triangle-music.mp3"),
  },
  //11
  {
    name: "trumpet",
    answers: ["drum", "trumpet", "guitar", "violin", "flute"],
    answer: "trumpet",
    mp3: require("./../../assets/sounds/trumpet.mp3"),
    png: require("./../../assets/images/trumpet.png"),
    descript: "The trumpet is a brass instrument commonly used in classical and jazz ensembles. The trumpet group ranges from the piccolo trumpet—with the highest register in the brass family—to the bass trumpet, pitched one octave below the standard B♭ or C trumpet.",
    music: require("./../../assets/sounds/trumpet-music.mp3"),
  },
  //12
  {
    name: "violin",
    answers: ["drum", "trumpet", "guitar", "violin", "flute"],
    answer: "violin",
    mp3: require("./../../assets/sounds/violin.mp3"),
    png: require("./../../assets/images/violin.png"),
    descript: "The violin, sometimes known as a fiddle, is a wooden chordophone (string instrument) in the violin family. Most violins have a hollow wooden body. It is the smallest and thus highest-pitched instrument (soprano) in the family in regular use.",
    music: require("./../../assets/sounds/violin-music.mp3"),
  },
  //13
  {
    name: "xylophone",
    answers: ["xylophone", "tambourine", "triangle", "piano", "accordion"],
    answer: "xylophone",
    mp3: require("./../../assets/sounds/xylophone.mp3"),
    png: require("./../../assets/images/xylophone.png"),
    descript: "The xylophone   is a musical instrument in the percussion family that consists of wooden bars struck by mallets. Like the glockenspiel (which uses metal bars), the xylophone essentially consists of a set of tuned wooden keys arranged in the fashion of the keyboard of a piano.",
    music: require("./../../assets/sounds/xylophone-music.mp3"),
  }
];

export default songs; 

