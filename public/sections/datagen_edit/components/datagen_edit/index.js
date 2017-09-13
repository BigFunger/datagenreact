import { connect } from 'react-redux';
import { DatagenEdit as PresentationComponent } from './datagen_edit';
import { load } from '../../../../store/actions/datagen_edit';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  const { id } = props;

  return {
    onLoad: (field) => {
      dispatch(load({ id }));
    }
  };
}

export const DatagenEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
