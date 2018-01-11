// dev
// 17267368939-1qj2f4du3foua4ue8r8lj8fjgnokr9g1.apps.googleusercontent.com
// uCCM-QCk_gH8ry6ncLjXqbOQ

// module.exports = {
//   googleClientID:
//     '625861011496-sqktrr645q5bo54lcdiaabficqkj4sfo.apps.googleusercontent.com',
//   googleClientSecret: '8Kiolx-i_0bO2H9EHv1qoKUK',
//   mongoURI:
//     'mongodb://admin:admin@ds249707.mlab.com:49707/express-server-dev',
//     cookieKey: 'uid'
// }

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
} else {
  module.exports = require('./dev')
}
