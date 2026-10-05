# HKU-Notes

A personal, public collection of HKU course materials, lecture slides, and study
guides. Everything is organised by course so it is easy to browse and to keep
adding material over time.

## Structure

```
HKU-Notes/
├── README.md
├── COMP 3297/
│   ├── README.md
│   ├── materials/     # lecture slides and handouts (PDF, etc.)
│   └── notes/         # study guides, summaries, revision notes
└── COMP 3330/
    ├── README.md
    ├── materials/
    └── notes/
```

Each course folder follows the same convention:

| Folder | Purpose |
| --- | --- |
| `materials/` | Slides and handouts exactly as provided by the course. |
| `notes/` | Notes I write: summaries, study guides, worked examples, exam prep. |

## Courses

- [COMP 3297](COMP%203297/) — see course folder for details.
- [COMP 3330](COMP%203330/) — see course folder for details.

## Adding new material

1. Drop new slides into the relevant `materials/` folder.
2. Write notes as Markdown in the relevant `notes/` folder and link them from
   the course README.
3. Commit and push.

If the repository grows large, large binary slides can be moved to
[Git LFS](https://git-lfs.com/) later.

## Disclaimer

These materials are shared for personal study. Slides and handouts remain the
property of their respective authors and The University of Hong Kong. Notes are
my own work unless stated otherwise.
