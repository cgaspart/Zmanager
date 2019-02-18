import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { style } from './style'

import NewIcon from '../icons/new.svg'

class NodeList extends Component {
	render() {
		const { classes } = this.props
		return (
			<Grid container direction="column" className={classes.nodeContainer}>
				<Grid item>
					<img src={NewIcon} className={classes.icon} alt="new"/>
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(style)(NodeList)
