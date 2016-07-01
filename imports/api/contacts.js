import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
// =============================================================== COLLECTION ==

export const Contacts = new Mongo.Collection('contacts');

// =================================================================== SCHEMA ==

Contacts.schema = new SimpleSchema({
  workerId: {type: String, regEx: SimpleSchema.RegEx.Id},
  employerId: {type: String, regEx: SimpleSchema.RegEx.Id},
});

Contacts.attachSchema(Contacts.schema);

// ============================================================= PUBLICATIONS ==

if (Meteor.isServer) {


  Meteor.publish('contacts', function() {
    var user = Meteor.users.findOne( { _id: this.userId } );
    // hopefully this is smart
    return Contacts.find( { $or: [
      { workerId: user.workerId },
      { employerId: user.employerId } ]});
    // specify returned fields here for security
  });


}

// ================================================================== METHODS ==

Meteor.methods({


  'contacts.upsert'({firstName, lastName, email}) {
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Contacts.upsert(
      { userId: Meteor.userId() },
      { $set: {
        userId: Meteor.userId(),
        firstName: firstName,
        lastName: lastName,
        email: email,
      }}
    );
  },


});

