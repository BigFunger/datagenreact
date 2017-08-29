import { connect } from 'react-redux';
import { ActionButtons as PresentationComponent } from './action_buttons';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const ActionButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
