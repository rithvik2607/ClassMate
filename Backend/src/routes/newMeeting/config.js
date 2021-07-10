const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'cdbviLF0SiOjjOYDTqGjrw',
		APISecret : 'GtNmJgddS9Qe7KzPQg2nYrjpyMO0IeY54IMp',
		accountSid : 'AC5178f9bda8dde22feafc2c5d058f319f',
		authToken : 'dece1dae6fe09cb80ee25b11fa398958'
	},
	production:{	
		APIKey : 'cdbviLF0SiOjjOYDTqGjrw',
		APISecret : 'GtNmJgddS9Qe7KzPQg2nYrjpyMO0IeY54IMp',
		accountSid : 'AC5178f9bda8dde22feafc2c5d058f319f',
		authToken : 'dece1dae6fe09cb80ee25b11fa398958'
	}
};

module.exports = config[env]