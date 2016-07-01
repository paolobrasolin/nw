import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './nav.html';
 
Template.Employer_Nav.onRendered(function () {
  $('.button-collapse').sideNav({
  });
});
 
