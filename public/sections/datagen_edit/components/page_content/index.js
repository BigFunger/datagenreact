import { connect } from 'react-redux';
import { PageContent as PresentationComponent } from './page_content';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const PageContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
