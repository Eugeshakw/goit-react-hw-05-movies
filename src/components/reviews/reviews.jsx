import { useParams } from "react-router-dom";
import { getMovieDetailsReview } from '../../components/api/api';
import { useEffect, useState } from "react";
const Reviews = () => {

    const {movieid} = useParams()
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const res = await getMovieDetailsReview(movieid);
          console.log(res.results);
          setReviews(res.results);
       
        };
        fetchData().catch(error => console.log(error));
      }, [movieid]);


    
    return (
        <>
        {reviews.length === 0 ? (
            <p>There are no reviews,sorry</p>
        ) : (
            <ul>
                {reviews.map(review => {
                    return (
                        <li key={review.id}>
                            <p>{review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    )
                })}
            </ul>
        )}

        </>
        
    )
}

export default Reviews;