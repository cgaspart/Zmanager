import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Node from './node'
import NodeList from './list'

const style = {
	header: {
		marginTop: 20,
		fontSize: 24,
		color: 'rgba(50, 50, 60, 0.8)',
	}
}

class Nodes extends Component {
	constructor(props) {
		super(props)
		this.state = { id: props.match.params.id }
	}
	render() {
		const { classes } = this.props
		const { id } = this.state
		return (
			<Grid container direction="column">
				<Grid item>
					{ id ? <>
						<p className={classes.header}>Node {id}</p>
						<Node id={id}/>
					</> : null }
					<p className={classes.header}>Node Manager</p>
					<NodeList/>
				</Grid>
			</Grid>
		)
	}
}

export default withStyles(style)(Nodes)
