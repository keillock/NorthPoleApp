// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Coffee Shop',
	dialog: {
		title: 'Coffee Shop',
		buttonOk: 'Aceptar',
  	},
	routes: [
		
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
			path:'/login/',
    	url: 'login.html',
    	name: 'login',
		},
		{
		path: '/formulario/',
    	url: 'formulario.html',
    	name: 'formulario',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

