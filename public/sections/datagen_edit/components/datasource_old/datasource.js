import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiPageContentBody,
  KuiForm,
  KuiFormRow,
  KuiSelect,
  KuiTextArea,
  KuiFieldNumber,
  KuiFieldText
} from 'ui_framework/components';

export class Datasource extends React.Component {
  constructor(...args) {
    super(...args);

    console.log('constructor firing', { ...this.props });

    this.state = {
      id: '',
      field: '',
      method: '',
      length: '',
      charset: '',
      analyzer: '',
      searchAnalyzer: '',
      searchQuoteAnalyzer: ''
    };
  }

  onFieldChange = (event) => {
    this.setState({
      ...this.state,
      field: event.target.value
    });
  }
  
  onMethodChange = (event) => {
    this.setState({
      ...this.state,
      method: event.target.value
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['text']);
    const {
      id,
      field,
      method,
      length,
      charset,
      analyzer,
      searchAnalyzer,
      searchQuoteAnalyzer
    } = this.state;

    const {
      datasource
    } = this.props;

    console.log({ ...datasource });

    return (
      <KuiForm>
        <KuiFormRow
          id={makeId('field')}
          label="Field name"
        >
          <KuiFieldText
            name="field"
            value={field}
            onChange={this.onFieldChange}
          />
        </KuiFormRow>
        <KuiFormRow
          id={makeId('method')}
          label="Value source"
        >
          <KuiSelect
            name="method"
            value={method}
            onChange={this.onMethodChange}
            options={[
              { value: 'random', text: 'Randomly generated' },
              { value: 'values', text: 'Values' }
            ]}
          />
        </KuiFormRow>
        { method === 'values' && (
          <KuiFormRow
            id={makeId('values')}
            label="Values"
            helpText="Line delimited; equal chance of generating each value"
          >
            <KuiTextArea name="values"/>
          </KuiFormRow>
        ) }
        { method === 'random' && (
          <KuiFormRow
            id={makeId('length')}
            label="Length"
          >
            <KuiFieldNumber
              name="length"
              min={1}
            />
          </KuiFormRow>
        )}
        { method === 'random' && (
          <KuiFormRow
            id={makeId('charset')}
            label="Character set"
          >
            <KuiTextArea name="charset"/>
          </KuiFormRow>
        )}
        <KuiFormRow
          id={makeId('analyzer')}
          label="Analyzer"
        >
          <KuiFieldText name="analyzer" />
        </KuiFormRow>
        <KuiFormRow
          id={makeId('searchAnalyzer')}
          label="Search analyzer"
        >
          <KuiFieldText name="searchAnalyzer" />
        </KuiFormRow>
        <KuiFormRow
          id={makeId('searchQuoteAnalyzer')}
          label="Search Quote analyzer"
        >
          <KuiFieldText name="searchQuoteAnalyzer" />
        </KuiFormRow>
      </KuiForm>
    );
  }

  static propTypes = {
    datasource: PropTypes.object
  }
}