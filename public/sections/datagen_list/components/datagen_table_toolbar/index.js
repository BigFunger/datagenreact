import { connect } from 'react-redux';
import { DatagenTableToolbar as PresentationComponent } from './datagen_table_toolbar';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatagenTableToolbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
