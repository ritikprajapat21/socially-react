import User from "./User";

export default interface Follower {
  user: User;
  followers: number;
  followings: number;
}
