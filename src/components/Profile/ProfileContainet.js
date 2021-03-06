import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = this.props.authorizedUserId;
    }
    // 24084
    this.props.getUserProfile(profileId);
    this.props.getStatus(profileId);
  }
  render() {
    return (
      <Profile  {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}

// connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent));


export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect)
  (ProfileContainer)
