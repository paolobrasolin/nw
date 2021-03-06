//import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';
//
//import './main.html';
//
//Template.hello.onCreated(function helloOnCreated() {
//  // counter starts at 0
//  this.counter = new ReactiveVar(0);
//});
//
//Template.hello.helpers({
//  counter() {
//    return Template.instance().counter.get();
//  },
//});
//
//Template.hello.events({
//  'click button'(event, instance) {
//    // increment the counter when button is clicked
//    instance.counter.set(instance.counter.get() + 1);
//  },
//});

// useraccounts configuration must be loaded before the routes of useraccounts:flow-routing

T9n.setLanguage("it")



import '../imports/at_config.js';

import '../imports/routes.js';

import '../imports/ui/worker/app.js';
import '../imports/ui/employer/app.js';
