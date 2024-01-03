"use strict";

// const btnScrollTo = document.querySelector(".btn--scroll-to");

/// BUTTON SCROLL //////
const btnAlien = document.querySelector(".btn-alien");
const btnRobot = document.querySelector(".btn-robot");
const btnInsect = document.querySelector(".btn-insect");
const aWorld = document.querySelector("#a-world");
const rWorld = document.querySelector("#r-world");
const iWorld = document.querySelector("#i-world");

/// TABBED COMPONENT //////

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////
/// BUTTON SCROLL //////
///////////////////////////////////////

// Click to scroll to the element
btnAlien.addEventListener("click", function () {
  aWorld.scrollIntoView({ behavior: "smooth", block: "center" });
});
btnRobot.addEventListener("click", function () {
  rWorld.scrollIntoView({ behavior: "smooth", block: "center" });
});
btnInsect.addEventListener("click", function () {
  iWorld.scrollIntoView({ behavior: "smooth", block: "center" });
});

///////////////////////////////////////
/// TABBED COMPONENT //////
///////////////////////////////////////

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab"); // closest burda parent elemanı seçiyor. Yapmamızın nedeni olurda <span>, <p>... farklı farklı elemetlere tıklarsak diye.
  // console.log(clicked);

  // Guard clause
  if (!clicked) return; // clicked.classList.add("operations__tab--active"); bu kodun üstüne (if) gelecek. Neden; ".operations__tab" dışında bir yere tıkladığımızda error geliyor (if) yokken ama (if) i eklediğimizde null alıyoruz.

  // Removo active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area // Dataset (data-*), tab yazıyoruz o da (* = tab) oluyor ve data-tab diye yazdığımız contentler geliyor.
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// ///////////////////////////////////////
// // REVEAL SECTİONS
// ///////////////////////////////////////

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy loading images Benim yaptığım

const imgTargets = document.querySelectorAll("img[data-src]");
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

///////////////////////////////////////
// Slider
///////////////////////////////////////

const slider = function () {
  const slides = document.querySelectorAll(".slide"); // her zaman işlem görecek bölümleri select all yapıyoruz. Örn, açıl kapan, kayma, tıkla ve geç efektleri gibi
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
    // ikisi de aynı kod istediğin gibi yazabilirsin
  });

  dotContainer.addEventListener("click", function () {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

///////////////////////////////////////
//  Objects
///////////////////////////////////////

const insect = {
  name: ["Buggy", "Ant-Man", "İnsansı-Insect", "Böcük"],
  species: "Insect",
  powers: [200, 450, -400, 3000, -650, -130, 70, 1300],
  phrase: ["Retreat, power is too low!", "I am inevitable!!"],
  // attack: () => console.log("Buggy Choke"),
};
const robot = {
  name: ["Terminatör", "Arçelik", "Beko", "Arnold"],
  species: "Robot",
  powers: [100, 550, -200, 2800, -650, -180, 100, 1500],
  phrase: ["Retreat, power is too low!", "I am inevitable!!"],
  // attack: () => console.log("Buggy Choke"),
};
const alien = {
  name: ["Kal-El", "General-Zod", "SuperDuper", "Ali-Alien"],
  species: "Alien",
  powers: [150, 600, -300, 3200, -650, -160, 95, 1400],
  phrase: ["Retreat, power is too low!", "I am inevitable!!"],
  // attack: () => console.log("Buggy Choke"),
};

const containerCardInsect = document.querySelector(".c-features--insect");
const containerCardAlien = document.querySelector(".c-features--alien");
const containerCardRobot = document.querySelector(".c-features--robot");

//////////// DAMAGE / GÜÇ /////////////////////////

const displayHero = function () {
  containerCardAlien.innerHTML = "";
  containerCardInsect.innerHTML = "";
  containerCardRobot.innerHTML = "";

  function getRandomDamage(dmg) {
    const randomDmg = Math.floor(Math.random() * dmg.length);

    const dmgItem = dmg[randomDmg];

    return dmgItem;
  }
  const powerInsect = insect.powers;
  const powerAlien = alien.powers;
  const powerRobot = robot.powers;

  const dmgResultsI = getRandomDamage(powerInsect);
  const dmgResultsA = getRandomDamage(powerAlien);
  const dmgResultsR = getRandomDamage(powerRobot);

  const damageI = dmgResultsI > 0 ? "Great" : "GARBAGE";
  const damageA = dmgResultsA > 0 ? "Great" : "GARBAGE";
  const damageR = dmgResultsR > 0 ? "Great" : "GARBAGE";

  //////// HTML PART ////////

  const güçI = `<li class="feature-i">
                Power:
                <p class="attack--${damageI}">${dmgResultsI} power is a ${damageI} damage </p>
              </li>`;

  const güçA = `<li class="feature-a">
                Power:
                <p class="attack--${damageA}">${dmgResultsA} power is a ${damageA} damage </p>
              </li>`;

  const güçR = `<li class="feature-r">
                Power:
                <p class="attack--${damageR}">${dmgResultsR} power is a ${damageR} damage </p>
              </li>`;

  containerCardInsect.insertAdjacentHTML("afterbegin", güçI);
  containerCardAlien.insertAdjacentHTML("afterbegin", güçA);
  containerCardRobot.insertAdjacentHTML("afterbegin", güçR);

  //////////// PHRASE PART /////////////////////////

  function addPhrase(phr) {
    const randomPhrase = Math.floor(Math.random() * phr.length);

    const phraseItem = phr[randomPhrase];

    return phraseItem;
  }

  const phrInsect = insect.phrase;
  const phrAlien = alien.phrase;
  const phrRobot = robot.phrase;

  const phrResultsI = addPhrase(phrInsect);
  const phrResultsA = addPhrase(phrAlien);
  const phrResultsR = addPhrase(phrRobot);

  const high = "I am inevitable!!";
  const low = "Retreat, power is too low!";

  const resultPI = dmgResultsI > 0 ? high : low;
  const resultPA = dmgResultsA > 0 ? high : low;
  const resultPR = dmgResultsR > 0 ? high : low;

  //////// HTML PART ////////

  const phraseI = `<li class="feature-i">Phrase:
          <p class="phrase">${resultPI}</p>
          </li>`;

  const phraseA = `<li class="feature-a">Phrase:
          <p class="phrase">${resultPA}</p>
          </li>`;

  const phraseR = `<li class="feature-r">Phrase:
          <p class="phrase">${resultPR}</p>
          </li>`;

  containerCardInsect.insertAdjacentHTML("afterbegin", phraseI);
  containerCardAlien.insertAdjacentHTML("afterbegin", phraseA);
  containerCardRobot.insertAdjacentHTML("afterbegin", phraseR);

  //////////// NAME / İSİM /////////////////////////

  function getRandomName(name) {
    const randomName = Math.floor(Math.random() * name.length);

    const nameItem = name[randomName];

    return nameItem;
  }

  const namesInsect = insect.name;
  const namesAlien = alien.name;
  const namesRobot = robot.name;

  const nameResultsI = getRandomName(namesInsect);
  const nameResultsA = getRandomName(namesAlien);
  const nameResultsR = getRandomName(namesRobot);

  //////// HTML PART ////////

  const isimI = `<li class="feature-i">Name:
          <p class="name--${nameResultsI}">${nameResultsI}</p>
          </li>`;

  const isimA = `<li class="feature-a">Name:
          <p class="name--${nameResultsA}">${nameResultsA}</p>
          </li>`;

  const isimR = `<li class="feature-r">Name:
          <p class="name--${nameResultsR}">${nameResultsR}</p>
          </li>`;

  containerCardInsect.insertAdjacentHTML("afterbegin", isimI);
  containerCardAlien.insertAdjacentHTML("afterbegin", isimA);
  containerCardRobot.insertAdjacentHTML("afterbegin", isimR);
};
// displayHero();

// shuffle button and reset old ones //
const shuffle = document.querySelector(".shuffle");
shuffle.addEventListener("click", function () {
  displayHero();
});
