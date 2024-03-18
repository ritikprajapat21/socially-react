import User from "../../../Types/User";
import styles from "./ CardHeader.module.css";

function CardHeader({ follower }: { follower: User }) {
  return (
    <div className={styles.cardHeader}>
      <img src={follower.image} alt="Profile Photo" />
      <div className={styles.info}>
        <p>{follower.name}</p>
        <p>@{follower.username}</p>
      </div>
    </div>
  );
}

export default CardHeader;
