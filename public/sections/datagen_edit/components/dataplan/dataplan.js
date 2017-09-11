import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiForm,
  KuiFormRow,
  KuiFieldText,
  KuiFieldNumber
} from 'ui_framework/components';

export class Dataplan extends React.Component {
  onIndexNameChange = (event) => {
    this.props.onChange({
      ...this.props,
      indexName: event.target.value
    });
  }

  onTypeNameChange = (event) => {
    this.props.onChange({
      ...this.props,
      typeName: event.target.value
    });
  }

  onNumberOfDocumentsChange = (event) => {
    this.props.onChange({
      ...this.props,
      numberOfDocuments: event.target.value
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['datasource']);
    const {
      indexName,
      typeName,
      numberOfDocuments
    } = this.props;

    return (
      <KuiForm>
        <KuiFormRow
          id={makeId('indexName')}
          label="Index Name"
        >
          <KuiFieldText
            name="indexName"
            value={indexName || ''}
            onChange={this.onIndexNameChange}
          />
        </KuiFormRow>

        <KuiFormRow
          id={makeId('typeName')}
          label="Type Name"
        >
          <KuiFieldText
            name="typeName"
            value={typeName || ''}
            onChange={this.onTypeNameChange}
          />
        </KuiFormRow>

        <KuiFormRow
          id={makeId('numberOfDocuments')}
          label="Document Count"
          helpText="The number of documents to generate"
        >
          <KuiFieldNumber
            name="numberOfDocuments"
            min={1}
            value={numberOfDocuments || ''}
            onChange={this.onNumberOfDocumentsChange}
          />
        </KuiFormRow>
      </KuiForm>
    );
  }
}