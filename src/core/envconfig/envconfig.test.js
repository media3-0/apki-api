import envconfig from './envconfig';

describe('TestInitWithOptions', () => {
  describe('Success', () => {
    let env;
    beforeEach(() => {
      env = process.env;
      process.env = { APP_HOST: 'app_env_host', HOST: 'env_host' };
    });

    afterEach(() => {
      process.env = env;
    });

    it('should init config with env variable with given prefix', () => {
      // given: APP_PORT env variable is set
      const cfgStructure = {
        host: undefined,
      };
      const expectedInitCfg = {
        host: 'app_env_host',
      };

      // when
      const initedCfg = envconfig.init(cfgStructure, { prefix: 'app' });

      // then
      expect(initedCfg).toMatchObject(expectedInitCfg);
    });

    it('should override default values with env variable', () => {
      // given: APP_PORT env variable is set
      const cfgStructure = {
        host: 'default_host',
      };
      const expectedInitCfg = {
        host: 'app_env_host',
      };

      // when
      const initedCfg = envconfig.init(cfgStructure, { prefix: 'app' });

      // then
      expect(initedCfg).toMatchObject(expectedInitCfg);
    });
  });
});
