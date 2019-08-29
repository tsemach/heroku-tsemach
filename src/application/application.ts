
import Heruko from './heruko/heruko';

class Application {
  private _heuko = new Heruko();

  get heruko() {
    return this._heuko
  }
}

export default new Application();