import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './nav.html';
 
Template.Worker_Nav.onRendered(function () {
  $('.button-collapse').sideNav({
  });
});
 
