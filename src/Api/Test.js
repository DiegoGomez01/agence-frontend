import Base from './Base';

class Test extends Base {

    async getDataTest() {
        return this.fetch(`/todos`);
    }

    async post(data) {
        const request = this.request('POST', data);
        return this.fetch('/', request);
    }
}
export default (new Test());