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
    return {
        getProfile: () => {
            dispatch(userActions.getProfile());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);