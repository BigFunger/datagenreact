import { connect } from 'react-redux';
import { Datasource as PresentationComponent } from './datasource';
import { getEditDatasource } from '../../../../store/reducers/datagen_app';
import { updateDatasource } from '../../../../store/actions/datagen_edit';

const mapStateToProps = (state) => {
  const datasource = getEditDatasource(state);

  return {
    datasource
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (datasource) => {
      dispatch(updateDatasource({datasource}));
    }
  };
}

export const Datasource = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);