import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, InputBase, Fade, Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import SearchIcon from '../icons/search.svg'
import TradingIcon from '../icons/trade.png'
import MiningIcon from '../icons/miner.png'
import NodeIcon from '../icons/node.png'

import { style } from './style'

const navButtons = [
	{ to: '/trading', icon: TradingIcon, label: 'trading' },
	{ to: '/mining', icon: MiningIcon, label: 'mining' },
	{ to: '/nodes', icon: NodeIcon, label: 'nodes' },
]

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
						<Link to={`/search/${searchInput}`} className={classes.navButtonContainer}>
							<img src={SearchIcon} className={classes.navButtonIcon} alt="search"/>
						</Link>
					</Fade>
					<div className={classes.flex}/>
					{ navButtons.map(button => (
						<Tooltip title={button.label}>
							<Link to={button.to} className={classes.navButtonContainer}>
								<img src={button.icon} className={classes.navButtonIcon} alt={button.label}/>
							</Link>
						</Tooltip>
					))}
					<div className={classes.titleBox}>
						<Link to='/' className={classes.title}>Zmanager</Link>
					</div>
				</Toolbar>
			</AppBar>
		)
	}
}

export default withStyles(style)(Navigation)
