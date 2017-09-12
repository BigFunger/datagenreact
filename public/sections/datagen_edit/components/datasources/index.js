import { connect } from 'react-redux';
import { Datasources as PresentationComponent } from './datasources';
import { addDatasource } from '../../../../store/actions/datagen_edit';
import { getAllDatasources } from '../../../../store/reducers/datagen_app';

const mapStateToProps = (state) => {
  const datasources = getAllDatasources(state);

  return {
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