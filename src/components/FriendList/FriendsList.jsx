import css from "./FriendsList.module.css";
import friends from "../../friends.json";
import FriendCard from "./FriendCard";

const FriendsList = () => {
    return (
        <ul className={css.list}>
            {friends.map((friend) => {
                return <FriendCard key={friend.id} item = {friend} />
            })}
        </ul>
    )
}

export default FriendsList;