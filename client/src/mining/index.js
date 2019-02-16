import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const style = {
	header: {
		marginTop: 20,
		fontSize: 24,
		color: 'rgba(50, 50, 60, 0.8)',
	}
}

class Mining extends Component {
	render() {
		const { classes } = this.props
		return (
			<Grid container direction="column">
				<Grid item>
					<p className={classes.header}>Mining</p>
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(style)(Mining)
