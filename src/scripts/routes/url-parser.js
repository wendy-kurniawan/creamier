const UrlParser = {
  url() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splittedUrl = this._getUrlComponent(url);
    return this._getUrl(splittedUrl);
  },

  urlComponent() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._getUrlComponent(url);
  },

  _getUrlComponent(url) {
    const [, resource = null, id = null, verb = null] = url.split('/');
    return { resource, id, verb };
  },

  _getUrl(splittedUrl) {
    const resource = splittedUrl.resource ? `/${splittedUrl.resource}` : '/';
    const id = splittedUrl.id ? '/:id' : '';
    const verb = splittedUrl.verb ? `/${splittedUrl.verb}` : '';
    return `${resource}${id}${verb}`;
  },
};

export default UrlParser;
