// DONE TODO: Where is this invoked? Where does it interact elsewhere in the code?
// Put your response in this comment...  Article.fetchAll retrieves data from database or json file and once completed, calls adminView.initAdminPage, which uses the author-template from admin.html to populate the total number of articles and total number of words by author.

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
