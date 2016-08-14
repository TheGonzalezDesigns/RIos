import { connect } from 'react-redux';
import { signUp } from '../../actions/accountActions';
import SignUp from './SignUp';

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitSignUp: (userInfo) => {
            dispatch(signUp(userInfo));
        }
    };
};

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

export default SignUpContainer;
