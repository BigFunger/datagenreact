import { connect } from 'react-redux';
import { DatagenTable as PresentationComponent } from './datagen_table';

const mapStateToProps = (state) => {
  const { 
    datagenList: {
      filteredDataplans
    }
  } = state;

  return {
    filteredDataplans
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatagenTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
