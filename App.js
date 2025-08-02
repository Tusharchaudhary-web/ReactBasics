import React from "react";
import ReactDOM from "react-dom/client";

let heading=React.createElement('h1',{id:'head'},'Hello world using React');

let root=ReactDOM.createRoot(document.querySelector('.root'));

root.render(heading);