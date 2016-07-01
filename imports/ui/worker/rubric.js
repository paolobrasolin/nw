//import { Meteor } from 'meteor/meteor';
//import { Template } from 'meteor/templating';

//import { Contacts } from '../../api/contacts.js';

import { Employers } from '../../api/employers.js';
 
import './rubric.html';

Template.rubric.onCreated(function() {
  this.subscribe('employers.known');
});

Template.rubric.helpers({
  contacts() {
    return Employers.find({});//{ userId: Meteor.userId() });
  },
});
