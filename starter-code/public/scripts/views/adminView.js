// DONE TODO: Where is this invoked? Where does it interact elsewhere in the code?
// INVOKED: the object adminView with the method of initAdminPage serves as the callback in the Article.fetchAll function.
// INTERACTS WITH CODE: AdminView is limited to this file.  But it does interact with the HTML when it compiles the handlebars template.

(function() {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
      Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(Article.all.length);
      $('#blog-stats .words').text(Article.numWordsAll());
    }
  };

  Article.fetchAll(adminView.initAdminPage);
})();
