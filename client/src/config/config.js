
import env from './config-envs'

const { NODE_ENV = 'development' } = process.env;

class Config {
  constructor() {
  }

  get basedir() {
    return this._basedir;
  }

  set basedir(_basedir) {
    this._basedir = _basedir;
  }

  isProduction() { 
    return process.env === 'production';     
  }

  get env() {
    return env[process.env.NODE_ENV];
  }

}

export default new Config();