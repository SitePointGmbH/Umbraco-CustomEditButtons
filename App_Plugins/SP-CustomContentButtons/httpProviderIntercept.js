angular.module('umbraco.services').config([
   '$httpProvider',
   function ($httpProvider) {

     
       $httpProvider.interceptors.push(function ($q) {
           return {
               'request': function (request) {
                   
                    
                  
                    if (request.url.toLowerCase().indexOf('edit.html') !== -1) {
                        if (location.href.indexOf('content') !== -1) {
                            console.log("Alte URL: " + request.url);
                            request.url = '/App_Plugins/SP-CustomContentButtons/customButtons.html';
                        }

                        console.log(location.href);
                    }
                       


                   return request || $q.when(request);
               }
           };
       });

   }]);