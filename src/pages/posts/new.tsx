import { useRouter } from 'next/router'
import { connect, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BlogActionTypes } from '../../redux/actions/actions'
import Layout from '../../components/Layout'
import { BlogContainer } from '../../styles/Containers'
import InputElement from '../../styles/InputElement'
import TextArea from '../../styles/TextArea'
import ButtonElement from '../../styles/ButtonElement'

const NewPost = ({ post }) => {
  const router = useRouter()
  const postId = router.query.id
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {}, [])

  const handlePostAdd = () => {
    axios
      .post(`https://simple-blog-api.crew.red/posts`, {
        title: title,
        body: body,
      })
      .then((response) => {
        alert('post added successfully!')
        dispatch({ type: BlogActionTypes.ADD_POST_SUCCESS, payload: response.data })
        setTitle('')
        setBody('')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Layout pageTitle="Create a new blog post">
      <BlogContainer>
        <div className="create-post">
          <h1>Create a new post</h1>
          <div className="post-body">
            <InputElement value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
            <ButtonElement onClick={handlePostAdd}>Save</ButtonElement>
          </div>
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

export default connect(mapStateToProps)(NewPost)
