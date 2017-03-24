'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE TODO: Where is this invoked? What values are passed in? Where does it interact elsewhere in the code?
  // Put your response in this comment... It is invoked in the aboutController.index function, which passes in repoView.index as a callback. It sends a get request to the github API for repos and is then intercepted by the server which then calls proxyGitHub function and authorizes the request. Once the response is recieved from github the data is stored in repos.all. Callback is then fired.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
