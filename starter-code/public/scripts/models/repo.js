'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE TODO: Where is this invoked? What values are passed in? Where does it interact elsewhere in the code?
  // Put your response in this comment...
  // This is invoked in the aboutController file in an the aboutController.index function that takes the function repoView.index as an argument. This initiates the request of the repos from the github api and then renders them to the page based on the repoView.index function. 
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
