import React,{useState} from 'react';
import { Rating } from 'react-simple-star-rating'

// import "bootstrap/dist/css/bootstrap.min.css";
// import{ Button,Placeholder} from "react-bootstrap/";


const MovieSearch = ({search,setRate,newRate}) => {
const [rating, setRating] = useState(1)

  const onStarClick=(nextValue,name,prevValue)=>{
setRate(nextValue);
  }

  return (
    <div >
<input id="search"  type="text" placeholder="search"onChange= { (e)=> search(e.target.value) } />
<Rating  name="rate1" ratingValue={newRate}  onStarClick={onStarClick}/* Rating Props */ />
    </div>
  );
};

export default MovieSearch;
