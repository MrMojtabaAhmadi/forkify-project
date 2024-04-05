// use as parent view and use it in all child views... thats why we export default all class//
import icons from 'url:../../img/icons.svg';

export default class view {
  _data;

  /**
   * render recived object to DOM
   * @param {Object | Object[]} data data for rendered (recipe)
   * @param {Boolean} [render = true] if render false create markup instead render to DOM
   * @returns {undefined | string} markup is return if render = false
   * @author mojtaba ahmadi
   * @todo finish build a new recipe from client
   */
  render(data, render = true) {
    // catch error at first of rendering data
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkUp();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  spinner = function () {
    const markup = `
             <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div> `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `
                <div class="error">
                  <div>
                    <svg>
                        <use href=${icons}#icon-alert-triangle"></use>
                    </svg>
                  </div>
                    <p>${message}</p>
                </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
                    <div class="message">
                      <div>
                        <svg>
                            <use href=${icons}#icon-smile"></use>
                        </svg>
                      </div>
                        <p>${message}</p>
                    </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
