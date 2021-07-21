import axios from 'axios'
import { BlogActionTypes } from '../actions/actions'

export const getAllPosts = () => {
  return (dispatch) => {
    axios
      .get(`https://simple-blog-api.crew.red/posts`)
      .then((response) => {
        const posts = response.data
        console.log(posts)
        dispatch({ type: BlogActionTypes.GET_POSTS_SUCCESS, payload: posts })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const deletePost = (id) => {
  return (dispatch) => {
    axios
      .get(`https://simple-blog-api.crew.red/posts/${id}`)
      .then((response) => {
        const posts = response.data
        dispatch({ type: BlogActionTypes.DELETE_POST_SUCCESS, payload: posts })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
