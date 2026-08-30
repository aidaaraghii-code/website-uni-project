/* ==========================================================================
   IRAN LANDMARKS & CULTURAL HERITAGE — main.js
   --------------------------------------------------------------------------
   Loaded by every page:   <script src="main.js" defer></script>

   A deliberately small script with three simple features (no backend):
     1. FAQ accordion — click a question to open/close its answer
     2. Contact form  — check the fields, then show a green success message
     3. Footer year   — keep the copyright line up to date automatically
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. FAQ ACCORDION
   Each question is a <button class="accordion-trigger"> inside an
   <div class="accordion-item">. Clicking the button toggles the "open" class
   on the item — and style.css uses that class to reveal the answer below.
   -------------------------------------------------------------------------- */
var items = document.querySelectorAll(".accordion-item");

items.forEach(function (item) {
  var trigger = item.querySelector(".accordion-trigger");

  trigger.addEventListener("click", function () {
    // Toggle adds the class if missing, removes it if present.
    item.classList.toggle("open");
  });
});

/* --------------------------------------------------------------------------
   2. CONTACT FORM
   We listen for the "submit" event. Because there is no server, we call
   preventDefault() to stop the page from reloading, check the three fields,
   and finally reveal the success box.
   -------------------------------------------------------------------------- */
var contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the browser from reloading the page

    // Read what the visitor typed into the three boxes.
    var name = contactForm.querySelector("#name").value.trim();
    var email = contactForm.querySelector("#email").value.trim();
    var message = contactForm.querySelector("#message").value.trim();

    // Very simple check: all three fields must be filled in.
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all three fields before sending.");
      return; // stop here; do not show the success box
    }

    // Everything is filled in — show the success message and reset the form.
    contactForm.querySelector(".form-success").classList.add("show");
    contactForm.reset();
  });
}

/* --------------------------------------------------------------------------
   3. FOOTER YEAR
   Writes the current year into the <span id="year"> in the footer, so the
   copyright line always shows the correct date.
   -------------------------------------------------------------------------- */
var yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* --------------------------------------------------------------------------
   4. NAV "LANDMARKS" DROPDOWN
   The Landmarks button toggles a small menu. Clicking elsewhere, pressing
   Escape, or opening another dropdown closes it. Choosing a link closes it too
   (the link still navigates normally).
   -------------------------------------------------------------------------- */
document.querySelectorAll(".nav-dropdown").forEach(function (dropdown) {
  var toggle = dropdown.querySelector(".nav-dropdown-toggle");
  var menu = dropdown.querySelector(".nav-dropdown-menu");

  toggle.addEventListener("click", function (event) {
    event.stopPropagation();

    // Close every other open dropdown first.
    document.querySelectorAll(".nav-dropdown.open").forEach(function (other) {
      if (other !== dropdown) {
        other.classList.remove("open");
        other.querySelector(".nav-dropdown-toggle").setAttribute("aria-expanded", "false");
      }
    });

    var isOpen = dropdown.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu when a link inside it is chosen.
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});

// Close any open dropdown when clicking anywhere outside of it.
document.addEventListener("click", function () {
  document.querySelectorAll(".nav-dropdown.open").forEach(function (dropdown) {
    dropdown.classList.remove("open");
    dropdown.querySelector(".nav-dropdown-toggle").setAttribute("aria-expanded", "false");
  });
});

// Also close the menu when the Escape key is pressed.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelectorAll(".nav-dropdown.open").forEach(function (dropdown) {
      dropdown.classList.remove("open");
      dropdown.querySelector(".nav-dropdown-toggle").setAttribute("aria-expanded", "false");
    });
  }
});