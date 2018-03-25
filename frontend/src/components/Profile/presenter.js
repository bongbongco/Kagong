import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import PhotoDisplay from "components/PhotoDisplay";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCog from '@fortawesome/fontawesome-free-solid/faCog'

const Profile = (props, context) => {
    return (
        <div className={styles.profile}>
            {props.loading && <Loading />}
            {!props.loading && (
                <div className={styles.container}>
                    <UserInformation 
                        username={props.username}
                        name={props.name}
                        profile_image={props.profile_image}
                        post_count={props.post_count}
                        followers_count={props.followers_count}
                        following_count={props.following_count}
                    />
                    <div className={styles.section}>
                        <div className={styles.activity}>
                            <div className={styles.title}>
                                <span className={styles.menu}>
                                    {"게시물"}
                                </span>
                            </div>
                            <div className={styles.photo}>
                                <UserActivity
                                    images={props.images}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                )}
        </div>
    );
};

const UserInformation = (props, context) => (
    <div className={styles.section}>
        <div className={styles.column}>
            <img
                src={props.profile_image || require("images/noPhoto.jpg")}
                className={styles.photo}
                alt={"profile"}
            />
        </div>
        <div className={styles.column}>
            <div className={styles.row}>
                <span className={styles.userId}>
                    {props.username}
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
                    {" "}
                    {props.post_count}
                </span>
                <span className={styles.data}>
                    {context.t("팔로워")}
                    {" "}
                    {props.followers_count}
                </span>
                <span className={styles.data}>
                    {context.t("팔로우")}
                    {" "}
                    {props.following_count}
                </span>
            </div>
            <div className={styles.row}>
                <span className={styles.userName}>
                    {props.name}
                </span>
            </div>
        </div>
    </div>
);

const UserActivity = props => 
    props.images.map(photo => (
        <PhotoDisplay photo={photo} key={photo.id} />
        )
    );

UserInformation.propTypes = {
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    post_count: PropTypes.number.isRequired,
    followers_count: PropTypes.number.isRequired,
    following_count: PropTypes.number.isRequired,
    images: PropTypes.array
};

UserInformation.contextTypes = {
    t: PropTypes.func.isRequired
};

export default Profile;