// Sanity Check
console.log("app.js linked.");


// Website Navigation Functionality
var changeToHome = function(){
  $("#head").text('Welcome!');
  $("#text").text(`Hi!  My name is Will Kaspar.  I'm currently a Web Development Immersive student at General Assembly in San Francisco, California.
  Before I was a web dev student, I worked as an organic gardener and an elementary school teacher.  Once I graduate, I'm very interested in working in tech education,
  non-profit tech, or possibly game development.  Welcome to my website.  Please, feel free to look through my projects at your leisure.  Any questions, comments, or
  concerns can be resolved through the 'Contact' tab.`);
  $("#main-btn").show();
}
var changeToWebDev = function(){
  $("#head").text('Web Development');
  $("#text").empty();
  $("#main-btn").hide();
  $("#text").text('Here are some of my projects from GA\'s WDI class.');

  var arr = [];

  for (var i=0; i<data.length; i++){
    var project = data[i];
    var item = ("<li>"+project.pic+project.name+" - "+"<small>"+project.description+"</small>"+" - "+
                project.link+"</li>");
    arr.push(item);
  }
  for (var i=0; i<arr.length; i++){
    $("#text").append(arr[i]);
    console.log(i);
  }
}
var changeToArt = function(){
  $("#head").text('Artwork');
  $("#text").text('CHANGED TO ART Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..');
}
var changeToAgri = function(){
  $("#head").text('Agriculture');
  $("#text").text('CHANGED TO AGRI Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..');
}
var changeToContact = function(){
  $("#head").text('Reach Out');
  $("#text").empty();
  $("#main-btn").hide();
  $("#text").text(`Here's all my contact information:`);
  $("#text").append("<li>"+"Email"+" : "+`<a href="#">wakaspar@gmail.com</a>`+"</li>");
  $("#text").append("<li>"+`<a href="https://github.com/wakaspar">GitHub</a>`+"</li>");
  $("#text").append("<li>"+`<a href="https://www.facebook.com/willkaspar">Facebook</a>`+"</li>");
  $("#text").append("<li>"+`<a href="https://www.instagram.com/kasparthefriendlyghost">Instagram</a>`+"</li>");
}


// Main Panel Button
document.getElementById('main-btn').addEventListener('click', changeToWebDev);


// NavBar Buttons
document.getElementById('nav-home').addEventListener('click', changeToHome);
document.getElementById('nav-dev').addEventListener('click', changeToWebDev);
document.getElementById('nav-art').addEventListener('click', changeToArt);
document.getElementById('nav-agri').addEventListener('click', changeToAgri);
document.getElementById('nav-contact').addEventListener('click', changeToContact);


// GitHub Project Data Object
var data = [
  {
    "name":"Functions & Flagons",
    "pic":"<img src='assets/imgs/js.jpg' alt='whoops!'>",
    "description":"JavaScript COYA Game; June 2017",
    "link":"<a href='https://github.com/wakaspar/Functions-Flagons'>link</a>"
  },
  {
    "name":"GA Memory Game",
    "pic":"<img src='assets/imgs/js.jpg' alt='whoops!'>",
    "description":"GA Fundamentals Memory Game; Jan.2017",
    "link":"<a href='https://github.com/wakaspar/wdi-fundamentals-memorygame/tree/master/starter-code'>link</a>"
  },
  {
    "name":"Empire Inc.",
    "pic":"<img src='assets/imgs/vader.png' alt='whoops!'>",
    "description":"Star Wars mock-up website; 1/27/17",
    "link":"<a href='https://github.com/wakaspar/Empire-Incorporated'>link</a>"
  }
];
