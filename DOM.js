// selects an element by using it's id 
// const element = document.getElementById('span-tag');
// console.log(element);

// selects an element by using their class name 
// const element = document.getElementsByClassName('box');
// console.log(element);

// const tagName = document.getElementsByTagName('div');
// console.log(tagName);

// selects element using css selector.  
// our query selector works accept parameter like same the way it use to get like css selector 

const element_1 = document.querySelector('.box');
const element_2 = document.querySelector('div.box1');

// 'querySelectorAll();' This method will return all matching element.
// 'querySelector' This method returns first matching element..

const element_3 = document.querySelectorAll("class*=['div-']");