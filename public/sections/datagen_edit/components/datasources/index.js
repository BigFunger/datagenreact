import { connect } from 'react-redux';
import { Datasources as PresentationComponent } from './datasources';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const Datasources = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);