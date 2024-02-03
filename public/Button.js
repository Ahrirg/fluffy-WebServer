function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    //Buttons

    tablinks = document.getElementsByClassName("TabButtonButton");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" Activated", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById('Button' + cityName).className += " Activated";
  }