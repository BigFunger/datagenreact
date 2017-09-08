import { connect } from 'react-redux';
import { DatasourceNumber as PresentationComponent } from './datasource_number';

const mapStateToProps = (state, props) => {
  const {
    detail: {
      length
    }
  } = props;
  
  return {
    length
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatasourceNumber = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);