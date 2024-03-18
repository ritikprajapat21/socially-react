import PostType from "../../Types/Post";
import styles from "./Post.module.css";
import PostBody from "./PostBody/PostBody";
import PostFooter from "./PostFooter/PostFooter";
import PostHeader from "./PostHeader/PostHeader";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <PostHeader user={post.user} />
        <PostBody content={post.content} />
        <PostFooter />
      </div>
    </div>
  );
};

export default Post;
