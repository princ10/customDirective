var myApp = angular.module("myApp",[])

 myApp.directive("testDirective",function(){  //this is custum directive
     return{
         template:'thisis angular',
               
         restrict:"E"
     };
 });

 myApp.run(function($rootScope){         //this is rootScope
     $rootScope.message = "hello root";
 })


 myApp.controller("appCtr" , function(){
    var DirName = this;
     DirName.Users = [
         {
         name:"shashi",
         age:28,
         company:"test yantra",
         designation:"nodejs Developer"
         },

         {
             name:"veeru",
             age:22,
             company:"Jspiders",
             designation:"Ruby Developer"
         },

         {
             name:"Sanjay",
             age:21,
             company:"Qspiders",
             designation:"java Developer"
      }
 ];
 });



