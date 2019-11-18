//Shorten document.getElementById('') into just $('') in plain javaScript
var $ = function (id) { return document.getElementById(id); };// Now $('id') possible in Vanilla JS
var $$ = function (id) { return clientFrameWindow.getElementById(id); };// Now $('id') possible in Vanilla JS
var clientFrameWindow = $("clientframe").contentWindow.document;


//document.addEventListener("DOMContentLoaded", function(event) {
  // Your code to run since DOM is loaded and ready
//});

//var placeholders = clientFrameWindow.getElementsByClassName('__placeholder');
var droppables = $("sidebar_menu");



//Toggles Preview On/Of via `
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 192) {
    //192 is `

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

    //Toggling from Preview to Edit with no visual bugs, yay!
    col2.classList.toggle("unshrinkCol2");
    `
    `;

    toggle_iframe_wh();
  }
});


//Every Checkbox toggle on/off on click
// get DOM elements

clientFrameWindow.addEventListener("DOMContentLoaded", function() { 
  var diviframe = $("iframe_live_wh");
  
  function toggle_iframe_wh() {
    var diviframe = $("iframe_live_wh");
    //Document's width and height
    var wd = $("clientframe").clientWidth; //the entire iFrame on CodePen
    var wh = $("clientframe").clientHeight;
  
    // put the result into a h1 tag
    diviframe.innerHTML = wd + " x " + wh;
    diviframe.classList.toggle("displayNoneSuper");
  }

  // Your code to run since DOM is loaded and ready
//If not doing on iFrame load, the addEventListeners will crash sometimes - Multiple AddEventListeners
  clientFrameWindow.addEventListener("keydown", function (event) {
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
    }
  });

  //clientFrameWindow.body.addEventListener('mouseover', mouseEnter);
  clientFrameWindow.body.addEventListener("mouseout", mouseLeave, false);
  clientFrameWindow.body.addEventListener("dragover", dragOver, false);
  clientFrameWindow.body.addEventListener("dragleave", dragLeave, false);
  clientFrameWindow.body.addEventListener("drop", onDrop, false);
  droppables.addEventListener("dragstart", onDragStart, false);
  clientFrameWindow.body.addEventListener("dblclick", dblClick, false);
  clientFrameWindow.addEventListener("click", oneClickForAll, false);
  window.addEventListener("resize", getSize, false);

  function oneClickForAll(event) {

    x = event.target; 
    let list = clientFrameWindow.querySelectorAll("*"); // Grab all the li elements

    for (let i = 0; i < list.length; i++) {
      if (x === list[i]) {   // If my click target is the same as list item it goes through,and this is to ensure only 1 eleme is red
        
        // 0. Show tab1c's content if elem clicked
        $('onlyIfElem').classList.remove('displayNone');
        $('selectFirst').classList.add('displayNone');

        // 0.1 Toggle classes from mini checkboxes and not on click on a class

        // 1. Tag, ID, Classes
          $('target_el').innerHTML = x.nodeName;
          $('target_id').innerHTML = x.id;

          // NOT DRY - (instead of 0,1,3 could note a n) Only show these divs if the classes exist!
          if (x.classList[0] && x.classList[0] !== "active__u" ) {
            //just display it, no reCreate
            $("0-class").style.display = "inline-block";
            $("target_cls0").innerHTML =
              x.classList[0];
            
             
          } else {
            $("0-class").style.display = "none";
          }

          if (x.classList[1] && x.classList[1] !== "active__u") {
            $("1-class").style.display = "inline-block";
            $("target_cls1").innerHTML = x.classList[1];
            
          } else {
            $("1-class").style.display = "none";
           
          }

          if (x.classList[2] && x.classList[2] !== "active__u") {
           
            $("2-class").style.display = "inline-block";
            $("target_cls2").innerHTML =
              x.classList[2];
          } else {
            $("2-class").style.display = "none";
          }

        // End of 1

        /// **** 2. Toggle a class on/off on click in Panel ******* /////

        var classNames = x.classList;
        var clonedClassNames = [...classNames]; //It`s a must to copy the array

        
        //Not DRY!
        $('target_cls0').onclick = function (e) {
          //Toggle apply class on the element
       
          x.classList.toggle(clonedClassNames[0]);

          /*Log all classes from client.css
        Array.prototype.forEach.call(clientFrameWindow.styleSheets[0].cssRules,
          function(a){
            var x = a.selectorText;
            console.log(x);

          }); */

          //Remove empty class
          if (event.srcElement.className == "")
            event.srcElement.removeAttribute("class");

          //Prevent default
          e.preventDefault();
        };
        $('target_cls1').onclick = function (e) {
       
         x.classList.toggle(clonedClassNames[1]);

          //$("tgl-class-1").toggleAttribute("checked");

          //Remove empty class
          if (event.srcElement.className == "")
            event.srcElement.removeAttribute("class");

          //Prevent default
          e.preventDefault();
        };
        $('target_cls2').onclick = function (e) {
     
          x.classList.toggle(clonedClassNames[2]);

         // $("tgl-class-2").toggleAttribute("checked");

          //Remove empty class
          if (event.srcElement.className == "")
            event.srcElement.removeAttribute("class");

          //Prevent default
          e.preventDefault();
        };

        // Click on x remove classes from elems + themselves innerHTML
         
        $('del_cls0').onclick = function (e) {
          //Toggle apply class on the element
          x.classList.remove(clonedClassNames[0]);
          $('0-class').style.display ="none" ; //Could add a revert ;) 


          //Remove empty class
          if (event.srcElement.className == "")
            event.srcElement.removeAttribute("class");

          //Prevent default
          e.preventDefault();
        };
        $('del_cls1').onclick = function (e) {
         x.classList.remove(clonedClassNames[1]);
         $('1-class').style.display ="none" ;
          //$("tgl-class-1").toggleAttribute("checked");

          //Remove empty class
          if (event.srcElement.className == "")
            event.srcElement.removeAttribute("class");

          //Prevent default
          e.preventDefault();
        };
        $('del_cls2').onclick = function (e) {
          x.classList.remove(clonedClassNames[2]);
          $('2-class').style.display ="none" ;
          //$("tgl-class-2").toggleAttribute("checked");

          //Remove empty class
          if (event.srcElement.className == "")
            event.srcElement.removeAttribute("class");

          //Prevent default
          e.preventDefault();
        };


        $('saved-value').innerHTML = " Selected class: ." + clonedClassNames[0]; // aici imi scrie in HTML prima clasa prezenta



        /// ********** End of 2 ****************

        //********* 3. Change width on clicked element via inputs (INLINE-STYLES)*************
          let grabStyles = window.getComputedStyle(x); //console.log(grabStyles);

          //a. Display x's default values - Dimension
          
          $('myWidth').value = grabStyles.getPropertyValue('width');
          $('maxWidth').value = grabStyles.getPropertyValue('max-width');
          $('minWidth').value = grabStyles.getPropertyValue('min-width');

          $('myHeight').value = grabStyles.getPropertyValue('height');
          $('maxHeight').value = grabStyles.getPropertyValue('max-height');
          $('minHeight').value = grabStyles.getPropertyValue('min-height');

          //a. Width (with STYLE element in comments )
          $('myWidth').addEventListener('keyup', function() { x.style.width = $('myWidth').value; });        // (1) drop inside});
          $('maxWidth').addEventListener('keyup', function() { x.style.maxWidth = $('maxWidth').value; });
          $('minWidth').addEventListener('keyup', function() { x.style.minWidth = $('minWidth').value; });
        
          $('myHeight').addEventListener('keyup', function() { x.style.height = $('myHeight').value; });
          $('maxHeight').addEventListener('keyup', function() { x.style.maxHeight = $('maxHeight').value; });
          $('minHeight').addEventListener('keyup', function() { x.style.minHeight = $('minHeight').value; });
          
          //b. Margin
          if( grabStyles.getPropertyValue('margin-top') !== "0px"){
          let str = grabStyles.getPropertyValue('margin-top'); str = str.slice(0, -2);     
          $('margin-top').value = str;
          } else {
            $('margin-top').value = "";
          }

          if( grabStyles.getPropertyValue('margin-right') !== "0px"){
            let str = grabStyles.getPropertyValue('margin-right'); str = str.slice(0, -2);  
          $('margin-right').value = str;
          } else {
            $('margin-right').value = "";
          }

          if( grabStyles.getPropertyValue('margin-bottom') !== "0px"){
            let str = grabStyles.getPropertyValue('margin-bottom'); str = str.slice(0, -2);  
          $('margin-bottom').value = str;
          } else {
            $('margin-bottom').value = "";
          }

          if( grabStyles.getPropertyValue('margin-left') !== "0px"){
            let str = grabStyles.getPropertyValue('margin-left'); str = str.slice(0, -2);  
          $('margin-left').value = str;
          }  else {
            $('margin-left').value = "";
          }

          $('margin-top').addEventListener('keyup', function() { x.style.marginTop = $('margin-top').value; });        // (1) drop inside});
          $('margin-right').addEventListener('keyup', function() { x.style.marginRight = $('margin-right').value; });
          $('margin-bottom').addEventListener('keyup', function() { x.style.marginBottom = $('margin-bottom').value; });
          $('margin-left').addEventListener('keyup', function() { x.style.marginLeft = $('margin-left').value; });


          //c. Padding
          if( grabStyles.getPropertyValue('padding-top') !== "0px"){
            let str = grabStyles.getPropertyValue('padding-top'); str = str.slice(0, -2);      //To not show 'px'at the end :)
            $('padding-top').value = str;
          } else {
            $('padding-top').value = "";
          }

          if( grabStyles.getPropertyValue('padding-right') !== "0px"){
            let str = grabStyles.getPropertyValue('padding-right'); str = str.slice(0, -2);      //To not show 'px'at the end :)
          $('padding-right').value = str;
          } else {
            $('padding-right').value = "";
          }

          if( grabStyles.getPropertyValue('padding-bottom') !== "0px"){
            let str = grabStyles.getPropertyValue('padding-bottom'); str = str.slice(0, -2);      //To not show 'px'at the end :)
          $('padding-bottom').value = str;
          } else {
            $('padding-bottom').value = "";
          }

          if( grabStyles.getPropertyValue('padding-left') !== "0px"){
            let str = grabStyles.getPropertyValue('padding-left'); str = str.slice(0, -2);     
          $('padding-left').value = str
          } else {
            $('padding-left').value = "";
          }

          $('padding-top').addEventListener('keypress', function() { x.style.paddingTop = $('padding-top').value; });// (1) drop inside});
          $('padding-right').addEventListener('keyup', function() { x.style.paddingRight = $('padding-right').value; });
          $('padding-bottom').addEventListener('keyup', function() { x.style.paddingBottom = $('padding-bottom').value; });
          $('padding-left').addEventListener('keyup', function() { x.style.paddingLeft = $('padding-left').value; });

          //d. Border
          if( grabStyles.getPropertyValue('border-top-width') !== "0px"){
          let str = grabStyles.getPropertyValue('border-top-width'); str = str.slice(0, -2);      
          $('border-top').value = str;
          } else {
            $('border-top').value = "";
          }

          if( grabStyles.getPropertyValue('border-right-width') !== "0px"){
            let str = grabStyles.getPropertyValue('border-right-width'); str = str.slice(0, -2);     
            $('border-right').value = str;
          } else {
              $('border-right').value = "";
          }

          if( grabStyles.getPropertyValue('border-bottom-width') !== "0px"){
            let str = grabStyles.getPropertyValue('border-bottom-width'); str = str.slice(0, -2);  
            $('border-bottom').value = str;
          } else {
            $('border-bottom').value = "";
          }

          if( grabStyles.getPropertyValue('border-left-width') !== "0px"){
            let str = grabStyles.getPropertyValue('border-left-width'); str = str.slice(0, -2); 
            $('border-left').value = str;
          } else {
            $('border-left').value = "";
          }

          $('border-top').addEventListener('keyup', function() { x.style.borderTopWidth = $('border-top').value;  x.style.borderTopColor = "black";  x.style.borderTopStyle="solid"; });        // (1) drop inside});
          $('border-right').addEventListener('keyup', function() { x.style.borderRightWidth = $('border-right').value;  x.style.borderRightColor = "black";  x.style.borderRightStyle="solid";  });
          $('border-bottom').addEventListener('keyup', function() { x.style.borderBottomWidth = $('border-bottom').value;  x.style.borderBottomColor = "black";  x.style.borderBottomStyle="solid";  });
          $('border-left').addEventListener('keyup', function() { x.style.borderLeftWidth = $('border-left').value;  x.style.borderLeftColor = "black";  x.style.borderLeftStyle="solid";  });

        

          document.querySelector('.margin-top-row').addEventListener('mouseover', marginOver, false);
       
          function marginOver(){
           console.clear();
            //x.scrollHeight.style.backgroundColor = "orange";
           // console.log(x.getBoundingClientRect().getStyleValue(styles, 'margin-top'));
       
     
           var computed = getComputedStyle(x);
           
           var margin = ['margin-top', 'margin-bottom', 'margin-left', 'margin-right'];
           margin.forEach(function(e) { console.log(e + ': ' + computed.getPropertyValue(e)) });

                      //var padding =  ['padding-top', 'padding-bottom', 'padding-left', 'padding-right'];
           //padding.forEach(function(e) { console.log(e + ': ' + computed.getPropertyValue(e)) });
           
          }

        // -----END OF 3 ----- 

        // ***** 4. BADGE ***** //
        var badge = $$("badge_");

        var w = x.clientWidth;
        var h = x.clientHeight;
        var w$h =
          "&nbsp; &nbsp;" +
          x.clientWidth +
          "x" +
          x.clientHeight + 'px';

        //Resize window live update width + height of clicked element
        window.addEventListener("resize", getSize, false);

        function getSize() {
          //On resize run again and update
          var w = x.clientWidth;
          var h = x.clientHeight;
          var w$h =
            "&nbsp; &nbsp;" +
            x.clientWidth +
            "x" +
            x.clientHeight;

            $$('el-tag').innerHTML = x.nodeName.toLowerCase();
            $$('el-w&h').innerHTML = w$h;
  
            if (x.id != "") {$$('el-id').innerHTML = "#" + x.id;} 
            else {$$('el-id').innerHTML = "";}
  
            if (x.classList[0] != undefined && x.classList[0] != "active__u"  ) {$$('el-c0').innerHTML = "." + x.classList[0];} 
            else {$$('el-c0').innerHTML = "";} 
  
            if (x.classList[1] != undefined && x.classList[1] != "active__u"  ) {$$('el-c1').innerHTML = "." + x.classList[1];} 
            else { $$('el-c1').innerHTML = "";} 
  
            if (x.classList[2] != undefined && x.classList[2] != "active__u"  ) {$$('el-c2').innerHTML = "." + x.classList[2];} 
            else {$$('el-c2').innerHTML = "";} 
  

          //On resize update Column3
          $("renderedWidth").innerHTML = w + "px"; //writes width
          $("renderedHeight").innerHTML = h + "px"; //writes width
        }
        //End of resize live update clicked element
        
        //10. Decide what to be written inside BADGE
       
          $$('el-tag').innerHTML = x.nodeName.toLowerCase();
          $$('el-w&h').innerHTML = w$h;

          if (x.id != "") {$$('el-id').innerHTML = "#" + x.id;} 
          else {$$('el-id').innerHTML = "";}

          if (x.classList[0] != undefined && x.classList[0] != "active__u"  ) {$$('el-c0').innerHTML = "." + x.classList[0];} 
          else {$$('el-c0').innerHTML = "";} 

          if (x.classList[1] != undefined && x.classList[1] != "active__u"  ) {$$('el-c1').innerHTML = "." + x.classList[1];} 
          else { $$('el-c1').innerHTML = "";} 

          if (x.classList[2] != undefined && x.classList[2] != "active__u"  ) {$$('el-c2').innerHTML = "." + x.classList[2];} 
          else {$$('el-c2').innerHTML = "";} 

          
          
        //


        // DISPLAY W & H  COLUMN3 ON CLICK
        $("renderedWidth").innerHTML = w + "px"; //writes width
        $("renderedHeight").innerHTML = h + "px"; //writes width

        //Badge - Adds it as first child
        x.parentNode.insertBefore(badge, x);

        if (x.classList !== "active__u") {
          //if target doesn't have active on it
          x.classList.add("active__u"); //add it
          badge.classList.add("show");
        } else {
          //x.classList.remove("active"); //to be able to remove it on a second click
          x.className != "active__u"; //to not be able to
          //Also if target doesn't have active__u the badge should be hidden ( not woking yet)
        }
      } else {
        list[i].classList.remove("active__u");
       
      }
    }
  }

  function dblClick() {
    // (event.srcElement.id == '__upload') for specific ID
    if (event.srcElement.nodeName == "IMG") {
      //Change src event.srcElement is the same with x
      event.srcElement.src = "https://picsum.photos/200/300";
      //console.log(event.srcElement);

      //Remove placeholder of img
      event.srcElement.classList.remove("__placeholder");

      //need to remvoe placeholder of topmost parent ( topmost div container __placeholder)
      event.srcElement.parentNode.parentNode.parentNode.classList.remove(
        "__placeholder"
      );

      //Removes class="" if empty, so on code download you don't have it :)
      if (event.srcElement.className == "")
        event.srcElement.removeAttribute("class");
    }
  }

  function getSize() {
    //Document's width and height
    var wd = $("clientframe").clientWidth; //the entire iFrame on CodePen
    var wh = $("clientframe").clientHeight;

    // put the result into a h1 tag
    $("iframe_live_wh").innerHTML = wd + " x " + wh;
  }

  /* function mouseEnter()
  function mouseEnter(e) {
    
    //Add outline on hover
    e.target.classList.add('outline');

    //Tooltip show (redo)
    if (e.target.classList.item(0) == 'outline') {
      $('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + '>';
    } else if (e.target.classList.item(1) == 'outline' || 'outline-dashed') {
      $('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + '">';
    } else if (e.target.classList.item(2) == 'outline' || 'outline-dashed') {
      $('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + +e.target.classList.item(1) + '">';
    } else if (e.target.classList.item(3) == 'outline' || 'outline-dashed') {
      $('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + e.target.classList.item(1) + e.target.classList.item(2)
      '">';
    } else {
      $('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + '>';
    }

    $('tooltip1').style.display = "block";
    //console.log('<' + e.target.tagName.toLowerCase() + '>');
    
  } */

  function mouseLeave(e) {
    //Remove outline on hover
    e.target.classList.remove("outline");
    //Tooltip hide
    $("tooltip1").style.display = "";
    //console.clear();
  }

  function dragOver(e) {
    //These two are really needed to remove the cut circle on iframe :)
    event.preventDefault();
    event.stopPropagation();

    //Add outline on hover
    e.target.classList.add("outline");

    //Tooltip show
    if (e.target.classList.item(0) == "outline") {
      $("tooltip1").textContent =
        "<" + e.target.tagName.toLowerCase() + ">";
    } else if (e.target.classList.item(1) == "outline" || "outline-dashed") {
      $("tooltip1").textContent =
        "<" +
        e.target.tagName.toLowerCase() +
        ' class="' +
        e.target.classList.item(0) +
        '">';
    } else if (e.target.classList.item(2) == "outline" || "outline-dashed") {
      $("tooltip1").textContent =
        "<" +
        e.target.tagName.toLowerCase() +
        ' class="' +
        e.target.classList.item(0) +
        +e.target.classList.item(1) +
        '">';
    } else if (e.target.classList.item(3) == "outline" || "outline-dashed") {
      $("tooltip1").textContent =
        "<" +
        e.target.tagName.toLowerCase() +
        ' class="' +
        e.target.classList.item(0) +
        e.target.classList.item(1) +
        e.target.classList.item(2);
      ('">');
    } else {
      $("tooltip1").textContent =
        "<" + e.target.tagName.toLowerCase() + ">";
    }

    $("tooltip1").style.display = "block";
    //console.log('<' + e.target.tagName.toLowerCase() + '>');
  }

  function dragLeave(e) {
    //Much needed on hover before drop to remove all those lines
    e.target.classList.remove("outline");

    $("tooltip1").style.display = "none";
    //console.log('<' + e.target.tagName.toLowerCase() + '>');
  }

  function onDragStart(e) {
    console.log("Drag Started!");
    e.dataTransfer.setData(
      "text/html",
      e.target.getAttribute("data-insert-html")
    );

    /*Remove menu on dragStart - doesn't work yet
    var menu = $('dd-menu');
    menu.classList.add('displayNoneSuper');
    */

    /*Drag image
    var img = new Image(); 
    img.src = './img/alerts.jpg'
      */
    //get data attribute on click :)
    //console.log(e.target.getAttribute('data-insert-html'));
  }

  function onDrop(e) {
    e.preventDefault();

    console.log("Drop event");

    // Remove placeholder

    var x = e.dataTransfer.getData(
      "text/html",
      e.target.getAttribute("data-insert-html")
    );
    var frag = document.createRange().createContextualFragment(x);

    //Here before appending, need to calculate if mouseover is closer to top or bottom, so it prepend( put before) or after,
    //Now it only puts it after :)
    e.target.appendChild(frag);

    //Much needed to remove the outline on drop finished <3
    e.target.classList.remove("outline");
    e.target.parentNode.parentNode.classList.remove("__placeholder"); //Works for now if only 2 parents (not ideal)

    //Much needed- Removes the div with ID <fr-cell> and all of it`s sub-content from the ELEMENT i click on only :)
    var item = clientFrameWindow.getElementById("fr-cell"); //Gets only the topmost fr-cell ID, in order of DOM (not ideal)
    e.target.removeChild(item);

    //console.log( x  + 'The data carried over'); console.log(frag);

    //var placeholder = clientFrameWindow.getElementById('fr-cell');
    //placeholder.remove();
    //if (tgt.classList.contains ) {

    //if (e.target.parentNode.classList.contains('__placeholder')){
    // e.target.parentNode.classList.remove('__placeholder') }

    //tgt.parentNode.removeChild(tgt);
    // or tgt.remove();
  }

  //carets stuff - Dropdown
  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("activel");
      this.classList.toggle("caret-down");
    });
  }
  //end of

  //$("muestra_abol").addEventListener("click", function() {  //Add the innerHTML in here, you can make it happen on button click });

  // end of it
});

/*  Add a new CSS Stylesheets
function addCss(fileName) {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

addCss('{my-url}');

*/

// Component Search - W3School Adapted https://www.w3schools.com/howto/howto_js_filter_lists.asp
function instantSearch() {
  //Passed
  var input, filter, ul, span, p, i, txtValue;

  //Passed
  input = $("myInput");
  filter = input.value.toUpperCase();
  ul = $("myUL");
  span = ul.getElementsByTagName("span");

  //Passed
  for (i = 0; i < span.length; i++) {
    p = span[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //span[i].style.display = "";
      span[i].parentNode.style.display = "";
      span[i].parentNode.parentNode.firstElementChild.style.display = "";
      span[i].parentNode.parentNode.style.display = "";
    } else {
      //span[i].style.display = "none";
      span[i].parentNode.style.display = "none";
      span[i].parentNode.parentNode.firstElementChild.style.display = "none";
      span[i].parentNode.parentNode.style.display = "none";
    }
  }
}

//Control Panel
function toggleEditIframe() {
  if (
    $("clientframe").contentWindow.document.body
    .contentEditable == "true"
  ) {
    $(
      "clientframe"
    ).contentWindow.document.body.contentEditable = false;

    //Snackbar notification
    $("snackbar").innerHTML = "IFrame Edit : OFF";
    var x = $("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 2000);
  } else {
    $(
      "clientframe"
    ).contentWindow.document.body.contentEditable = true;

    //Snackbar notification
    $("snackbar").innerHTML = "IFrame Edit : ON";
    var x = $("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 2000);
  }
}

function toggleOutlineAll() {
  //Toggle iFrame outline dashed elements
  var x = clientFrameWindow.body.querySelectorAll("*");
  var i;

  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("outline-dashed");
  }

  //Known bug _ adding new elements with outline on will not remove it when turning off.

  //Snackbar notifications toggle
  if (clientFrameWindow.body.classList.contains("outline-dashed")) {
    //Snackbar notification ON
    $("snackbar").innerHTML = "Outline: ON";
    var x = $("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 1000);
  } else {
    //Snackbar notification OFF
    $("snackbar").innerHTML = "Outline: OFF";
    var x = $("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 1000);
  }
}

function showClickedElIdClass(e) {
  // If click target's id is not empty
  if (e.target.id != "") {
    //alert('<' + e.target.tagName.toLowerCase() + ' id="' + e.target.id + '">');
    e.target.style.outline = "2px dashed red";
  } else {
    //alert('<' + e.target.tagName.toLowerCase() + '>');
    //e.target.style.outline = "none";
  }
}

//Create download file with iFrame HTML Code (gibMiData())
var storyPath = window.location.href;
console.API; // Clear console before logging new data
if (typeof console._commandLineAPI !== "undefined") {
  console.API = console._commandLineAPI; //chrome
} else if (typeof console._inspectorCommandLineAPI !== "undefined") {
  console.API = console._inspectorCommandLineAPI; //Safari
} else if (typeof console.clear !== "undefined") {
  console.API = console;
}

// Extracts high level details of current story
function gibMiData() {
  console.API.clear();
  storyObj = {};
  storyObj = $("clientframe").contentWindow.document
    .documentElement.outerHTML;
  console.save(storyObj);
}
console.save = function (data, filename) {
  if (!data) {
    console.error("Console.save: No data");
    return;
  }

  if (!filename) filename = "index.html";

  if (typeof data === "object") {
    data = JSON.stringify(data, undefined, 4);
  }

  var blob = new Blob([data], {
      type: "text/json"
    }),
    e = document.createEvent("MouseEvents"),
    a = document.createElement("a");

  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
  e.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  a.dispatchEvent(e);
};





// (1) - to be dropped

  //var ssObj;
  //if (clientFrameWindow.styleSheets[0].cssRules) {	ssObj = clientFrameWindow.styleSheets[0].cssRules;	}
  // for (var i = 0; i < ssObj.length; i++) {
  //  if (ssObj[i].selectorText == "#" + x.id) {
  //    ssObj[i].style.setProperty("width", $('myWidth').value, null);
  //   }}

// end of it
