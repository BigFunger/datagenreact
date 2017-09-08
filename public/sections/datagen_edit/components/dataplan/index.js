import { connect } from 'react-redux';
import { Dataplan as PresentationComponent } from './dataplan';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const Dataplan = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);