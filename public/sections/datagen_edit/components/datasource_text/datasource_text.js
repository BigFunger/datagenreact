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
  onChange = (field) => (event) => {
    this.props.onChange({
      ...this.props,
      [field]: event.target.value
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['datasource']);
    const {
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
              value={length || ''}
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
              value={charset || ''}
              onChange={this.onChange('charset')}
            />
          </KuiFormRow>
        }

        { method === 'values' &&
          <KuiFormRow
            id={makeId('values')}
            label="Values"
            helpText="Equal chance of generating each value"
          >
            <KuiTextArea
              name="values"
              value={values || ''}
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
            value={analyzer || ''}
            onChange={this.onChange('analyzer')}
          />
        </KuiFormRow>
        
        <KuiFormRow
          id={makeId('searchAnalyzer')}
          label="Search Analyzer"
        >
          <KuiFieldText
            name="searchAnalyzer"
            value={searchAnalyzer || ''}
            onChange={this.onChange('searchAnalyzer')}
          />
        </KuiFormRow>
        
        <KuiFormRow
          id={makeId('searchQuoteAnalyzer')}
          label="Search Quote Analyzer"
        >
          <KuiFieldText
            name="searchQuoteAnalyzer"
            value={searchQuoteAnalyzer || ''}
            onChange={this.onChange('searchQuoteAnalyzer')}
          />
        </KuiFormRow>
      </div>
    );
  }

  static propTypes = {
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