# Umbraco-CustomEditButtons

Add this App_Plugin to your project to change to view, amount and style of the buttons in the footer section of you content.


**********************************
customEditorSection.html
customEditorSection.controller.js
customButtons.css
**********************************
Here the magic happen. You can edit the buttons as needed, add functions in the controller, add switch case views depending on the documenttype.

e.g.:
  if (content.contentTypeAlias == "yourTpye") {
      $scope.showUnpublish = false;
 }
 
 In the css-File you can give the buttons a custom style.

**********************************
customButtons.html
SP.CustomButtonsController.js
**********************************
The module part of the buttons, that will be included in the main edit view. No need to change anything in this code.


**********************************
httpProviderIntercept.js
**********************************
This code intercept the routing for the normal edit-section and reroute it to our custom edit-section. No need to change anything in this code.
