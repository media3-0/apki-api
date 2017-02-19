db.posts.drop();
db.users.drop();

db.users.insert([
  {
    _id: ObjectId("aaaaaaaaaaaaaaaaaaaaaaa1"),
    nickname: 'Edziu',
    email: 'edziu@email',
    uid: 'uid-1',
    password: '1234',
    roles: ["student"],
    posts: [ObjectId("bbbbbbbbbbbbbbbbbbbbbbb1")]
  },
  {
    _id: ObjectId("aaaaaaaaaaaaaaaaaaaaaaa2"),
    nickname: 'Janusz',
    email: 'janusz@email',
    uid: 'uid-2',
    roles: ["teacher"],
    posts: [ObjectId("bbbbbbbbbbbbbbbbbbbbbbb2")]
  },
  {
    _id: ObjectId( "aaaaaaaaaaaaaaaaaaaaaaa3"),
    nickname: 'Andrzej',
    email: 'andrzej@email',
    uid: 'uid-3',
    roles: ["moderator"],
    posts: [ObjectId("bbbbbbbbbbbbbbbbbbbbbbb3")]
  },
  {
    _id: ObjectId( "aaaaaaaaaaaaaaaaaaaaaaa4"),
    nickname: 'Zdzisiek',
    email: 'zdzisiek@email',
    uid: 'uid-4',
    roles: ["admin", "teacher"],
    posts: [ObjectId("bbbbbbbbbbbbbbbbbbbbbbb4"), ObjectId( "bbbbbbbbbbbbbbbbbbbbbbb5")]
  },
]);

db.posts.insert([
  {
    _id: ObjectId( "bbbbbbbbbbbbbbbbbbbbbbb1"),
    title: 'Lorem ipsum',
    author: ObjectId("aaaaaaaaaaaaaaaaaaaaaaa1"),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla quis ipsum ut hendrerit. Etiam rutrum elementum urna, et fringilla lacus dapibus sed.',
  },
  {
    _id: ObjectId( "bbbbbbbbbbbbbbbbbbbbbbb2"),
    title: 'Maecenas mattis',
    author: ObjectId("aaaaaaaaaaaaaaaaaaaaaaa2"),
    content: 'Aliquam eu mollis felis. Maecenas quis pulvinar neque. Donec arcu ex, ultrices sit amet nunc ac, interdum dapibus nunc.',
  },
  {
    _id: ObjectId( "bbbbbbbbbbbbbbbbbbbbbbb3"),
    title: 'Praesent laoreet dui at dui',
    author: ObjectId("aaaaaaaaaaaaaaaaaaaaaaa3"),
    content: 'Suspendisse eget tempor sem, eu lobortis tortor. Donec quis sem sapien. Pellentesque nec massa elit. Curabitur sagittis nibh diam, ut volutpat tortor rutrum vel.',
  },
  {
    _id: ObjectId( "bbbbbbbbbbbbbbbbbbbbbbb4"),
    title: 'Proin suscipit non quam',
    author: ObjectId("aaaaaaaaaaaaaaaaaaaaaaa4"),
    content: 'In vitae congue quam. Aenean vel porttitor neque. Etiam non neque vel elit luctus euismod eget non dui. In venenatis arcu dictum elit tristique dictum. Fusce vel mauris vel lorem facilisis egestas. Sed nec interdum orci.',
  },
  {
    _id: ObjectId( "bbbbbbbbbbbbbbbbbbbbbbb5"),
    title: 'Sipm suscipit non quam',
    author: ObjectId("aaaaaaaaaaaaaaaaaaaaaaa4"),
    content: 'In vel porttitor neque. Etiam non neque vel elit luctus euismod eget non dui. In venenatis arcu dictum elit tristique dictum. Fusce vel mauris vel lorem facilisis egestas. Sed nec interdum orci.',
  },
]);
