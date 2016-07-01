import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
import { Contacts } from './contacts.js';

// =============================================================== COLLECTION ==

export const Employers = new Mongo.Collection('employers');

// =================================================================== SCHEMA ==

Employers.schema = new SimpleSchema({
  userId: {type: String},
  PI: {type: String},
  businessName: {type: String},
});

Employers.attachSchema(Employers.schema);

// ============================================================= PUBLICATIONS ==

if (Meteor.isServer) {


  Meteor.publish('employers.known', function() {
    var user = Meteor.users.findOne( { _id: this.userId } );
    var cons = Contacts.find( { workerId: user.workerId } );
    var employerIds = cons.map(function (e) { return e.employerId; });
    return Employers.find(
      { _id: { "$in": employerIds } },
      { fields: { userId: 0 } }
    );
  });


  Meteor.publish('employers.single', function(employerId) {
    new SimpleSchema({
      employerId: {type: String},
    }).validate({ employerId });
    return Employers.find(
      { _id: employerId },
    );
  });


};

// ================================================================== METHODS ==

Meteor.methods({


//  'workers.upsert'({businessName, lastName, email}) {
//    if (! Meteor.userId()) {
//      throw new Meteor.Error('not-authorized');
//    }
// 
//    Workers.upsert(
//      { userId: Meteor.userId() },
//      { $set: {
//        userId: Meteor.userId(),
//        firstName: firstName,
//        lastName: lastName,
//        email: email,
////        updatedAt: new Date()
////        username: Meteor.user().username,
//      }}
//    );
//  },


});
