import { connect } from 'react-redux';
import { DatasourceDate as PresentationComponent } from './datasource_date';

const mapStateToProps = (state, props) => {
  const {
    detail: {
      field,
      method,
      value,
      startDate,
      endDate,
      applyNormalDistribution,
      initialOffset,
      distributionWindow,
      distributionOffset
    }
  } = props;
  
  return {
    field: field || '',
    method: method || '',
    value: value || '',
    startDate: startDate || '',
    endDate: endDate || '',
    applyNormalDistribution: applyNormalDistribution || '',
    initialOffset: initialOffset || '',
    distributionWindow: distributionWindow || '',
    distributionOffset: distributionOffset || ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatasourceDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
