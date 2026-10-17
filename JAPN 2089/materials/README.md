# JAPN 2089 — Materials

The course's own readings, listed but **not copied here**: they are journal articles and a
copyrighted book, and the set is ~57 MB in total. The files live in the local course folder:

```
/home/elijahdelgado/Documents/HKU/Year 4/Sem 1/JAPN 2089/
├── Readings/            # the six assigned readings (PDF)
├── Reading Responses/   # (empty — coursework responses go here)
└── Notes/               # study material (duplicated in this repo folder under notes/)
```

Convention as elsewhere in this repo: drop new handouts into this folder exactly as provided
and list them below.

| File (`Readings/`) | Pages | Reference | Topic |
| --- | --- | --- | --- |
| `The_Politics_of_Anti-Westernism_in_Asia_..._----_(4._The_Global_Moment_of_the_Russo-Japanese_War_The_Awakening_of_the_Ea...).pdf` | 24 | Cemil Aydin, *The Politics of Anti-Westernism in Asia: Visions of World Order in Pan-Islamic and Pan-Asian Thought* (New York: Columbia UP, 2007), ch. 4 | 1905 as a global moment; pan-Asianism and pan-Islamism |
| `Schencking Great Kanto Earthquake.pdf` | 38 | J. Charles Schencking, 'The Great Kanto Earthquake and the Culture of Catastrophe and Reconstruction in 1920s Japan', *Journal of Japanese Studies* 34:2 (Summer 2008), 295–331 | 1923 disaster as cultural and political text |
| `doc.pdf` | 25 | Miriam Silverberg, 'Constructing the Japanese Ethnography of Modernity', *Journal of Asian Studies* 51:1 (Feb. 1992), 30–54 | Kon Wajirō, Gonda Yasunosuke, the everyday in interwar Tokyo |
| `AGordon-ConsumptionLeisureMiddle-2007.pdf` | 22 | Andrew Gordon, 'Consumption, Leisure and the Middle Class in Transwar Japan', *Social Science Japan Journal* 10:1 (Apr. 2007), 1–21 | Consumption, leisure, the middle class, 1920s–60s |
| `Iriye Selden-ChildhoodMemoirWartime-2015.pdf` | 24 | Kyoko Selden, 'A Childhood Memoir of Wartime Japan', *Review of Japanese Culture and Society* 27 (2015), 81–103 (Afterword by Akira Iriye) | Wartime home front, 1936–45 |
| `Dower, John W - Embracing defeat _ Japan in the wake of World War II-W.W. Norton  Co (1999).pdf` | 624 | John W. Dower, *Embracing Defeat: Japan in the Wake of World War II* (New York: W. W. Norton / The New Press, 1999) | Defeat and the occupation, 1945–52 |

Extraction notes:

- `doc.pdf` (Silverberg) has **no text layer**; it is a CCITT page-image scan. Render with
  `pdftoppm -r 150 -png` and read the images (page N of the scan = journal page 29+N).
- The JSTOR PDFs (`AGordon-...`, and the ProQuest/MUSE files) have a **clipped text layer**:
  `pdftotext` straight off the original drops the end of long lines. Re-write first (command
  below), then `pdftotext -raw wide.pdf out.txt`. The Aydin and Selden files extract
  identically with or without this step, so check per file.
- Dower's PDF is missing printed **page 90** (the file jumps p. 89 → p. 91 mid-sentence); that
  is a lacuna in the supplied file, not an extraction fault.

Command used to widen a PDF before extracting:

```sh
gs -q -sDEVICE=pdfwrite -o wide.pdf \
   -dDEVICEWIDTHPOINTS=800 -dDEVICEHEIGHTPOINTS=1100 -dFIXEDMEDIA \
   -dNOPAUSE -dBATCH original.pdf
pdftotext -raw wide.pdf out.txt
```
