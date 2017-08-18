import { connect } from 'react-redux';
import { DatagenTableHeader as PresentationComponent } from './datagen_table_header';

const mapStateToProps = (state) => {
  const { dataplans } = state;

  return {
    dataplans
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatagenTableHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
