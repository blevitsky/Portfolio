/* Shared song data for the rebuilt ChordPeek: no chords, no synthesized
   audio — the real recording plays via an embedded YouTube player, so this
   file only needs what the room actually shows: the track's identity, a
   short factual story, and a curated mood that drives the room's lighting.
   One file, read by both prototype.html (the browse/search launcher) and
   room.html (the song room), so the two pages can never drift apart.

   youtubeId: the video ID (the part after watch?v=) for the track's best
   available official upload. Swap any of these in one line if a video ever
   gets pulled or region-locked.

   mood: a hand-picked { hue, name } pair (not computed from key/tempo,
   since neither exists anymore) that sets the room's accent color and
   ambient label — curated per song rather than templated, the same way a
   real editor would pick a palette for a magazine spread rather than
   running a formula. */
const SONGS = [
  {
    title: "Blurry", artist: "Puddle of Mudd", album: "Come Clean", year: 2001, genre: "Post-Grunge",
    youtubeId: "xJJsoquu70o",
    mood: { hue: 205, name: "Overcast & aching" },
    story: "Wes Scantlin wrote “Blurry” about losing contact with his infant son during a custody dispute. Fred Durst discovered the band and got them signed to Interscope; the song spent three weeks at #1 on Billboard's Mainstream Rock chart and became the defining post-grunge single of 2001.",
  },
  {
    title: "Fine Again", artist: "Seether", album: "Disclaimer II", year: 2002, genre: "Alt-Metal",
    youtubeId: "y9MVRhBfzz8",
    mood: { hue: 350, name: "Raw & searching" },
    story: "Frontman Shaun Morgan wrote “Fine Again” about pulling himself out of addiction. It became the South African band's breakthrough U.S. rock-radio hit and the song most credited with putting Seether on the map stateside.",
  },
  {
    title: "Adam's Song", artist: "blink-182", album: "Enema of the State", year: 1999, genre: "Pop Punk",
    youtubeId: "Zbxntcj48BY",
    mood: { hue: 220, name: "Quiet & heavy" },
    story: "Mark Hoppus wrote the lyrics after reading a teenage fan's suicide note printed in a magazine, while blink-182 was on a lonely stretch of tour. It's the band's most serious song by far — a pop-punk record that opened up a real conversation about teen depression.",
  },
  {
    title: "Hemorrhage (In My Hands)", artist: "Fuel", album: "Something Like Human", year: 2000, genre: "Post-Grunge",
    youtubeId: "ZbHfgXJKn1Y",
    mood: { hue: 10, name: "Fragile & urgent" },
    story: "Written about watching someone you love fall apart and being unable to stop it, “Hemorrhage” became Fuel's biggest hit, spending nine weeks at #1 on the Mainstream Rock chart — still one of the most-played rock-radio songs of the early 2000s.",
  },
  {
    title: "If You Could Only See", artist: "Tonic", album: "Lemon Parade", year: 1996, genre: "Alt Rock",
    youtubeId: "Sfg6-4mBs6Y",
    mood: { hue: 28, name: "Golden & defiant" },
    story: "Emerson Hart wrote it about his real relationship with an older, still-married woman — the “forbidden love” in the lyrics was literal, not metaphor. It became Tonic's signature song and a radio-rock staple of the late '90s.",
  },
  {
    title: "Here Without You", artist: "3 Doors Down", album: "Away from the Sun", year: 2002, genre: "Post-Grunge",
    youtubeId: "kPBzTxZQG5Q",
    mood: { hue: 235, name: "Longing & vast" },
    story: "Brad Arnold wrote it about missing his girlfriend while 3 Doors Down was constantly on tour. It spent 30 weeks on the Billboard Hot 100 and became one of the best-selling rock singles of the decade — its official video has passed one billion YouTube views.",
  },
  {
    title: "Spin", artist: "Lifehouse", album: "Stanley Climbfall (Expanded Edition)", year: 2002, genre: "Alt Rock",
    youtubeId: "LWnIEHVoiXg",
    mood: { hue: 265, name: "Restless & searching" },
    story: "Jason Wade wrote “Spin” about the disorientation of sudden fame after Lifehouse's debut blew up — feeling like the world was moving faster than he could keep up with. It became a defining deep cut from the Stanley Climbfall era.",
  },
  {
    title: "45", artist: "Shinedown", album: "Leave a Whisper", year: 2003, genre: "Alt-Metal",
    youtubeId: "MLeIyy2ipps",
    mood: { hue: 355, name: "Tense & cornered" },
    story: "Brent Smith has said “45” uses the imagery of a loaded gun as a metaphor for being pushed to your absolute limit by a toxic relationship — not a literal account. It became Shinedown's breakout single and a mainstay of 2000s rock radio.",
  },
  {
    title: "Waste", artist: "Phish", album: "Billy Breathes", year: 1996, genre: "Jam / Alt Rock",
    youtubeId: "qVVFDXWBtis",
    mood: { hue: 150, name: "Tender & unhurried" },
    story: "One of the gentlest songs in the Phish catalog — Trey Anastasio has described “Waste” as being about staying present with someone rather than wasting the time you have together. Billy Breathes marked a deliberate shift toward shorter, more intimate songwriting for the band.",
  },
  {
    title: "Don't Go Away", artist: "Oasis", album: "Be Here Now", year: 1997, genre: "Britpop",
    youtubeId: "FU6yzzESX8Y",
    mood: { hue: 30, name: "Wistful & grand" },
    story: "Noel Gallagher wrote “Don't Go Away” while his father was undergoing cancer treatment. Tucked into the maximalist Be Here Now, it's one of the most quietly personal songs Oasis ever released.",
  },
  {
    title: "Stairway to Heaven", artist: "Led Zeppelin", album: "Led Zeppelin IV", year: 1971, genre: "Classic Rock",
    youtubeId: "QkF3oxziUI4",
    mood: { hue: 42, name: "Mythic & ascending" },
    story: "Jimmy Page and Robert Plant wrote “Stairway to Heaven” at a remote Welsh cottage called Bron-Yr-Aur, building the song from a slow acoustic figure into one of rock's most famous electric climaxes. Never released as a single, it became the most-requested song in FM radio history anyway.",
  },
];
