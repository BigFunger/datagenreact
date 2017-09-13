import { connect } from 'react-redux';
import { ActionButtons as PresentationComponent } from './action_buttons';
import { generateData } from '../../../../store/actions/datagen_edit';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenerate: () => {
      dispatch(generateData());
    }
  };
}

export const ActionButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);