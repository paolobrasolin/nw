import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
import './mail.js';

import { Contacts } from './contacts.js';

// =============================================================== COLLECTION ==

export const Workers = new Mongo.Collection('workers');

// =================================================================== SCHEMA ==

Workers.schema = new SimpleSchema({
  CF: {type: String},
  firstName: {type: String},
  lastName: {type: String},
  phone: {type: String},
  email: {type: String, regEx: SimpleSchema.RegEx.Email},
});

Workers.attachSchema(Workers.schema);

// ============================================================= PUBLICATIONS ==

if (Meteor.isServer) {

  Meteor.publish('workers.known', function() {
    var user = Meteor.users.findOne( { _id: this.userId } );
    var cons = Contacts.find( { employerId: user.employerId } );
    var workerIds = cons.map(function (e) { return e.workerId; });
    return Workers.find(
      { _id: { "$in": workerIds } },
      { fields: { userId: 0 } }
    );
    // specify returned fields here for security
  });

  Meteor.publish('workers.single', function(workerId) {
    new SimpleSchema({
      workerId: {type: String},
    }).validate({ workerId });
    return Workers.find(
      { _id: workerId },
    );
    // specify returned fields here for security
  });

  Meteor.publish('workers.profile', function() {
    return Workers.find({});//({userID: this.userId});
    // specify returned fields here for security
  });

}

// ================================================================== METHODS ==

Meteor.methods({


  'workers.upsert'({firstName, lastName, email}) {
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Workers.upsert(
      { userId: Meteor.userId() },
      { $set: {
        userId: Meteor.userId(),
        firstName: firstName,
        lastName: lastName,
        email: email,
      }}
    );
  },


  'workers.add'({CF, firstName, lastName, phone, email}) {

    var pwd = faker.internet.password();

    Accounts.createUser({
      username: CF,
      password: pwd,
    });

    Workers.insert({
      CF: CF,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
    });

    var mail = {
      to: firstName+" "+lastName+" <"+email+">",
      from: "Mail bot di NeedWaiter <mailbot@needwaiter.it>",
      subject: "Benvenuto in Needwaiter!",
      text: "Ciao "+firstName+". Hai un account!\nUsername: "+CF+"\nPassword: "+password
    };

    Meteor.call('mail.send',mail);

  },


});

