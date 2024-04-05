// this page is created for combine bookmarksview.js and resultview.js because this 2 page are similar... just difrent in preview class

import View from './view.js';
import icons from 'url:../../img/icons.svg';

class previewView extends View {
  _parentElement = '';

  _generateMarkUp() {
    return `
        <li class="preview">
            <a class="preview__link" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
               
              </div>
            </a>
        </li>
            `;
  }
}
export default new previewView();
