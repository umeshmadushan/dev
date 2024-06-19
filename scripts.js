document.addEventListener("DOMContentLoaded", () => {
  const modeIcon = document.getElementById("modeIcon");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === "dark-mode") {
      modeIcon.name = "sunny";
    }
  }

  document.querySelectorAll("nav ul a").forEach((link) => {
    link.addEventListener("click", () => {
      document
        .querySelectorAll("nav ul a")
        .forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});

function toggleDarkMode() {
  const modeIcon = document.getElementById("modeIcon");
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    localStorage.removeItem("theme");
    modeIcon.name = "moon";
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
    modeIcon.name = "sunny";
  }
}

function toggleMenu(icon) {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("open");
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.style.top = "4rem";
  } else {
    mobileMenu.style.top = "-100%";
  }
}
