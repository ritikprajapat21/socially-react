import Follower from "../../Types/follower";
import styles from "./Followers.module.css";
import Card from "../../components/Card/Card";

const Followers = () => {
  const followers: Follower[] = [
    {
      user: {
        id: "1",
        name: "Ritik Prajapat",
        image:
          "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "ritik",
      },
      followers: 25,
      followings: 25,
    },
    {
      user: {
        id: "2",
        name: "Kiyansh Prajapat",
        image:
          "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "kiyansh",
      },
      followers: 25,
      followings: 25,
    },
    {
      user: {
        id: "3",
        name: "Kushagra Prajapat",
        image:
          "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "kushagra",
      },
      followers: 25,
      followings: 25,
    },
    {
      user: {
        id: "4",
        name: "Surbhit Prajapat",
        image:
          "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "surbhit",
      },
      followers: 25,
      followings: 25,
    },
  ];

  return (
    <div className={styles.container}>
      {followers.map((follower) => (
        <Card key={follower.user.id} follower={follower} />
      ))}
    </div>
  );
};

export default Followers;
