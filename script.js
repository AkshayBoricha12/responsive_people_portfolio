let sidebar = document.querySelector(".sidebar");
let heroSection = document.querySelector(".hero-section");

function toggleSidebar() {
  if (sidebar.style.left == "-1000px") {
    sidebar.style.left = "0";
    sidebar.style.top = "0";
    heroSection.style.opacity = "0.8";
  } else {
    sidebar.style.left = "-1000px";
    heroSection.style.opacity = "1";
  }
}
