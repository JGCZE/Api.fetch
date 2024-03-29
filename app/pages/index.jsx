import BlogPage from "../blog/page"
import { fetchBlog } from "../api/fetchBlog"

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A fuga et suscipit unde, nisi ea quod cumque facilis tempore ipsum molestiae dignissimos nam debitis natus consectetur sint reiciendis beatae fugiat?</p>
    </div>
  )
}

const getServerSideProps = async () => {
  const res = await fetchBlog('https://jsonplaceholder.typicode.com/users')
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  console.log("??", res.json())
  return res.json()
}

// export const Blog = ({ blog }) => {
//   console.log("??", blog);
//   return (
//     <BlogPage blog={blog} />
//   )
// };
