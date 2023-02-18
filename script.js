// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const m_links = document.querySelectorAll(".m_links");
const menu = document.querySelector(".m_nav");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");

hamburger.addEventListener("click", () => {
  line1.classList.toggle("menu_merge1");
  line2.classList.toggle("menu_merge2");
  menu.classList.toggle("m_nav_open_close");
});

Array.from(m_links).forEach((links) => {
  links.addEventListener("click", () => {
    menu.classList.remove("m_nav_open_close");
    line1.classList.remove("menu_merge1");
    line2.classList.remove("menu_merge2");
  });
});

// STICKY NAVIGATION
const navigation = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navigation.classList.toggle("sticky", window.scrollY > 0);
});

// SWIPER
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// LOADING SCREEN
const loading_screen = document.querySelector(".loading_screen");
window.addEventListener("load", () => {
  loading_screen.style.display = "none";
});

// CONTACT
const submitBtn = document.querySelector(".submit");
const inputs = document.querySelectorAll(".inputs");
const show_message_text = document.querySelector(".show_message_text");
submitBtn.addEventListener("click", () => {
  Array.from(inputs).forEach((inputBox) => {
    inputBox.value = "";
  });
  show_message_text.style.display = "block";
  setTimeout(() => {
    show_message_text.style.display = "none";
  }, 3000);
});

// WEBSITE ANIMATION
let timeLine = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

timeLine
  .from(".vector1", { duration: 0.3, opacity: 0, x: -300 })
  .from(".hero_head_title", { duration: 0.3, opacity: 0, x: 100 })
  .from(".hero_head_desc", { duration: 0.3, opacity: 0, x: 100 })
  .from(".btn_area1", { duration: 0.3, opacity: 0, x: 100 });

gsap.from(".about_title", {
  scrollTrigger: {
    trigger: ".about_title",
    start: "center center",
  },
  duration: 0.3,
  opacity: 0,
});

gsap.from(".vector2", {
  scrollTrigger: {
    trigger: ".vector2",
    start: "bottom bottom",
  },
  x: -200,
  duration: 0.3,
  opacity: 0,
});

gsap.from(".about_desc", {
  scrollTrigger: {
    trigger: ".about_desc",
    start: "bottom bottom",
  },
  x: 200,
  duration: 0.3,
  opacity: 0,
});

gsap.from(".services_title", {
  scrollTrigger: {
    trigger: ".services_title",
    start: "bottom bottom",
  },
  duration: 0.3,
  opacity: 0,
});

gsap.from(".service_card", {
  scrollTrigger: {
    trigger: ".service_card",
    start: "bottom bottom",
  },
  duration: 0.3,
  opacity: 0,
  y: 100,
  stagger: 0.2,
});

gsap.from(".testimonials_title", {
  scrollTrigger: {
    trigger: ".testimonials_title",
    start: "bottom bottom",
  },
  duration: 0.3,
  opacity: 0,
});

gsap.from(".testimonials_area", {
  scrollTrigger: {
    trigger: ".testimonials_area",
    start: "bottom bottom",
  },
  duration: 0.3,
  opacity: 0,
});

gsap.from(".contact_page_title", {
  scrollTrigger: {
    trigger: ".contact_page_title",
    start: "center center",
  },
  duration: 0.3,
  opacity: 0,
});

gsap.from(".vector3", {
  scrollTrigger: {
    trigger: ".vector3",
    start: "bottom bottom",
  },
  duration: 0.3,
  x: -200,
  opacity: 0,
});

gsap.from(".contact_card", {
  scrollTrigger: {
    trigger: ".contact_card",
    start: "bottom bottom",
  },
  duration: 0.3,
  x: 200,
  opacity: 0,
});

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
