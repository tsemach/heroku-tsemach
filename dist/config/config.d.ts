declare class Config {
    private _basedir;
    constructor();
    basedir: string;
    isProduction(): boolean;
    readonly heruko: any;
}
declare const _default: Config;
export default _default;
