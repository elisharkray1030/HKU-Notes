# QA report — Chapter 15 revision page

Date: 19 November 2026
Scope: `05-syllables-prosodic-domains.html` for LING 2027.

## Source and coverage

Primary source: Elizabeth C. Zsiga, *The Sounds of Language: An Introduction to Phonetics and Phonology* (2013), Chapter 15, printed pp. 331–352. The 23-page chapter PDF was read by text extraction; glyph-sensitive examples were checked against rendered page images. The page connects Chapter 15 to the course’s previously studied phonetics (Chs. 1–4), phonemic analysis (Ch. 10), phonotactics and alternations (Ch. 11), and cross-language generalisations (Ch. 12). It does not claim a published quiz scope.

## Review passes

1. Mechanical gate: the study-pack HTML QA script reported 0 hard failures. It checked HTML tag integrity, relative links, quiz answer-key shape, feedback blocks, summaries and leaked local paths. Result: 3 quizzes, 0 quoted spans, 0 hard failures.
2. Browser verification: opened from `file://` with shared CSS and JS. All three correct options produced correct feedback; all three tested wrong options produced correction feedback. The final page had no horizontal overflow at a 780 px viewport and no observed JavaScript errors.
3. Source and pedagogy review, first pass: reviewers found three improvements: remove wording that could imply quiz scope, teach syllabic consonants before using them in a quiz distractor, and specify the conditioning environment for Korean voicing. All were corrected.
4. Second pass: reviewers identified the Russian word-final-devoicing example’s printed page as p. 343 (not p. 342), and flagged the exact Korean output transcription. The citation was corrected. The Korean example was checked against a 350-dpi crop of printed p. 347 and corrected to `[moduŋɡulim]`, with IPA engma `ŋ` (U+014B) and script `ɡ` (U+0261). The teaching text now distinguishes `/t/ → [d]` and `/k/ → [ɡ]` voicing from `/n/ → [ŋ]` place assimilation.
5. Final independent source audit: GREEN. Final independent pedagogical/adversarial review: GREEN. Both reviewers confirmed the corrected Korean transcription, page citation, quiz explanations and the earlier fixes; no remaining defects were reported.
6. Focused IPA audit: an additional review of every IPA-style string found one mismatch in the structure table: the source’s *free* example prints nucleus `i` without a length mark, while the page had `iː`. Both table cells were corrected to `/i/`. Rendered-source audit of pp. 332, 333, 336 and 347 found no remaining IPA/transcription mismatches. The mechanical gate and browser quiz/layout checks were rerun after this correction and passed.

## Final status

The HTML page contains approximately 2,377 visible words and three interactive multiple-choice checks. It teaches syllable constituency, sonority and its limitations, onset/coda constraints and repair, moraic weight, the prosodic hierarchy, and phonological word/phrase domains. The distinction between syllable- and word-level processes is made explicit, including German versus Russian devoicing.

The existing `index.html` and the existing `QA-REPORT.md` were left untouched. To preserve those files, this page is standalone and is not yet listed as a card on the revision hub; it links back to the hub. No commit or push was made.

Re-run the mechanical gate from the repository using:

```sh
python ~/.hermes/skills/note-taking/study-pack-authoring/scripts/qa_html_pack.py \
  --pack "LING 2027/revision" \
  --src "<directory containing the Chapter 15 text extract>" \
  "LING 2027/revision/05-syllables-prosodic-domains.html"
```
