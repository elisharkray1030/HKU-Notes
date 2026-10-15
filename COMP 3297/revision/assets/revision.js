/* ==========================================================================
   HKU-Notes revision pack — shared interactivity
   Vanilla JS, no dependencies, progressive enhancement.

   Widgets (markup contract; all initialized automatically):

   1. Quiz (multiple choice):
        <div class="quiz">
          <span class="qnum">Q1</span>
          <p class="quiz-q">Question text?</p>
          <div class="options">
            <button class="quiz-option" data-correct="true">Right answer</button>
            <button class="quiz-option">Wrong answer</button>
          </div>
          <p class="quiz-feedback">
            <span class="verdict"></span> <span class="why">Explanation.</span>
          </p>
        </div>

   2. Reveal answers / guided steps (works without JS too):
        <details class="answer"><summary>Answer</summary>...</details>
        <details class="step"><summary>Step 1: ...</summary>...</details>
      Optional bulk controls anywhere on the page:
        <div class="reveal-bar" data-targets=".answer">
          <button data-action="open">Show all answers</button>
          <button data-action="close">Hide all</button>
        </div>

   3. Tabs (bar is generated from data-label):
        <div class="tabs">
          <section class="tab-panel" data-label="Kotlin">...</section>
          <section class="tab-panel" data-label="Java">...</section>
        </div>

   4. Flashcards (click or Enter/Space to flip):
        <button class="flashcard" type="button">
          <span class="fc-inner">
            <span class="fc-front">Front text<span class="fc-hint">Click to flip</span></span>
            <span class="fc-back">Back text</span>
          </span>
        </button>

   5. Copy button on code blocks:
        <div class="code-block"><span class="lang-label">Kotlin</span><pre><code>...</code></pre></div>

   6. Persistent checklist (localStorage, per page):
        <li><input type="checkbox" class="persist" data-id="lifecycle-1">
            <span class="check-text">I can name the six callbacks</span></li>
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- 1. quizzes -------------------------------------------------- */

  function initQuiz(quiz) {
    var options = Array.prototype.slice.call(quiz.querySelectorAll(".quiz-option"));
    var feedback = quiz.querySelector(".quiz-feedback");
    var verdict = feedback ? feedback.querySelector(".verdict") : null;
    if (!options.length) return;

    options.forEach(function (option) {
      option.setAttribute("type", "button");
      option.addEventListener("click", function () {
        if (quiz.dataset.answered === "true") return;
        quiz.dataset.answered = "true";

        var pickedCorrect = option.dataset.correct === "true";

        options.forEach(function (o) {
          o.disabled = true;
          if (o.dataset.correct === "true") o.classList.add("correct");
        });
        if (!pickedCorrect) option.classList.add("wrong");

        if (feedback && verdict) {
          feedback.classList.add("show", pickedCorrect ? "good" : "bad");
          verdict.textContent = pickedCorrect ? "Correct." : "Not quite.";
        }
      });
    });
  }

  /* ---------- 2. reveal bars ---------------------------------------------- */

  function initRevealBar(bar) {
    var selector = bar.dataset.targets || ".answer";
    var scope = bar.closest("section") || document;
    bar.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var open = btn.dataset.action !== "close";
        scope.querySelectorAll(selector).forEach(function (d) {
          if (d.tagName === "DETAILS") d.open = open;
        });
      });
    });
  }

  /* ---------- 3. tabs ------------------------------------------------------ */

  function initTabs(tabs) {
    var panels = Array.prototype.slice.call(tabs.querySelectorAll(".tab-panel"));
    if (panels.length < 2) return;

    var bar = document.createElement("div");
    bar.className = "tab-bar";

    panels.forEach(function (panel, i) {
      var label = panel.dataset.label || "Tab " + (i + 1);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = label;
      btn.addEventListener("click", function () {
        panels.forEach(function (p, j) {
          p.hidden = j !== i;
          bar.children[j].classList.toggle("active", j === i);
        });
      });
      bar.appendChild(btn);
    });

    tabs.insertBefore(bar, tabs.firstChild);
    panels.forEach(function (p, i) {
      p.hidden = i !== 0;
      bar.children[i].classList.toggle("active", i === 0);
    });
  }

  /* ---------- 4. flashcards ------------------------------------------------ */

  function initFlashcard(card) {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
  }

  /* ---------- 5. copy buttons on code -------------------------------------- */

  function initCodeBlock(block) {
    if (block.querySelector(".copy-btn")) return;
    var code = block.querySelector("code");
    if (!code || !navigator.clipboard) return;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(code.textContent).then(function () {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = "Copy"; }, 1200);
      });
    });
    block.appendChild(btn);
  }

  /* ---------- 6. persistent checklist --------------------------------------- */

  function storageKey(id) {
    return "revision:" + location.pathname + ":" + id;
  }

  function initPersist(box) {
    if (!box.dataset.id) return;
    var key = storageKey(box.dataset.id);
    try {
      if (localStorage.getItem(key) === "1") box.checked = true;
      box.addEventListener("change", function () {
        if (box.checked) localStorage.setItem(key, "1");
        else localStorage.removeItem(key);
      });
    } catch (e) {
      /* private mode or storage disabled: checkbox still works, just not persistent */
    }
  }

  /* ---------- boot ---------------------------------------------------------- */

  function boot() {
    document.querySelectorAll(".quiz").forEach(initQuiz);
    document.querySelectorAll(".reveal-bar").forEach(initRevealBar);
    document.querySelectorAll(".tabs").forEach(initTabs);
    document.querySelectorAll(".flashcard").forEach(initFlashcard);
    document.querySelectorAll(".code-block").forEach(initCodeBlock);
    document.querySelectorAll("input.persist").forEach(initPersist);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
