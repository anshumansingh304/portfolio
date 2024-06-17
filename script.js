document.addEventListener("DOMContentLoaded", (event) => {
  const elements = ["Web developer", "MERN STACK", "Full stack web developer"];
  let currentIndex = 0;
  const typewriterElement = document.getElementById("typewriter");
  let currentText = "";
  let isDeleting = false;
  let timer;

  function type() {
    const fullText = elements[currentIndex];

    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    typewriterElement.textContent = currentText;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => {
        isDeleting = true;
        type();
      }, 1000);
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % elements.length;
      timer = setTimeout(type, 500);
    } else {
      timer = setTimeout(type, isDeleting ? 50 : 150);
    }
  }

  type();
});
document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggle = document.getElementById("dropdownMenuButton");
  var dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});
