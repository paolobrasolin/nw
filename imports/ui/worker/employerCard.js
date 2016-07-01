//import { Meteor } from 'meteor/meteor';
//import { Template } from 'meteor/templating';

import { Contacts } from '../../api/contacts.js';
import { Employers } from '../../api/employers.js';
 
import './employerCard.html';

Template.employerCard.onCreated(function() {
  this.subscribe('contacts');
  this.subscribe('employers.single', FlowRouter.getParam('employerId'));
});

Template.employerCard.helpers({
  contact() {
    return Employers.findOne({ _id: FlowRouter.getParam('employerId') });
  },
  exists() {
    return Employers.findOne({ _id: FlowRouter.getParam('employerId') }) ? true : false;
  },
  known() {
    return Contacts.findOne({ employerId: FlowRouter.getParam('employerId') }) ? true : false;
  },
});
