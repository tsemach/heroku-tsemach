
import admin from './admin/admin.config';

const { NODE_ENV = 'development' } = process.env;

class Config {
  private _basedir = `${__dirname}/../..`
  constructor() {    
  }

  get basedir() {
    return this._basedir;
  }

  set basedir(_basedir) {
    this._basedir = _basedir;
  }

  isProduction() { 
    return NODE_ENV === 'production';     
  }

  get heruko() {
    return admin[NODE_ENV];
  }

}

export default new Config();