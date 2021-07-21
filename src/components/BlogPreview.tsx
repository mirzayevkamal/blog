import Post from '../types/Post'

interface BlogPreviewProps {
  props: Post
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ props }) => {
  return <h1>Blog preview</h1>
}

export default BlogPreview
