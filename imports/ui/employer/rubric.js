//import { Meteor } from 'meteor/meteor';
//import { Template } from 'meteor/templating';

//import { Contacts } from '../../api/contacts.js';

//import { Employers } from '../../api/employers.js';
import { Workers } from '../../api/workers.js';
 
import './rubric.html';

Template.Employer_Rubric.onCreated(function() {
  this.subscribe('workers.known');
  console.log(Workers.find({}).fetch());
});

Template.Employer_Rubric.helpers({
  contacts() {
    return Workers.find({});//{ userId: Meteor.userId() });
  },
  randomAvatar() {
    return "https://unsplash.it/200/300/?random&seed="+Math.random();
  },
});
