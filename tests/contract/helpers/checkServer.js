const http = require('http');

function request({ hostname, port, path, method = 'GET' }) {
  return new Promise((resolve) => {
    const req = http.request(
      { hostname, port, path, method },
      res => resolve([null, res])
    );
    req.on('error', err => resolve([err]));
    req.end();
  });
}

async function isServerUp() {
  const params = {
    hostname: 'api',
    port: 9778,
    path: '/status',
  };
  const [err, res] = await request(params);
  if (err) return false;
  return res.statusCode === 200;
}

function checkServer({ retries = 10, interval = 500 } = {}) {
  return new Promise(async (resolve) => {
    function retry() {
      setTimeout(async () => {
        const isUp = await isServerUp();
        if (isUp) {
          resolve(true);
          return;
        }
        retries -= 1;
        if (retries <= 0) {
          resolve(false);
          return;
        }
        retry();
      }, interval);
    }
    retry();
  });
}

module.exports = checkServer;
