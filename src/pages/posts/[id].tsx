import { useRouter } from 'next/router'
import { connect, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BlogActionTypes } from '../../redux/actions/actions'
import Layout from '../../components/Layout'
import { BlogContainer } from '../../styles/Containers'
const coolImages = require('cool-images')

const BlogPreview = ({ post }) => {
  const router = useRouter()
  let postId = null
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState('')

  useEffect(() => {
    postId = window.location.pathname.split('/')[2]
    console.log(postId)
    setImage(coolImages.one(300, 600))
  }, [])

  const getSinglePost = async () => {
    setLoading(true)
    await axios
      .get(`https://simple-blog-api.crew.red/posts/${postId}`)
      .then((response) => {
        dispatch({ type: BlogActionTypes.GET_SINGLE_POST_SUCCESS, payload: response.data })
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getSinglePost()
  }, [])

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Layout pageTitle={post.title}>
      <BlogContainer>
        <div className="single-post">
          <img src={image} />
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </BlogContainer>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    post: state.reducer.post,
  }
}

export default connect(mapStateToProps)(BlogPreview)
