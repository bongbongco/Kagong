import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
    state = {
        loading: true,
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        post_count: PropTypes.number.isRequired,
        followers_count: PropTypes.number.isRequired,
        following_count: PropTypes.number.isRequired,
        images: PropTypes.array
    };
    static propTypes = {
        getProfile: PropTypes.func.isRequired
    }
    componentDidMount() {
        const { getProfile } = this.props;
        getProfile();
    }
    componentWillReceiveProps = nextProps => {
        if(nextProps.userInfo) {
            this.setState({
                loading: false,
                username: nextProps.userInfo.username,
                name: nextProps.userInfo.name,
                profile_image: nextProps.userInfo.profile_image,
                post_count: nextProps.userInfo.post_count,
                followers_count: nextProps.userInfo.followers_count,
                following_count: nextProps.userInfo.following_count,
                images: nextProps.userInfo.images
            });
        }
        
    };
    render() {
        return (
            <Profile
                {...this.state} 
            />
        );
    }
}

export default Container;