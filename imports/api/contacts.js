import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
export const Contacts = new Mongo.Collection('contacts');

Contacts.schema = new SimpleSchema({
  workerId: {type: String, regEx: SimpleSchema.RegEx.Id},
  employerId: {type: String, regEx: SimpleSchema.RegEx.Id},
});

Contacts.attachSchema(Contacts.schema);

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
//        updatedAt: new Date()
//        username: Meteor.user().username,
      }}
    );
  },



//  'tasks.remove'(taskId) {
//    check(taskId, String);
//
//    const task = Tasks.findOne(taskId);
//    if (task.private && task.owner !== Meteor.userId()) {
//      // If the task is private, make sure only the owner can delete it
//      throw new Meteor.Error('not-authorized');
//    }
// 
//    Tasks.remove(taskId);
//  },
//  'tasks.setChecked'(taskId, setChecked) {
//    check(taskId, String);
//    check(setChecked, Boolean);
//
//    const task = Tasks.findOne(taskId);
//    if (task.private && task.owner !== Meteor.userId()) {
//      // If the task is private, make sure only the owner can check it off
//      throw new Meteor.Error('not-authorized');
//    }
// 
//    Tasks.update(taskId, { $set: { checked: setChecked } });
//  },
//  'tasks.setPrivate'(taskId, setToPrivate) {
//    check(taskId, String);
//    check(setToPrivate, Boolean);
// 
//    const task = Tasks.findOne(taskId);
// 
//    // Make sure only the task owner can make a task private
//    if (task.owner !== Meteor.userId()) {
//      throw new Meteor.Error('not-authorized');
//    }
// 
//    Tasks.update(taskId, { $set: { private: setToPrivate } });
//  },
//  'click .delete'() {
//    Meteor.call('tasks.remove', this._id);
//  },
//  'click .toggle-private'() {
//    Meteor.call('tasks.setPrivate', this._id, !this.private);
//  },
//
});

