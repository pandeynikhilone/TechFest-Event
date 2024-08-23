
// event bubbling 

// document.querySelector(".parent").addEventListener("click", function() {
//     console.log("Event Bubbling class: parent");
//     alert("Event Bubbling class: parent");
// }, false); // false for event bubbling

// document.querySelector(".child").addEventListener("click", function() {
//     console.log("Event Bubbling class: child");
//     alert("Event Bubbling class: child");
// }, false); // false for event bubbling

// document.querySelector(".grandchild").addEventListener("click", function() {
//     console.log("Event Bubbling class: grandchild");
//     alert("Event Bubbling class: grandchild");
// }, false); // false for event bubbling

// event capturing 

document.querySelector(".parent").addEventListener("click", function() {
    console.log("Event Bubbling class: parent");
    alert("Event Bubbling class: parent");
}, true); 

document.querySelector(".child").addEventListener("click", function() {
    console.log("Event Bubbling class: child");
    alert("Event Bubbling class: child");
}, true); 

document.querySelector(".grandchild").addEventListener("click", function() {
    console.log("Event Bubbling class: grandchild");
    alert("Event Bubbling class: grandchild");
}, true); 