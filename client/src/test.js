import React, { Component } from 'react';
import './App.css';
import { AppContainer, Body} from './containers';

export class Test extends Component {
  state = {
    response: '',
    post: '',
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
    const response = await fetch('/api/rmExemple');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

render() {
    return (
      <AppContainer>
        <Body>
        	<p>Nodes: {this.state.response}</p>
        	<form onSubmit={this.handleSubmit}>
          		<p>
            			<strong>Post to Server:</strong>
          		</p>
          		<input type="text" value={this.state.post} onChange={e => this.setState({ post: e.target.value })}/>
              <input type="text" value={this.state.post} onChange={e => this.setState({ post: e.target.value })}/>
              <input type="text" value={this.state.post} onChange={e => this.setState({ post: e.target.value })}/>
          		<button type="submit">Submit</button>
        	</form>
          <button type="button" onClick={this.deleteNode}>Delete</button>
        	<p>{this.state.responseToPost}</p>
          </Body>
      </AppContainer>
    );
  }
}

export default Test;