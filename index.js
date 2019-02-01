require('babel-register');
const {success, error} = require('./lib/jsonReturn.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ nodes: [], user: {}})
  .write()

db.has('nodes')
  .value()
// Add a post
/*db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()
*/

// Set a user using Lodash shorthand syntax
/*db.set('user.name', 'typicode')
  .write()*/
