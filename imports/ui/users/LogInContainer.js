import { connect } from 'react-redux';
import { logIn } from '../../actions/accountActions';
import LogIn from './LogIn';

const mapStateToProps = (state, props) => {
    const { userInfo } = state;
    return {
        userInfo
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitLogIn: (username, password) => {
            dispatch(logIn(username, password));
        }
    };
};

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogIn);

export default SignUpContainer;
