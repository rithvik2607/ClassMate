const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'cdbviLF0SiOjjOYDTqGjrw',
		APISecret : 'GtNmJgddS9Qe7KzPQg2nYrjpyMO0IeY54IMp'
	},
	production:{	
		APIKey : 'cdbviLF0SiOjjOYDTqGjrw',
		APISecret : 'GtNmJgddS9Qe7KzPQg2nYrjpyMO0IeY54IMp'
	}
};

module.exports = config[env]