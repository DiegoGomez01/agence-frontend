import Base from './Base';

class Test extends Base {

    async getConsultors() {
        return this.fetch(`/consultants`);
    }

    async getReportConsultors(user, start_date, end_date) {
        return this.fetch(`/consultants/report/${user}/${start_date}/${end_date}`);
    }

    // async post(data) {
    //     const request = this.request('POST', data);
    //     return this.fetch('/', request);
    // }
}
export default (new Test());