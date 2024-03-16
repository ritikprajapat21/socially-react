import Content from "./Content";
import User from "./User";

export default interface Post {
  id: number;
  user: User;
  content: Content;
}
