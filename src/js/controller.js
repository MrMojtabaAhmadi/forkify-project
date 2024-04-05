import * as modal from './modal.js';

import 'core.js';
import 'regenerator-runtime/runtime';
import recepiView from './view/recepiview.js';
import searchView from './view/searchview.js';
import resultview from './view/resultview.js';
import paginationview from './view/paginationview.js';
import bookmarksView from './view/bookmarksView.js';

// this lines of module coming from parcel and not real js//
// if(module.hot){
//   module.hot.accept();
//}

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//console.log('test pls');

const firstCall = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    // build spinner (loading) recipe
    recepiView.spinner();

    // loading recepie
    await modal.loadRecipe(id);

    // rendering recepie

    // render method created for class in recepiview
    recepiView.render(modal.state.recipe);
    //
    bookmarksView.render(modal.state.bookmarks);
  } catch (err) {
    //console.error(err);
    recepiView.renderError();
  }
};
firstCall();

//
const controllResultSearch = async function () {
  try {
    resultview.spinner();

    // search for query
    const query = searchView.getQuery();
    if (!query) return;

    await modal.loadSearchResult(query);

    //render our result
    resultview.render(modal.getSearchResultPage());

    // render our pagination
    paginationview.render(modal.state.search);
  } catch (err) {
    console.log(err);
  }
};

const btnControlPage = function (gotopage) {
  resultview.render(modal.getSearchResultPage(gotopage));

  // render our pagination
  paginationview.render(modal.state.search);
};

//serving
const controlServing = function (newServings) {
  // update recipe serving(state)
  modal.updateServings(newServings);
  // update recipeview
  recepiView.render(modal.state.recipe);
};
const controlAddBookmark = function () {
  if (!modal.state.recipe.bookmarked) modal.addBookmark(modal.state.recipe);
  else modal.deleteBookmark(modal.state.recipe.id);

  //update UI
  recepiView.render(modal.state.recipe);

  //render bookmark
  bookmarksView.render(modal.state.bookmarks);
};

// publisher subscriber design pattern
const init = function () {
  recepiView.addHandlerRender(firstCall);
  recepiView.addHandlerUpdateServing(controlServing);
  recepiView.addhandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controllResultSearch);
  paginationview.addHandlerClick(btnControlPage);
};
init();
