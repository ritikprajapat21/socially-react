import styles from "./PostHeader.module.css";
import User from "../../../Types/User";

const PostHeader = ({ user }: { user: User }) => {
  return (
    <div className={styles.header}>
      <img src={user.image} alt="profile photo" />
      <div className={styles.info}>
        <p>{user.name}</p>
        <p>@{user.username}</p>
      </div>
    </div>
  );
};

export default PostHeader;
