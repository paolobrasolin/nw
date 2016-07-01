
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('forgotPwd');
//AccountsTemplates.configureRoute('resetPwd');
//AccountsTemplates.configureRoute('enrollAccount');
//AccountsTemplates.configureRoute('verifyEmail');
//AccountsTemplates.configureRoute('resendVerificationEmail');

//FlowRouter.route( '/', {
//  action: function() {
//    BlazeLayout.render( 'root', { main: 'Worker_App', view: 'profile' } );
//    console.log( "Is this working?" );
//  },
//  name: 'test'
//});

let worker = FlowRouter.group({
  prefix: '/worker'
});

worker.route( '/', {
  action: function() {
    BlazeLayout.render( 'root', { main: 'Worker_App' } );
    console.log( "We're viewing nothing." );
  }
});

worker.route( '/profile', {
  action: function() {
    BlazeLayout.render( 'root', { main: 'Worker_App', view: 'profile' } );
    console.log( "We're viewing the profile." );
  }
});

worker.route( '/rubric', {
  action: function() {
    BlazeLayout.render( 'root', { main: 'Worker_App', view: 'rubric' } );
    console.log( "We're viewing the rubric." );
  }
});

worker.route( '/rubric/:employerId', {
  action: function() {//params,queryParams) {
    BlazeLayout.render( 'root', { main: 'Worker_App', view: 'employerCard' } );
    console.log( "We're viewing an employer in the rubric." );
  }
});

worker.route( '/calendar', {
  action: function() {
    BlazeLayout.render( 'root', { main: 'Worker_App', view: 'calendar' } );
    console.log( "We're viewing the calendar." );
  }
});

//worker.route( '/rubric/card', {
//  action: function() {
//    BlazeLayout.render( 'applicationLayout', { main: 'employerCard' } );
//    console.log( "We're viewing an employer card." );
//  }
//});
//
//worker.route( '/event', {
//  action: function() {
//    BlazeLayout.render( 'applicationLayout', { main: 'event' } );
//    console.log( "We're viewing an event." );
//  }
//});


//let employer = FlowRouter.group({
//  prefix: '/employer'
//});
//
//employer.route( '/', {
//  action: function() {
//    BlazeLayout.render( 'applicationLayout', { main: '' } );
//    console.log( "We're viewing a list of worker." );
//  },
//  name: 'employerApp'
//});



let employer = FlowRouter.group({
  prefix: '/employer'
});

employer.route( '/', {
  action: function() {
    BlazeLayout.render( 'root', {
      main: 'Employer_App',
    } );
    console.log( "We're viewing nothing." );
  }
});

employer.route( '/rubric', {
  action: function() {
    BlazeLayout.render( 'root', {
      main: 'Employer_App',
      view: 'Employer_Rubric',
    } );
    console.log( "We're viewing the rubric." );
  }
});

employer.route( '/rubric/add', {
  action: function() {
    BlazeLayout.render( 'root', {
      main: 'Employer_App',
      view: 'Employer_Rubric_Add',
    } );
    console.log( "We're viewing the rubric." );
  }
});

employer.route( '/rubric/view/:workerId', {
  action: function() {
    BlazeLayout.render( 'root', {
      main: 'Employer_App',
      view: 'Employer_Rubric_Card',
    } );
    console.log( "We're viewing an employer in the rubric." );
  }
});

