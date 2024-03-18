import Content from "../../../Types/Content";
import styles from "./PostBody.module.css";

function PostBody({ content }: { content: Content }) {
  return (
    <div className={styles.body}>
      {content?.desc && <p>{content.desc}</p>}
      {content?.image && <img src={content.image} />}
    </div>
  );
}

export default PostBody;
