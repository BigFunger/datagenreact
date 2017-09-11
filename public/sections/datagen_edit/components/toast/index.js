import { connect } from 'react-redux';
import { Toast as PresentationComponent } from './toast';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const BottomBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
