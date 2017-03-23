'use strict';

(function(module) {
  function Article(opts) {
    Object.keys(opts).forEach(e => this[e] = opts[e]);
  }

  Article.all = [];

  // REVIEW: We no longer need our prototype toHTML() method. This functionality has been relocated to the view.
  // Article.prototype.toHtml = function() {
  //   var template = Handlebars.compile($('#article-template').text());
  //
  //   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  //   this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  //   this.body = marked(this.body);
  //
  //   return template(this);
  // };

  Article.loadAll = rows => {
    rows.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));
    Article.all = rows.map(ele => new Article(ele));
  };

  Article.fetchAll = callback => {
    $.get('/articles')
    .then(
      results => {
        if (results.length) {
          Article.loadAll(results);
          callback();
        } else {
          $.getJSON('./data/hackerIpsum.json')
          .then(rawData => {
            rawData.forEach(item => {
              let article = new Article(item);
              article.insertRecord();
            })
          })
          .then(() => Article.fetchAll(callback))
          .catch(console.error);
        }
      }
    )
  };

  // DONE/TODO: We have a new method to query our DB for a specific record, based on varying criteria. Where is it invoked? What values are passed in? Where does it interact elsewhere in the code?
  // The findWhere method is being invoked in articleController.js in the articleController object, specifically in loadByID, loadByAuthor and loadByCategory methods. The first value passed in represent the Id, author and category attributes. The second value represents the context of the query. The third value represents the callback where the object is being populated by Id, author or category. 
  Article.findWhere = function(field, value, callback) {
    $.get('/articles/find', {field: field, val: value})
    .then(callback)
  };

  // REVIEW: A new method for gathering all of the categories. Where is it invoked? What values are passed in? Where does it interact elsewhere in the code?
  // Put your response in this comment...
  Article.allCategories = function(callback) {
    $.get('/categories', callback);
  };

  Article.numWordsAll = () => {
    return Article.all.map(article => article.body.match(/\b\w+/g).length)
                      .reduce((a, b) => a + b)
  };

  Article.allAuthors = () => {
    return Article.all.map(article => article.author)
                      .reduce((names, name) => {
                        if (names.indexOf(name) === -1) names.push(name);
                        return names;
                      }, []);
  };

  Article.numWordsByAuthor = () => {
    return Article.allAuthors().map(author => {
      return {
        name: author,
        numWords: Article.all.filter(a => a.author === author)
                             .map(a => a.body.match(/\b\w+/g).length)
                             .reduce((a, b) => a + b)
      }
    })
  };

  // DONE/TODO: Where is this invoked? Where does it interact elsewhere in the code? Where does the output of this code end up?
  // The function is invoked immediately. It populates the numArticles, numWords and Authors fields of the Handlebars template for admin.html. The output of the code ends up in admin.html. 
  Article.stats = () => {
    return {
      numArticles: Article.all.length,
      numWords: Article.numWordsAll(),
      Authors: Article.allAuthors(),
    }
  };

  Article.truncateTable = callback => {
    $.ajax({
      url: '/articles',
      method: 'DELETE',
    })
    .then(console.log)
    .then(callback);
  };

  Article.prototype.insertRecord = function(callback) {
    $.post('/articles', {author: this.author, authorUrl: this.authorUrl, body: this.body, category: this.category, publishedOn: this.publishedOn, title: this.title})
    .then(console.log)
    .then(callback);
  };

  Article.prototype.deleteRecord = function(callback) {
    $.ajax({
      url: `/articles/${this.article_id}`,
      method: 'DELETE'
    })
    .then(console.log)
    .then(callback);
  };

  // DONE/TODO: Where does this code interact with other code in the blog application?
  // It interacts with server.js with the ajax call. It interacts with our SQL table in server.js at app.put('/articles/:id', (request, response)). It updates the data in the data table.
  Article.prototype.updateRecord = function(callback) {
    $.ajax({
      url: `/articles/${this.article_id}`,
      method: 'PUT',
      data: {
        author: this.author,
        authorUrl: this.authorUrl,
        body: this.body,
        category: this.category,
        publishedOn: this.publishedOn,
        title: this.title}
    })
    .then(console.log)
    .then(callback);
  };

  module.Article = Article;
})(window);
