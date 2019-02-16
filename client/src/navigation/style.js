export const style = {
	flex: {
		flexGrow: 1,
	},
	bar: {
		backgroundColor: 'rgb(50, 50, 60)',
	},
	navButtonContainer: {
		margin: 5,
		backgroundColor: 'rgba(255, 255, 255, 0)',
		borderRadius: '50%',
		userSelect: 'all',
		height: 34,
		width: 34,
		'&:hover': {
			backgroundColor: 'rgb(25, 25, 30)',
		}
	},
	navButtonIcon: {
		margin: 5,
		width: 24,
		height: 'auto',
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
	    maxWidth: 200,
		width: '25%',
	},
	nodeCount: {
		color: 'rgba(0, 255, 0, 0.5)',
		fontSize: 11,
		margin: 10,
	},
}
