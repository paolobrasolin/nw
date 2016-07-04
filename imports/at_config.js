AccountsTemplates.configure({

  forbidClientAccountCreation: true,

//  hideSignUpLink: true,
//  // Behavior
//  confirmPassword: true,
  enablePasswordChange: true,
//  overrideLoginErrors: true,
//  sendVerificationEmail: false,
//  lowercaseUsername: false,
//  focusFirstInput: true,
//
//  // Appearance
//  showAddRemoveServices: false,
//  showForgotPasswordLink: false,
//  showLabels: true,
//  showPlaceholders: true,
//  showResendVerificationEmailLink: false,
//
//  // Client-side Validation
//  continuousValidation: false,
//  negativeFeedback: false,
//  negativeValidation: true,
//  positiveValidation: true,
//  positiveFeedback: true,
//  showValidating: true,
//
//  // Privacy Policy and Terms of Use
//  privacyUrl: 'privacy',
//  termsUrl: 'terms-of-use',
//
//  // Redirects
//  homeRoutePath: '/home',
//  redirectTimeout: 4000,
//
//  // Hooks
//  onLogoutHook: myLogoutFunc,
//  onSubmitHook: mySubmitFunc,
//  preSignUpHook: myPreSubmitFunc,
//  postSignUpHook: myPostSubmitFunc,
//
//  // Texts
//  texts: {
//    button: {
//        signUp: "Register Now!"
//    },
//    socialSignUp: "Register",
//    socialIcons: {
//        "meteor-developer": "fa fa-rocket"
//    },
//    title: {
//        forgotPwd: "Recover Your Password"
//    },
//  },

  defaultLayout: 'root',
//  defaultTemplate: 'myCustomFullPageAtForm',
  defaultLayoutRegions: {},
  defaultContentRegion: 'main'
});





var pwd = AccountsTemplates.removeField('password');

AccountsTemplates.removeField('email');

AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
  },
  pwd
]);








