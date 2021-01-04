angular.module('umbraco.services').config([
   '$httpProvider',
   function ($httpProvider) {

     
       $httpProvider.interceptors.push(function ($q) {
           return {
               'request': function (request) {
                   

                   if (request.url.toLowerCase().indexOf('views/content/edit.html') !== -1) {
                       request.url = '/App_Plugins/SP-CustomContentButtons/customButtons.html';
                   } 

                   return request || $q.when(request);
               }
           };
       });

   }]);