'use strict';

(function (module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  //done TODO: What value is in 'module'? What is the purpose of this line of code?
  // Put your response in this comment...

//The value in this case is the window object because that is what was passed into the function when it is called. This funciton is a IIFE and the purpose of module is to purposefully set the aboutController object and any attatched methods to the global scope.


  module.aboutController = aboutController;
  
})(window);
