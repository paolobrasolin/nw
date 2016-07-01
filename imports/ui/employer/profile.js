import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Workers } from '../../api/workers.js';
 
import './profile.html';

Template.profile.onCreated(function() {
  this.subscribe('workers.profile');
});

Template.profile.onRendered(function() {
  // This seems to be buggy
  Materialize.updateTextFields();
});

Template.profile.events({
  'submit form'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    const e = event.target.elements;
    Meteor.call('workers.upsert', {
      firstName: e.firstName.value,
      lastName: e.lastName.value,
      email: e.email.value
    });
  },
});

Template.profile.helpers({
  ownProfile() {
    return Workers.findOne({ userId: Meteor.userId() });
  },
});



