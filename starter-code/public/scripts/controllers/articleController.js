'use strict';

(function(module) {
  const articleController = {};

  articleController.index = (ctx) => articleView.index(ctx.articles);

  // REVIEW: Middleware for grabbing one article by ID:
  articleController.loadById = (ctx, next) => {
    let articleData = article => {
      ctx.articles = article;
      next();
    };

    Article.findWhere('article_id', ctx.params.article_id, articleData);
  };

  // DONE TODO: Middleware for loading up articles by a certain author. Where does it get its input data? Where is its output used?
  // Put your response in this comment...
  //  This function is getting used in routes.js on line 11 inside a page call to the url '/author/:authorName'. It gets its input data from the ajax call in  Article.findWhere in article.js and the fact that that function is called wihtin this function with its callback function being authorData, which uses the ctx object and by calling next() makes part of the output/effect of this function that it calls articleController.index which renders the output to the page.
  //  
  articleController.loadByAuthor = (ctx, next) => {
    let authorData = articlesByAuthor => {
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // REVIEW: Middleware for grabbing all articles with a certain category:
  articleController.loadByCategory = (ctx, next) => {
    let categoryData = articlesInCategory => {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // REVIEW: Middleware for grabbing ALL articles:
  articleController.loadAll = (ctx, next) => {
    let articleData =  () => {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };

  module.articleController = articleController;
})(window);
