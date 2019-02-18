import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Person } from '@material-ui/icons'

const style = {
	container: {
		backgroundColor: 'rgb(240, 240, 240)',
		margin: 10,
		width: 150,
	},
	text: {
		color: 'rgba(50, 50, 60, 0.8)',
	},
}

class SearchItem extends Component {
	render() {
		const { data, classes } = this.props
		return (
			<Grid item className={classes.container}>
				<Person size="24" className={classes.icon}/>
				<p className={classes.text}>{data.text}</p>
			</Grid>
		)
	}
}

export default withStyles(style)(SearchItem)
