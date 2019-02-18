import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { style } from './style'

const detail = (classes, title, text, color) => (
	<Grid container direction="row">
		<Grid item>
			<p className={classes.nodeDetailsTitle}>{title}</p>
		</Grid>
		<Grid item>
			{{
				'green': 
					( <p className={`${classes.nodeDetailsText} ${classes.textGreen}`}>{text}</p> ),
				'red': 
					( <p className={`${classes.nodeDetailsText} ${classes.textRed}`}>{text}</p> ),
				'default':
					( <p className={classes.nodeDetailsText}>{text}</p> ),
			}[color]}
		</Grid>
	</Grid>
)

class Node extends Component {
	render() {
		const { id, classes } = this.props
		return (
			<div className={classes.nodeContainer}>
				<Grid container direction="row">
				{ detail(classes, "Node", "4261 - zen01.lab.ba - 195.201.142.224 - 9033", 'default') }
				{ detail(classes, "Server", "home: ts1.eu - current: ts1.eu", 'default') }
				{ detail(classes, "System", "Intel Xeon Processor (Skylake, IBRS) - 1 cores", 'default') }
				{ detail(classes, "Versions", "zen: 2001650 - tracker: 0.3.1", 'default') }
				{ detail(classes, "Added", "Mon, 04 Dec 2017 20:45:41 GMT", 'default') }
				{ detail(classes, "Updated", "Sat, 16 Feb 2019 13:46:31 GMT", 'default') }
				{ detail(classes, "Certificate", "Expired", 'red') }
				{ detail(classes, "Status", "Up", "green") }
				</Grid>
			</div> 
		)
	}
}

export default withStyles(style)(Node)
