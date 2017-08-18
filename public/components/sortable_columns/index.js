import { connect } from 'react-redux';
import { SortableColumns as PresentationComponent } from './sortable_columns';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const SortableColumns = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
