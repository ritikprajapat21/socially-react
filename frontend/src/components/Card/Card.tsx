import Follower from "../../Types/follower";
import styles from "./Card.module.css";
import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";

const Card = ({ follower }: { follower: Follower }) => {
  return (
    <div className={styles.card}>
      <CardHeader follower={follower.user} />
      <CardBody
        followers={follower.followers}
        followings={follower.followings}
      />
    </div>
  );
};

export default Card;
