import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
import { Email } from 'meteor/email';

// ================================================================== METHODS ==

Meteor.methods({


  'mail.send' (mail) {

    if (Meteor.isServer) {

      this.unblock();

      Email.send({
        to:      mail.to,
        from:    mail.from,
        subject: mail.subject,
        text:    mail.text
      });

    };

  },


});
