import { connect } from 'react-redux';
import { DatasourceText as PresentationComponent } from './datasource_text';

const mapStateToProps = (state, props) => {
  const {
    detail: {
      text
    }
  } = props;
  
  return {
    text
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatasourceText = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);