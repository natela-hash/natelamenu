
const translations = {
  ka: {
    navHome: "მთავარი",
    navServices: "სერვისები",
    navContact: "კონტაქტი",
    title: "სისუფთავე ჩვენი საქმეა",
    button: "ვიზიტის ჩანიშვნა",
    formTitle: "ვიზიტის ფორმა",
    inputName: "სახელი",
    inputEmail: "ელ. ფოსტა",
    inputPhone: "ტელეფონი",
    submit: "გაგზავნა"
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navContact: "Contact",
    title: "Cleanliness is our job",
    button: "Book a Visit",
    formTitle: "Booking Form",
    inputName: "Name",
    inputEmail: "Email",
    inputPhone: "Phone",
    submit: "Submit"
  }
};

document.getElementById("bookVisit").onclick = function () {
  document.getElementById("modal").style.display = "flex";
};
document.querySelector(".close-button").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

document.getElementById("languageSwitcher").onchange = function () {
  const lang = this.value;
  document.getElementById("nav-home").innerText = translations[lang].navHome;
  document.getElementById("nav-services").innerText = translations[lang].navServices;
  document.getElementById("nav-contact").innerText = translations[lang].navContact;
  document.querySelector(".hero h1").innerText = translations[lang].title;
  document.getElementById("bookVisit").innerText = translations[lang].button;
  document.querySelector(".modal-content h2").innerText = translations[lang].formTitle;
  const inputs = document.querySelectorAll(".modal-content input");
  inputs[0].placeholder = translations[lang].inputName;
  inputs[1].placeholder = translations[lang].inputEmail;
  inputs[2].placeholder = translations[lang].inputPhone;
  document.querySelector(".modal-content button").innerText = translations[lang].submit;
};

document.getElementById("menu-toggle").onclick = function () {
  const nav = document.getElementById("main-menu");
  nav.classList.toggle("active");
};
