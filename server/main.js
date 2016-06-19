import { Meteor } from 'meteor/meteor';

import '../imports/api/tasks.js';

import { Workers }   from '../imports/api/workers.js';
import { Employers } from '../imports/api/employers.js';

Meteor.startup(function(){

  faker.locale = "it";

  // populate users
  if(Meteor.users.find().count() < 25){
    _.each(_.range(25), function(){
      var randomEmail = faker.internet.email();
      var randomName = faker.name.findName();
      var userName = faker.internet.userName();
      Accounts.createUser({
        username: userName,
        profile: {
          name: randomName,
        },
        email: randomEmail,
        password: 'password'
      });
    });
  }

  // populate workers
  if(Workers.find().count() < 25){
    _.each(_.range(25), function(){
      Workers.insert({
        userId: "orphan",
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
      });
    });
  }

  // populate employers
  if(Employers.find().count() < 25){
    _.each(_.range(25), function(){
      Employers.insert({
        userId: "orphan",
        businessName: faker.company.companyName()
      });
    });
  }

});
