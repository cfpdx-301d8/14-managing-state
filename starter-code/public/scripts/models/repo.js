'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // TODO: Where is this invoked? What values are passed in? Where does it interact elsewhere in the code?
  // Put your response in this comment...
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
