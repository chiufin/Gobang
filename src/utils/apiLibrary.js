import createFetch from './createFetch';

let library = {
  login: payload => {
    return {
      url: `/api/login`,
      method: 'POST',
      body: payload.body
    };
  }
};

let createParam = (whichAPI, payload) => {
  return library[whichAPI](payload);
};

let apiLibrary = (whichAPI, payload) =>
  createFetch(createParam(whichAPI, payload));

export default apiLibrary;
