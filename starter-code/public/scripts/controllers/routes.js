'use strict';

page('/', articleController.loadAll, articleController.index);
page('/about', aboutController.index);
page('/article/:article_id', articleController.loadById, articleController.index);

// Redirect home if the default filter option is selected:
page('/category', '/');
page('/author', '/');

page('/author/:authorName', articleController.loadByAuthor, articleController.index);
page('/category/:categoryName', articleController.loadByCategory, articleController.index);

// DONE TODO: What does this do? Is it necessary?
//If you don't call it, you won't have access to the word page. calling page is necessary in order to run all of these page functions.  Page functions intercept requests, makes adjustments to the URL and triggers certain responses/program behaviors based on the changes in the URL
page();
