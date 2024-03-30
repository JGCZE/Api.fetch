import styles from "./BlogPage.module.css";
import Link from "next/link";

const BlogPage = ({props}) => {
  const oldArticles = props.filter((user) => user.name.match("C"))
  const addLatter = oldArticles.map((user) => {
    return { ...user, id: user.id + " - C" }
  })

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {props.map((article) => (
          <div key={article.id} className={styles.oneUser}>
            <h2>{article.name}</h2>
            <p>{article.username}</p>
            <p>{article.email}</p>
            <Link href={`/blog/${article.id}`}>Show article</Link>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default BlogPage;