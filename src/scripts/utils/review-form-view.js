import '../components/review/review-form';
import '../components/alert';

class ReviewFormView {
  getTemplate() {
    return `
      <review-form></review-form>
    `;
  }

  onSubmit(callback) {
    const form = document.querySelector('review-form').element;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const alertContainer = form.querySelector('#alert-container');
      alertContainer.innerHTML = '';

      callback(event.target);
    });
  }

  showError(error) {
    const errorAlert = `<ui-alert><p slot="placeholder">${error}</p></ui-alert>`;
    const form = document.querySelector('review-form').element;
    const alertContainer = form.querySelector('#alert-container');
    alertContainer.innerHTML = errorAlert;

    form
      .querySelector('#alert-container')
      .dispatchEvent(new Event('review:error'));
  }

  disable() {
    const form = document.querySelector('review-form').element;
    const button = form.querySelector('.button');
    button.disabled = true;
  }

  enable() {
    const form = document.querySelector('review-form').element;
    const button = form.querySelector('.button');
    button.disabled = false;
  }

  reset() {
    const form = document.querySelector('review-form').element;
    form.reset();
  }
}

export default ReviewFormView;
