//Written by me - DO NOT delete
var clientFrameWindow = document.getElementById('clientframe').contentWindow.document;
//var placeholders = clientFrameWindow.getElementsByClassName('__placeholder');
var droppables = document.getElementById("sidebar_menu");


function toggle_iframe_wh(){
  var diviframe =  document.getElementById('iframe_live_wh');
  //Document's width and height
  var wd = document.getElementById('clientframe').clientWidth; //the entire iFrame on CodePen
  var wh = document.getElementById('clientframe').clientHeight;   

  // put the result into a h1 tag
  diviframe.innerHTML =  wd + " x " + wh ;
  diviframe.classList.toggle('displayNoneSuper');
}

//Toggles Preview On/Of via ` 
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 192) { //192 is `

    nav = document.getElementById('myNav');
    col2 = document.getElementById('column2');

 
    col1.classList.toggle('displayNoneSuper');
    col2.classList.toggle('fullheight');
    col3.classList.toggle('displayNoneSuper');
    nav.classList.toggle('displayNoneSuper');
    clientFrameWindow.body.classList.toggle('preview_class101');
    document.getElementById('resize_bar').classList.toggle("displayNoneSuper");
    document.getElementById('resize_bar2').classList.toggle("displayNoneSuper");
    frame.classList.remove('s320', "s480", "s768", "s1366", "s1920");

    //Toggling from Preview to Edit with no visual bugs, yay!
    col2.classList.toggle("unshrinkCol2");
    
    toggle_iframe_wh();


  }
});

clientFrameWindow.addEventListener("keydown", function (event) {
  if (event.keyCode == 192) {
    nav = document.getElementById('myNav');
    col2 = document.getElementById('column2');

    col1.classList.toggle('displayNoneSuper');
    col2.classList.toggle('fullheight');
    col3.classList.toggle('displayNoneSuper');
    nav.classList.toggle('displayNoneSuper');
    clientFrameWindow.body.classList.toggle('preview_class101');
    document.getElementById('resize_bar').classList.toggle("displayNoneSuper");
    document.getElementById('resize_bar2').classList.toggle("displayNoneSuper");
    frame.classList.remove('s320', "s480", "s768", "s1366", "s1920");

    col2.classList.toggle("unshrinkCol2");

    toggle_iframe_wh();
  }
});

//If not doing on iFrame load, the addEventListeners will crash sometimes - Multiple AddEventListeners
function onLoadiframe() {

  //Listeners

  //clientFrameWindow.body.addEventListener('mouseover', mouseEnter);

  clientFrameWindow.body.addEventListener('mouseout', mouseLeave, false);
  clientFrameWindow.body.addEventListener('dragover', dragOver, false);
  clientFrameWindow.body.addEventListener('dragleave', dragLeave, false);
  clientFrameWindow.body.addEventListener('drop', onDrop, false);
  droppables.addEventListener("dragstart", onDragStart, false);

  /*Image Upload ( only changes src for now)*/

  //For "img src change on double click on newly dropped elements in iFrame" we need :
  //1. dblclick event listener on the whole iFrame(or if you want, on a specific part/div)
  //2. the function which checks whether the double clicked element has the id given to img elements

  //Dblclick on img tag to change image
  clientFrameWindow.body.addEventListener('dblclick', dblClick, false);

  function dblClick() {
    // (event.srcElement.id == '__upload') for specific ID
    if (event.srcElement.nodeName == 'IMG') {
      //Change src event.srcElement is the same with event.target
      event.srcElement.src = "https://picsum.photos/200/300";
      //console.log(event.srcElement);

      //Remove placeholder of img
      event.srcElement.classList.remove("__placeholder");

      //need to remvoe placeholder of topmost parent ( topmost div container __placeholder)
      event.srcElement.parentNode.parentNode.parentNode.classList.remove("__placeholder");

      //Removes class="" if empty, so on code download you don't have it :)
      if (event.srcElement.className == "")
        event.srcElement.removeAttribute('class');
    };
  }


  // Outline on click + show nodeName badge
  clientFrameWindow.addEventListener("click", function (event) {
    let list = clientFrameWindow.querySelectorAll('*'); // Grab all the li elements

    for (let i = 0; i < list.length; i++) {
      if (event.target === list[i]) { // if my click target is the same as list item it goes through

        console.log(event.target.nodeName); //check console for what you click
        var element = event.target;
        var positionInfo = element.getBoundingClientRect();
        var height = positionInfo.height;
        var width = positionInfo.width;
        var wxh = width + "x" + height;


        /* update w & h on resize - NOT WORKING YET
        clientFrameWindow.addEventListener('resize', onResizeTarget, false);

        function onResizeTarget() {
          renderedWidth.innerHTML = (event.target.clientWidth) +"px"; //writes width
          renderedHeight.innerHTML = (event.target.clientHeight) +"px"; //writes height
        } */ 

        var badge = clientFrameWindow.getElementById('tar_nodeName');
        badge.classList.add("show"); // Shows the badge
        //Need to write some checks here, if it has id, if it has classes
        if (event.target.id != "" && event.target.classList != "" ){
        badge.innerHTML = (event.target.nodeName  + "#" + event.target.id  + "." + event.target.classList + wxh); //writes tarNodename into my div 
        } else if (event.target.id != "" && event.target.classList == "" ) {
          badge.innerHTML = (event.target.nodeName  + "#" + event.target.id + + width + 'x' + wxh ); 
        } else if (event.target.id =="" && event.target.classList != "" ) {
          badge.innerHTML = (event.target.nodeName  +  "." + event.target.classList + '&nbsp &nbsp <span class=".faded_m">'+ wxh + '</span>'); 
        } else {
          badge.innerHTML = (event.target.nodeName + '&nbsp &nbsp <span class=".faded_m">' + wxh + '</span>');
        }

     

        //If element selected
        var renderedWidth = document.getElementById('renderedWidth');
        renderedWidth.innerHTML = (event.target.clientWidth) +"px"; //writes width

        var renderedHeight = document.getElementById('renderedHeight');
        renderedHeight.innerHTML = (event.target.clientHeight) +"px"; //writes width


        // else
        //Show Select an Element

        //This is the column3 magic part - Must add things directly as a class, inside CSS file

          // Would be best if it selected event.target. parent.parent.parent className or id to write things like
          // .myThing ul li a {} instead of creating new classes, to write css most human readable possible
          // Extra: If you then add another a, it will share the styling without doing anyhing!

          //event.target.style.width = '500px'; // then make it set the input from field

          //STEPS 
          // 1. Read its  Width and height and write them under Rendered as ;)
        
        //End of it

        //Adds it as first child
        event.target.parentNode.insertBefore(badge, event.target); // before clicked element
        //event.target.parentNode.insertBefore(badge, event.target.nextSibling) // after clicked element

        /*Move it to cursor
          var x = event.clientX;
          var y = event.clientY;
          badge.style.left = `${x}px`;
          badge.style.top = `${y}px`; */

        if (event.target.classList !== 'active__u') { //if target doesn't have active on it
          event.target.classList.add('active__u'); //add it
        } else {
          //event.target.classList.remove("active"); //to be able to remove it on a second click
          event.target.className != 'active__u'; //to not be able to
        }
      } else {
        list[i].classList.remove("active__u");
      }
    }
  })






  /*WORKS
    clientFrameWindow.body.addEventListener('click', classToggle, false);

    function classToggle () {
      event.srcElement.classList.toggle("__selector1");

      if (event.srcElement.className == "")
      event.srcElement.removeAttribute('class');
    }

  */






  /* TEMPORARY SHUT DOWN
  function mouseEnter(e) {
    
    //Add outline on hover
    e.target.classList.add('outline');

    //Tooltip show (redo)
    if (e.target.classList.item(0) == 'outline') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + '>';
    } else if (e.target.classList.item(1) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + '">';
    } else if (e.target.classList.item(2) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + +e.target.classList.item(1) + '">';
    } else if (e.target.classList.item(3) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + e.target.classList.item(1) + e.target.classList.item(2)
      '">';
    } else {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + '>';
    }

    document.getElementById('tooltip1').style.display = "block";
    //console.log('<' + e.target.tagName.toLowerCase() + '>');
    
  }*/

  /*New Adittion - NOT WORKING
    
      var myPlaceholder = function() {
        var attribute = this.getAttribute("data-myattribute");
        alert(attribute);
    };

    for (var i = 0; i < placeholders.length; i++) {
      placeholders[i].addEventListener('click', myPlaceholder, false);
    }
  */

  function mouseLeave(e) {
    //Remove outline on hover
    e.target.classList.remove('outline');
    //Tooltip hide
    document.getElementById('tooltip1').style.display = "";
    //console.clear();
  }

  function dragOver(e) {
    //These two are really needed to remove the cut circle on iframe :)
    event.preventDefault();
    event.stopPropagation();

    //Add outline on hover
    e.target.classList.add('outline');

    //Tooltip show
    if (e.target.classList.item(0) == 'outline') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + '>';
    } else if (e.target.classList.item(1) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + '">';
    } else if (e.target.classList.item(2) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + +e.target.classList.item(1) + '">';
    } else if (e.target.classList.item(3) == 'outline' || 'outline-dashed') {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + ' class="' + e.target.classList.item(0) + e.target.classList.item(1) + e.target.classList.item(2)
      '">';
    } else {
      document.getElementById('tooltip1').textContent = '<' + e.target.tagName.toLowerCase() + '>';
    }

    document.getElementById('tooltip1').style.display = "block";
    //console.log('<' + e.target.tagName.toLowerCase() + '>');
  }

  function dragLeave(e) {
    //Much needed on hover before drop to remove all those lines
    e.target.classList.remove('outline');

    document.getElementById('tooltip1').style.display = "none";
    //console.log('<' + e.target.tagName.toLowerCase() + '>');
  }

  function onDragStart(e) {

    console.log("Drag Started!");
    e.dataTransfer.setData("text/html", e.target.getAttribute('data-insert-html'));


    /*Remove menu on dragStart - doesn't work yet
    var menu = document.getElementById('dd-menu');
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

    console.log('Drop event');

    // Remove placeholder

    var x = e.dataTransfer.getData("text/html", e.target.getAttribute('data-insert-html'));
    var frag = document.createRange().createContextualFragment(x);

    //Here before appending, need to calculate if mouseover is closer to top or bottom, so it prepend( put before) or after,
    //Now it only puts it after :)
    e.target.appendChild(frag);

    //Much needed to remove the outline on drop finished <3
    e.target.classList.remove('outline');
    e.target.parentNode.parentNode.classList.remove('__placeholder'); //Works for now if only 2 parents (not ideal)

    //Much needed- Removes the div with ID <fr-cell> and all of it`s sub-content from the ELEMENT i click on only :)
    var item = clientFrameWindow.getElementById('fr-cell'); //Gets only the topmost fr-cell ID, in order of DOM (not ideal)
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

  //17/9/2019 - Dom Tree Visualization -  MAKE FUNCTION - my version - works
  var nodeTree = getNodeTree(clientFrameWindow.body);
  console.log(nodeTree);


  function getNodeTree(node) {
    if (node.hasChildNodes()) {
      var children = [];
      for (var j = 0; j < node.childNodes.length; j++) {
        children.push(getNodeTree(node.childNodes[j]));
      }

      return {
        nodeName: node.nodeName,
        children: children,
        //parentName: node.parentNode.nodeName,
        //content: node.innerText || "",
      };
    }

    return false;
  }

  function muestraArbol(node) {
    if (!node) return "";

    var txt = "";

    if (node.children.length > 0) {
      //if(node.nodeName != "SCRIPT"){
      var string = "";
      string = node.nodeName; // you can do below inside caret just string 

      txt += '<span class="caret">' + string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() + '</span>';

      //txt += "<li> Padre: " + node.parentName + "</li>";
      //txt += "<li>Contenido: " + node.content + "</li>";
      for (var i = 0; i < node.children.length; i++)
        if (node.children[i])
          txt += "<ul class='nested'>" + muestraArbol(node.children[i]) + "</ul>";

      //}
    }

    return txt;
  }
  document.getElementById("result").innerHTML = muestraArbol(nodeTree);



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

  //document.getElementById("muestra_abol").addEventListener("click", function() {  //Add the innerHTML in here, you can make it happen on button click });

  // end of it 




};


function getSize() {
  //Document's width and height
  var wd = document.getElementById('clientframe').clientWidth; //the entire iFrame on CodePen
  var wh = document.getElementById('clientframe').clientHeight;   

  // put the result into a h1 tag
   document.getElementById('iframe_live_wh').innerHTML =  wd + " x " + wh ;

//var w = document.getElementById('wh').clientWidth;
//var h = document.getElementById('wh').clientHeight;
 //document.getElementById('wh').innerHTML = "This gray DIv has: <h1>Width: " + w + " Height: " + h + "</h1>";
}




// Component Search - W3School Adapted https://www.w3schools.com/howto/howto_js_filter_lists.asp
function instantSearch() {
  //Passed
  var input, filter, ul, span, p, i, txtValue;

  //Passed
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
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
};

//Control Panel
function toggleEditIframe() {

  if (document.getElementById('clientframe').contentWindow.document.body.contentEditable == "true") {

    document.getElementById('clientframe').contentWindow.document.body.contentEditable = false;

    //Snackbar notification
    document.getElementById("snackbar").innerHTML = "IFrame Edit : OFF";
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 2000);

  } else {
    document.getElementById('clientframe').contentWindow.document.body.contentEditable = true;

    //Snackbar notification
    document.getElementById("snackbar").innerHTML = "IFrame Edit : ON";
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 2000);

  }

}

function toggleOutlineAll() {
  //Toggle iFrame outline dashed elements
  var x = clientFrameWindow.body.querySelectorAll('*');
  var i;

  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("outline-dashed");
  }

  //Known bug _ adding new elements with outline on will not remove it when turning off.

  //Snackbar notifications toggle
  if (clientFrameWindow.body.classList.contains("outline-dashed")) {
    //Snackbar notification ON
    document.getElementById("snackbar").innerHTML = "Outline: ON";
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 1000);
  } else {
    //Snackbar notification OFF
    document.getElementById("snackbar").innerHTML = "Outline: OFF";
    var x = document.getElementById("snackbar")
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
if (typeof console._commandLineAPI !== 'undefined') {
  console.API = console._commandLineAPI; //chrome
} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
  console.API = console._inspectorCommandLineAPI; //Safari
} else if (typeof console.clear !== 'undefined') {
  console.API = console;
}

// Extracts high level details of current story
function gibMiData() {

  console.API.clear();
  storyObj = {};
  storyObj = document.getElementById("clientframe").contentWindow.document.documentElement.outerHTML;
  console.save(storyObj);

}
console.save = function (data, filename) {
  if (!data) {
    console.error('Console.save: No data')
    return;
  }

  if (!filename) filename = 'index.html'

  if (typeof data === "object") {
    data = JSON.stringify(data, undefined, 4)
  }

  var blob = new Blob([data], {
      type: 'text/json'
    }),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a')

  a.download = filename
  a.href = window.URL.createObjectURL(blob)
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
  e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  a.dispatchEvent(e)
}

/*Full iFrame code to console- works

  function copyHtml() {
    var myHTML = document.getElementById("clientframe").contentWindow.document.documentElement.outerHTML;
    console.log(myHTML);
  }
*/