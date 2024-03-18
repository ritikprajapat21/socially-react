import styles from "./PostHeader.module.css";
import User from "../../../Types/User";
import { Link } from "react-router-dom";

const PostHeader = ({ user }: { user: User }) => {
  return (
    <div className={styles.header}>
      <img src={user.image} alt="profile photo" />
      <div className={styles.info}>
        <p>{user.name}</p>
        <Link to={"/"}>@{user.username}</Link>
      </div>
    </div>
  );
};

export default PostHeader;
