import Post from '../../types/Post'
import * as Actions from '../actions/actions'
import { BlogActions, BlogActionTypes } from '../actions/actions'

const initialState: Post = {
  id: 1,
  title: 'demo',
  body: 'demo',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BlogActionTypes.GET_SINGLE_POST_SUCCESS:
      return { ...state, post: action.payload }
    case BlogActionTypes.GET_SINGLE_POST_ERROR:
      return { ...state, post: state }
    case BlogActionTypes.DELETE_POST_SUCCESS:
      return { ...state, post: action.payload }
    case BlogActionTypes.DELETE_POST_ERROR:
      return { ...state, post: state }
    case BlogActionTypes.ADD_POST_SUCCESS:
      return { ...state, post: action.payload }
    case BlogActionTypes.ADD_POST_ERROR:
      return { ...state, post: state }
    default:
      return state
  }
}

const allPostsState = {
  posts: [],
}

export const allReducer = (state = allPostsState, action) => {
  switch (action.type) {
    case BlogActionTypes.GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload }
    case BlogActionTypes.DELETE_POST_SUCCESS:
      return { ...state, posts: action.payload }
    default:
      return state
  }
}
