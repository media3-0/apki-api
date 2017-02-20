// @flow

class Config {
  dbName: string = 'apki';
  host: string = '127.0.0.1';
  port: number = 27017;
  user: string = '';
  password: string = '';
  poolSize: number = 5;
}

const cfg = new Config();

export default cfg;
export {
  Config,
};
