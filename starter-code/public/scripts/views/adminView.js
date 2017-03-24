// DONE TODO: Where is this invoked? Where does it interact elsewhere in the code?
// Put your response in this comment...
// This is invoked in the Article.fetchAll function within this IIFE along with the method initAdminPage. This fetches all the articles and their data regarding number of words per author, ect.  from the database through the server and renders them to the admin page.

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
