import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import './main.css';

Template.header.rendered = function () {
    document.getElementById("defaultOpen").click();
};



Template.header.events({
  'click button.tablink'(e) {

    var div_img = document.getElementById("set_img");

    var cityName =e.currentTarget.getAttribute('cityName');
    var color = e.currentTarget.getAttribute('color');
    var cityBg = e.currentTarget.getAttribute('cityBg');
    var img = e.currentTarget.getAttribute('data-img');

     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablink");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].style.backgroundColor = "";
     }
     document.getElementById(cityName).style.display = "block";
     e.currentTarget.style.backgroundColor = color;
    //  d.className += img;
    div_img.removeAttribute('class');
    div_img.classList.add(img);



  },
});

//
// Template.bg.rendered = function () {
//     document.getElementById("default").click();
// };
//
//
//
// Template.bg.events({
//   'click button.tablink'(e) {
//
//     var cityName =e.currentTarget.getAttribute('cityName');
//     var color = e.currentTarget.getAttribute('color');
//
//      var i, bgcontent, tablinks;
//       bgcontent = document.getElementsByClassName("bgcontent");
//
//      for (i = 0; i < bgcontent.length; i++) {
//          bgcontent[i].style.display = "none";
//      }
//      tablinks = document.getElementsByClassName("tablink");
//      for (i = 0; i < tablinks.length; i++) {
//          tablinks[i].style.backgroundColor = "";
//      }
//      document.getElementById(cityName).style.display = "block";
//      e.currentTarget.style.backgroundColor = color;
//
//   },
// });
