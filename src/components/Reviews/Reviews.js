import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getReviews} from 'services/api';

const Review = () => {
	const params = useParams();
	const [reviews, setReviews] = useState(null);

	useEffect(()=> {
		getReviews(params.movieId).then(setReviews);

	}, [params])


	return (<>
	<ul>
		{reviews && (reviews.results > 0 ) ? reviews.results.map(({author, content}) => {
		return (<li key={author}>
			<h3>{author}</h3>
			<p>{content}</p>
		</li>)}) : <h2>No info</h2>}
	</ul>
	</>);
}

export default Review;
