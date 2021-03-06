import axios from 'axios';
import {GET_REVIEWS, ADD_REVIEW} from '../constants';

export const getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    list: reviews
  }
};

export const pullReviews = (productId) => {
  return (dispatch) => {
    return axios.get(`/api/products/${productId}/reviews`)
      .then(res => res.data)
      .then(reviews => dispatch(getReviews(reviews)))
      .catch(err => console.log(err));
  }
};
