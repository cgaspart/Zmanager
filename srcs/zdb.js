require('babel-register');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('../db.json')
const db = low(adapter)

db.defaults({ nodes: [], user: {}}).write()

exports.getNumberOfNodes = () => {
	let res = db.get('nodes').size().value();
	return (res);
}

exports.deleteTest = () => {
	let res = db.get('nodes')
	.remove({ id: 132598 })
	.write()
}

exports.addexemple = () => {
	let res = db.get('nodes')
	.push({ id: 132598, name: 'zen-node01.uredine.com', price: 5})
	.write()
	return (res);
}