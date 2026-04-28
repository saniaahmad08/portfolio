function syncWord() {
 const menu = document.getElementById("wordSelect");
 const display = document.getElementById("wordDisplay");
 if (menu.selectedIndex > 0) {
 const selectedOption = menu.options[menu.selectedIndex];
 display.value = selectedOption.dataset.def;
 } 
 else {
 display.value = "";
 }
} 
