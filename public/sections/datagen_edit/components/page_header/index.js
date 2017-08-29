import { connect } from 'react-redux';
import { PageHeader as PresentationComponent } from './page_header';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const PageHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
