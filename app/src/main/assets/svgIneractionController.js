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
    clickedSvgPath.classList.toggle("selected");

    window.androidObj.textToAndroid(clickedItem);
    //document.getElementById(clickedItem).fill = '#000'
    //var svg_css = document.getElementsByClassName('.st0');
    //svg_css.style.fill = "red" style="fill:#800000"
    switch (clickedItem) {
      case "table1":
           nativeText.textContent = "I get by with a bite of Apple Pie";
        break;
      case "table2":
           nativeText.textContent = "Very Berry Constabulary"
        break;
      case "table3":
          nativeText.textContent = "Chocolate pie in my pocket...like a rocket"
        break;
      case "table4":
          nativeText.textContent = "table pie in my pocket...like a rocket"
        break;
      default:
        nativeText.textContent = "default"
    }
    // console log tells you what you are clicking
    console.log("Hello " + clickedItem);
  }
  e.stopPropagation();
}

function updateFromAndroid(message){
    document.getElementById('l_value').innerHTML = message;
}
// Further Reading:
// https://www.kirupa.com/html5/handling_events_for_many_elements.htm