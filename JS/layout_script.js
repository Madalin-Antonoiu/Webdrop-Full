//____Layout UI JAVASCRIPT____
  col1 = document.getElementById('column1');
  col3 = document.getElementById('column3');
  nav1 = document.getElementById('left_part');
  nav2 = document.getElementById('right_part');
  var frame = document.getElementById('clientframe');
  var hidden = false;
  
  function hide_leftmenu() {
    col1.classList.toggle('displayNone');
    nav1.classList.toggle('displayNone');
  }
  function hide_rightmenu() {
    col3.classList.toggle('displayNone');
  }
  //Mini-Drawer-Burger
  function columnOne() {
    logotext = document.getElementById('logotext');

    //Extend-minify
    col1.classList.toggle('column1_mini');
    nav1.classList.toggle('column1_mini');
    
    //For when hide left panel button is used and want to show again from burger
    col1.classList.remove('displayNone');
    nav1.classList.remove('displayNone');

    //Hide Logo text
    logotext.classList.toggle('displayNone'); //Logo text hidden

    //Hides all text
    document.querySelectorAll("#sidebar_menu li .dd-button span").forEach(function (el) {
      el.classList.toggle('displayNoneB');
    });

    //Center all icons
    document.querySelectorAll(".centerme").forEach(function (el) {
      el.classList.toggle('textCenter');
    });

    //From big menu to mini-hover menu - need the two stylesheet - working! 
    var el = document.getElementById("style1");
    if (el.href.match("./CSS/empty.css")) {
      el.href = "./CSS/minime.css";
    } else {
      el.href = "./CSS/empty.css";
    }
  }
  //Preview Eye
  function preview() {
    nav = document.getElementById('myNav');
    col2 = document.getElementById('column2');

    col1.classList.toggle('displayNoneSuper');
    col2.classList.toggle('fullheight');
    col3.classList.toggle('displayNoneSuper');
    nav.classList.toggle('displayNoneSuper');

    //i also need to remove the eventlistener, or the outlining on hover

  }

  //Screen Resizes
function s320(){
  frame.classList.toggle('s320');
  frame.classList.remove("s480", "s768", "s1366", "s1920");
}
function s480(){
  frame.classList.toggle('s480');
  frame.classList.remove("s320", "s768", "s1366", "s1920");
}

function s768(){
  frame.classList.toggle('s768');
  frame.classList.remove("s320", "s480", "s1366", "s1920");
}

function s1366(){
  frame.classList.toggle("s1366");
  frame.classList.remove("s320", "s480", "s768", "s1920" );
}

function s1920(){
  frame.classList.toggle("s1920");
  frame.classList.remove("s320", "s480", "s768", "s1366");
}
//End of


//____END - LAYOUT UI JAVASCRIPT____ 