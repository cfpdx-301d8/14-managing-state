'use strict';

(function(module) {
  const articleController = {};

  articleController.index = (ctx) => articleView.index(ctx.articles);

  // REVIEW: Middleware for grabbing one article by ID:
  articleController.loadById = (ctx, next) => {
    let articleData = artcle => {
      ctx.articles = article;
      next();
    };

    Article.findWhere('article_id', ctx.params.article_id, articleData);
  };

  //DONE TODO: Middleware for loading up articles by a certain author. Where does it get its input data? Where is its output used?
  // Put your response in this comment...
  // it gets input data from the ajax call that queries the database that Article.findwhere invokes using the first two arguments as parameters for the query. The output data/array of articles by authonames is stored in the context object under the property articles and appended to the page under a ul tag. 
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
