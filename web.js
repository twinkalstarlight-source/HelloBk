/* =====================================================
   HELLO AI SPOKEN ENGLISH APP
   WEBSITE JAVASCRIPT
===================================================== */


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================
   SMOOTH SECTION SCROLL
========================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(function(link) {

    link.addEventListener(
      "click",
      function(event) {

        const targetId =
          link.getAttribute("href");

        const target =
          document.querySelector(targetId);

        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }
    );

  });


/* =========================
   DOWNLOAD BUTTON CHECK
========================= */

const downloadButtons =
  document.querySelectorAll(
    'a[href="app.apk"]'
  );


downloadButtons.forEach(function(button) {

  button.addEventListener(
    "click",
    function() {

      /*
        The APK file must be named:

        app.apk

        and placed in the same folder
        as index.html.
      */

      console.log(
        "Hello AI APK download clicked."
      );

    }
  );

});


/* =========================
   IMAGE LOADING CHECK
========================= */

const appImage =
  document.querySelector(
    '.phone img'
  );


if (appImage) {

  appImage.addEventListener(
    "error",
    function() {

      console.log(
        "Screenshot not found. " +
        "Check images/home-screene.png"
      );

    }
  );

}


/* =========================
   SIMPLE PAGE LOAD EFFECT
========================= */

window.addEventListener(
  "load",
  function() {

    document.body.classList.add(
      "page-loaded"
    );

  }
);


/* =====================================================
   IMPORTANT

   No external library is required.

   Required website files:

   index.html
   style.css
   script.js
   app.apk

   images/
      home-screene.png

   Later you can add more screenshots
   without changing this JavaScript.
===================================================== */