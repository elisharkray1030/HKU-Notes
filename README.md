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
│   ├── notes/         # study guides and summaries (Markdown)
│   └── revision/      # interactive HTML revision packs (re-teach + practice)
└── COMP 3330/
    ├── README.md
    ├── materials/
    ├── notes/
    └── revision/
```

Each course folder follows the same convention:

| Folder | Purpose |
| --- | --- |
| `materials/` | Slides and handouts exactly as provided by the course. |
| `notes/` | Notes I write: summaries, study guides, worked examples, exam prep. |
| `revision/` | Interactive HTML revision packs: one re-teach page and one practice page per topic, linked from `revision/index.html`. The shared CSS and widget JS live in `revision/assets/`. |

## Courses

- [COMP 3297](COMP%203297/) — see course folder for details.
- [COMP 3330](COMP%203330/) — see course folder for details.

## Adding new material

1. Drop new slides into the relevant `materials/` folder.
2. Write notes as Markdown in the relevant `notes/` folder and link them from
   the course README.
3. For a revision pack, add `NN-<topic>.html` (re-teach) and
   `practice-NN-<topic>.html` (exercises) to the course's `revision/` folder,
   link the shared kit in `revision/assets/` instead of copying it, and list
   both in that course's `revision/index.html` hub.
4. Commit and push.

If the repository grows large, large binary slides can be moved to
[Git LFS](https://git-lfs.com/) later.

## Disclaimer

These materials are shared for personal study. Slides and handouts remain the
property of their respective authors and The University of Hong Kong. Notes are
my own work unless stated otherwise.
