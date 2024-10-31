
function setDarkMode() {
    localStorage.DarkModeCounter;
    if(localStorage.DarkModeCounter == "NaN"){
        localStorage.DarkModeCounter = 1;
    }
    if (localStorage.DarkModeCounter % 2 == 0) {
      $("body").addClass("dark-theme");
      $("div.navbr").addClass("navbr-dark-mode");
      $("h1").addClass("text-dark-mode");
      $("h2").addClass("text-dark-mode");
      $("h3").addClass("text-dark-mode");
      $("p").addClass("text-dark-mode");
      $("div.alegere").addClass("alegeredk");
      $("div.alegere").removeClass("alegerelight");
      $("div.social-l").addClass("social-d");
      $("div.alegere-container").addClass("alegere-container-dark");

    } else {
      $("body").removeClass("dark-theme");
      $("div").removeClass("navbr-dark-mode");
      $("h1").removeClass("text-dark-mode");
      $("h2").removeClass("text-dark-mode");
      $("h3").removeClass("text-dark-mode");
      $("p").removeClass("text-dark-mode");
      $("div.alegere").removeClass("alegeredk");
      $("div.alegere").addClass("alegerelight");
      $("div.social-l").removeClass("social-d");
      $("div.alegere-container").removeClass("alegere-container-dark");
    }
    
  }
function Phtotchange(){
  if(localStorage.DarkModeCounter == "NaN"){
    localStorage.DarkModeCounter = 1;
}
if(document.getElementById("imgid") != null)
if (localStorage.DarkModeCounter % 2 == 0) {
  document.getElementById("imgid").src="images/Background-catpring-black.png";
}else{
  document.getElementById("imgid").src="images/Background-catpring-white.png";
}
}

function formChange(){
  if (localStorage.DarkModeCounter % 2 == 0) {
      $("label").addClass("text-dark-mode");
      $("input").addClass("input-dark-mode");
      $("select").addClass("input-dark-mode");
      $("textarea").addClass("input-dark-mode"); 

      $("label").removeClass("text-light-mode");
      $("input").removeClass("input-light-mode");
      $("select").removeClass("input-light-mode");
      $("textarea").removeClass("input-light-mode"); 
  } else {
    $("label").addClass("text-light-mode");
      $("input").addClass("input-light-mode");
      $("select").addClass("input-light-mode");
      $("textarea").addClass("input-light-mode"); 

      $("label").removeClass("text-dark-mode");
      $("input").removeClass("input-dark-mode");
      $("select").removeClass("input-dark-mode");
      $("textarea").removeClass("input-dark-mode"); 
  }
}

  Phtotchange();
  setDarkMode();
  formChange();
  // Atașează evenimentul click pe elementul .theme-switch
  $(".theme-switch").on("click", function() {
    localStorage.DarkModeCounter = Number(localStorage.DarkModeCounter)+1;
    setDarkMode();
    Phtotchange();
    formChange();
  });
