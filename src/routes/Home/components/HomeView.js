import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import R from 'ramda';
import PropTypes from 'prop-types';
import { fetchCurrentUser } from '../../../store/domain/account/actions';
import { fetchUserInstallation, setActiveInstallation } from '../../../store/domain/installation/actions';
import { fetchReports, downloadAdminReport } from '../../../store/domain/report/actions';
import SidebarView from '../../../components/Sidebar/SidebarView';

class HomeView extends Component {

  componentDidMount() {
    this.props.loadUserData();
    const id = R.path(['user', 'id'], this.props);
    this.id = id;
    id && this.props.loadInstallations(this.props.user.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.id !== nextProps.user.id) {
      this.id = nextProps.user.id;
      nextProps.loadInstallations(nextProps.user.id);
    } else if (nextProps.location.pathname === '/home' && nextProps.installations !== null) {
      nextProps.redirectToReport(1, 0);
    }
  }

  render() {
    const {
      installations,
      loadReports,
      user,
      children,
      setActiveInstallationFunc,
      downloadAdminReportFunc,
    } = this.props;

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <SidebarView
              installations={installations}
              loadReports={loadReports}
              user={user}
              setActiveInstallation={setActiveInstallationFunc}
              downloadAdminReport={downloadAdminReportFunc}
            />
          </div>
          <div className='col-md-9'>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  loadUserData: PropTypes.func,
  loadInstallations: PropTypes.func,
  loadReports: PropTypes.func,
  redirectToReport: PropTypes.func,
  setActiveInstallationFunc: PropTypes.func,
  downloadAdminReportFunc: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.string,
  }),
  children: PropTypes.node,
  installations: PropTypes.arrayOf({
    list: PropTypes.array,
    activeInstallation: PropTypes.number,
    activeLocation: PropTypes.number,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};


const mapStateToProps = (store) => ({
  user: store.account.user,
  installations: R.pathOr({}, ['installations'], store),
});

const mapDispatchToProps = dispatch => ({
  loadUserData: () => dispatch(fetchCurrentUser()),
  loadInstallations: userId => dispatch(fetchUserInstallation(userId)),
  loadReports: userId => dispatch(fetchReports(userId)),
  redirectToReport: (installationId, providerId) => dispatch(push(`/home/report/${installationId}/${providerId}`)),
  setActiveInstallationFunc: (installationId, locationId) =>
    dispatch(setActiveInstallation(installationId, locationId)),
  downloadAdminReportFunc: () => dispatch(downloadAdminReport()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);
