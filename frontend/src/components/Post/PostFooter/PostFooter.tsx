import { Form } from "react-router-dom";
import styles from "./ PostFooter.module.css";
import { FaRegComment, FaRegThumbsUp, FaShare } from "react-icons/fa";

function PostFooter() {
  return (
    <>
      <div className={styles.footer}>
        <Form>
          <button type="submit">
            <FaRegThumbsUp />
          </button>
        </Form>
        <Form>
          <button type="submit">
            <FaRegComment />
          </button>
        </Form>
        <Form>
          <button type="submit">
            <FaShare />
          </button>
        </Form>
      </div>
    </>
  );
}

export default PostFooter;
