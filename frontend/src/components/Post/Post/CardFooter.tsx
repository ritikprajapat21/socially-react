import { Form } from "react-router-dom";
import styles from "./ CardFooter.module.css";

function CardFooter() {
  return (
    <>
      <div className={styles.footer}>
        <Form>
          <button type="submit">Like</button>
        </Form>
        <Form>
          <button type="submit">Comment</button>
        </Form>
        <Form>
          <button type="submit">Share</button>
        </Form>
      </div>
    </>
  );
}

export default CardFooter;
