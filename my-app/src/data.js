const shows = [
      {
        id: 1,
        name: "The Simpsons",
        type: "Animation",
        language: "English",
        officialSite: "http://www.fox.com/the-simpsons/full-episodes",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/423/1058261.jpg",
        summary: "The Simpsons is the longest running scripted show in US television history. It captures the adventures of Homer, Marge, Maggie, Bart and Lisa who are living in a fictional town called Springfield."
      },
      {
        id: 2,
        name: "Game of Thrones",
        type: "Scripted",
        language: "English",
        officialSite: "http://www.hbo.com/game-of-thrones",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg",
        summary: "Based on the bestselling book series A Song of Ice and Fire by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the Game of Thrones, you either win or you die."
      },
      {
        id: 3,
        name: "The Big Bang Theory",
        type: "Scripted",
        language: "English",
        officialSite: "http://www.cbs.com/shows/big_bang_theory/",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/173/433868.jpg",
        summary: "The Big Bang Theory is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of beautiful minds that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard's roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love."
      },
      {
        id: 4,
        name: "Family Guy",
        type: "Animation",
        language: "English",
        officialSite: "http://www.fox.com/family-guy",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/423/1058269.jpg",
        summary: "Family Guy follows Peter Griffin the endearingly ignorant dad, and his hilariously offbeat family of middle-class New Englanders in Quahog, RI. Lois is Peter's wife, a stay-at-home mom with no patience for her family's antics. Then there are their kids: 18-year-old Meg is an outcast at school and the Griffin family punching bag; 13-year-old Chris is a socially awkward teen who doesn't have a clue about the opposite sex; and one-year-old Stewie is a diabolically clever baby whose burgeoning sexuality is very much a work in progress. Rounding out the Griffin household is Brian the family dog and a ladies' man who is one step away from AA."
      },
      {
        id: 5,
        name: "The Voice",
        type: "Reality",
        language: "English",
        officialSite: "http://www.nbc.com/the-voice",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/423/1057625.jpg",
        summary: "The Voice is a reality singing competition show where the idea is to find new singing talent via a series of auditions."
      },
      {
        id: 6,
        name: "Dancing with the Stars",
        type: "Reality",
        language: "English",
        officialSite: "https://www.disneyplus.com/series/dancing-with-the-stars/6NjZlDrEDlBw",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/420/1050100.jpg",
        summary: "The hit series in which celebrities perform choreographed dance routines that are judged by a panel of renowned ballroom experts."
      },
      {
        id: 7,
        name: "The Walking Dead",
        type: "Scripted",
        language: "English",
        officialSite: "https://www.amc.com/twdu/the-walking-dead",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/424/1061900.jpg",
        summary: "The Walking Dead tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country. Over time, the characters are changed by the constant exposure to death and some grow willing to do anything to survive. Based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard."
      },
      {
        id: 8,
        name: "Modern Family",
        type: "Scripted",
        language: "English",
        officialSite: "http://abc.go.com/shows/modern-family",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/359/898320.jpg",
        summary: "Modern Family revolves around three different types of families (nuclear, step- and same-sex) living in the Los Angeles area, who are interrelated through Jay Pritchett and his children, Claire Dunphy (née Pritchett) and Mitchell Pritchett. Patriarch Jay is remarried to a much younger woman, Gloria Delgado Pritchett (née Ramirez), a passionate Colombian with whom he has an infant son, Fulgencio (Joe) Pritchett, and a son from Gloria's previous marriage, Manny Delgado. Jay's daughter Claire was a homemaker, but has returned to the business world. She is now the chief executive of her father's previous business, Pritchett's Closets and Blinds. She is married to Phil Dunphy, a realtor and self-professed cool dad. They have three children: Haley Dunphy, a stereotypical ditzy teenage girl; Alex Dunphy, a nerdy, smart middle child; and Luke Dunphy, the off-beat only son. Jay's lawyer son Mitchell and his husband Cameron Tucker have one daughter, Lily Tucker-Pritchett. As the name suggests, this family represents a modern-day family, and episodes are comically based on situations which many families encounter in real life."
      },
      {
        id: 9,
        name: "Law & Order: Special Victims Unit",
        type: "Scripted",
        language: "English",
        officialSite: "http://www.nbc.com/law-and-order-special-victims-unit",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/426/1065684.jpg",
        summary: "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories."
      },
      {
        id: 10,
        name: "Lost",
        type: "Scripted",
        language: "English",
        officialSite: "http://abc.go.com/shows/lost",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/0/1389.jpg",
        summary: "Out of the blackness, the first thing Jack senses is pain. Then burning sun. A Bamboo forest. Smoke. Screams. With a rush comes the horrible awareness that the plane he was on tore apart in mid-air and crashed on a Pacific island. From there it's a blur, as his doctor's instinct kicks in: people need his help. Stripped of everything, the 48 survivors scavenge what they can from the plane for their survival. Some panic. Some pin their hopes on rescue. A few find inner strength they never knew they had -- like Kate, who, with no medical training, suddenly finds herself suturing the doctor's wounds. Hurley - a man with a warm sense of humor despite the desperate situation - does his best to keep his cool as he helps those around him to survive. Charlie is a faded rock star who harbors a painful secret. Sayid is a Middle Eastern man who must wrestle with the racial profiling directed at him by some of his fellow survivors. Jin and Sun are a Korean couple whose traditions, values and language are foreign, and thus causes much to get lost in the translation. Sawyer has an air of danger surrounding him, and his intense sense of mistrust for everyone around him could prove to be fatal to his fellow castaways. Michael has just gained custody of his nine-year-old son, Walt, after the death of his ex-wife - they are a father and son who don't even know each other. Locke is a mysterious man who keeps to himself, and who harbors a deeper connection to the island than any of the others. Self-centered Shannon - who actually gives herself a pedicure amid the chaos - and her estranged controlling brother, Boone , constantly bicker and must learn to get along if they are to survive. And young Claire is eight months pregnant and ill-prepared for the hardships of motherhood - especially on a deserted island."
      }
    ]