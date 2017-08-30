import { connect } from 'react-redux';
import { ActionButtons as PresentationComponent } from './action_buttons';
import { datagenFetchDataplans } from '../../../../store/actions/datagen_list';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRefresh: (field) => {
      dispatch(datagenFetchDataplans());
    }
  };
}

export const ActionButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
