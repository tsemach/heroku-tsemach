'use strict';

class Backgounds {
	public black = "\x1b[40m";
	public red = "\x1b[41m";
	public green = "\x1b[42m";
	public yellow = "\x1b[43m";
	public blue = "\x1b[44m";
	public magenta = "\x1b[45m";
	public cyan = "\x1b[46m";
	public white = "\x1b[47m";

	constructor() {
	}
}

class Colors {
  
  public reset = "\x1b[0m";
  public bright = "\x1b[1m";
  public dim = "\x1b[2m";
  public underscore = "\x1b[4m";
  public blink = "\x1b[5m";
  public reverse = "\x1b[7m";
  public hidden = "\x1b[8m";

  public black = "\x1b[30m";
  public red = "\x1b[31m";
  public green = "\x1b[32m";
  public yellow = "\x1b[33m";
  public blue = "\x1b[34m";
  public magenta = "\x1b[35m";
  public cyan = "\x1b[36m";
  public white = "\x1b[37m";

  public bold = "\x1b[1m";
  public underline = "\x1b[4m";
  public reverded = "\x1b[7m";

  private _backgound = new Backgounds();

	constructor() {		
	}
	
	get bg() {
		return this._backgound;	
	}

	paint(text: string, color: string) {
		return color + text + this.reset;	
	}
}

export default new Colors();
