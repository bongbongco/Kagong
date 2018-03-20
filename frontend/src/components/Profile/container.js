import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
    static propTypes = {
        getProfile: PropTypes.func.isRequired,
        userInfo: PropTypes.array
    }
    componentDidMount() {
        const { getProfile } = this.props;
        getProfile();
    }
    render() {
        const { userInfo } = this.props;
        return (
            <Profile 
                userInfo={ userInfo } 
            />
        );
    }
}

export default Container;