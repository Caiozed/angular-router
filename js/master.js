var app = angular.module("routerApp",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
  .when("/", {
  	templateUrl: "templates/home.html"
  })
  .when("/contact", {
  	templateUrl: "templates/contact.html"
  });
});
