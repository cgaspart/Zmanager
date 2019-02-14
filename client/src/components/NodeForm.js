import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
	}
})

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

class NodeForm extends React.Component {
	state = {
		NodeId: '',
		NodeName: '',
		NodePrice: '',
		NodeType: '1',
  };

  render() {
    const { classes } = this.props;

    return (
		<MuiThemeProvider theme={theme}>

		<Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={5}>
            {[0].map(value => (
              <Grid key={value} item>
			  <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
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
			  <TextField
				id="outlined-name"
				label="Name"
				placeholder="node01.exemple.com"
				className={classes.textField}
				value={this.state.NodeName}
				onChange={e => this.setState({ NodeName: e.target.value })}
				margin="normal"
				variant="outlined"
			  />
			  <TextField
				  id="outlined-number"
				  label="price"
				  value={this.state.NodePrice}
				  onChange={e => this.setState({ NodePrice: e.target.value })}
				  type="number"
				  className={classes.textField}
				  InputLabelProps={{
					shrink: true,
				  }}
				  margin="normal"
				  variant="outlined"
				  InputProps={{
				  startAdornment: <InputAdornment position="start">$</InputAdornment>,
				}}
				/>
			</form>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
	  </MuiThemeProvider>
    );
  }
}

NodeForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NodeForm);
