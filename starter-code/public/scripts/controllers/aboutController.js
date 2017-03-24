'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  // DONE TODO: What value is in 'module'? What is the purpose of this line of code?
  // Put your response in this comment... "window" is the value in 'module'. It's purpose is to introduce the contained file or contents of the IIFE to the global scope.
  module.aboutController = aboutController;
  
})(window);
