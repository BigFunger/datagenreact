import { connect } from 'react-redux';
import { DatasourceNumber as PresentationComponent } from './datasource_number';

const mapStateToProps = (state, props) => {
  const {
    detail: {
      type,
      rangeMin,
      rangeMax,
      scalingFactor
    }
  } = props;
  
  return {
    type,
    rangeMin,
    rangeMax,
    scalingFactor
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatasourceNumber = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);