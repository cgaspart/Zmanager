import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const style = {
	container: {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		borderRadius: 5,
		margin: 10,
		width: 150,
	}
}

class SearchItem extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { data, classes } = this.props
		return (
			<Grid item className={classes.container}>
				<p>{data.text}</p>
			</Grid>
		)
	}
}

export default withStyles(style)(SearchItem)
