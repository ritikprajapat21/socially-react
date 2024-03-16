import PostType from "../../Types/Post";
import styles from "./Post.module.css";
import PostHeader from "./PostHeader/PostHeader";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <PostHeader user={post.user} />
        <div className={styles.body}>
          {post.content?.desc && <p>{post.content.desc}</p>}
          {post.content?.image && <img src={post.content.image} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
