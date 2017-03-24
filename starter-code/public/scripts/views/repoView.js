'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE TODO: What is in 'render'? What values are passed in? Where does it interact elsewhere in the code?
  // Put your response in this comment...
  // Render is a function that grabs the handlebars template, turns it into a string, compiles that string and then that value gets passed into the .map inside of the append function in repoView.index below.

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
