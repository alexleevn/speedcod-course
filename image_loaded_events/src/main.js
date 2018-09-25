import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

import Gallery from './gallery';

let urls = [
  './images/cat1.jpeg',
  './images/cat2.jpeg',
  './images/cat3.jpeg'
]


// ReactDOM.render(<div>Hello</div>, document.getElementById('mount'))

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Gallery imageUrls={urls} />,
    document.getElementById("mount")
  );
});
