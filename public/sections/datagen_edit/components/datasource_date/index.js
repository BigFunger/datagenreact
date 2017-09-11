import { connect } from 'react-redux';
import { DatasourceDate as PresentationComponent } from './datasource_date';

const mapStateToProps = (state, props) => {
  const {
    detail: {
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
    method,
    value,
    startDate,
    endDate,
    applyNormalDistribution,
    initialOffset,
    distributionWindow,
    distributionOffset
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatasourceDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
