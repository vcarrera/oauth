var OAUTH_PROXY_URL = {
'local.knarly.com' : 'http://local.knarly.com:5500/proxy'
}[window.location.hostname] || 'https://auth-server.herokuapp.com/proxy';

hello.init({ 	
	github: 'a741c13af9e8cb773389'
}, { redirect_uri: 'https://vcarrera.github.io/oauth/rediret.html',
     oauth_proxy : OAUTH_PROXY_URL  });

$(document).ready(hello( 'github' ).login().then( function(){
	alert('You are signed in to github');
}, function( e ){
	alert('Signin error: ' + e.error.message);
}));
