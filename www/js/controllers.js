var peayMobileApp = angular.module('peayMobileApp', []);

buttonList = [
	{'name': 'Alerts', 
	 'url':'https://www.getrave.com/login/apsu'},
	{'name': 'Library', 
	 'url':'http://library.apsu.edu/m/'},
	{'name': 'Dining', 
	 'url':'http://www.dineoncampus.com/apsu/show.cfm?cmd=menus2'},
];


peayMobileApp.controller('mainButtonControlColumns', function($scope){
	$scope.buttons = buttonList;
})