'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  // TODO: What value is in 'module'? What is the purpose of this line of code?
  // Put your response in this comment...
  module.aboutController = aboutController;
  
})(window);
