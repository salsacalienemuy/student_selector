angular.module("StudentApp", [])
	   .controller("StudentController", ["$scope", "$http", 
		function($scope, $http){
		   
		   var sa = this;
		   
		   $http.get("temp.txt")
		   .then(function(response){
			  sa.fname = response.data; 
		   });
		   
	   }]);