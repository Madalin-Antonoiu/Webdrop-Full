//____Layout UI JAVASCRIPT____
var $ = function (id) { return document.getElementById(id); };// Now $('id') possible in Vanilla JS
var $$ = function (id) { return clientFrameWindow.getElementById(id); };// Now $('id') possible in Vanilla JS
var clientFrameWindow = $("clientframe").contentWindow.document;


  var col1 = document.getElementById('column1');
  var col3 = document.getElementById('column3');
  var nav1 = document.getElementById('left_part');
  var nav2 = document.getElementById('right_part');
  var frame = document.getElementById('clientframe');
  var hidden = false;
  var diviframe =  document.getElementById('iframe_live_wh');
  var resizebuttons =  document.getElementById('resize_bar');
  var oneSs = document.styleSheets[0];
  
  function hide_leftmenu() {
    col1.classList.toggle('displayNone');
    nav1.classList.toggle('displayNone');
  }
  function hide_rightmenu() {
    col3.classList.toggle('displayNone');
  }
  //Mini-Drawer-Burger -If you add all classes below by default, you should have mini-drawer default i ntheory
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

  function get_iframe_wh(){
    
    //Document's width and height
    var wd = document.getElementById('clientframe').clientWidth; //the entire iFrame on CodePen
    var wh = document.getElementById('clientframe').clientHeight;   
  
    // put the result into a h1 tag
    diviframe.innerHTML =  wd + " x " + wh ;
    
  }
  

//Preview Eye

  //get clicked element 


$('preview-eye').addEventListener('click', preview, false);

function preview() {

    nav = document.getElementById('myNav');
    col2 = document.getElementById('column2');

    col1.classList.toggle('displayNoneSuper');
    col2.classList.toggle('fullheight');
    col3.classList.toggle('displayNoneSuper');
    nav.classList.toggle('displayNoneSuper');
    

    clientFrameWindow.body.classList.toggle('preview_class101');

    document.getElementById('resize_bar').classList.toggle("displayNoneSuper");
    document.getElementById('resize_bar2').classList.toggle("displayNoneSuper");
    frame.classList.remove('s320',"s480", "s768", "s1366", "s1920");
    
    col2.classList.toggle("unshrinkCol2");

    //i also need to remove the eventlistener, or the outlining on hover
    get_iframe_wh();
    diviframe.classList.toggle('displayNoneSuper');

    //get the outside click
    clientFrameWindow.addEventListener('click', iframeClick, false)

    function iframeClick(){    
      x = event.target;      
    }

    if(x){ 
      x.classList.toggle('active__u');
    }
    else
    return;

}
//Toggles Preview On/Of via `



  clientFrameWindow.addEventListener("keydown", function (event) {

    clientFrameWindow.addEventListener('click', iframeClick, false)

    function iframeClick(){    
      x = event.target;    
    }

    if (event.keyCode == 192) {
      nav = $("myNav");
      col2 = $("column2");
  
      col1.classList.toggle("displayNoneSuper");
      col2.classList.toggle("fullheight");
      col3.classList.toggle("displayNoneSuper");
      nav.classList.toggle("displayNoneSuper");
      clientFrameWindow.body.classList.toggle("preview_class101");
      $("resize_bar").classList.toggle("displayNoneSuper");
      $("resize_bar2").classList.toggle("displayNoneSuper");
      frame.classList.remove("s320", "s480", "s768", "s1366", "s1920");
  
      col2.classList.toggle("unshrinkCol2");
  
      toggle_iframe_wh();
  
  
  
      x.classList.toggle('active__u');
   
    }
  });






function hide_previewbar() {
  document.getElementById('resize_bar').classList.toggle("displayNoneSuper");
  document.getElementById('resize_bar2').classList.toggle("go_left");
  document.getElementById('rotate__me').classList.toggle("down__me");
}

/*Unique class on several elements - You can rewrite this function to use in any case :)*/

resizebuttons.addEventListener("click", function (event) {
  let list = resizebuttons.querySelectorAll('i');

      for (let i = 0; i < list.length; i++) {
      if (event.target == list[i] ) { 

        event.target.classList.toggle("active__u"); 
 

      } else {//`Press anywhere inside parent div except the __item and it gets removed // click on other __item and removes previous`
      
      list[i].classList.remove("active__u");
      
      }
}}); 



//Screen Resizes
function s320(){
  frame.classList.toggle('s320');
  frame.classList.remove("s480", "s768", "s1366", "s1920");
  get_iframe_wh();
}

function s480(){
  frame.classList.toggle('s480');
  frame.classList.remove("s320", "s768", "s1366", "s1920");
  get_iframe_wh();
}

function s768(){
  frame.classList.toggle('s768');
  frame.classList.remove("s320", "s480", "s1366", "s1920");
  get_iframe_wh();
}

function s1366(){
  frame.classList.toggle("s1366");
  frame.classList.remove("s320", "s480", "s768", "s1920" );
  get_iframe_wh();
}

function s1920(){
  frame.classList.toggle("s1920");
  frame.classList.remove("s320", "s480", "s768", "s1366");
  get_iframe_wh();
}

//End of


//____END - LAYOUT UI JAVASCRIPT____ 