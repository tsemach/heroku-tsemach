import HerukoApplicationType from './common/heruko-application.type';
declare class Heruko {
    private cname;
    constructor();
    addApplication(application: HerukoApplicationType): import("mongoose").Query<any>;
    getApplications(): any;
    getDescripion(name: string): any;
    getDescripions(): any;
    prefix(from: string): string;
}
export default Heruko;
