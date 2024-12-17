export default function renderTemplate({ template = '', styles = '' }) {
  return `<style>${styles}</style>${template}`;
}
