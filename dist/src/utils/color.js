'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Backgounds {
    constructor() {
        this.black = "\x1b[40m";
        this.red = "\x1b[41m";
        this.green = "\x1b[42m";
        this.yellow = "\x1b[43m";
        this.blue = "\x1b[44m";
        this.magenta = "\x1b[45m";
        this.cyan = "\x1b[46m";
        this.white = "\x1b[47m";
    }
}
class Colors {
    constructor() {
        this.reset = "\x1b[0m";
        this.bright = "\x1b[1m";
        this.dim = "\x1b[2m";
        this.underscore = "\x1b[4m";
        this.blink = "\x1b[5m";
        this.reverse = "\x1b[7m";
        this.hidden = "\x1b[8m";
        this.black = "\x1b[30m";
        this.red = "\x1b[31m";
        this.green = "\x1b[32m";
        this.yellow = "\x1b[33m";
        this.blue = "\x1b[34m";
        this.magenta = "\x1b[35m";
        this.cyan = "\x1b[36m";
        this.white = "\x1b[37m";
        this.bold = "\x1b[1m";
        this.underline = "\x1b[4m";
        this.reverded = "\x1b[7m";
        this._backgound = new Backgounds();
    }
    get bg() {
        return this._backgound;
    }
    paint(text, color) {
        return color + text + this.reset;
    }
}
exports.default = new Colors();
//# sourceMappingURL=color.js.map