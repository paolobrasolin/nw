
AccountsTemplates.configureRoute('signIn');
//AccountsTemplates.configureRoute('signUp');
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

// ================================================================= WORKER ==

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

// ================================================================= EMPLOYER ==

let employer = FlowRouter.group({
  prefix: '/employer'
});

employer.route( '/', {
  action: function() {
    BlazeLayout.render( 'root', {
      main: 'Employer_App',
    } );
  }
});

employer.route( '/rubric', {
  action: function() {
    BlazeLayout.render( 'root', {
      main: 'Employer_App',
      view: 'Employer_Rubric',
    } );
  }
});

employer.route( '/rubric/add', {
  action: function() {
    BlazeLayout.render( 'root', {
      main: 'Employer_App',
      view: 'Employer_Rubric_Add',
    } );
  }
});

employer.route( '/rubric/view/:workerId', {
  action: function() {
    BlazeLayout.render( 'root', {
      main: 'Employer_App',
      view: 'Employer_Rubric_Card',
    } );
  }
});

