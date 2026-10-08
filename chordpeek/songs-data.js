/* Shared song data — bare chord progressions only, no lyrics, no note-for-note
   tab. Used by both prototype.html (the search launcher) and room.html (the
   song room). Keeping this in one file means the two pages can never drift.
   `story` is a short, factual bit of history/trivia about the song — never
   lyrics — shown in the room's "About this song" card. */
const SONGS = [
  { title: "Let It Be", artist: "The Beatles", key: "C", bpm: 72, capo: 0, year: 1970, genre: "Rock",
    story: "Paul McCartney said the whole song came to him in a dream about his late mother, Mary — the “Mother Mary” the lyric talks to.",
    sections: [
      { label: "Intro",  chords: ["C","G","Am","F"] },
      { label: "Verse",  chords: ["C","G","Am","F","C","G","F","C"] },
      { label: "Chorus", chords: ["Am","G","F","C","G","F","C"] },
    ]},
  { title: "Hey Jude", artist: "The Beatles", key: "F", bpm: 72, capo: 0, year: 1968, genre: "Rock",
    story: "Paul wrote it to comfort John Lennon's son Julian during his parents' divorce — the “Jude” started out as “Jules.”",
    sections: [
      { label: "Verse",       chords: ["F","C7","Bb","F"] },
      { label: "Bridge",      chords: ["Bb","F","C7","F"] },
      { label: "Outro (na na na)", chords: ["F","Bb","C7","F","Bb","C7","F"] },
    ]},
  { title: "Free Fallin'", artist: "Tom Petty", key: "D", bpm: 95, capo: 0, year: 1989, genre: "Rock",
    story: "Tom Petty and Jeff Lynne wrote it in a single night, dropping in real LA landmarks like Ventura Boulevard and Mulholland.",
    sections: [
      { label: "Verse",  chords: ["D","A","Bm","G"] },
      { label: "Chorus", chords: ["D","A","Bm","G"] },
    ]},
  { title: "Ho Hey", artist: "The Lumineers", key: "C", bpm: 78, capo: 0, year: 2012, genre: "Folk",
    story: "The Lumineers' breakout single was built around a single chant and a floor-stomp beat, recorded almost entirely live.",
    sections: [
      { label: "Verse",  chords: ["C","F","Am"] },
      { label: "Chorus", chords: ["C","F","Am","G"] },
    ]},
  { title: "Chasing Cars", artist: "Snow Patrol", key: "A", bpm: 104, capo: 0, year: 2006, genre: "Alt Rock",
    story: "Snow Patrol's biggest hit grew out of a single chord loop Gary Lightbody looped for hours before any lyrics showed up.",
    sections: [
      { label: "Verse",  chords: ["A","E","F#m","D"] },
      { label: "Chorus", chords: ["A","E","F#m","D"] },
    ]},
  { title: "House of the Rising Sun", artist: "Traditional / The Animals", key: "Am", bpm: 115, capo: 0, year: 1964, genre: "Folk Rock",
    story: "A centuries-old folk song about a New Orleans house of ruin — The Animals' 1964 electric version made it a #1 hit and one of rock's first true epics.",
    sections: [
      { label: "Verse (simplified)", chords: ["Am","C","D","F","Am","C","E","E"] },
    ]},
  { title: "Ring of Fire", artist: "Johnny Cash", key: "G", bpm: 148, capo: 0, year: 1963, genre: "Country",
    story: "Co-written by June Carter about falling for Johnny Cash; the mariachi horns were added almost as a joke and became iconic.",
    sections: [
      { label: "Verse",  chords: ["G","C","G"] },
      { label: "Chorus", chords: ["G","C","D","G"] },
    ]},
  { title: "Blowin' in the Wind", artist: "Bob Dylan", key: "D", bpm: 105, capo: 0, year: 1963, genre: "Folk",
    story: "Bob Dylan reportedly wrote it in about ten minutes, turning an old spiritual melody into the defining protest song of its era.",
    sections: [
      { label: "Verse",  chords: ["D","G","D","A"] },
      { label: "Chorus", chords: ["D","G","D","A","D"] },
    ]},
  { title: "Lean on Me", artist: "Bill Withers", key: "C", bpm: 128, capo: 0, year: 1972, genre: "Soul",
    story: "Bill Withers wrote it on his first electric piano, inspired by the tight-knit community he grew up in back in West Virginia.",
    sections: [
      { label: "Verse",  chords: ["C","F","C","G"] },
      { label: "Chorus", chords: ["C","F","G","C"] },
    ]},
  { title: "All of Me", artist: "John Legend", key: "G (simplified)", bpm: 63, capo: 0, year: 2013, genre: "Pop",
    story: "John Legend wrote it for his now-wife Chrissy Teigen; it became his first #1 hit on the Billboard Hot 100.",
    sections: [
      { label: "Verse",  chords: ["Em","C","G","D"] },
      { label: "Chorus", chords: ["Em","C","G","D"] },
    ]},
  { title: "Thinking Out Loud", artist: "Ed Sheeran", key: "D", bpm: 79, capo: 0, year: 2014, genre: "Pop",
    story: "Ed Sheeran wrote the whole thing in one sitting and has said he still can't fully explain how it came together that fast.",
    sections: [
      { label: "Verse",  chords: ["D","F#m","G","A"] },
      { label: "Chorus", chords: ["D","G","Bm","A"] },
    ]},
  { title: "Fast Car", artist: "Tracy Chapman", key: "C (simplified)", bpm: 103, capo: 0, year: 1988, genre: "Folk Rock",
    story: "Tracy Chapman's breakout moment came when she played this, largely unplanned, at the 1988 Nelson Mandela tribute concert, watched worldwide.",
    sections: [
      { label: "Verse",  chords: ["C","G","Am","F"] },
      { label: "Chorus", chords: ["C","G","Am","F"] },
    ]},
  { title: "Dust in the Wind", artist: "Kansas", key: "C (simplified)", bpm: 78, capo: 0, year: 1977, genre: "Rock",
    story: "Kerry Livgren wrote it after his wife caught him practicing a fingerpicking exercise and told him it was good enough to be a real song.",
    sections: [
      { label: "Verse",  chords: ["C","D","Am","G"] },
      { label: "Chorus", chords: ["C","D","Am","G"] },
    ]},
  { title: "Tears in Heaven", artist: "Eric Clapton", key: "A (simplified)", bpm: 86, capo: 0, year: 1992, genre: "Rock Ballad",
    story: "Eric Clapton wrote it, with Will Jennings, after the death of his four-year-old son Conor.",
    sections: [
      { label: "Verse",  chords: ["A","E","F#m","D"] },
      { label: "Chorus", chords: ["A","E","F#m","D","E"] },
    ]},
  { title: "Budapest", artist: "George Ezra", key: "C (simplified)", bpm: 130, capo: 0, year: 2014, genre: "Pop",
    story: "George Ezra wrote it on a shoestring European trip — despite the title, he hadn't actually been to Budapest yet when he wrote it.",
    sections: [
      { label: "Verse",  chords: ["C","F","Am","G"] },
      { label: "Chorus", chords: ["C","F","Am","G"] },
    ]},
  { title: "I'm a Believer", artist: "The Monkees", key: "G", bpm: 130, capo: 0, year: 1966, genre: "Pop Rock",
    story: "Written by Neil Diamond and made famous by The Monkees, it became one of the best-selling singles of the entire 1960s.",
    sections: [
      { label: "Verse",  chords: ["G","Em","C","D"] },
      { label: "Chorus", chords: ["G","Em","C","D"] },
    ]},
  { title: "Knockin' on Heaven's Door", artist: "Bob Dylan", key: "G", bpm: 70, capo: 0, year: 1973, genre: "Folk Rock",
    story: "Bob Dylan wrote it for the film “Pat Garrett and Billy the Kid,” in which he also played a small supporting role.",
    sections: [
      { label: "Verse",  chords: ["G","D","Am","G","D","C"] },
      { label: "Chorus", chords: ["G","D","Am","G","D","C"] },
    ]},
  { title: "Three Little Birds", artist: "Bob Marley", key: "A", bpm: 75, capo: 0, year: 1977, genre: "Reggae",
    story: "Bob Marley reportedly wrote it about three birds that used to sit outside his studio window at Tuff Gong in Kingston.",
    sections: [
      { label: "Verse",  chords: ["A","D","E","A"] },
      { label: "Chorus", chords: ["A","D","E","A"] },
    ]},
  { title: "I'm Yours", artist: "Jason Mraz", key: "G", bpm: 140, capo: 0, year: 2008, genre: "Pop",
    story: "Jason Mraz sat on the song for years, reworking it, before it finally spent a record-breaking stretch on the Billboard Hot 100.",
    sections: [
      { label: "Verse",  chords: ["G","D","Em","C"] },
      { label: "Chorus", chords: ["G","D","Em","C"] },
    ]},
  { title: "Stand By Me", artist: "Ben E. King", key: "C", bpm: 118, capo: 0, year: 1961, genre: "Soul",
    story: "Ben E. King drew on an old gospel tune for the idea, and first offered the song to The Drifters, who turned it down.",
    sections: [
      { label: "Verse",  chords: ["C","Am","F","G"] },
      { label: "Chorus", chords: ["C","Am","F","G"] },
    ]},
  { title: "Zombie", artist: "The Cranberries", key: "Em", bpm: 85, capo: 0, year: 1994, genre: "Alt Rock",
    story: "Dolores O'Riordan wrote it in response to the 1993 IRA bombing in Warrington, England, which killed two children.",
    sections: [
      { label: "Verse",  chords: ["Em","C","G","D"] },
      { label: "Chorus", chords: ["Em","C","G","D","Em","C","G","D"] },
    ]},
  { title: "Riptide", artist: "Vance Joy", key: "Am", bpm: 102, capo: 0, year: 2013, genre: "Indie Folk",
    story: "Vance Joy wrote it on a cheap ukulele; the odd bridge lyric name-checking Elvis and King Kong came almost as an afterthought.",
    sections: [
      { label: "Verse",  chords: ["Am","G","C","Am","G","C"] },
      { label: "Chorus", chords: ["F","C","G","Am"] },
    ]},
  { title: "Take Me Home, Country Roads", artist: "John Denver", key: "G", bpm: 114, capo: 0, year: 1971, genre: "Country Folk",
    story: "Written about a West Virginia drive the songwriters hadn't actually taken yet — John Denver added the chorus the night before recording.",
    sections: [
      { label: "Verse",  chords: ["G","Em","C","G","D"] },
      { label: "Chorus", chords: ["G","Em","C","G","D","G"] },
    ]},
  { title: "Wagon Wheel", artist: "Old Crow Medicine Show", key: "G", bpm: 140, capo: 0, year: 2004, genre: "Folk Country",
    story: "Built from an unfinished Bob Dylan chorus sketch from his “Pat Garrett” sessions; Ketch Secor wrote the verses around it decades later.",
    sections: [
      { label: "Intro",  chords: ["G","D","Em","C"] },
      { label: "Verse",  chords: ["G","D","Em","C"] },
      { label: "Chorus", chords: ["G","D","Em","C"] },
    ]},
  { title: "Brown Eyed Girl", artist: "Van Morrison", key: "G", bpm: 150, capo: 0, year: 1967, genre: "Rock Pop",
    story: "Van Morrison's biggest hit went through several working titles — including “Brown Skinned Girl” — before landing on the final one.",
    sections: [
      { label: "Verse",  chords: ["G","C","G","D"] },
      { label: "Chorus", chords: ["C","D","G","Em","C","D","G"] },
    ]},
  { title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", key: "D", bpm: 98, capo: 0, year: 1974, genre: "Southern Rock",
    story: "Written partly as a response to Neil Young's “Southern Man” and “Alabama” — Young later said he actually liked the song.",
    sections: [
      { label: "Riff/Verse", chords: ["D","C","G","D","C","G"] },
      { label: "Chorus",     chords: ["D","C","G","D"] },
    ]},
  { title: "Hallelujah", artist: "Leonard Cohen", key: "C", bpm: 60, capo: 0, year: 1984, genre: "Folk Rock",
    story: "Leonard Cohen reportedly wrote around 80 verses for this song before settling on the handful most people know today.",
    sections: [
      { label: "Verse",  chords: ["C","Am","C","Am","F","G","C","G"] },
      { label: "Bridge", chords: ["F","G","Am","F","G","E"] },
    ]},
  { title: "Imagine", artist: "John Lennon", key: "C", bpm: 76, capo: 0, year: 1971, genre: "Rock",
    story: "John Lennon said the lyrics were partly inspired by a book of instructional poems written by Yoko Ono.",
    sections: [
      { label: "Verse",  chords: ["C","Cmaj7","F","C","Cmaj7","F"] },
      { label: "Chorus", chords: ["F","G","Am","F","C","G","C"] },
    ]},
  { title: "Wonderwall", artist: "Oasis", key: "Em (capo 2)", bpm: 87, capo: 2, year: 1995, genre: "Britpop",
    story: "Noel Gallagher has said the title came from an old George Harrison album title, not — as often assumed — about a specific person.",
    sections: [
      { label: "Verse",  chords: ["Em7","G","D","A7sus4"] },
      { label: "Chorus", chords: ["C","D6","G","G"] },
    ]},
  { title: "No Woman, No Cry", artist: "Bob Marley", key: "C", bpm: 78, capo: 0, year: 1974, genre: "Reggae",
    story: "Bob Marley credited the song to his friend Vincent Ford, who ran a soup kitchen in Trenchtown, so the royalties would support it.",
    sections: [
      { label: "Verse",  chords: ["C","G","Am","F","C","G","F"] },
      { label: "Chorus", chords: ["C","G","Am","F","C","G","F","C"] },
    ]},
  { title: "A Horse with No Name", artist: "America", key: "Em", bpm: 122, capo: 0, year: 1971, genre: "Folk Rock",
    story: "Written by then-19-year-old Dewey Bunnell, inspired by memories of the desert landscapes from his childhood in the American Southwest.",
    sections: [
      { label: "Verse (simplified)", chords: ["Em","D","Em","D"] },
    ]},
  { title: "Perfect", artist: "Ed Sheeran", key: "G", bpm: 95, capo: 0, year: 2017, genre: "Pop",
    story: "Ed Sheeran wrote it about his now-wife Cherry Seaborn and has called it one of the most personal songs he's ever released.",
    sections: [
      { label: "Verse",  chords: ["G","Em","C","D"] },
      { label: "Chorus", chords: ["G","Em","C","D","Em","C","G","D"] },
    ]},
  { title: "Someone Like You", artist: "Adele", key: "A", bpm: 67, capo: 0, year: 2011, genre: "Pop Soul",
    story: "Adele co-wrote it with Dan Wilson in a single afternoon session, inspired by a breakup she was still very much in the middle of.",
    sections: [
      { label: "Verse",  chords: ["A","E","F#m","D"] },
      { label: "Chorus", chords: ["A","E","F#m","D"] },
    ]},
];

if (typeof window !== 'undefined') window.SONGS = SONGS;
