import axios from 'axios'
import Post from '../../types/Post'

export enum BlogActionTypes {
  ADD_POST_SUCCESS = 'ADD_POST_SUCCESS',
  ADD_POST_ERROR = 'ADD_POST_ERROR',
  DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR = 'DELETE_POST_ERROR',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR = 'GET_POSTS_ERROR',
  GET_SINGLE_POST_SUCCESS = 'GET_SINGLE_POST_SUCCESS',
  GET_SINGLE_POST_ERROR = 'GET_SINGLE_POST_ERROR',
}

interface getAllPosts {
  type: BlogActionTypes.GET_POSTS_SUCCESS
  payload: []
}

interface getAllPostsError {
  type: BlogActionTypes.GET_POSTS_ERROR
  payload: Post[]
}

interface getSingleBlog {
  type: BlogActionTypes.GET_SINGLE_POST_SUCCESS
  payload: Post[]
}

interface singleBlogError {
  type: BlogActionTypes.GET_SINGLE_POST_ERROR
  payload: Post[]
}

interface addBlogPost {
  type: BlogActionTypes.ADD_POST_SUCCESS
  payload: Post[]
}

interface addBlogPostError {
  type: BlogActionTypes.ADD_POST_ERROR
  payload: Post[]
}

interface deleteBlogPost {
  type: BlogActionTypes.DELETE_POST_SUCCESS
  payload: Post[]
}

interface deleteBlogPostError {
  type: BlogActionTypes.DELETE_POST_ERROR
  payload: Post[]
}

export type BlogActions =
  | getAllPosts
  | getAllPostsError
  | getSingleBlog
  | singleBlogError
  | addBlogPost
  | addBlogPostError
  | deleteBlogPost
  | deleteBlogPostError
