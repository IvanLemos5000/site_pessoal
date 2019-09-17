function openMenu() {
  document.getElementById("sidebarMenu").style.width = "250px";
  document.getElementById("mainContent").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeMenu() {
  document.getElementById("sidebarMenu").style.width = "0";
  document.getElementById("mainContent").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
} 