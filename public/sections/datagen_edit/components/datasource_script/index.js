import { connect } from 'react-redux';
import { DatasourceScript as PresentationComponent } from './datasource_script';

const mapStateToProps = (state, props) => {
  const {
    detail: {
      script
    }
  } = props;
  
  return {
    script: script || ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatasourceScript = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);