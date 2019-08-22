window.androidObj = function AndroidClass(){};
var selectedlist = [];
var query = '*[id^="table"]';
var tablePathList = document.querySelectorAll(query);

console.log("q: " + tablePathList.length);

document.addEventListener("click", doSomething);

function doSomething(e) {
  if (e.target !== e.currentTarget) {
    var clickedItem = e.target.id;
    var item;
    for (item = 0; item < tablePathList.length; item++) {
        if (clickedItem === tablePathList[item].id) {
            var clickedSvgPath = document.getElementById(clickedItem);
            clickedSvgPath.classList.toggle("selected");
            if (!selectedlist.includes(clickedItem)) {
                console.log("item: " + clickedItem);
                selectedlist.push(clickedItem);
            } else {
                var index = selectedlist.indexOf(clickedItem);
                if (index > -1) {
                    selectedlist.splice(index, 1);
                }
                console.log("removedList: " + selectedlist);
            }
            console.log("itemNewList: " + selectedlist);
            //window.androidObj.listToAndroid(selectedlist.);
            window.androidObj.textToAndroid(selectedlist.join(','));
        }
    }

    // console log tells you what you are clicking
    console.log("Hello " + clickedItem);
    window.androidObj.a2And("a2And" + clickedItem);
    //document.getElementById('l_value').innerHTML = clickedItem;
  }
  e.stopPropagation();
}

function updateFromAndroid(message){
    document.getElementById('l_value').innerHTML = message;
}

// Further Reading:
// https://www.kirupa.com/html5/handling_events_for_many_elements.htm