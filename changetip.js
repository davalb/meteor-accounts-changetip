Accounts.oauth.registerService( 'changetip' );

if ( Meteor.isClient) {
  Meteor.loginWithChangetip = function( options, callback ) {
    // support a callback without options
    if (! callback && typeof options === "function" ) {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler( callback );
    Changetip.requestCredential( options, credentialRequestCompleteCallback );
  };
} else {
  Accounts.addAutopublishFields({
    // not sure whether the soundcloud api can be used from the browser,
    // thus not sure if we should be sending access tokens; but we do it
    // for all other oauth2 providers, and it may come in handy.
    forLoggedInUser: [ 'services.changetip' ],
    forOtherUsers: [ 'services.changetip.username' ]
  });
}
