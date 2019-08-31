
import Admin from './admin/admin';

class Application {
  private _admin = new Admin();

  get admin() {
    return this._admin
  }
}

export default new Application();