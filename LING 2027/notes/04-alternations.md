# 04 — Alternations (Zsiga Ch. 11.2–3)

**LING 2027 · Week 6 (22 Oct) · short quiz 4 covers Ch. 11.2–3 · also midterm revision (midterm 29 Oct)**

## What this covers / what the quiz asks

This note covers Zsiga §11.2 "Analyzing alternations" (book pp. 225–231) and §11.3 "Alternations:
what to expect" (book pp. 232–245), including all ten sub-sections 11.3.1–11.3.10 and Table 11.1.
The quiz asks you to take a small dataset and (a) describe the phonological environments of the
allomorphs, (b) name the alternation involved, (c) state the phonotactic constraint(s) motivating it,
and (d) give the underlying form using the *elsewhere* criterion — then recognise the alternation
type from §11.3. It is a short written answer (the course grades on how many items you cover *with
discussion*), so train "state the thing **and** explain it".

## Sources used

- Zsiga, *The Sounds of Language* (2013), **§11.2** (book pp. 225–231) and **§11.3** (book pp. 232–245);
  page map: PDF page + 220 = book page.
- **Tutorial D** (Clarissa Ki, 5–6 Oct 2026) — the course's own **three-step** alternation method and
  the `[t] / [d] / [ɨd]` worked example.
- **Tutorial C** (Clarissa Ki, 28–29 Sep 2026) — the four-step phoneme/allophone method that §11.2 reuses.
- **Topic 3 "Phonotactics"** lecture (Maksymilian Dąbkowski) — the four-slot answer template and the
  `/in-/` preview. There is **no Topic 4 lecture**; §11.3's type names come from the textbook only.
- The working digests (`readings.md`, `tutorials.md`, `lectures.md`, `course-ctx.md`). Low-confidence
  IPA reads are flagged ⚠ and unresolved ones `[UNRESOLVED]`, exactly as in the digests.

Conventions: `/…/` = underlying/basic form (UR), `[…]` = surface form (SR), `__` = the slot where the
affix sits, `#` = boundary, `*` = illicit form, `ɹ` (never `r`) for the approximant.

---

## The 60-second version

When morphemes combine, they can create a sound sequence the language forbids, so the morpheme is
pronounced differently in different contexts — it **alternates**. Each morpheme has **one** stored
entry, its **underlying/basic form** (UR); the variants that are actually said are its **allomorphs**
or **surface forms**. To analyse an alternation: identify the allomorphs (Zsiga's *first step*), list
each one's environment (*next/second step*), generalise those environments into natural classes, name
the **phonotactic constraint** that drives the change, choose the UR by the **elsewhere case** (the
allomorph whose environment is the most phonetically diverse and widest — e.g. English past tense
`/d/`), and state a **rule** (Zsiga writes numbered prose rules with an "otherwise" chain, **not**
`A → B / C__D`; the algebraic form is standard notation supplied for revision). §11.3 then catalogues
the ten common alternation types — local assimilation, long-distance assimilation (harmony),
coalescence, dissimilation, lenition & fortition (incl. debuccalization), epenthesis, deletion,
lengthening & shortening, metathesis, and morphological interactions — each with one clean example.
The single most likely quiz item is the English past tense in full, plus the epenthesis-vs-deletion
diagnostic: **the quality of epenthetic vowels is predictable; the quality of deleted vowels is not.**

---

## Core concepts

| Term | One–two line definition | Canonical example |
|---|---|---|
| **Underlying / basic form (UR)** | The single entry a morpheme has in the mental lexicon, written `/…/`; like an underlying phoneme, it is abstract and chosen as the elsewhere case. | Past-tense suffix **`/d/`**; Zoque possessive prefix **`/n/`**; **`/in-/`**. |
| **Allomorph** | The positional variants of a *morpheme* — the counterpart, at morpheme level, of a phoneme's allophones. | `in-` has **`[ɪn] / [ɪm] / [ɪŋ]`**; the past-tense suffix has **`[t] / [d] / [ɨd]`**. |
| **Surface form (SR)** | The form that is actually pronounced, written `[… ]`; the allomorph as it appears in a given context. | reached **`[ɹitʃt]`**, mowed **`[mod]`**, rotted **`[ɹɑɾɨd]`**. |
| **Complementary distribution** | No form occurs in the environment of another — each allomorph occupies its own, non-overlapping set of contexts. | The three past-tense allomorphs: "no sound occurs in more than one list." |
| **Elsewhere case** | The allomorph whose conditioning set is the most phonetically **diverse** and widest — the default; it is chosen as the UR, and the more restricted forms are derived. | **`[d]`** after vowels, sonorants and voiced obstruents ⇒ UR **`/d/`**; Zoque **`/n/`**; lecture's **`/in-/`**. |
| **Rule / generative grammar** | A rule **derives** the surface form from the underlying form; a description built this way is a **generative grammar** (Chomsky & Halle, *SPE* 1968). Zsiga's §11.2 rules are **numbered prose rules with an "otherwise" chain**; `A → B / C__D` is *standard notation supplied for revision, not her text*. | Rule (3): `/d/` → `[ɨd]` after an alveolar stop, `[t]` after any other voiceless sound, `[d]` otherwise. |
| **Positional neutralisation** | Where an alternation makes two sounds that contrast elsewhere fall together in one position, so their contrast disappears **there**. Zsiga names it at the §11.2 set-up ("positional variation (and sometimes positional neutralization)") but runs **no dedicated worked example** of it in 11.2–3. | Intervocalic tapping: `/t/` and `/d/` both surface as `[ɾ]` before an unstressed vowel — atom `[ˈæɾəm]` (same rule as "added"). *(Illustration drawn from the course's own tapping data; the term itself is carried over from Ch. 10 §10.3.)* |

---

## The method, step by step

Zsiga presents a **six-stage** procedure, but she puts a number on **only two** of the stages. Keep
that distinction: "first step" and "second step / next step" are **her** labels; steps 3–6 are carried
out and described but **not numbered** by her.

| # | Stage | Zsiga's wording (page) | Numbered? |
|---|---|---|---|
| 1 | **Identify the allomorphs** of the morpheme | "The **first step** … is to identify the different forms of the morpheme that need to be accounted for." (p. 225) | **YES — "first step"** |
| 2 | **List the environment** of each allomorph | "the **next step** … is to list the environments where each allomorph occurs." (p. 226); "The **second step** is to look for patterns." (p. 228) | **YES — "next step" / "second step"** |
| 3 | **Generalise** the environments into **natural classes** | "each list forms a class that can be defined in phonetic terms" (p. 227); "each list constitutes a **natural class**" (p. 230); distributions "as general as possible" (p. 231) | no |
| 4 | **Identify the motivating phonotactic constraint** | "we can see the activity of phonotactic constraints in driving the alternation." (p. 227) | no |
| 5 | **Choose the underlying form** — the *elsewhere case* | "the set of sounds that take [d] is the most diverse: vowels, sonorants, and voiced obstruents." (p. 227) | no |
| 6 | **State the rule** deriving each surface form | "state the generalizations that derive each of the surface forms" (p. 227) | no |

**The elsewhere criterion (stage 5, the test).** Choose as the UR the allomorph whose environment is
the **most phonetically heterogeneous** and the **widest in distribution** — the "elsewhere" set. The
more restricted surface forms are then derived from it. When *neither* allomorph is an elsewhere case
(Igbo's `[ó] ~ [ɔ́]`), you fall back on defining the morpheme with the relevant feature unspecified —
"we cannot decide … whether `[ó]` or `[ɔ́]` is more basic."

**Ordering (Pāṇini's Theorem).** Apply the **most specific** rule first, the general one after. In
the past tense this means the `[ɨ]`-insertion rule (specific: only after an alveolar stop) runs
*before* the voicing rule (general: after any voiceless sound). The name comes from the ancient
Indian grammarian Pāṇini; the **lecture never uses this name** — the lecture says "the elsewhere case
/ elsewhere condition".

### The method is the Ch. 10 method re-run on morphemes

> "The steps in solving a phoneme/allophone problem and a morpheme alternation problem are in fact
> pretty much the same. The difference is one of focus." (p. 226)

### How the course's own 3-step version maps onto Zsiga's six

Tutorial D states the course's own **three-step** method; it covers Zsiga's stages 1–4 and **stops**
before stage 5 (choose the UR) and stage 6 (write the rule). The lecture's four-slot answer template
re-adds the UR.

| Tutorial D (course, verbatim) | Zsiga §11.2 stage(s) |
|---|---|
| **Step 1** describe the phonological environments of the allomorphs of the affix | stages **1 + 2** — "identify the different forms" (p. 225); "list the environments" (p. 226) |
| **Step 2** generalise the environments / name the alternation | stage **3** — "each list … a natural class" (pp. 227, 230) |
| **Step 3** state the phonotactic constraint(s) motivating the alternation | stage **4** — "activity of phonotactic constraints" (p. 227) |
| *(not in the 3 steps — re-added by the lecture template)* | stage **5** — UR via the **elsewhere case** (pp. 225, 227) |
| *(not in the 3 steps)* | stage **6** — the ordered **rule** (example (3), p. 227) |

The **four-slot answer template** the course expects (Topic 3, slide 30):
**`Type of alternation:` → `Motivating phonotactic constraint:` → `UR:`** — i.e. the three tutorial
steps **plus** the UR slot.

---

## Worked example: English past tense

*(Zsiga §11.2, pp. 225–227; also Tutorial D slides 15–18.)*

### The three allomorphs (as whole inflected words, p. 226)

> "three forms: `[t]` as in "reached" **`[ɹitʃt]`**, `[d]` as in "mowed" **`[mod]`**, and **`[ɨd]`** as
> in "rotted" **`[ɹɑɾɨd]`**."

The epenthetic vowel is **`ɨ`** (U+0268) — settled; see *Known uncertainties*.

### (1) The stem lists (book p. 226) — IPA is the pronunciation of the *unsuffixed* verb

| `[t]` | stem | `[d]` | stem | `[ɨd]` | stem |
|---|---|---|---|---|---|
| reached | `[ɹitʃ]` | mowed | `[mo]` | rotted | `[ɹɑt]` |
| ripped | `[ɹɪp]` | fibbed | `[fɪb]` | prodded | `[pɹɑd]` |
| laughed | `[læf]` | loved | `[lʌv]` | lifted | `[lɪft]` |
| camped | `[kæmp]` | rammed | `[ræm]` | boosted | `[bust]` |
| missed | `[mɪs]` | blazed | `[blez]` | carded | `[kɑɹd]` |
| reversed | `[ɹivɝs]` | blared | `[bler]` | handed | `[hænd]` |
| refreshed | `[ɹifɹɛʃ]` | edged | `[ɛdʒ]` | created | `[kriet]` |
| picked | `[pɪk]` | begged | `[bɛg]` | crafted | `[kræft]` |
| inked | `[ɪŋk]` | banged | `[bæŋ]` | ranted | `[rænt]` |
| helped | `[hɛlp]` | canned | `[kæn]` | belted | `[bɛlt]` |
| milked | `[mɪlk]` | failed | `[fel]` | hated | `[het]` |
| hoped | `[hop]` | sued | `[su]` | asserted | `[əsɝt]` |

### (2) The environment table (p. 226) — `__` = the suffix slot; each cell is *sound +* `__`

Reproduced **as printed** — note the `[t]` column prints **`p__` twice** (rows 2 and 7). That
duplication is in the book, not an extraction error.

| `[t]` | `[d]` | `[ɨd]` |
|---|---|---|
| tʃ__ | o__ | t__ |
| p__ | b__ | d__ |
| f__ | v__ | |
| s__ | m__ | |
| ʃ__ | z__ | |
| k__ | ɹ__ | |
| p__ | dʒ__ | |
| | g__ | |
| | ŋ__ | |
| | n__ | |
| | l__ | |
| | u__ | |

### The generalisation (p. 227, verbatim)

> "the allomorphs are in **complementary distribution**: no sound occurs in more than one list …
> **`[ɨd]`** occurs following alveolar stops (if intervocalic, these will actually be pronounced as
> taps), **`[t]`** occurs following all other voiceless sounds, and **`[d]`** occurs following all
> other voiced sounds."

### Underlying form and the rule

**UR = `/d/`** — `[d]` is the **elsewhere** case: its set (vowels, sonorants, voiced obstruents) is
the most diverse.

**(3) Deriving the English past tense suffix.** Zsiga prints this with the caption "The overall
generalization for forming English **plurals** is given in (3)" — "plurals" is a **typo** for "past
tense"; the content is entirely the past tense. Her rule is numbered prose with an "otherwise" chain:

> a. The underlying form of the past tense suffix is **`/d/`**.
> b. If the suffix is added to a word that ends with an alveolar stop, a vowel is inserted to derive
>    the surface form **`[ɨd]`**, otherwise
> c. If the suffix is added to a word that ends with a voiceless consonant, the surface form is
>    **`[t]`**, otherwise
> d. The surface form is **`[d]`**.

**[standard notation — supplied for revision, not Zsiga's text]** — apply the most specific first:

```
(1)  Ø → ɨ / [+alveolar, −cont] __ d        (insertion — most specific, applies first)
(2)  d → t / [−voice] __                    (voicing agreement — general, applies after)
```

### Motivation (p. 227, verbatim)

> "The `[ɨ]` is inserted to break up a cluster of consonants (`[td]` or `[dd]`) that would otherwise
> not be licit at the end of a word. The change from `[d]` to `[t]` after voiceless consonants brings
> the sequence into line with the constraint that requires obstruent clusters to agree in voicing."

The clusters "fixed up" are "either hard to hear (like a second `[d]` in `[hændd]`), or hard to
produce (like switching voicing twice in the middle of a consonant cluster like `[lpd]`)."

**The course's two named constraints (Tutorial D, verbatim):**
> **Constraint 1:** Two stops with the same POA cannot appear in sequence (therefore a vowel `[ɨ]` is
> inserted in between).
> **Constraint 2:** Obstruents must agree in voicing (`[t]` after voiceless obstruents).

### Derivation walkthrough

Stem + the underlying suffix `/d/`; rules apply in order (specific then general).

| Input (`stem` + `/d/`) | Rule (1) insertion? | Rule (2) voicing? | Surface |
|---|---|---|---|
| `/hænd/ + /d/` | ends in alveolar stop `[d]` → insert `ɨ` → `hændɨd` | — (now ends `ɨd`) | **`[hændɨd]`** |
| `/ɹɑt/ + /d/` | ends in alveolar stop `[t]` → insert `ɨ` → `ɹɑtɨd` | — | **`[ɹɑɾɨd]`** (then tapping `t→ɾ` between vowels) |
| `/mɪs/ + /d/` | no (not an alveolar stop) | ends voiceless `[s]` → `d→t` → `mɪst` | **`[mɪst]`** |
| `/mo/ + /d/` | no | no (voiced neighbour) | **`[mod]`** |

Reading the chain: **describe environments → generalise → name the constraints → choose the UR
(`/d/`, elsewhere) → write the rule (most specific first).** Reasons it must be this way: if the
**voicing** rule ran *before* the insertion rule, a stem ending in a voiceless alveolar stop —
`/ɹɑt/ + /d/`, `/het/ + /d/` — would have its suffix `/d/` devoiced to `[t]` first, so `[ɨ]` could
never be inserted and the word would wrongly surface with `[t]` instead of `[ɨd]` (`*[ɹɑt]`, `*[het]`).
Applying the most specific rule first prevents this; that ordering *is* Pāṇini's Theorem.

---

## Worked example: the in- prefix

*(Zsiga p. 225; Topic 3 lecture slides 28–32.)*

The negative prefix **`in-`** surfaces as **`[ɪn] / [ɪm] / [ɪŋ]`** (Zsiga's transcription — the lecture
writes the same vowel `i`; see the symbol note below), depending on the place of the
following stop:

| Allomorph | Environment | Examples |
|---|---|---|
| **`[ɪn]`** | before a **vowel** or an **alveolar** | inedible, inaudible, indelible, intolerable, insufferable |
| **`[ɪm]`** | before a **bilabial** `[m], [b], [p]` | immobile, imbalance, impossible |
| **`[ɪŋ]`** | before a **velar** `[k]` or `[g]` | (lecture: "In-correct" → `[ŋ]`) |

*(The lecture states the `[in]` environment as "[in-] before alveolar consonants, /h/, & vowels".)*

- **UR = `/in-/`.** `[in]` is the **elsewhere case**: "The allomorph is [in-] before vowels … This is
  not conditioned by place assimilation … – the elsewhere case … Thus, **/in-/ is underlying form.**"
- **Rule:** `in- → [im] before a bilabial stop, [iŋ] before a velar stop, [in] elsewhere.` The nasal
  agrees in place with the following stop.
- **Symbols:** the lecture writes the prefix vowel `i` (`[in] / [im] / [iŋ]`); Zsiga's prose
  transcribes the same vowel `ɪ` (`[ɪn] / [ɪm] / [ɪŋ]`). Both refer to the same prefix — the pack
  uses the lecture's `/in-/` for the underlying form because the quiz follows the lecturer.
- **Motivation:** the phonotactic constraint **"Nasals must agree in place of articulation with a
  following stop"** — the *same* constraint that governs monomorphemic *camp* and *wind*. Within a
  morpheme it gives a **static generalisation**; across morphemes it gives **positional variation**.

For §11.3.10: `in-` is **obligatory** ("imbalance"), whereas `un-` is **optional** ("unbalanced",
`[n] ~ [m]`) — an alternation restricted to a limited class of affixes.

---

## Table 11.1 — the typology

*"Summary of the most common types of phonological alternation" (p. 233). Definitions are Zsiga's own
words. The terms are "descriptive rather than formal".*

| Name | Definition | Examples cited |
|---|---|---|
| **Local assimilation** | Two adjacent segments become more similar | Russian voicing; Catalan / Malayalam / Korean nasal; Oowekyala rounding; English & Japanese palatalization; Syrian vowel lowering; Arabic lateral |
| **Long-distance assimilation (Harmony)** | Two non-adjacent segments become more similar | Turkish vowel harmony; Chumash consonant harmony; Shona tone spreading |
| **Coalescence** | Two segments merge into one; the result shares properties of both | Indonesian nasal fusion; Xhosa vowel coalescence |
| **Dissimilation** | A segment becomes less similar to another | Chontal voicing; Ancient Greek fricative; Llogoori glide formation; Latin lateral |
| **Lenition** | Weakening | Spanish voiced-stop lenition; Florentine voiceless-stop lenition; English vowel reduction; American English tapping |
| **Debuccalization** | A consonant changes to `[ʔ]` or `[h]` | Slave; Spanish; English glottalization |
| **Fortition** | Strengthening | Setswana post-nasal hardening; English aspiration |
| **Epenthesis** | A segment is inserted | Yowlumne vowel; Basque glide; English consonant |
| **Deletion** | A segment is deleted | Tagalog medial vowel; Lardil final |
| **Lengthening** | A short segment becomes long | Komi compensatory lengthening |
| **Shortening** | A long segment becomes short | Yawelmani vowel shortening |
| **Metathesis** | Segments switch order | Hanunoo glottal-stop metathesis |

Ordering logic: **assimilation first** (most common), then the rest. Two notes: **Debuccalization**
is a row in the table but is treated under §11.3.5, not its own sub-section; **Yowlumne =
Yawelmani** (two names for one language).

---

## The ten subtypes (§11.3.1–11.3.10)

### 1. Local assimilation (§11.3.1)

- **Definition:** adjacent sounds become more alike; the sound that changes is **immediately adjacent**
  to its trigger. She distinguishes **local vs long-distance** (adjacency) and **partial vs complete**
  assimilation. She never uses "regressive/progressive".
- **Examples:**
  - **Russian** (16) obstruent voicing: `ot papi` 'from papa' but `od babuʃki` 'from grandma' — env:
    **before a following obstruent** (not triggered by sonorants: `ot mami`).
  - **Catalan** (17) `/n/` place: `só[n] amics` 'they are friends', `só[m] pocs` 'they are few',
    `só[ŋ] grans` 'they are big' — env: **before a following consonant** (assimilates to fricatives
    and liquids too: `[ɱ]` before `[f]`, `[ɲ]` before `[ʎ]` — low-confidence read). No post-nasal voicing.
  - **Malayalam** (18) `/n/` and `/m/`: `awan-taṭiccu` 'he became fat' but `awaŋ-karaɲɲu` 'he cried' —
    env: **nasal before a following stop**. The palatal pair `awaɲ-ca:ṭi` 'he jumped' /
    `kamalaɲ-ca:ṭi` 'Kamalam jumped' shows the same assimilation before `[c]` (low-confidence read).
  - **Korean** (19) nasality + place: `ot` 'clothes' but `on man` 'only clothes', `jak ŋ mekta`
    'take medicine' — env: **before a following nasal**.
  - **Oowekyala** (20) rounding: suffix `-k'ala` but `tu-k'ʷala` — env: **velar/uvular C after `[u]`**.
  - **English** (21) palatalization: grade ~ gradual `d ~ dʒ`, press ~ pressure `s ~ ʃ` — env:
    **before `/j/`**, obligatory word-internally, optional across boundaries.
  - **Japanese** (22): `kas-anai` ~ `kaʃ-ita`; velars/labials take a secondary palatal articulation
    (`wakʲ-itai`) without changing primary place.
  - **Syrian Arabic** (23): `daraʒ-e` 'step' but `wa:ʒh-a` ⚠ 'display' — env: **adjacent to a
    uvular/pharyngeal/laryngeal consonant**.
  - **Arabic** (24) **complete** assimilation: `ʔal-qamr` (moon letter, no change) but `ʔaʃ-ʃams`
    (sun letter, `/l/` fully assimilates to a geminate) — sun letters = **coronals**.
- **Rule (formal, one case):** `C[−son] → [αvoice] / __ C[−son, αvoice]` (Russian).
- **Motivation (p. 236):** "strong articulatory, perceptual, and processing requirements all favor
  it" — easier to hold one articulation, coarticulation can be heard as a change, nasals "particularly
  poor at conveying contrastive place information" (`[np]` and `[mp]` "just do not sound very
  different"), and fewer decisions speed word recognition.
- **Remember this:** *Local assimilation = adjacent sounds become more alike; it is the most common
  alternation, and the partial/complete contrast (Arabic sun letters) is the one to name.*

### 2. Long-distance assimilation / Harmony (§11.3.2)

- **Definition:** "Two segments become more similar, even though they are not immediately adjacent."
  Sub-types: **vowel harmony**, **consonant harmony** (rarer), **tone spreading**. Long-distance
  assimilation of nasality and laryngeal features is attested; **primary place is rare or
  non-existent**.
- **Examples:**
  - **Turkish** (25) vowel harmony: `jel` / `jel-ler` (front) but `dal` / `dal-lar` (back); high
    vowels also match rounding (`gyl` / `gyl-yn`). Env: **root vowel determines all suffix vowels**.
  - **Chumash** (26) consonant harmony: `s-ixut` 'it burns' but `ʃ-ilakʃ` 'it is soft' — sibilants in
    a word agree with the **final** sibilant.
  - **Shona** (27) tone spreading: `ku-téng-á` 'to buy' → `ku-téng-és-ér-án-á` — a high tone spreads
    rightward onto every suffix syllable.
- **Rule:** "All suffix vowels alternate to match the root vowel in backness. In addition, high vowels
  also match the preceding vowel in rounding." (Turkish)
- **Motivation:** *(§11.3.2 gives **no** dedicated articulatory/perceptual paragraph — do not
  attribute a causal account to her here; only the distributional statements are given.)*
- **Remember this:** *Harmony = assimilation across distance, usually the root/trigger vowel or
  feature controlling a whole word (Turkish backness+rounding is the flagship).*

### 3. Coalescence (§11.3.3)

- **Definition:** "two segments merge into one, with the merged segment displaying some properties of
  each of the input segments" — unlike assimilation, where two segments "become more similar, but
  remain a sequence of two distinct segments."
- **Examples:**
  - **Indonesian** (28) nasal fusion: prefix `/məN/` (N = a nasal with undetermined underlying
    place): `məN+pilih → məmilih` 'to choose', `məN+tulis → menulis` 'to write', `məN+kasih →
    məŋasih` 'to give' — env: **nasal + voiceless stop**. The output is **one** segment (nasality
    from N, place from C).
  - **Xhosa** (29) vowel coalescence: `/a/ + {i, u} → {e, o}` — `wa+inkosi → wenkosi` 'of the chiefs'.
- **Rule:** `N + C[−voice, αplace] → [αplace, +nasal]` (Indonesian).
- **Motivation:** to keep the consonant count while satisfying the place constraint — the merged
  segment carries both inputs' features (this *is* why the subtype exists).
- **Remember this:** *Coalescence = two segments become one whose features come from **both** inputs
  (Indonesian `məN+tulis → menulis`); the "one segment, properties of both" definition is the whole
  point.*

### 4. Dissimilation (§11.3.4)

- **Definition:** "a segment changes to become **less similar** to another segment." Rarer than
  assimilation; can be local or long-distance; grounding is "mostly perceptual" (similar segments are
  confusable, so one changes). Often involves fricatives, laterals, rhotics (the "she sells seashells"
  basis).
- **Examples:**
  - **Chontal** (30) voicing: suffix `[ɬaʔ]` (elsewhere) but `[laʔ]` after a voiceless fricative:
    `panx-laʔ` 'sit down!' vs `kan-ɬaʔ` 'leave it!'. Env: **preceded by a voiceless fricative**;
    the voiceless form is the basic, elsewhere case.
  - **Ancient Greek** (31) fricative: suffix `[-θik]` (elsewhere) but `[tik]` next to another fricative
    — `akus-tik-e` 'he was heard' after `[s]`, `ɣraf-tik-e` 'it was written' after `[f]`.
  - **Llogoori** glide formation: `ru-ba:ho` 'board' but `rw-i:ga` 'horn' — `/u/ → [w] / __ V`.
  - **Latin** (32) lateral (long-distance): suffix `-alis` → `-aris` if another `[l]` precedes
    (`nav-alis` vs `lun-aris`; hence English *naval* vs *solar*); **blocked** if `[r]` intervenes
    (`later-alis`, `flor-alis`).
- **Rule:** `ɬ → [+voice] / [−voice, +cont] __` (Chontal).
- **Motivation:** perceptual — two similar segments "may be confusable, and change to become less so."
- **Remember this:** *Dissimilation = the **opposite** of assimilation: one of two similar segments
  changes to be **less** like the other (Chontal `[ɬ] → [l]` after a voiceless fricative).*

### 5. Lenition & fortition (§11.3.5, + debuccalization)

- **Definition:** "**lenition**: sounds become weaker or more open" (stops → fricatives → approximants;
  vowel lenition = **reduction**). "The opposite of lenition is **fortition**: weaker, more open
  sounds become more constricted"; one common variety is **post-nasal hardening**. "An extreme case
  of lenition is **debuccalization** … a consonant loses its oral articulation and becomes either
  `[h]` or `[ʔ]`."
- **Examples:**
  - **Florentine Italian** (33) consonant lenition: `[kaza]` 'house' but `[la xaza]`; `[torta]` but
    `[la θorta]` — env: **intervocalic** (`V__V`). In casual speech intervocalic `[x] → [h]` (→
    debuccalization).
  - **Setswana** (34) post-nasal hardening (fortition): `supa` but `n-t͡sʰupa` 'point at me',
    `ʃapa` ~ `ɲ-t͡ʃʰapa`, `xapa` ~ `ŋ-k͡xʰapa` — env: **after a (homorganic) nasal**.
  - **English** (35) fortition/lenition/reduction: `atom [ˈæɾəm]` ~ `atomic [əˈtʰɑmɪk]` — env:
    **unstressed syllable** (stop → tap, full vowel → schwa).
  - **Slave** (36) debuccalization: `ts'ad-é` but `ts'ah` 'hat' — all word-final consonants → `[h]`.
    Also Caribbean Spanish `[s] → [h]`; English `[t] → [ʔ]`.
- **Rule:** `/C/ → [h] / __ #` (Slave, word-final debuccalization).
- **Motivation:** lenition eases articulation/intervocalic position; debuccalization keeps
  unpredictable information stored (`/ts'ad/` stored, general rule reduces it to `[h]` finally) so
  "rules can be formulated as generally as possible."
- **Remember this:** *Lenition = weaker/more open (stops→fricatives; the Spanish voiced stops
  `[b, d, g]` lenite to `[β, ð, ɣ]`), fortition = stronger (post-nasal hardening), and debuccalization =
  an extreme lenition to `[h]`/`[ʔ]` (Slave word-final `[h]`).*

### 6. Epenthesis (§11.3.6)

- **Definition:** "insertion. Usually, epenthesis applies to break up a sequence of segments that
  violates the phonotactic restrictions of the language." The English plural `[ɨz]` and past `[ɨd]`
  are epenthesis: `/wɪʃ-z/ → [wɪʃɨz]`; `/bæt-d/ → [bætɨd]` (then `[bæɾɨd]` by tapping).
- **Examples:**
  - **Yowlumne** (37) vowel epenthesis `CCC → CVCC`: `/paʔt/` → `paʔt-al` (vowel-initial) but
    `paʔit-mi`, `paʔit-ka` — a consonant-initial suffix makes a CCC cluster, so a high vowel is
    inserted between the last two root consonants. Quantity: high and **predictable** (rounds with a
    round root vowel: `ʔugn` → `ʔugun-mu`, else `[i]`).
  - **Basque** (38) glide epenthesis: `mutil-e` 'the boy' but `ari-j-e` 'the thread' — `[j]` inserted
    **between two vowels** after a high front vowel.
  - **English** (39) consonant epenthesis: `[sʌmpθɪn]` 'something', `[warmpθ]` 'warmth' — "prince"
    and "prints" are homophones; the epenthetic stop is **homorganic** (`[p]` after `[m]`, `[t]`
    after `[n]`).
- **Rule:** `Ø → i/u / C __ C` (Yowlumne); `Ø → ɨ / [strident] __ [strident]` (English plural).
- **Motivation:** breaks up an illicit sequence — a CCC cluster (Yowlumne), a vowel hiatus (Basque),
  or nasal+voiceless-fricative (English).
- **Remember this:** *Epenthesis = inserting a segment to repair an illegal sequence; the inserted
  segment's quality is **predictable** (`[ɨd]`, `[ɨz]`, Yowlumne `[i]/[u]`).*

### 7. Deletion (§11.3.7)

- **Definition:** "a segment that is part of the underlying form of the word is not pronounced";
  "Sometimes deletion rather than epenthesis … can apply to repair a difficult or illicit sequence."
- **Examples:**
  - **English** (p. 243): "desktop" `[dɛstap]` (medial `/k/` in a 3-consonant cluster `s_k_t`);
    "grandmother" `[ɡræmmʌðɚ]` (medial `/d/`, nasal assimilates `n+m → mm`).
  - **Tagalog** (40) vowel deletion: `bukas → buks-in` 'open', `kapit → kapt-in` 'embrace' — a
    vowel-initial suffix deletes the second root vowel; then nasal place assimilation
    (`/ganapin/ → /ganpin/ → [gampin]`).
  - **Lardil** (41) word-final deletion: only apicals `[l, n, r]` allowed word-finally; word-final
    vowel deletion exposes a non-apical consonant, which is then also deleted (`/putaka/ → puta`).
    "Lardil serves as a dramatic warning against assuming that the uninflected form is always going
    to be equivalent to the underlying form."
- **Rule:** `V → Ø / __ #` then non-apical `C → Ø / __ #` (Lardil).
- **Motivation:** repairs an illegal word-final consonant or a difficult cluster.
- **Remember this:** *Deletion = removing a segment that is present in the underlying form (Lardil
  `/putaka/ → puta` warns you the uninflected form is **not** always the UR).*

### 8. Lengthening & shortening (§11.3.8)

- **Definition:** "Sometimes, long segments can become short, and short segments can become long."
  Lengthening after a deletion = **compensatory lengthening**; its opposite = **closed-syllable
  shortening**.
- **Examples:**
  - **Komi** (42) compensatory lengthening: `/l/` deletes before a consonant and word-finally, then
    the vowel lengthens — `kil-i` 'I heard' but `kiː-ni` 'to hear'; `vøl-ys` 'from a horse' but `vøː`
    'horse'.
  - **Yowlumne** (43) closed-syllable shortening: `la:n-al` (vowel-initial suffix) but `lan-mi`
    (before a two-consonant cluster) — env: **before CC**.
- **Rule:** `/l/ → Ø / __ C, __ # ; then V → Vː` (Komi); `Vː → V / __ CC` (Yowlumne).
- **Motivation:** "as though to make up for the loss of the lateral" (compensatory); short vowels fit
  a closed syllable (shortening).
- **Remember this:** *Lengthening/shortening = a segment's duration changes; compensatory lengthening
  (Komi) makes up for a deleted consonant.*

### 9. Metathesis (§11.3.9)

- **Definition:** "'changing places': two segments switch in order." English historically: "horse"
  was `[hros]`, "bird" was `[bridde]`.
- **Example — Hanunoo** (44): deletion targets only `/u/`; if the resulting cluster starts with a
  glottal stop, they swap — `/ka-ʔusa/ → /kaʔsa/` then metathesis `ʔs → sʔ` gives **`[kasʔa]`**
  'once' (`ka-ʔupat → ka-pʔat` 'four times').
- **Rule:** `/u/ → Ø` medially; then `ʔC → Cʔ` (only when the first consonant is `[ʔ]`).
- **Motivation:** repairs the consonant cluster created by `/u/`-deletion.
- **Remember this:** *Metathesis = two segments swap order (Hanunoo `/ka-ʔusa/ → [kasʔa]` by
  `/u/`-deletion feeding glottal-stop metathesis).*

### 10. Morphological interactions (§11.3.10)

- **Definition:** alternations may apply **generally/exceptionlessly** ("post-lexical", whenever the
  conditions are met) or only in **specific morphological contexts** ("lexical" — e.g. to affixes but
  not roots).
- **Examples:**
  - English tapping applies anywhere (within a morpheme 'atom', across a morpheme boundary 'added',
    across a word boundary "up and at 'em").
  - **Zoque** affix-only assimilation: `[ɲ-dʒoʔnɡoja]` ⚠ 'my rabbit' — the prefix assimilates
    (`/n + dʒ/ → [ɲdʒ]`) but the `[ng]` inside the noun does not.
  - `in-` obligatory vs `un-` optional; lexical exceptions (Turkish `[mavi]` 'blue'; Igbo `[akpi]`
    'scorpion'); general/specific ordering = Pāṇini's Theorem.
- **Rule:** none of its own — it is about *where* other rules apply.
- **Motivation:** some alternations refer to lexical information (affix vs root, specific items);
  those are "lexical rules", while general exceptionless ones are "post-lexical".
- **Remember this:** *Some alternations are exceptionless (tapping), others are restricted to
  affixes/morphology (Zoque prefix-only nasal assimilation; `in-` obligatory vs `un-` optional).*

---

## Traps and exam technique

- **Caption typo — "plurals" for "past tense".** Zsiga p. 227 prints "The overall generalization for
  forming English **plurals** is given in (3)", but example (3) is entirely the **past tense**
  (`/d/`, `[ɨd]`, `[t]`, `[d]`). It is a typo; the tutorial writes "past tense suffix". Do not be
  rattled by it in the reading — and do not copy "plurals" into an answer.
- **`ɨd` vs `ɪd` / `əd`.** The past-tense epenthetic vowel is **`ɨ`** (U+0268), written in *both*
  §11.2 and §11.3.6 — write `[t] / [d] / [ɨd]` and "[ɨ] is inserted". `ɪd` is a low-zoom misread of
  the book's glyph; `ə` belongs only to the **lecture's separate `-z` plural table** (`Ø→ə`), so do
  not transplant `ə` onto the past-tense example. For the plural (Q7) use `ɪ(z)` and flag the symbol
  (the textbook prints it as a vector outline).
- **The duplicated `p__`.** The (2) environment table prints **`p__` twice** in the `[t]` column
  (rows 2 and 7). It is in the book. Reproduce it as printed; don't "fix" it, and don't let it
  suggest two different environments (`p__` and `k__` are just two voiceless consonants in the same
  class — any voiceless non-alveolar-stop).
- **Epenthesis-vs-deletion diagnostic (memorise this).** "**the quality of epenthetic vowels is
  predictable, and the quality of deleted vowels is not.**"
  - Yawelmani `[paʔt] ~ [paʔit]`: the vowel is always `[i]` (or `[u]` under harmony) ⇒ **epenthetic**.
  - Tagalog `[kapt] ~ [kapit]`: the vowel must be `/i/`, `/o/`, or `/a/` word-dependently ⇒ **deleted**.
  - Hard case: single-quality deletion (Hanunoo u-deletion) — "the analyst just has to try it both
    ways."
- **Stem vs inflected forms.** Two different form-sets sit side by side in the past-tense material:
  the (1) word lists print the pronunciation of the **unsuffixed stem** (reached `[ɹitʃ]`), while the
  prose three-forms quote whole **inflected words** (reached `[ɹitʃt]`). Do not merge them; when you
  derive, start from the stem and add `/d/`.
- **The answer template the course expects.** Four slots, written as complete sentences:
  **`Type of alternation:`** → **`Motivating phonotactic constraint:`** → (name the constraint(s)) →
  **`UR:`** (chosen via the **elsewhere case**). Grade on "two items **with discussion**" — always
  state the thing *and* explain it. Write IPA in the course's notation: `/…/` UR, `[…]` SR, `*`
  impossible, `±feature`, `ɹ` not `r`.
- **Zsiga's rule vs standard notation.** Her §11.2 rules are **numbered prose with an "otherwise"
  chain**; `A → B / C__D` and the `α`-notation are **analyst-supplied**, not her text. If you write a
  formal rule in an answer, that is fine — but know the difference.

---

## Self-test

*(18 questions. Cover the answers below and work them cold.)*

1. What is a morpheme's **underlying (basic) form**, and how does it differ from an **allomorph**?
2. Which **two** stages of the six-stage procedure does Zsiga explicitly number, and what are her
   exact words for them?
3. What is **complementary distribution**, and how do the three past-tense allomorphs satisfy it?
4. State the **elsewhere criterion** for choosing a UR, and apply it to the English past tense.
5. What are the three allomorphs of the **`in-`** prefix, and what conditions each?
6. Give the past tense **generalisation**: state the environment of `[ɨd]`, `[t]`, and `[d]`.
7. Why is `[ɨ]` inserted in the past tense, and which named **constraint** motivates it?
8. Why does the suffix change from `/d/` to `[t]`, and which **constraint** is that?
9. Write the two rules for the past tense in **standard notation**, in the correct order, and name
   the principle that fixes the order.
10. **Lardil** word-final deletion: what are the two ordered deletions, and why does `/putaka/`
    surface as `[puta]`? What general lesson does Zsiga draw from it?
11. Name **five** of the twelve alternation types in Table 11.1, each with one example.
12. What distinguishes **coalescence** from **assimilation**?
13. What is **debuccalization**, and what is the Slave example?
14. What is the **epenthesis-vs-deletion diagnostic**? Apply it to Yowlumne `[paʔt] ~ [paʔit]` and
    Tagalog `[kapit] ~ [kapt]`.
15. What is **compensatory lengthening**? Give the Komi example.
16. What is **metathesis**? Give the Hanunoo example including the intermediate step.
17. What are the two **regimes of morphological interaction**, with one example each?
18. Why must you not merge the (1) word lists (`[ɹitʃ]`) with the prose three-forms (`[ɹitʃt]`)?

---

## Answers

1. The UR is the single entry a morpheme has in the mental lexicon, written `/…/`, chosen as the
   elsewhere case (e.g. past-tense `/d/`). An **allomorph** is one of its positional variants — the
   actually-pronounced forms (e.g. `[t] / [d] / [ɨd]`), the morpheme-level counterpart of allophones.
2. **Step 1** "identify the different forms of the morpheme" (p. 225, "the **first step**") and
   **Step 2** "list the environments where each allomorph occurs" (p. 226, "the **next step**" /
   "the **second step**", p. 228). Steps 3–6 are described but not numbered.
3. "No sound occurs in more than one list" — each allomorph has its own non-overlapping set of
   environments: `[ɨd]` after alveolar stops, `[t]` after other voiceless sounds, `[d]` after other
   voiced sounds.
4. Choose the allomorph whose conditioning set is the **most phonetically diverse** and widest (the
   elsewhere case). For the past tense, `[d]` occurs after vowels, sonorants and voiced obstruents —
   the most diverse set — so the UR is **`/d/`**.
5. **`[ɪn]`** before a vowel or an alveolar; **`[ɪm]`** before a bilabial `[m]/[b]/[p]`; **`[ɪŋ]`**
   before a velar `[k]/[g]`. Driven by place agreement with the following stop.
6. `[ɨd]` after **alveolar stops**; `[t]` after **all other voiceless sounds**; `[d]` after **all
   other voiced sounds** (i.e. elsewhere).
7. `[ɨ]` is inserted to break up the illicit `[td]`/`[dd]` cluster (Constraint 1: **two stops with
   the same place of articulation cannot appear in sequence**) — "hard to hear … a second `[d]` in
   `[hændd]`."
8. `[d] → [t]` after a voiceless consonant brings the obstruent cluster into line with voicing
   agreement (Constraint 2: **obstruents must agree in voicing**).
9. `Ø → ɨ / [+alveolar, −cont] __ d` (most specific, **first**), then `d → t / [−voice] __` (general,
   after). Order is fixed by **Pāṇini's Theorem** ("apply the rule for the most specific case first").
10. Two ordered deletions: (i) word-final **vowel** deletion (`V → Ø / __ #`) — only apicals
    `[l, n, r]` are allowed word-finally — then (ii) deletion of the **non-apical** consonant that the
    vowel loss left exposed (`C → Ø / __ #`). `/putaka/ → /putak/ → [puta]` (`[k]` is not an apical, so
    it is deleted too). Lesson: "Lardil serves as a dramatic warning against assuming that the
    uninflected form is always going to be equivalent to the underlying form" — the uninflected
    `[puta]` is **not** the UR.
11. Any five of: local assimilation (Russian `od babuʃki`), long-distance assimilation/harmony
    (Turkish `jel-ler` / `dal-lar`), coalescence (Indonesian `məN+tulis → menulis`), dissimilation
    (Chontal `[ɬ] → [l]`), lenition (Florentine `[kaza] ~ [la xaza]`), fortition (Setswana
    `n-t͡sʰupa`), debuccalization (Slave `ts'ah` 'hat'), epenthesis (Basque `ari-j-e`), deletion
    (Lardil `/putaka/ → puta`), lengthening (Komi `kiː-ni`), shortening (Yowlumne `lan-mi`),
    metathesis (Hanunoo `[kasʔa]`).
12. In **assimilation** two segments become more similar but **stay two** segments; in
    **coalescence** they **merge into one** segment that carries properties of **both** inputs
    (Indonesian: nasality from N, place from C).
13. An **extreme lenition** in which a consonant loses its oral articulation and becomes `[h]` or
    `[ʔ]`. Slave: all word-final consonants → `[h]` (`ts'ad-é` but `ts'ah` 'hat'), the consonant
    still stored as `/ts'ad/` and reduced by a general final rule.
14. "**The quality of epenthetic vowels is predictable, and the quality of deleted vowels is not.**"
    Yowlumne `[paʔit]`: always `[i]`/`[u]` ⇒ epenthetic. Tagalog `[kapt]`: the vowel is `/i/`, `/o/`,
    or `/a/` depending on the word ⇒ deleted.
15. Lengthening of a vowel after a segment is deleted, "as though to make up for the loss." Komi:
    `/l/ → Ø` before a consonant / finally, then `kil-i` 'I heard' but `kiː-ni` 'to hear'.
16. Two segments switch order. Hanunoo: `/ka-ʔusa/` → `/kaʔsa/` (after `/u/`-deletion) → `[kasʔa]`
    (metathesis `ʔs → sʔ`).
17. (a) **Exceptionless / post-lexical** — English tapping applies within a morpheme ('atom'), across
    a morpheme boundary ('added'), and across a word boundary ("up and at 'em"). (b) **Restricted to
    morphology / lexical** — Zoque nasal assimilation applies to the prefix but not within a word
    (`[ɲ-dʒoʔnɡoja]` ⚠ 'my rabbit'), and `in-` is obligatory while `un-` is optional.
18. The (1) lists transcribe the **unsuffixed stem** (`[ɹitʃ]`), while the prose three-forms quote
    whole **inflected words** (`[ɹitʃt]`). They are two different sets; derivations start from the stem
    and add the underlying `/d/`.

---

## What is load-bearing vs peripheral

**Load-bearing (must know).**

- The §11.2 **procedure** and its two *numbered* steps.
- The **elsewhere-case** criterion.
- The **generative-rule** idea and Zsiga's **prose-rule** formalism.
- The **English past tense `/d/ → [t]/[d]/[ɨd]` example in full** (three lists → environments →
  complementary distribution → UR `/d/` → rule (3) with Pāṇini's Theorem) **plus** the `in-`
  `[ɪn]/[ɪm]/[ɪŋ]` illustration.
- **Table 11.1 in its entirety** as the master index.
- From §11.3: the **definitions** of all ten subtypes and **one clean example each** — local
  assimilation (Russian (16), Catalan (17)/Malayalam (18), Korean (19), Arabic (24)); harmony
  (Turkish (25), Chumash (26)); coalescence (Indonesian (28) — "one segment with properties of both");
  dissimilation (Chontal (30), Latin (32)); lenition/fortition (Florentine (33), Setswana (34),
  English (35), and the **debuccalization** definition + Slave (36)); epenthesis (English plural/past,
  Yowlumne (37), Basque (38), English (39)); deletion (English desktop/grandmother, Tagalog (40),
  Lardil (41)) **with the epenthesis-vs-deletion diagnostic** (likely quiz item); lengthening/shortening
  (Komi (42), Yowlumne (43)); metathesis (Hanunoo (44)); and morphological interactions (Zoque
  affix-only; `in-`/`un-`; lexical vs post-lexical).

**Peripheral (recognise, don't memorise).**

- Full word-lists and every row of Zoque (4)/(5) and Igbo (10)/(13)/(14); the full Arabic
  moon-letter list; Oowekyala (20); Japanese (22); Syrian Arabic (23); and the low-confidence phrase
  transcriptions. Know **what each illustrates**, not each form.

---

## Known uncertainties

Carried forward from the digests. **A shaky glyph is not a fact** — if an item is flagged, say so
rather than memorising the symbol as certain.

- **The epenthetic vowel — SETTLED as `ɨ` (U+0268).** The disagreement (`ɨ` vs `ɪ` vs dotted-i vs `ə`)
  is resolved: the *same* glyph occurs at pp. 226, 227 and 241, and the clean course text layer writes
  `[t] [d] [ɨd]` and "a vowel `[ɨ]` is inserted". So the past-tense vowel is `ɨ`. Two knock-ons: the
  **plural (Q7)** symbol is `[UNVERIFIED]` in the textbook (vector outline) — write `ɪ(z)` and flag
  it; and the **lecture's `-z` table** uses `ə` (`Ø→ə`), a separate convention that must not be moved
  onto the past-tense example.
- **Catalan — `[UNRESOLVED]` cells (do not quote).** The (17) forms for "they are two" (`só[n] dos`)
  and "rich" (`só[n]/[ŋ] rics`) could **not** be settled: vision read `ŋ` but the outline boxes are
  x-height (no descender), i.e. not `ŋ`/`ɳ`. **Do not quote these two cells.**
- **Catalan `ɲ` before *lliures*** (`só[ɲ] lliures` ⚠) and **Malayalam `ɲ` before `[c]`** (⚠) are
  single/context-based reads — expected, but flagged.
- **Other ⚠ glyph reads to treat as approximate:** Oowekyala rows (20) beyond the four reliable
  text-layer forms; Japanese (22) partly; Syrian Arabic `wa:ʒh-a` ⚠ (23); English palatalization
  **phrase** transcriptions (21) — though the alternations `d~dʒ, t~tʃ, s~ʃ, z~ʒ` are reliable;
  English deletion `[dɛstap]` / `[ɡræmmʌðɚ]` (⚠); Zoque `[ɲ-dʒoʔnɡoja]` ⚠ and `ʃapun` ⚠; Igbo tone
  diacritics ⚠ (vowel qualities are confirmed; accent placement is less certain); the Arabic
  `ʔaẓ-ẓill` ⚠ read; Komi length mark `ː` vs `:` ⚠; `ɣ` vs Greek `γ` ⚠ (read as `ɣ`).
- **Resolved points worth knowing** (so you don't doubt them): the tap is **`ɾ`** (§11.3.5 "lenited
  taps", TB confirmation); page map `p001.png` = book p. 221; the duplicated `p__` is in the book;
  §11.2 has **no** algebraic rule — the `α`-notation is analyst-supplied.
- **Course-level gaps (not glyph issues).** There is **no Topic 4 (Alternations) lecture** — §11.3's
  type names come from the textbook only. There is **no quiz-4 paper and no answer key** on disk (only
  quizzes 1 and 3 with rubrics), and **no Tutorial E / midterm paper**. The exact plural epenthetic
  symbol (Q7) is printed as a vector outline and remains `[UNVERIFIED]`.
