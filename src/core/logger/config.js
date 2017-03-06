// @flow

class Config {
  // level options: { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
  level: string | number = 'info';
  logToFile: boolean = false;
  logPath: string = `${Date.now()}.log`;
}

const cfg = new Config();

export default cfg;
export {
  Config,
};
