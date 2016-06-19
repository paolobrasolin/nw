import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './nav.html';
 
Template.nav.onRendered(function () {
  $('.button-collapse').sideNav({
  });
});
 
