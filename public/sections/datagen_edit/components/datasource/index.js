import { connect } from 'react-redux';
import { Datasource as PresentationComponent } from './datasource';
import { getEditDatasource } from '../../../../store/reducers/datagen_app';
import { updateDatasource, deleteDatasource } from '../../../../store/actions/datagen_edit';

const mapStateToProps = (state) => {
  const datasource = getEditDatasource(state);
  
  return {
    datasource
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (datasource) => {
      dispatch(updateDatasource({datasource}));
    },
    onDelete: () => {
      dispatch(deleteDatasource());
    }
  };
}

export const Datasource = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);