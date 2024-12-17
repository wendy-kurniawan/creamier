export default function reviewItemTemplate(customer) {
  return `
    <article role="listitem" class="review__item">
      <p class="review__name">${customer.name}</p>
      <p class="review__date">${customer.date}</p>
      <p class="review__comment">${customer.review}</p>
    </article>
  `;
}
