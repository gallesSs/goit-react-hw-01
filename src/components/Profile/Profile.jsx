import css from "./Profile.module.css"

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <>
            <div className={css.container}>
                <div className={css.containerInfo}>
                <img className={css.img} src={avatar} alt={username} />
                <p className={css.username}>{username}</p>
                <p className={css.userInfo}>@{tag}</p>
                <p className={css.userInfo}>{location}</p>
                </div>
                <ul className={css.statsList}>
                    <li className={css.statsItem}>
                        <span>Followers</span>
                        <span className={css.statNum}>{stats.followers}</span>
                    </li>
                    <li className={css.statsItem}>
                        <span>Views</span>
                        <span className={css.statNum}>{stats.views}</span>
                    </li>
                    <li className={css.statsItem}>
                        <span>Likes</span>
                        <span className={css.statNum}>{stats.likes}</span>
                    </li>
                </ul>
        </div>
        </>
    )
}

export default Profile;