const makeGet = (url, options = {}) => {
    const headers = options['headers'] || {};
    const params = options['params'] || {}
    const query = Object.keys(params).map(k => encodeURIComponent(k) + '=' +
        encodeURIComponent(params[k])).join('&')
    const urlFinal = url + '?' + query
    return fetch(urlFinal, { headers, method: 'GET' }).then(res => res.json());
};

export const fetchMenu = () => {
    const url = "http://localhost:8000/v1/management/menu/";
    const headers = { "Content-type": "text/plain" };
    const params = {};
    return makeGet(url, { params, headers });
}