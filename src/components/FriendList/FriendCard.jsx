import css from "./FriendCard.module.css"

const FriendCard = (friend) => {
    return (
        <>
            <div className={css.container}>
                <img className={css.img} src={friend.avatar} alt="" />
                <p className={css.name}>{friend.name}</p>
                <p className={friend.isOnline ? css.online : css.offline}>{friend.isOnline ? "Online" : "Offline"}</p>
            </div>
        </>
    )
}

export default FriendCard;