'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE TODO: What is in 'render'? What values are passed in? Where does it interact elsewhere in the code?
  // render is: text containing the html from repo template and the object being passed into the template
  // values passed in: is a object that we get from github API
  // interacts with the code: it interact with the index.html page where the template is 
  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
