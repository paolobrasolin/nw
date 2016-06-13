
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('forgotPwd');
//AccountsTemplates.configureRoute('resetPwd');
//AccountsTemplates.configureRoute('enrollAccount');
//AccountsTemplates.configureRoute('verifyEmail');
//AccountsTemplates.configureRoute('resendVerificationEmail');

let worker = FlowRouter.group({
  prefix: '/worker'
});

worker.route( '/', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: '' } );
    console.log( "We're viewing a list of worker." );
  },
  name: 'workerApp'
});

worker.route( '/profile', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'profile' } );
    console.log( "We're viewing the worker profile." );
  }
});

worker.route( '/rubric', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'employerRubric' } );
    console.log( "We're viewing the employer rubric." );
  }
});

worker.route( '/rubric/card', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'employerCard' } );
    console.log( "We're viewing an employer card." );
  }
});

worker.route( '/event', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'event' } );
    console.log( "We're viewing an event." );
  }
});


