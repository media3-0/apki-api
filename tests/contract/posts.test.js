const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const API_URI = 'http://api:9778/graphql';

const client = new Lokka({
  transport: new Transport(API_URI),
});

describe('Queries', () => {

  describe('allPosts', () => {

    // given
    const queries = {
      'without params': `
        {
          allPosts {
            title
            author
            content
          }
        }
      `,
      'with limit': `
        {
          allPosts(limit: 2) {
            title
            author
            content
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
