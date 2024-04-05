import View from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class bookmarksVIew extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'no bookmark, find a recipe and bookmark it';
  _message = '';

  // this create for markup in bookmark and resultview
  _generateMarkUp() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new bookmarksVIew();
