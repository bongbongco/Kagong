import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCog from '@fortawesome/fontawesome-free-solid/faCog'

const ProfileView = (props, context) => {
    console.log("presenter");
    console.log(props);
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.column}>
                    <img
                        src={require("images/noPhoto.jpg")}
                        className={styles.photo}
                        alt={"profile photo"}
                    />
                </div>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <span className={styles.userId}>
                            {props.userInfo.username}
                        </span>
                        <button className={styles.button}>
                            <span className={styles.buttonName}>
                                {context.t("프로필 편집")}
                            </span>
                        </button>
                        <span className={styles.icon}>
                            <FontAwesomeIcon icon={faCog} size="lg" />
                        </span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.data}>
                            {context.t("게시물")}
                            {props.userInfo.post_count}
                        </span>
                        <span className={styles.data}>
                            {context.t("팔로워")}
                            {props.userInfo.followers_count}
                        </span>
                        <span className={styles.data}>
                            {context.t("팔로우")}
                            {props.userInfo.following_count}
                        </span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.userName}>
                            {props.userInfo.name}
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.menu}>
                    <span>
                        {"게시물"}
                    </span>
                </div>
                <div className={styles.menu}>
                    <span>
                        {"저장됨"}
                    </span>
                </div>
            </div>
        </div>
    );
};

const Profile = (props, context) => {
    return (
        <h1>
        {props.userInfo.id}
        </h1>
    );
}

Profile.propTypes = {
    /*
    userInfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        post_count: PropTypes.number.isRequired,
        followers_count: PropTypes.number.isRequired,
        following_count: PropTypes.number.isRequired,
        images: PropTypes.array
    })
    */
   userInfo: PropTypes.array.isRequired
};

Profile.contextTypes = {
    t: PropTypes.func.isRequired
};

export default Profile;