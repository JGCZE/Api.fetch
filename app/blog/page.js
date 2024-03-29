import BlogPage from "../components/Blog/BlogPage";
import { getBlogs } from "../api/fetchBlog";

const Blog = async () => {
  const articles = await getBlogs();

  return (
    <div>
      <BlogPage props={articles} />
    </div>
  )
}

export default Blog;