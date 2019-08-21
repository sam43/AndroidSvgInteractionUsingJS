// One By One in case you only have one svg element.

// document.getElementById('Apple Pie').addEventListener('click', function (event) {
//   console.log(event.target.id);
// }, false);

//
window.androidObj = function AndroidClass(){};
var textContainer = document.createElement("p");
var nativeText = document.createTextNode("Android Text");
textContainer.appendChild(nativeText);

document.addEventListener("click", doSomething);

function doSomething(e) {
  if (e.target !== e.currentTarget) {
    var clickedItem = e.target.id;
    var clickedSvgPath = document.getElementById(clickedItem);
    //document.getElementById(clickedItem).fill = '#000'
    //var svg_css = document.getElementsByClassName('.st0');
    //svg_css.style.fill = "red" style="fill:#800000"
    switch (clickedItem) {
      case "table1":
            clickedSvgPath.classList.toggle("selected");
        break;
      case "table2":
            clickedSvgPath.classList.toggle("selected");
        break;
      case "table3":
            clickedSvgPath.classList.toggle("selected");
        break;
      case "table4":
            clickedSvgPath.classList.toggle("selected");
        break;
      case "table5":
            clickedSvgPath.classList.toggle("selected");
        break;
      case "table6":
            clickedSvgPath.classList.toggle("selected");
        break;
      default:
        document.getElementById('l_value').innerHTML = "Please choose a table";
    }
    // console log tells you what you are clicking
    console.log("Hello " + clickedItem);
    window.androidObj.textToAndroid(clickedItem);
    //document.getElementById('l_value').innerHTML = clickedItem;
  }
  e.stopPropagation();
}

function updateFromAndroid(message){
    document.getElementById('l_value').innerHTML = message;
}

// Further Reading:
// https://www.kirupa.com/html5/handling_events_for_many_elements.htm