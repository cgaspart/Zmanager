import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import SearchItem from '../components/search'

const style = {
	header: {
		fontSize: 20,
		color: 'rgba(50, 50, 60, 0.5)',
		padding: 25,
	},
	subheader: {
		fontSize: 20,
		color: 'rgba(50, 50, 60, 0.2)',
	}
}

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchInput: this.props.match.params.search,
			results: { count: 0, nodes: [], accounts: [] },
		}
	}

	componentDidMount() {
		fetch(`/search/${this.state.searchInput}`)
		.then(res => res.json())
		.then(data => {
			if (data.count && data.count > 0)
				this.setState({results: data})
		})
	}

	render() {
		const { classes } = this.props
		const { results, searchInput } = this.state
		return (
			<Grid container direction="column">
				<Grid item>
					<p className={classes.header}>
						{results.count} search results for: {searchInput}
					</p>
				</Grid>
				{ results.nodes.length ?
					<Grid item>
						<p className={classes.subheader}>Nodes</p>
						<Grid container direction="row">
							{results.nodes.map(data => {
								return <SearchItem data={data}/>
							})}
						</Grid>
					</Grid>
				: null }
				{ results.accounts.length ?
					<Grid item>
						<p className={classes.subheader}>Accounts</p>
						<Grid container direction="row">
							{results.accounts.map(data => {
								return <SearchItem data={data}/>
							})}
						</Grid>
					</Grid>
				: null }
			</Grid>
		)
	}
}

export default withStyles(style)(Search)
