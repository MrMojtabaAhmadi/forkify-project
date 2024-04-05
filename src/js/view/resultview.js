import View from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
class resultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'we could not find recipe, pls try another';
  _message = '';

  _generateMarkUp() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new resultView();
