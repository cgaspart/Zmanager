import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, InputBase, Fade } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import CodeIcon from '../icons/code.svg'
import PersonIcon from '../icons/person.svg'
import SearchIcon from '../icons/search.svg'

const style = theme => ({
	flex: {
		flexGrow: 1,
	},
	bar: {
		backgroundColor: 'rgb(50, 50, 60)',
	},
	iconBox: {
		margin: 5,
		backgroundColor: 'rgba(255, 255, 255, 0)',
		borderRadius: '50%',
		userSelect: 'all',
		height: 30,
		width: 30,
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
		}
	},
	icon: {
		margin: 3,
		width: 24,
		height: 24,
		opacity: '0.5 !important',
	},
	titleBox: {
		position: 'absolute',
		left: '45%',
		width: '10%',
	},
	title: {
		color: 'rgba(255, 255, 255, 0.5)',
		fontSize: 20,
		textDecoration: 'none',
		textAlign: 'center',
		userSelect: 'none',
	},
	search: {
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		color: 'rgba(255, 255, 255, 0.5)',
		borderRadius: 5,
		fontSize: 14,
		padding: 5,
		height: 20,
	    width: 200,
	},
	nodeCount: {
		color: 'rgba(0, 255, 0, 0.5)',
		fontSize: 11,
		margin: 10,
	}
})

class Navigation extends Component {

	constructor(props) {
		super(props)
		this.state = { searchInput: null }
	}

	handleSearchInput(e) {
		if (e.target.value.length)
			this.setState({searchInput: e.target.value})
		else
			this.setState({searchInput: null})
	}

	render() {
		const { searchInput } = this.state
		const { classes } = this.props
		return (
			<AppBar position="static" className={classes.bar} title="Zmanager">
				<Toolbar spacing="24">
					<InputBase className={classes.search} placeholder='Explore nodes…'
					onChange={(e) => this.handleSearchInput(e)}/>
					<Fade in={searchInput ? true : false} mountOnEnter unmountOnExit>
						<Link to={`/search/${searchInput}`} className={classes.iconBox}>
							<img src={SearchIcon} className={classes.icon}/>
						</Link>
					</Fade>
					<p className={classes.nodeCount}>0 active nodes</p>
					<div className={classes.flex}/>
					<Link to='/profile' className={classes.iconBox}>
						<img src={PersonIcon} className={classes.icon}/>
					</Link>
					<Link to='/api' className={classes.iconBox}>
						<img src={CodeIcon} className={classes.icon}/>
					</Link>
					<div className={classes.titleBox}>
						<Link to='/' className={classes.title}>Zmanager</Link>
					</div>
				</Toolbar>
			</AppBar>
		)
	}
}

export default withStyles(style)(Navigation)
