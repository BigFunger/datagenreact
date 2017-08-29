import { connect } from 'react-redux';
import { PageSidebar as PresentationComponent } from './page_sidebar';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const PageSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
