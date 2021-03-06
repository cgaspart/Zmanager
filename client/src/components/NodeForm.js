import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class NodeForm extends React.Component {
	state = {
		NodeId: '',
		NodeName: '',
		NodePrice: '',
		NodeType: '1',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
		<form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
  	  <p>
  	  <strong>Post to Server:</strong>
  	  </p>

	  <TextField
          id="outlined-number"
          label="node ID"
          value={this.state.NodeId}
          onChange={e => this.setState({ NodeId: e.target.value })}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

NodeForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NodeForm);
