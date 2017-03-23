'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE/TODO: Where is this invoked? What values are passed in? Where does it interact elsewhere in the code?
  // This is invoked in aboutController.js. The value passed into repos.requestRepos function is repoView.index. It's grabbing all of the GitHub repos and filtering to a specific attribute. repoView.index will append to the DOM. 
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
