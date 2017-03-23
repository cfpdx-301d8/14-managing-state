'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  // DONE/TODO: What value is in 'module'? What is the purpose of this line of code?
  // The value of module is window. We use this so that aboutController can be used in the global namespace. 
  module.aboutController = aboutController;
  
})(window);
