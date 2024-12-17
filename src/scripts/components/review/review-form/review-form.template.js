const reviewFormTemplate = `
  <form class="form" method="POST" id="review-form">
    <div id="alert-container"></div>
    <input id="name" required class="form__input" name="name" placeholder="Enter your name" />
    <textarea id="review" required class="form__textarea" cols="30" rows="10" name="review" placeholder="Enter your comment"></textarea>
    <button class="button" type="submit">Add Review</button>
  </form>
`;

export default reviewFormTemplate;
