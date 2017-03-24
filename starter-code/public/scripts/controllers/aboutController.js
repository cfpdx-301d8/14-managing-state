'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  // DONE TODO: What value is in 'module'? What is the purpose of this line of code?
  // The purpose is to establish this function as an IIFE so that the information within it is available on the window.  It can now be used in other files within our code
// widow is being passed in as module
  module.aboutController = aboutController;
  
})(window);
