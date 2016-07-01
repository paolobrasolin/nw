//import { Meteor } from 'meteor/meteor';
//import { Template } from 'meteor/templating';

import { Contacts } from '../../../api/contacts.js';
import { Workers } from '../../../api/workers.js';
 
import './card.html';

Template.Employer_Rubric_Card.onCreated(function() {
  this.subscribe('contacts');
  this.subscribe('workers.single', FlowRouter.getParam('workerId'));
});

Template.Employer_Rubric_Card.helpers({
  contact() {
    return Workers.findOne({ _id: FlowRouter.getParam('workerId') });
  },
  exists() {
    return Workers.findOne({ _id: FlowRouter.getParam('workerId') }) ? true : false;
  },
  known() {
    return Contacts.findOne({ workerId: FlowRouter.getParam('workerId') }) ? true : false;
  },
});
