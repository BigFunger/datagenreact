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

export class TextDatasourceContentBody extends React.Component {
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
    } = this.props;

    return (
      <KuiPageContentBody>
        <KuiForm>
          <KuiFormRow
            id={makeId('field')}
            label="Field name"
          >
            <KuiFieldText
              name="field"
              value={field}
            />
          </KuiFormRow>
          <KuiFormRow
            id={makeId('method')}
            label="Value source"
          >
            <KuiSelect
              name="method"
              value={method}
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
              helpText={['Line delimited', 'Equal chance of generating each value']}
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
      </KuiPageContentBody>
    );
  }

  static propTypes = {
    id: PropTypes.string
  }
}