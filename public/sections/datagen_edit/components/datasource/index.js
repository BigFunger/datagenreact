import { connect } from 'react-redux';
import { Datasource as PresentationComponent } from './datasource';
import { getEditDatasource } from '../../../../store/reducers/datagen_app';

const mapStateToProps = (state) => {
  const datasource = getEditDatasource(state);

  return {
    datasource
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const Datasource = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);