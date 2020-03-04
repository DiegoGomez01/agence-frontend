import 'whatwg-fetch';
import env from '../.env.js';

class Base {
    constructor() {
        this.urlBase = env.urlBase;
    }

    async fetch(endpoint, params) {
        const parameters = params || {};
        if (!parameters.headers) {
          parameters.headers = {};
        }
        parameters.headers['Content-Type'] = 'application/json';
        const response = await fetch(this.urlBase + endpoint, parameters);
        const json = await this.jsonParse(response);
        return json;
    }

    request(method, data) {
        return {
            method,
            body: JSON.stringify(data),
        };
    }

    async jsonParse(response) {
        const a = await response.text().then((text) => {
          try {
            const data = text ? JSON.parse(text) : {};
            if (response.status < 210) {
              return data;
            }
            if (data.message) {
              return { error: { message: data.message } };
            }
            if (data[0] && data[0].message) {
              return { error: { message: data[0].message } };
            }
            return data;
          } catch (e) {
            if (response.status < 210) {
              return {};
            }
            return { error: { message: text } };
          }
        });
        return a;
    }
}

export default Base;