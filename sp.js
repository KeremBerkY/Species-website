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

////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
/// BUTTON SCROLL //////
///////////////////////////////////////

// From buttons perspective
// btnAlien.addEventListener("click", function (e) {
//   const s1coords = btnAlien.getBoundingClientRect();
//   btnAlien.scrollIntoView({ block: "start", behavior: "smooth" });
// });

// btnRobot.addEventListener("click", function (e) {
//   const s1coords = btnRobot.getBoundingClientRect();
//   btnRobot.scrollIntoView({ block: "start", behavior: "smooth" });
// });

// btnInsect.addEventListener("click", function (e) {
//   const s1coords = btnInsect.getBoundingClientRect();
//   btnInsect.scrollIntoView({ block: "start", behavior: "smooth" });
// });

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

// tabsContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".operations__tab");
//   console.log(clicked);

//   // Guard clause
//   if (!clicked) return;

//   // Remove active classes
//   tabs.forEach((t) => t.classList.remove("operations__tab--active"));
//   tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

//   // Activate tab
//   clicked.classList.add("operations__tab--active");

//   // Activate content area
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add("operations__content--active");
// });

///// BENİM YAPTIĞIM /////

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

// const allSections = document.querySelectorAll(".section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries; // destructuring const [entry] = entries[0] burda entriesi loop etmemize gerek yok çünkü 1 tane threshold(eşik) var
//   // console.log(entry);

//   if (!entry.isIntersecting) return; // console.log(entry) bize saydayı kaydırdıkça ve diğer sectionla kesişince bize isintersecting: true diye yazıo çıkartıyor. Biz de bu şekilde anlıyouz % kaçında olduğumuzu false ile başlıyo true diyince kesiştiği anlamına geliyor. Bu kodda intersecting olmuyosa çalıştırma diye ama oluyorsa %15 e geldiysek (bu örnek için konuşuyorum) o zaman aşağıda remove() u çalıştır.

//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target); // bu da console bölümünde sürekli observe etmesin diye yaptığımız bir şey
// };

// // Bu part aslında gözlemci: intersecting noktasına gelindi mi ne oldu onu gösteriyor.
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null, // viewport demek gözükmesini istemiyoruz o yüzden null
//   threshold: 0.15, // bu da sectionun %15 ine gelince gözüksün demek
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section); // sectionObserver.observe(section); satırı, oluşturulan sectionObserver gözlemcisine belirli bir HTML bölümünü gözlemlemesi için kaydeder. section değişkeni, gözlemlenecek olan HTML bölümünü temsil eder.
//   // yukarıdaki açıklama: işlem yapacağın yeri observe etmelisin yoksa kod çalışmaz bu zaten baş kısım. observera burda neyi observe edeceğini söylüyoruz.
//   section.classList.add("section--hidden"); // bu da allsections ı seçtiğimiz fonksiyon olduğu için burda .forEach() ile add("section--hidden") ekliyoruz.
// });

// Lazy loading images

// const imgTargets = document.querySelectorAll("img[data-src]");
// // console.log(imgTargets);

// const loadImg = function (entries, observer) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("lazy-img");
//   });

//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: "200px", // bu daha erken yüklenmesini sağlıyor, daha ekran resimle kesişmeden 200px önce görünür olacak
// });

// imgTargets.forEach((img) => imgObserver.observe(img)); // bu kodu çalıştıran kısım. Her resmi observe et diyoruz.

////////////////////////////////
/// BENİM YAPTIĞIM /////
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
// const slider = function () {
//   const slides = document.querySelectorAll(".slide");
//   const btnLeft = document.querySelector(".slider__btn--left");
//   const btnRight = document.querySelector(".slider__btn--right");
//   const dotContainer = document.querySelector(".dots");

//   let curSlide = 0;
//   const maxSlide = slides.length;

//   // Functions
//   const createDots = function () {
//     slides.forEach(function (_, i) {
//       // (_, i) burda slide ile işimiz olmadığı için orayı boş bıraktık.
//       dotContainer.insertAdjacentHTML(
//         // bu da her slide için bir html öğesi yaratacak.
//         "beforeend",
//         `<button class="dots__dot" data-slide="${i}"></button>`
//       );
//     });
//   };

//   const activateDot = function (slide) {
//     document
//       .querySelectorAll(".dots__dot")
//       .forEach((dot) => dot.classList.remove("dots__dot--active"));

//     document
//       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//       .classList.add("dots__dot--active");
//   };

//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//       // 1. slayt 0%, 2. 100%, 3. 200%, 4. 300% bu yüzden translateX kullanıyoruz. i burda loop ediliyo ve 100 ile çarpılıyor.
//       // burda goToSlide(curslide) loop ediyoruz bu kod da nextSlide/prevSlide fonksiyonundan sonra çalışıyor. Sayfalar da curSlide durumuna göre hareket ediyor.
//     );
//   };

//   // Next slide
//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       // burda kaydırmaya devam etmesin diye maxSlide a eşitliyoruz -1 koymamızın nedeni length 0 base değil.
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }

//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const init = function () {
//     goToSlide(0);
//     createDots();

//     activateDot(0);
//   };
//   init();

//   // Event handlers
//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") prevSlide();
//     e.key === "ArrowRight" && nextSlide();
//     // ikisi de aynı kod istediğin gibi yazabilirsin
//   });

//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots__dot")) {
//       const { slide } = e.target.dataset; // data attribute ların hepsi dataset.value diye yazılır. Bizim value muz burada slide createDots kısmında görebilirisin. {} variableyi parantez içine almamızın nedeni dataset yazdıktan sonra .slide yi tekrar yazmak yerine paranteze aldık.
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };
// slider();

////////////////////////////////

// Benim yaptığım
// Notlar///
// eventhandler ve eventlistenerları aşağıda tut kodunun, eventdelegation dediğimiz şey örn; dot a tıklayacak yana tıkladı error vermesin diye onu ayarlıyoruz common parentı seçip kodu yazıyoruz.
// // // //

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
//  Objects – Classes
///////////////////////////////////////
// genel NOT: Karakter yaratmamız lazım. Her karaktere karakteristik özellik vericez (properties) örn; renk, boy, isim...
// ve yetenekler de vericez (methods) örn; zıplama,koşma , yumruk atma...
// Objects are perfect data structure to store this kind of info.

// const alien = {
//   name: "Kal - El",
//   species: "Alien",
//   phrase: () => console.log("I'm Kal-El the Alien!"),
//   fly: () => console.log("Vvvvvooooooommmmmmm!!"),
// };
// document.getElementById("name-alien").innerHTML = "Kal-El";
// document.getElementById("name-alien").style.fontStyle = "italic";

// const robot = {
//   name: "Ercüment",
//   species: "Robot",
//   phrase: () => console.log("Hasta la vista, yavrum!"),
//   transform: () => console.log("Basık Şahin"),
// };

// const insect = {
//   name: "Buggy",
//   species: "Insect",
//   phrase: () => console.log("Bana o Ağustos böceğini getirin!!"),
//   attack: () => console.log("Buggy Choke"),
// };

// console.log(robot.name);
// console.log(alien.species);
// insect.phrase();

//////////////////////////////////////////////////////////////////
// Class kullanalım //

// class Alien {
//   constructor(name, phrase, power) {
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//     this.species = "Alien";
//   }
//   fly = () => console.log("Vvvvvooooooommmmmmm!!");
//   sayPhrase = () => console.log(this.phrase);
// }
// const alien1 = new Alien("Berk", "I'm Berk the Alien!", 15);

// class Robot {
//   constructor(name, phrase, power) {
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//     this.species = "Robot";
//   }
//   transform = () => console.log("Basık Şahin");
//   sayPhrase = () => console.log(this.phrase);
//   // attack = () =>
// }
// const robot1 = new Robot("Kerem", "I'm Kerem the Robot");

// class Insect {
//   constructor(name, phrase, power) {
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//     this.species = "Insect";
//   }
//   sayPhrase = () => console.log(this.phrase);
//   attack = () => console.log(`Buggy Choke: ${this.power} power!`);
//   hide = () => console.log(`My attack ${this.power} is too low`);
// }
// const insect1 = new Insect("Berko", "Berko the Insect");

// console.log(robot1.name);
// console.log(insect1.species);
// robot1.transform();
// // alien1.sayPhrase();
// // insect1.attack();
// // Blueprint yaratmak bu yüzden önemli. Her şeyi tek tek girip yazamayız. We can clearly identify where each object properties and methods are defined (in the class)

// const insect2 = new Insect("Ziya", "Atma Ziyaaaaa", 7);
// console.log(insect2.power);
// insect2.hide();
// // takas = () => (this.power > 10 ? attack() : hide());
// // insect2.takas();
// insect2.attack();
// // BAK BUNA KURCALA
// // power() {
// //     if (this.power > 10) {
// //       return this.attack();
// //     } else {
// //       return this.hide();
// //     }
// //   }

// // devam... Enemy yaratalım bir tane

//////////////////////////////////////////////////////////////////
//The Four Principles of OOP//

//////////////////////////////////////////////////////////////////
// Inheritance // PART 1
//////////////////////////////////////////////////////////////////

// class Enemy {
//   // this is a parent class of Alien
//   constructor(power) {
//     this.power = power;
//   }
//   attack = () =>
//     console.log(
//       `I'm ${this.name} and attacking with a power of ${this.power}!`
//     );
// }

// class Alien extends Enemy {
//   // This is a child of Enemy class
//   constructor(name, phrase, power) {
//     super(power); // we have to declare the "power" parameter and use the super function to indicate that property is declared on the parent class.
//     this.name = name;
//     this.phrase = phrase;
//     this.species = "Alien";
//   }
//   fly = () => console.log("Vvvvvooooooommmmmmm!!");
//   sayPhrase = () => console.log(this.phrase);
// }
// const alien1 = new Alien("Berk", "I'm Berk the Alien!", 15);
// // const alien1 = new Alien("Berk", "I'm Berk the Alien!", 15);
// alien1.attack();

//////////////////////////////////////////////////////////////////
//Now let's say we want to add a new parent class that groups all our characters (no matter if they're enemies or not), and we want to set a property of "speed" and a "move" method. We can do that like this://

// class Character {
//   constructor(speed) {
//     this.speed = speed;
//   }

//   move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
// }

// class Enemy extends Character {
//   constructor(power, speed) {
//     super(speed);
//     this.power = power;
//   }
//   attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
// }

// class Alien extends Character {
//   constructor(name, phrase, power, speed) {
//     super(power, speed);
//     this.name = name;
//     this.phrase = phrase;
//     this.species = "alien";
//   }
//   fly = () => console.log("Vvvvvooooooommmmmmm!!");
//   sayPhrase = () => console.log(this.phrase);
// }

// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);
// const alien2 = new Alien("Lien", "Run for your lives!", 15, 60);

// alien1.move();
// console.log(alien2.speed);

//////////////////////////////////////////////////////////////////
//Now that we know more about inheritance, let's refactor our code so we avoid code repetition as much as possible://

// class Character {
//   constructor(speed) {
//     this.speed = speed;
//   }
//   move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
// }

// class Enemy extends Character {
//   constructor(name, phrase, power, speed) {
//     super(speed);
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//   }
//   sayPhrase = () => console.log(this.phrase);
//   attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
// }

// class Alien extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "alien";
//   }
//   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
// }

// class Bug extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "bug";
//   }
//   hide = () => console.log("You can't catch me now!");
// }

// class Robot extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "robot";
//   }
//   transform = () => console.log("Optimus prime!");
// }

// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);
// const alien2 = new Alien("Lien", "Run for your lives!", 15, 60);
// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);
// const bug2 = new Bug("Erik", "I drink decaf!", 5, 120);
// const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30);
// const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40);
// NOTLAR:
// super() her zaman this. lardan önce yazmalıyız
// yukarıdaki örnekte alien1.attack() yazdık ve parent olan Enemy den çalıştırdı. Fakat attack zaten class Alien'ın içerisinde olsaydı ilk kendi içindeki olan attack yürütecekti ve parentında olan attack yürütülmeyecekti.

//////////////////////////////////////////////////////////////////
// Encapsulation // PART 2
//////////////////////////////////////////////////////////////////

// Encapsulation is another key concept in OOP, and it stands for an object's capacity to "decide" which information it exposes to "the outside" and which it doesn't.
// Encapsulation is implemented through public and private properties and methods.
// In JavaScript, all objects' properties and methods are public by default. "Public" just means we can access an object's property/method from outside its own body:

// class Character {
//   constructor(speed) {
//     this.speed = speed;
//   }
//   move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
// }

// class Enemy extends Character {
//   constructor(name, phrase, power, speed) {
//     super(speed);
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//   }
//   sayPhrase = () => console.log(this.phrase);
//   attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
// }

// // Here's our class
// class Alien extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "alien";
//   }
//   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
// }

// // Here's our object
// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);

// // Here we're accessing our public properties and methods
// console.log(alien1.name); // output: Ali
// alien1.sayPhrase(); // output: "I'm Ali the alien!"
// // When inheriting, all parent methods and properties will be inherited by the children. We can't decide what to inherit from a parent class

//////////////////////////////////////////////////////////////////

// To make this clearer, let's see how private properties and methods look like.
// Let's say we want our Alien class to have a birthYear property, and use that property to execute a howOld method, but we don't want that property to be accessible from anywhere else other than the object itself. We could implement that like this:

// class Character {
//   constructor(speed) {
//     this.speed = speed;
//   }
//   move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
// }

// class Enemy extends Character {
//   constructor(name, phrase, power, speed) {
//     super(speed);
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//   }
//   sayPhrase = () => console.log(this.phrase);
//   attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
// }

// class Alien extends Enemy {
//   #birthYear; // We first need to declare the private property, always using the '#' symbol as the start of its name.

//   constructor(name, phrase, power, speed, birthYear) {
//     super(name, phrase, power, speed);
//     this.species = "alien";
//     this.#birthYear = birthYear; // Then we assign its value within the constructor function
//   }
//   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
//   howOld = () => console.log(`I was born in ${this.#birthYear}`); // and use it in the corresponding method.
// }

// // We instantiate the same way we always do
// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50, 10000);
// alien1.howOld(); // output: "I was born in 10000"
// // console.log(alien1.#birthYear); // This throws an error
// console.log(alien1);

//////////////////////////////////////////////////////////////////
// Abstraction // PART 3
//////////////////////////////////////////////////////////////////
// Abstraction is a principle that says that a class should only represent information that is relevant to the problem's context. In plain English, only expose to the outside the properties and methods that you're going to use. If it's not needed, don't expose it.
// This principle is closely related to encapsulation, as we can use public and private properties/methods to decide what gets exposed and what doesn't.

//////////////////////////////////////////////////////////////////
// Polymorphism // PART 4
//////////////////////////////////////////////////////////////////
// For example, we saw that the Enemy class has the sayPhrase method. And all our species classes inherit from the Enemy class, which means they all have the sayPhrase method as well.
// bBut we can see that when we call the method on different species, we get different results:

// const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)

// alien2.sayPhrase() // output: "Run for your lives!"
// bug1.sayPhrase() // output: "Your debugger doesn't work with me!"
//And that's because we passed each class a different parameter at instantiation. That's one kind of polymorphism, parameter-based. 👌

//////////////////////////////////////////////////////////////////
// Object Composition // BAŞLIK
//////////////////////////////////////////////////////////////////
// Say now we want to add the flying ability to our bug characters. As we've seen in our code, only aliens have the fly method. So one option could be to duplicate the exact same method in the Bug class:

// class Character {
//   constructor(speed) {
//     this.speed = speed;
//   }
//   move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
// }

// class Enemy extends Character {
//   constructor(name, phrase, power, speed) {
//     super(speed);
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//   }
//   sayPhrase = () => console.log(this.phrase);
//   attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
//   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
// }

// class Alien extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "alien";
//   }
// }

// class Bug extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "bug";
//   }
//   hide = () => console.log("You can't catch me now!");
// }

// class Robot extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "robot";
//   }
//   transform = () => console.log("Optimus prime!");
//   // I don't need the fly method =(
// }

// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);

// const addFlyingAbility = (obj) => {
//   obj.fly = () => console.log(`Now ${obj.name} can fly!`);
// };

// addFlyingAbility(bug1);

///////////////////////////////////////////////////////////
//////////// DRILL ///////////////
// const alien = {
//   name: "Kal - El",
//   species: "Alien",
//   phrase: () => console.log("I'm Kal-El the Alien!"),
//   fly: () => console.log("Vvvvvooooooommmmmmm!!"),
// };
// document.getElementById("name-alien").innerHTML = "Kal-El";
// document.getElementById("name-alien").style.fontStyle = "italic";

// const robot = {
//   name: "Ercüment",
//   species: "Robot",
//   phrase: () => console.log("Hasta la vista, yavrum!"),
//   transform: () => console.log("Basık Şahin"),
// };

// const insect = {
//   name: "Buggy",
//   species: "Insect",
//   phrase: () => console.log("Bana o Ağustos böceğini getirin!!"),
//   attack: () => console.log("Buggy Choke"),
// };

// console.log(robot.name);
// console.log(alien.species);
// insect.phrase();

// class Alien {
//   constructor(name, phrase, power) {
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//     this.species = "Alien";
//   }
//   fly = () => console.log("Vvvvvooooooommmmmmm!!");
//   sayPhrase = () => console.log(this.phrase);
// }
// const alien1 = new Alien("Berk", "I'm Berk the Alien!", 15);

// class Robot {
//   constructor(name, phrase, power) {
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//     this.species = "Robot";
//   }
//   transform = () => console.log("Basık Şahin");
//   sayPhrase = () => console.log(this.phrase);
//   // attack = () =>
// }
// const robot1 = new Robot("Kerem", "I'm Kerem the Robot");

// class Insect {
//   constructor(name, phrase, power) {
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//     this.species = "Insect";
//   }

//   // attackorRun(val) {
//   //   if (val > 10) {
//   //     return insect1.attack();
//   //   } else {
//   //     return insect1.hide();
//   //   }
//   // }

//   sayPhrase = () => console.log(this.phrase);
//   attack = () => console.log(`Buggy Choke: ${this.power} power!`);
//   hide = () => console.log(`My attack ${this.power} is too low`);
// }
// const insect1 = new Insect("Berko", "Berko the Insect", 17);
// insect1.attack();

// const powers = attackorRun();
// console.log(powers);

// // Yazdığım düz bir if fonksiyonu
// const addAttackorRun = (obj) => {
//   if (obj > 10) {
//     return insect1.attack();
//   } else {
//     return insect1.hide();
//   }
// };
// addAttackorRun(insect1.power);

// class insectin içindeki attackorRun ı çalıştırıyor.
// insect1.attackorRun(insect1.power);

// document.getElementById("power-insect").textContent = attackorRun();

// const addAttackorRun = function (obj) {
//   // const power =
//   //   obj > 10 ? `My attack ${power} Great!` : `My attack ${power} is too low!!`;
//   if (obj > 10) {
//     return insect1.attack();
//   } else {
//     return insect1.hide();
//   }
// };
// addAttackorRun(insect1.power);

/////////////////////////////////////////////////////////////////////////////////////////////
//////////// DRİLL YENİ ÖZELLİKLER EKLEME ////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// const displayPowers = function (powers) {
//   powers.forEach(function (pow, i) {
//     const damage = pow > 0 ? "Great" : "GARBAGE";

//     const html = `
//             <ul class="card-features c-features--insect">
//               <li class="feature-i">Name:</li>
//               <li class="feature-i">Speed:</li>
//               <li class="feature-i">
//                 Power:
//                 <p class="attack--${damage}">${i + 1} attack is ${pow}</p>
//                 <p id="power-insect">${pow} ${damage} damage</p>
//               </li>
//               <li class="feature-i">Species:</li>
//               <li class="feature-i">Phrase:</li>
//           </ul>`;

//     containerCard.insertAdjacentHTML("afterbegin", html);
//   });
// };

////////////////////////// SINIF ÖZELLİKLERİ //////////////////////////////
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
  // const damage = pow > 0 ? "Great" : "GARBAGE";
  containerCardAlien.innerHTML = "";
  containerCardInsect.innerHTML = "";
  containerCardRobot.innerHTML = "";

  function getRandomDamage(dmg) {
    // console.log(dmg);

    const randomDmg = Math.floor(Math.random() * dmg.length);
    // console.log(randomIndex);

    const dmgItem = dmg[randomDmg];
    // console.log(dmgItem);

    return dmgItem;
  }
  const powerInsect = insect.powers;
  const powerAlien = alien.powers;
  const powerRobot = robot.powers;
  // console.log(powerInsect, powerAlien, powerRobot);
  const dmgResultsI = getRandomDamage(powerInsect);
  const dmgResultsA = getRandomDamage(powerAlien);
  const dmgResultsR = getRandomDamage(powerRobot);
  // console.log(dmgResultsI, dmgResultsA, dmgResultsR);
  const damageI = dmgResultsI > 0 ? "Great" : "GARBAGE";
  const damageA = dmgResultsA > 0 ? "Great" : "GARBAGE";
  const damageR = dmgResultsR > 0 ? "Great" : "GARBAGE";
  // console.log(damageI === "Great");

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

  //////////// NAME / İSİM /////////////////////////

  function getRandomName(name) {
    const randomName = Math.floor(Math.random() * name.length);
    // console.log(randomName);

    const nameItem = name[randomName];
    // console.log(nameItem);

    return nameItem;
  }
  const namesInsect = insect.name;
  const namesAlien = alien.name;
  const namesRobot = robot.name;
  const nameResultsI = getRandomName(namesInsect);
  const nameResultsA = getRandomName(namesAlien);
  const nameResultsR = getRandomName(namesRobot);
  // console.log(nameResultsI, nameResultsA, nameResultsR);

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

  //////////// PHRASE PART /////////////////////////

  function addPhrase(phr) {
    const randomPhrase = Math.floor(Math.random() * phr.length);
    // console.log(randomPhrase);

    const phraseItem = phr[randomPhrase];

    // console.log(phraseItem);

    return phraseItem;
  }
  const phrInsect = insect.phrase;
  const phrAlien = alien.phrase;
  const phrRobot = robot.phrase;
  // console.log(phrInsect, phrAlien, phrRobot);
  const phrResultsI = addPhrase(phrInsect);
  const phrResultsA = addPhrase(phrAlien);
  const phrResultsR = addPhrase(phrRobot);
  // console.log(phrResultsA);
  // console.log(phrResultsI);
  // console.log(dmgResultsI);
  const high = "I am inevitable!!";
  // high.style.cssText += "color:silver";
  const low = "Retreat, power is too low!";
  // low.style.cssText += "color:red";
  const resultPI = dmgResultsI > 0 ? high : low;
  const resultPA = dmgResultsA > 0 ? high : low;
  const resultPR = dmgResultsR > 0 ? high : low;
  // console.log(resultPA);
  console.log("I am inevitable!!" === high);
  console.log(resultPA === high);

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
};
displayHero();

// shuffle button and reset old ones //
const shuffle = document.querySelector(".shuffle");
shuffle.addEventListener("click", function () {
  displayHero();
});

// function suffleButton() {
//   button.removeEventListener("click", suffleButton());
// }

////// Bu kodu nasıl sadeleştiricez /////
// const namesInsect = insect.name;
// const namesAlien = alien.name;
// const namesRobot = robot.name;
// const names = [namesInsect, namesAlien, namesRobot];
// console.log(names);

// const isim = `<li class="feature-i">Name:
//           <p class="name--${}">${}</p>
//           </li>`;

// function getRandomItem(arr) {
//   console.log(arr);
//   // get random index value
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   console.log(randomIndex);

//   // get random item
//   const item = arr[randomIndex];

//   return item;
// }

// const array = [1, "hello", 5, 8, "sdfjn", "fdshfjh", "HFSDŞAL"];

// const result = getRandomItem(array);
// console.log(result);
