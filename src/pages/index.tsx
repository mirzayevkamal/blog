import Layout from '../components/Layout'
import { MainContainer } from '../styles/Containers'
import { connect } from 'react-redux'
import { getAllPosts } from '../redux/action-creators/index'
import { useEffect } from 'react'
import BlogItem from '../components/BlogItem'

function Home({ posts, getAllPosts }) {
  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <Layout pageTitle="Share your story with me!">
      <MainContainer>
        {posts.length
          ? posts.reverse().map((item) => {
              return <BlogItem key={`${item.id}-item`} props={item} />
            })
          : 'Loading...'}
      </MainContainer>
    </Layout>
  )
}

// Home.getInitialProps = async ({ Component, ctx }) => {
//   const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
//   return { pageProps }
// }

const mapStateToProps = (state) => {
  return {
    posts: state.allReducer.posts,
  }
}

const mapDispatchToProps = {
  getAllPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
