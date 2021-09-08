import Cookies from 'js-cookie';

const makeGet = (url, options = {}) => {
    const headers = options['headers'] || {};
    const params = options['params'] || {}
    const query = Object.keys(params).map(k => encodeURIComponent(k) + '=' +
        encodeURIComponent(params[k])).join('&')
    const urlFinal = url + '?' + query
    return fetch(urlFinal, { headers, method: 'GET' }).then(res => res.json());
};

const makePost = (url, body, options = {}) => {
    const headers = options['headers'] || {};
  
    return fetch(url, { body, headers, method: 'POST' }).then(res => res.json());
};
/* const makeDelete = (url, body, options = {}) => {
    const headers = options['headers'] || {};
    return fetch(url, { body, headers, method: 'DELETE' }).then(res => res.json());
}; */

const makeJSONPost = (url, data, options = {}) => {
    const body = JSON.stringify(data);
    const headers = options['headers'] || {};
    headers['Content-Type'] = 'application/json';
  
    return makePost(url, body, { headers });
};
  
/* const makeJSONDelete = (url, data, options = {}) => {
    const body = JSON.stringify(data);
    const headers = options['headers'] || {};
    headers['Content-Type'] = 'application/json';

    return makeDelete(url, body, { headers });
}; */

const getHeaders = token => {
    return {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    };
  };

export const fetchMenu = () => {
    const url = "http://localhost:80/api/management/menu/";
    const headers = { "Content-type": "text/plain" };
    const params = {};
    return makeGet(url, { params, headers });
}

export const makeReservation = (ReservationInfo)=>{
    const url = "http://localhost/api/management/solicitudesReserva/"
    const token = Cookies.get('asimetrix_token')
    const headers = getHeaders(token);
    return makeJSONPost(url,ReservationInfo,{headers})
  }

export const fetchReservations = () => {
    const url = "http://localhost/api/management/solicitudesReserva/";
    const headers = { "Content-type": "text/plain" };
    const params = {};
    return makeGet(url, { params, headers });
}

export const makeLogin = (credentials) =>{
    const url = "http://localhost/api-token-auth/"
    const token = Cookies.get('asimetrix_token')
    const headers = getHeaders(token);
    return makeJSONPost(url,credentials,{headers})
}

