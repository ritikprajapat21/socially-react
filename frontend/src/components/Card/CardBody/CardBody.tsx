import styles from "./ CardBody.module.css";

function CardBody({
  followers,
  followings,
}: {
  followers: number;
  followings: number;
}) {
  return (
    <div className={styles.cardBody}>
      <p>
        {followers} {followers < 1 ? "Follower" : "Followers"}
      </p>
      <p>
        {followings} {followings < 1 ? "Follower" : "Followers"}
      </p>
    </div>
  );
}

export default CardBody;
