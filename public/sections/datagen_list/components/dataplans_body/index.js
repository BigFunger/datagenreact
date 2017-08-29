import { connect } from 'react-redux';
import { DataplansBody as PresentationComponent } from './dataplans_body';

const mapStateToProps = (state) => {
  const { 
    datagenList: {
      filteredDataplans
    }
  } = state;

  return {
    dataplans: filteredDataplans
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DataplansBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
