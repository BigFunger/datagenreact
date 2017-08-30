import { connect } from 'react-redux';
import { DataplansBody as PresentationComponent } from './dataplans_body';
import { getFilteredDataplans } from '../../../../store/reducers/datagen_app';

const mapStateToProps = (state) => {
  return {
    dataplans: getFilteredDataplans(state) || []
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DataplansBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
