import Base from './Base';

class Test extends Base {

    async getConsultors() {
        return this.fetch(`/consultants`);
    }

    async getReportConsultors(user, start_date, end_date) {
        return this.fetch(`/consultants/report/${user}/${start_date}/${end_date}`);
    }
}
export default (new Test());