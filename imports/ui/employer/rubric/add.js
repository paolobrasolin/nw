import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { isValidCF } from '../../../api/workers.js';
 
import './add.html';

//Template.profile.onCreated(function() {
//  this.subscribe('workers.profile');
//});
//
//Template.profile.onRendered(function() {
//  // This seems to be buggy
//  Materialize.updateTextFields();
//});

Template.Employer_Rubric_Add.events({
  'change #CF'(event) {
    event.target.setCustomValidity(
      isValidCF(event.target.value)?"":"Codice fiscale non valido");
    // Prevent default browser form submit
//    event.preventDefault();
//    const e = event.target.elements;
//    Meteor.call('workers.upsert', {
//      firstName: e.firstName.value,
//      lastName: e.lastName.value,
//      email: e.email.value
//    });
  },
  'submit form' (event){
    event.preventDefault();
    var t = event.target;
    Meteor.call('workers.add', {
      CF: t.CF.value,
      firstName: t.firstName.value,
      lastName: t.lastName.value,
      phone: t.phone.value,
      email: t.email.value,
    });
  },
});

Template.Employer_Rubric_Add.helpers({
  ownProfile() {
    return Workers.findOne({ userId: Meteor.userId() });
  },
});



