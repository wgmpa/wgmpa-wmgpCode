//criação do modulo e atribuindo a uma variável
// Pela referência "https://www.w3schools.com/angular/angular_modules.asp", pode se colocar em arquivo js separado da criação do controller
let app = angular.module("myApp", []);


//adicionando um controller, esse controller é referenciado no arquivo "angularAula02" -> ng-controller='controller1'
// Pela referência "https://www.w3schools.com/angular/angular_modules.asp", pode se colocar em arquivo js separado da criação do module

app.controller("controller1", function($scope){
    $scope.firstName = "Gabriel"
})