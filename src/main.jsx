var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/nav/NavBar.jsx');

var NavLinks = [
  {
    title: "Home",
    href: "#"
  },
  {
    title:"About Me",
    href:"#"
  },
  {
    title:"Contact",
    href:"#"
  }

];

ReactDOM.render(<NavBar bgColor="blue" titleColor="white" linkColor="pink" navData={NavLinks}/>, document.getElementById('nav'));
