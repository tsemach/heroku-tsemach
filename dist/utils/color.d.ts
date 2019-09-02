declare class Backgounds {
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    constructor();
}
declare class Colors {
    reset: string;
    bright: string;
    dim: string;
    underscore: string;
    blink: string;
    reverse: string;
    hidden: string;
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    bold: string;
    underline: string;
    reverded: string;
    private _backgound;
    constructor();
    readonly bg: Backgounds;
    paint(text: string, color: string): string;
}
declare const _default: Colors;
export default _default;
