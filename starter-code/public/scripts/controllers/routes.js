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
// Calling page() here initializes the libraries functionality and enables the about page calls and client side routing to work. It is definiteley necessary.
// Put your response in this comment...
page();
