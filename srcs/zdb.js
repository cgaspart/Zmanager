require('babel-register');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('../db.json');
const db = low(adapter);

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

exports.deleteAll = () => {
	let res = db.set('nodes', [])
    .write()
	return (res);
}

exports.addexemple = () => {
	let res = db.get('nodes')
	.push({ id: 132598, name: 'zen-node01.uredine.com', price: 5, type: 1})
	.write()
	return (res);
}

exports.addNode = (post) => {
	let res = db.get('nodes')
	.push({id: post.NodeId, name: post.NodeName, price: post.NodePrice, type: post.NodeType})
	.write()
	return (res);
}
