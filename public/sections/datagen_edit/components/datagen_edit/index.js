import { connect } from 'react-redux';
import { DatagenEdit as PresentationComponent } from './datagen_edit';
import { load, newDataplan } from '../../../../store/actions/datagen_edit';
import { v4 } from 'node-uuid';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  const { id } = props;

  return {
    onLoad: () => {
      if (id) {
        dispatch(load({ id }));
      } else {
        dispatch(newDataplan({ id: v4() }));
      }
    }
  };
}

export const DatagenEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
