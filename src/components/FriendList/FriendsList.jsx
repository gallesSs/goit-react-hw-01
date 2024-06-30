import css from "./FriendsList.module.css";
import friends from "../../friends.json";
import FriendCard from "./FriendCard";

const FriendsList = () => {
    return (
        <ul className={css.list}>
            {friends.map((friend) => {
                return <FriendCard key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
            })}
        </ul>
    )
}

export default FriendsList;