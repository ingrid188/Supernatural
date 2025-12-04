document.getElementById('alert-button').addEventListener('click', function () {
  alert('Você sabia? Sobrenatural teve uma participação de grandes astros, incluindo Jeffrey Dean Morgan e Jim Beaver!');
});


const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});


backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
