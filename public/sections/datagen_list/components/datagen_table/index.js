import { connect } from 'react-redux';
import { DatagenTable as PresentationComponent } from './datagen_table';

const mapStateToProps = (state) => {
  const { dataplans } = state.datagenList;

  return {
    dataplans
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatagenTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
