import { connect } from 'react-redux';
import { Datasources as PresentationComponent } from './datasources';
import { addDatasource } from '../../../../store/actions/datagen_edit';
import { getAllDatasources, getEditDatasource } from '../../../../store/reducers/datagen_app';

const mapStateToProps = (state) => {
  const datasources = getAllDatasources(state);
  const datasource = getEditDatasource(state);

  return {
    showEditor: !!datasource,
    totalDatasources: datasources.length
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddDatasouce: () => {
      dispatch(addDatasource());
    }
  };
}

export const Datasources = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);