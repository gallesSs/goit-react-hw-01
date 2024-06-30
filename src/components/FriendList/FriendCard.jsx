import css from "./FriendCard.module.css"

const FriendCard = ({ avatar, name, isOnline }) => {
    return (
        <>
            <div className={css.container}>
                <img className={css.img} src={avatar} alt="" />
                <p className={css.name}>{name}</p>
                <p className={isOnline ? css.online : css.offline}>{isOnline ? "Online" : "Offline"}</p>
            </div>
        </>
    )
}

export default FriendCard;