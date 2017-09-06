import { connect } from 'react-redux';
import { DatasourceList as PresentationComponent } from './datasource_list';
import { datagenEditLoadDatasource } from '../../../../store/actions/datagen_edit';
import { getAllDatasources } from '../../../../store/reducers/datagen_app';

const mapStateToProps = (state) => {
  const datasources = getAllDatasources(state);

  return {
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