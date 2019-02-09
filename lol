import React, { Component } from 'react';
import './App.css';
import { AppContainer, Body} from './containers';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
container: {
display: 'flex',
flexWrap: 'wrap',
},
textField: {
marginLeft: 'auto',
marginRight: 'auto',
width: 200,
},
dense: {
marginTop: 19,
},
menu: {
width: 200,
},
});

export class Test extends Component {
	state = {
response: '',
		  post:{
		  },
NodeId: '',
		NodeName: '',
		NodePrice: '',
		NodeType: '1',
		responseToPost: '',
	};

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res.result }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/nodeSaved');
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
		return body;
	};

	deleteNode = async () => {
		const response = await fetch('/api/rmAll');
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
		this.componentDidMount();
		this.setState({ responseToPost: body.result.nodes });
		return body;
	}

	handleSubmit = async e => {
		e.preventDefault();
		this.state = {
post:{
NodeId: this.state.NodeId,
		NodeName: this.state.NodeName,
		NodePrice: this.state.NodePrice,
		NodeType: this.state.NodeType
	 }
		}
		const response = await fetch('/api/addNode', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ post: this.state.post }),
});
const body = await response.text();
this.setState({ responseToPost: body });
this.componentDidMount();
};

render() {
	const { classes } = this.props;
	console.log(classes);
	return (
			<AppContainer>
			<Body>
			<p>Nodes: {this.state.response}</p>
			<form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
			<p>
			<strong>Post to Server:</strong>
			</p>

			<TextField
			id="standard-number"
			label="Number"
			value={this.state.NodeId}
			onChange={e => this.setState({ NodeId: e.target.value })}
			type="number"
			className={classes.textField}
			InputLabelProps={{
shrink: true,
}}
margin="normal"
/>

	<input type="number" name="node ID" value={this.state.NodeId} onChange={e => this.setState({ NodeId: e.target.value })}/>
	<input type="text" name="node domain name" value={this.state.NodeName} onChange={e => this.setState({ NodeName: e.target.value })}/>
	<input type="number" name="price" value={this.state.NodePrice} onChange={e => this.setState({ NodePrice: e.target.value })}/>
	<select value={this.state.NodeType} onChange={e => this.setState({NodeType: e.target.value })}>
	<option selected value="1">Secure node</option>
	<option value="2">Super node</option>
	</select>
	<button type="submit">Submit</button>
	</form>
	<button type="button" onClick={this.deleteNode}>Reset</button>
	<p>{this.state.responseToPost}</p>
	</Body>
	</AppContainer>
	);
	}
}

Test.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Test);

