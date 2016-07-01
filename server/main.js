import { Meteor } from 'meteor/meteor';

import { Random } from 'meteor/random';

import { Workers }   from '../imports/api/workers.js';
import { Employers } from '../imports/api/employers.js';
import { Contacts }  from '../imports/api/contacts.js';

import { PI } from '../imports/api/picf.js';
import { CF } from '../imports/api/picf.js';

Meteor.startup(function(){

  var address = "postmaster%40sandboxa730c2451c164a009a2f7c5a99d96168.mailgun.org";
  var password = "41672e866654e272657c8e900fe57331";
  process.env.MAIL_URL = "smtp://"+address+":"+password+"@smtp.mailgun.org:587";

  faker.locale = "it";

  // populate worker users/profiles
  if(Meteor.users.find({role: 'worker'}).count() < 200){
    _.each(_.range(25), function(){
      var email = faker.internet.email();
      var cf = CF.random();
      userId = Accounts.createUser({
        username: cf,
        password: 'password',
      });
      // This will have to be automatized using onCreateUser callback when in production
      workerId = Workers.insert({
        userId: userId,
        CF: cf,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: "000",
        email: email,
      });
      Meteor.users.update(userId, {
        $set: {
          role: 'worker',
          workerId: workerId
        }
      });
    });
  }

  // populate employers users/profiles
  if(Meteor.users.find({role: 'employer'}).count() < 10){
    _.each(_.range(10), function(){
      var email = faker.internet.email();
      var pi = PI.random();
      userId = Accounts.createUser({
        username: pi,
        password: 'password',
      });
      // This will have to be automatized using onCreateUser callback when in production
      employerId = Employers.insert({
        userId: userId,
        PI: pi,
        businessName: faker.company.companyName()
      });
      Meteor.users.update(userId, {
        $set: {
          role: 'employer',
          employerId: employerId
        }
      });
    });
  }

  // populate contacts
  if(Contacts.find().count() < 1){
    var emps = Employers.find().fetch();
    var wors = Workers.find().fetch();
    wors.forEach(function(w){
      _.each(_.sample(emps,4), function(e){
        Contacts.insert({
          workerId: w._id,
          employerId: e._id
        });
      });
    });

  }

});
