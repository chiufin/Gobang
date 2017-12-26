let createFetch = param => {
  //param : url, method, body, credential
  let headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

  let reqObj = {
    method: param.method,
    headers,
    credentials: 'include'
  };

  if (param.body) {
    reqObj.body = JSON.stringify(param.body);
  }

  // ifJson = err.headers.get('Content-Type').includes('application/json')
  return fetch(param.url, reqObj).then(res => {
    if (400 <= res.status) {
      throw res;
    } else {
      return res;
    }
  });
};

export default createFetch;
