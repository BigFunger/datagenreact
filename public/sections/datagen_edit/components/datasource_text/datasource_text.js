import { pick } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiFormRow,
  KuiFieldText,
  KuiSelect,
  KuiFieldNumber,
  KuiTextArea
} from 'ui_framework/components';

export class DatasourceText extends React.Component {
  onChange = (valueField, valueProp = 'value') => (event) => {
    const {
      field,
      method,
      length,
      charset,
      values,
      analyzer,
      searchAnalyzer,
      searchQuoteAnalyzer
    } = this.props;

    this.props.onChange({
      field,
      method,
      length,
      charset,
      values,
      analyzer,
      searchAnalyzer,
      searchQuoteAnalyzer,
      [valueField]: event.target[valueProp]
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['datasource']);
    const {
      field,
      method,
      length,
      charset,
      values,
      analyzer,
      searchAnalyzer,
      searchQuoteAnalyzer
    } = this.props;

    return (
      <div>
        <KuiFormRow
          id={makeId('field')}
          label="Field name"
        >
          <KuiFieldText
            name="field"
            value={field}
            onChange={this.onChange('field')}
          />
        </KuiFormRow>
        <KuiFormRow
          id={makeId('method')}
          label="Value source"
        >
          <KuiSelect
            name="method"
            value={method}
            onChange={this.onChange('method')}
            options={[
              { value: 'random', text: 'Randomly generated' },
              { value: 'values', text: 'Values' }
            ]}
          />
        </KuiFormRow>
        
        { method === 'random' &&
          <KuiFormRow
            id={makeId('length')}
            label="Length"
          >
            <KuiFieldNumber
              name="length"
              min={0}
              value={length}
              onChange={this.onChange('length')}
            />
          </KuiFormRow>
        }

        { method === 'random' &&
          <KuiFormRow
            id={makeId('charset')}
            label="Character set"
          >
            <KuiFieldText
              name="charset"
              value={charset}
              onChange={this.onChange('charset')}
            />
          </KuiFormRow>
        }

        { method === 'values' &&
          <KuiFormRow
            id={makeId('values')}
            label="Values"
            helpText="Line delimited. Equal chance of generating each value"
          >
            <KuiTextArea
              name="values"
              value={values}
              onChange={this.onChange('values')}
            />
          </KuiFormRow>
        }
        
        <KuiFormRow
          id={makeId('analyzer')}
          label="Analyzer"
        >
          <KuiFieldText
            name="analyzer"
            value={analyzer}
            onChange={this.onChange('analyzer')}
          />
        </KuiFormRow>
        
        <KuiFormRow
          id={makeId('searchAnalyzer')}
          label="Search Analyzer"
        >
          <KuiFieldText
            name="searchAnalyzer"
            value={searchAnalyzer}
            onChange={this.onChange('searchAnalyzer')}
          />
        </KuiFormRow>
        
        <KuiFormRow
          id={makeId('searchQuoteAnalyzer')}
          label="Search Quote Analyzer"
        >
          <KuiFieldText
            name="searchQuoteAnalyzer"
            value={searchQuoteAnalyzer}
            onChange={this.onChange('searchQuoteAnalyzer')}
          />
        </KuiFormRow>
      </div>
    );
  }

  static propTypes = {
    field: PropTypes.string,
    analyzer: PropTypes.string,
    searchAnalyzer: PropTypes.string,
    searchQuoteAnalyzer: PropTypes.string,
    charset: PropTypes.string,
    method: PropTypes.string,
    length: PropTypes.number,
    values: PropTypes.string,
    onChange: PropTypes.func
  }
}