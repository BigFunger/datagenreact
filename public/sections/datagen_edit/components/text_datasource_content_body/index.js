import { connect } from 'react-redux';
import { TextDatasourceContentBody as PresentationComponent } from './text_datasource_content_body';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (datasource) => {
      debugger;
      console.log(datasource);
    },
  };
}

export const TextDatasourceContentBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
