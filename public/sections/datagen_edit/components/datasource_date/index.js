import { connect } from 'react-redux';
import { DatasourceDate as PresentationComponent } from './datasource_date';

const mapStateToProps = (state, props) => {
  const {
    detail: {
      method
    }
  } = props;
  
  return {
    method
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatasourceDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);