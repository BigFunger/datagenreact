import { connect } from 'react-redux';
import { DatasourceNumber as PresentationComponent } from './datasource_number';

const mapStateToProps = (state, props) => {
  const {
    detail: {
      field,
      type,
      rangeMin,
      rangeMax,
      scalingFactor
    }
  } = props;
  
  return {
    field: field || '',
    type: type || '',
    rangeMin: rangeMin || '',
    rangeMax: rangeMax || '',
    scalingFactor: scalingFactor || ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatasourceNumber = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);