const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;
const checkServer = require('./helpers/checkServer');

const API_URI = 'http://api:9778/graphql';

const client = new Lokka({
  transport: new Transport(API_URI),
});

describe('Queries', () => {
  it('server should be up', async () => {
    expect(await checkServer()).toBe(true);
  })
  describe('allUsers', () => {
    // given
    const queries = {
      'without params': `
        {
          allUsers {
              id
              nickname
              email
              roles
              posts {
                title
                content
              }
          }
        }
      `,
      'with limit': `
        {
          allUsers(limit: 2) {
              id
              nickname
              email
              roles
              posts {
                title
                content
              }
          }
        }
      `,
    };

    Object.entries(queries).map(async ([name, query]) => {
      it(name, async () => {
        // when
        const result = await client.query(query);
        // then
        expect(result).toMatchSnapshot();
      });
    });

  });
});
