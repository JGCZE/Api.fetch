import styles from "./BlogPage.module.css";

const BlogPage = ({props}) => {
  //const oldArticles = props

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {props.map((article) => (
          <div key={article.id} className={styles.oneUser}>
            <h2>{article.name}</h2>
            <p>{article.username}</p>
            <p>{article.email}</p>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default BlogPage;