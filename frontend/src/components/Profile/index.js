import { connect } from "react-redux";
import { actionCreators as userActions } from "redux/modules/user";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
    const { user: { userInfo }, routing: { location } } = state;
    return {
        userInfo,
        location
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { username } } } = ownProps;
    return {
        getProfile: () => {
            dispatch(userActions.getProfile(username));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);