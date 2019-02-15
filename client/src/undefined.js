import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const style = {
	header: {
		marginTop: 50,
		fontSize: 24,
		color: 'rgba(255, 0, 0, 0.8)'
	},
	subheader: {
		margin: 10,
		fontSize: 12,
		color: 'rgba(50, 50, 60, 0.8)'
	}
}

class Undefined extends Component {
	render() {
		const { classes } = this.props
		return (<>
			<p className={classes.header}>Nothing here</p>
			<p className={classes.subheader}>This page does not exist</p>
		</>)
	}
}

export default withStyles(style)(Undefined)
