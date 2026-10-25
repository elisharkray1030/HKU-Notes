# QA report — LING 2027 revision pack

Date: 25 October 2026. Midterm: Thursday 29 October, week 7.
Scope: all ten pages in this folder, checked against the course material on disk.

## What was checked, and how

Four independent reviewers, one per topic area, each given its pages and the source PDFs (not
each other's findings). Each was told to re-derive every answer key from the data on the page, to
verify every page and slide citation by opening that page, and to treat any invented exam fact
(marks, weightings, paper structure) as a blocker. They fixed simple factual and citation errors in
place and reported anything that needed re-analysis rather than rewriting it.

A mechanical harness ran over the whole pack as well: HTML well-formedness, one correct option per
quiz, a `<summary>` on every `<details>`, every `href` resolving on disk, no leaked local paths, and
a quotation sweep of every quoted span against the page-aware text of all 21 source documents.

## Result

| Page | Words | Quizzes | Blockers found | Minors found |
| --- | --- | --- | --- | --- |
| `01-phonetics.html` | 4,157 | 0 | 1 (fixed) | 13 |
| `02-abstraction-contrast-predictability.html` | 4,242 | 3 | 1 (fixed) | 16 |
| `03-phonotactics.html` | 4,104 | 2 | 0 | 8 |
| `04-alternations.html` | 9,522 | 3 | 7 (6 fixed, 1 below) | 13 |
| `practice-01-phonetics.html` | 6,005 | 5 | (shares blocker above) | — |
| `practice-02-abstraction-contrast-predictability.html` | 7,367 | 5 | 1 (fixed) | — |
| `practice-03-phonotactics.html` | 5,349 | 5 | 0 | — |
| `practice-04-alternations.html` | 7,370 | 4 | 1 (fixed) | — |
| `practice-mock-midterm.html` | 6,707 | 4 | 0 | — |
| `index.html` | 732 | 0 | — | — |

Zero HTML, quiz-shape, link or path defects across all ten pages after the fixes.

## The blockers, and what happened to them

1. **A fabricated quotation** in `01-phonetics.html`: a sentence in quotation marks attributed to
   Ch. 2 that does not appear anywhere in the book. Replaced with the book's own words.
2. **A wrong verdict in `practice-02`, Exercise 4.** The key said a two-phoneme analysis of [t]/[ts]
   was "forbidden" because there is no minimal pair. Zsiga p. 213 draws the opposite conclusion for
   English [h]/[ŋ] on exactly that evidence, so the prohibition taught the reverse of the chapter.
   Rewritten: allophony is now presented as the best-supported analysis on the available evidence,
   with "more likely" hedged as the book hedges it, and the exam-writing model answer corrected to
   match.
3. **Seven coherence failures on the alternations pages**, all consequences of those pages having
   been written before the Topic 4 deck existed and patched afterwards. The trigger was defined as
   "the material right of the slash" while the page's own analyses put the trigger on the left; a
   section heading was truncated to "in-"; a leftover patch note addressed the reader about the
   page's own drafting history; two paragraphs gave competing accounts of the Quiz 4 format; the
   closing line promised a quiz that had already happened; Table 11.1 was called "ten types" where
   the book prints twelve rows; and an epenthetic-vowel table was quoted that does not exist in any
   course file. All removed or replaced.
4. **`practice-04`, Exercise 6: the stated constraint was falsified by its own data.** The answer
   claimed general nasal place agreement, but [tʃik-nu] and [daf-nu] keep [n] after a dorsal and a
   labial fricative, so only labial non-continuants trigger [m]. The constraint sentence and the
   "sub-type" line now say exactly what the data show, and say why the general version would be the
   "hold only for the group concerned" failure the lecture warns about.

## Other corrections worth knowing about

- The course's own Tutorial B key labels [ʊ] "unrounded". The chart says rounded; the practice page
  keeps the key's height and backness wording, corrects only the rounding, and says why — writing
  "unrounded" would be indefensible against the chart supplied in the exam.
- Chapter 1 and Chapter 2 carry no book page number in their PDFs, so they are cited as "Ch. 2,
  p. 5 of 19". Any book page for those two chapters would have been invented.
- Several "slide N" citations were written as book pages ("p. 31" for a deck); they are now slides.
- Invented IPA in the description drills was checked symbol by symbol against the chart, and the
  course's description orders (consonants other–voicing–place–manner, vowels height–backness–
  rounding) are enforced in the keys.

## What remains open, and why

- **Image-only slides cannot be verified.** Topic 1 yields 287 words of text across 49 pages and
  Topic 2 has 28 image-only pages. No claim in this pack rests on an image-only page — that was the
  standing rule — but it also means nothing on those slides is confirmed.
- **The week numbers** (week 5 = 8 Oct, midterm 29 Oct) come from the course schedule, not from any
  file on disk.
- Two wording nits were left rather than rewritten, because fixing them means redrafting an
  argument: `01-phonetics` says the chart "is five panels" where the printed chart shows seven
  labelled blocks, and `04-alternations` calls Zsiga's six stages and the deck's HOW/WHAT/WHY frame
  "compatible" although naming the type has no counterpart among Zsiga's stages.
- The quotation sweep still reports a long list of "not found" spans. Spot-checking shows these are
  not misquotes: they are scare quotes, section titles, and spans whose glyphs the PDF text layer
  drops (a bracketed [ɬ] extracts as `[ ]`). Treat that list as leads, not verdicts.

## Re-running the checks

The harness lives outside the repo, at `~/.hermes/cache/scratch/ling2027/qa_check.py`; run it with
no arguments to check every page in this folder. The per-reviewer findings are the four files
`qa-A.md` to `qa-D.md` in that same directory, each with the quoted element, the severity, and the
source page that proves the correction.
