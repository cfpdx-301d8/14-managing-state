'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE TODO: What is in 'render'? What values are passed in? Where does it interact elsewhere in the code?
  // Put your response in this comment... In render, a handlebars method is called and passed into that method is an array created by map() using the returned value of repos.name. It interacts with a handlebars template in the index.html file.
  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
