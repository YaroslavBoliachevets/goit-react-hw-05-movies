
const makeGenres = ({genres:movieGenres}) => {
	const genresList = [];
	if(movieGenres === undefined) {return}

movieGenres.map(
	({name}) => genresList.push(name)
);

return genresList.join(', ');
};

export default makeGenres;