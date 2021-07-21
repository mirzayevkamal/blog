import Post from '../types/Post'
import BlogElement from '../styles/BlogElement'
import { useEffect, useState } from 'react'
const coolImages = require('cool-images')
import { FaTrash } from 'react-icons/fa'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { BlogActionTypes } from '../redux/actions/actions'

interface BlogItemProps {
  props: Post
}

const BlogItem: React.FC<BlogItemProps> = ({ props }) => {
  const { id, title, body } = props
  const [image, setImage] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setImage(coolImages.one(200, 300))
  }, [])

  const handlePostDelete = () => {
    axios
      .delete(`https://simple-blog-api.crew.red/posts/${id}`)
      .then((response) => {
        alert('Post deleted')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <BlogElement>
      <img src={image} />
      <a href={`/posts/${id}`}>{title}</a>
      <p>{body}</p>
      <div className="actions">
        <button onClick={handlePostDelete}>
          <FaTrash />
        </button>
      </div>
    </BlogElement>
  )
}

export default BlogItem
