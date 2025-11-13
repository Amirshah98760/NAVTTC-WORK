// let newDiv = document.createElement("div");
//  newDiv.innerText = "I am new!";
//  document.body.appendChild(newDiv);


// let container = document.getElementById('container');

// let child = document.createElement('p');
// child.innerText = 'Hello world';
// container.appendChild(child)

// console.log(container)

// let child = document.createElement("p");

// child.innerText = "Hello Every one today i am learning how to create element using dom";

// container.appendChild(child);

// Write JavaScript to create a <p> element with the text "Hello, DOM!" and append it to the <body>.

// let newElement = document.createElement('p');
// newElement.innerText = 'Hi i am learning dom';
// document.body.appendChild(newElement)
// console.log(newElement);

let newElement = document.createElement("div");
newElement.innerText = 'Hi kifayat is learning js dom ';

document.body.appendChild(newElement);

newElement.remove();
console.log(newElement);

newElement.innerText = 'Hi kifayat is learning js dom';


let input = document.getElementById('input');
let btn = document.getElementById('btn');
let demo = document.getElementById('demo');

btn.addEventListener('click', () => {
   let checking = document.createElement('li');
   checking.innerHTML = input.value;
   demo.appendChild(checking);
   input.value = ''; 
});
