import React from "react";
import ReactDOM from "react-dom/client";

//create an element and add content in it
let heading = React.createElement('h1', { id: 'ReactID', abc: 'xyz' }, 
    'Hello World using React and JavaScript'); //creating an element is core of React

//craete the root
let root = ReactDOM.createRoot(document.querySelector('#root'));  // it is job of ReactDOM
root.render(heading);


// {} this object is used to give attributes to our tag
// props are children and attributes
// heading => React Element ( javaScript Object)
// render method takes a javaScript Object ,converts into HTML tag and put it on browser as real DOM

