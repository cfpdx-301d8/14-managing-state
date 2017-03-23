// DONE/TODO: Where is this invoked? Where does it interact elsewhere in the code?
// This function is immediately invoked. It compiles our Handlebars template and sends it to the handlebars template which is on admin.html.

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
