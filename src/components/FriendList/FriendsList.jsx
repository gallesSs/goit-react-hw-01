import css from "./FriendsList.module.css";
import FriendCard from "./FriendCard";

const FriendsList = ({items}) => {
    return (
        <ul className={css.list}>
            {items.map((item) => {
                <li key={item.id}>
                 <FriendCard friend={item} />
                </li>
            })}
        </ul>
    )
}

export default FriendsList;