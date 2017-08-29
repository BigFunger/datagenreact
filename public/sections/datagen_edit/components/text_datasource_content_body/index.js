import { connect } from 'react-redux';
import { TextDatasourceContentBody as PresentationComponent } from './text_datasource_content_body';

const mapStateToProps = (state) => {
  const {
    datagenEdit: {
      datasource: {
        id,
        field,
        method,
        length,
        charset,
        analyzer,
        searchAnalyzer,
        searchQuoteAnalyzer
      }
    }
  } = state;
  return {
    id,
    field,
    method,
    length,
    charset,
    analyzer,
    searchAnalyzer,
    searchQuoteAnalyzer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const TextDatasourceContentBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
