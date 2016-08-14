import { connect } from 'react-redux';
import { checkLogInStatusFetch } from '../actions/actions';
import { logout } from '../actions/accountActions';
import App from './App';

const mapStateToProps = (state, props) => {
    const { userInfo } = state;
    return {
        userInfo
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: function() {
            dispatch(logout());
        }
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
