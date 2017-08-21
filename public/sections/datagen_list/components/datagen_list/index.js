import { connect } from 'react-redux';
import { DatagenList as PresentationComponent } from './datagen_list';

const mapStateToProps = (state) => {
  const { dataplans } = state;

  return {
    dataplans
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatagenList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
