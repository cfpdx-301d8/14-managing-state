'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE TODO: Where is this invoked? What values are passed in? Where does it interact elsewhere in the code?
  // it's being invoked in aboutConroller on line 8 when we give it the method of requestReop and pass repoView.index into that function.
  // we can access repos in about controller because we made it available on the window in this script
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
