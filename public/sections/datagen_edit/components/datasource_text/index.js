import { connect } from 'react-redux';
import { DatasourceText as PresentationComponent } from './datasource_text';

const mapStateToProps = (state, props) => {
  const {
    detail: {
      field,
      analyzer,
      searchAnalyzer,
      searchQuoteAnalyzer,
      charset,
      method,
      length,
      values
    }
  } = props;
  
  return {
    field: field || '',
    analyzer: analyzer || '',
    searchAnalyzer: searchAnalyzer || '',
    searchQuoteAnalyzer: searchQuoteAnalyzer || '',
    charset: charset || '',
    method: method || 'values',
    length: length || '',
    values: values || ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const DatasourceText = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
