(function() {
  const newArticle = {};

  newArticle.initNewArticlePage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#article-json').on('focus', function() {
      $(this).select();
    });
    $('#new-form').on('change', newArticle.create);
  };

// DONE TODO: Where is this invoked? What values are passed in? Where does it interact elsewhere in the code?
// Put your response in this comment... Invoked on change in the '#new-form'. It doesn't actually take an argument. It interacts with article.js.
  newArticle.create = function() {
    $('#articles').empty();
    let formArticle = new Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      publishedOn: $('#article-published:checked').length ? new Date() : null
    });
    $('#articles').append(formArticle.toHtml('#article-template'));
    $('pre code').each((i, block) => hljs.highlightBlock(block));
    $('#export-field').show();
    $('#article-json').val(JSON.stringify(formArticle) + ',');
  };

  newArticle.initNewArticlePage();
})();
