import css from "./Profile.module.css"
import user from "../../userData.json"

const Profile = () => {
    return (
        <>
            <div className={css.container}>
                <div className={css.containerInfo}>
                <img className={css.img} src={user.avatar} alt={user.username} />
                <p className={css.username}>{user.username}</p>
                <p className={css.userInfo}>@{user.tag}</p>
                <p className={css.userInfo}>{user.location}</p>
                </div>
                <ul className={css.statsList}>
                    <li className={css.statsItem}>
                        <span>Followers</span>
                        <span className={css.statNum}>{user.stats.followers}</span>
                    </li>
                    <li className={css.statsItem}>
                        <span>Views</span>
                        <span className={css.statNum}>{user.stats.views}</span>
                    </li>
                    <li className={css.statsItem}>
                        <span>Likes</span>
                        <span className={css.statNum}>{user.stats.likes}</span>
                    </li>
                </ul>
        </div>
        </>
    )
}

export default Profile;