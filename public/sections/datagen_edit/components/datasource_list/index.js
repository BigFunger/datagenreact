import { connect } from 'react-redux';
import { DatasourceList as PresentationComponent } from './datasource_list';
import { datagenEditLoadDatasource } from '../../../../store/actions/datagen_edit';
import { getAllDatasources, getEditDatasource } from '../../../../store/reducers/datagen_app';

const mapStateToProps = (state) => {
  const datasources = getAllDatasources(state);
  const datasource = getEditDatasource(state);

  const currentDatasourceId = datasource ? datasource.id : null;

  return {
    currentDatasourceId,
    datasources
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDatasourceClicked: (id) => {
      dispatch(datagenEditLoadDatasource({ id }));
    }
  };
}

export const DatasourceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);