const newHeader = document.createElement("header");
const navhtml =
    '<h2><a href="index.html">Kuro_kitten Backyard</a></h2>'
    + '<nav>'
    + '<div><a href="index.html">Home</a></div>'
    + '<div><a href="work.html">Work</a></div>'
    + '<div><a href="contact.html">Contact</a></div>'
    + '</nav>';
navhtml.trim();
newHeader.innerHTML = navhtml;
document.getElementById("nav").appendChild(newHeader);

const newFooter = document.createElement("footer");
const footerhtml = '<p>Kuro_kitten &copy;Copyright 2023</p>';
footerhtml.trim();
newFooter.innerHTML = footerhtml;
document.getElementById("footer").appendChild(newFooter);