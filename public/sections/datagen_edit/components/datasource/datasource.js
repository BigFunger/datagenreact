import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiForm,
  KuiFormRow,
  KuiSelect,
  KuiTextArea,
  KuiFieldNumber,
  KuiFieldText
} from 'ui_framework/components';
import {
  DatasourceText,
  DatasourceNumber,
  DatasourceDate
} from '../../components';

export class Datasource extends React.Component {
  onFieldChange = (event) => {
    this.props.onChange({
      ...this.props.datasource,
      field: event.target.value
    });
  }
  
  onTypeChange = (event) => {
    this.props.onChange({
      ...this.props.datasource,
      type: event.target.value
    });
  }

  onDetailChange = (detail) => {
    this.props.onChange({
      ...this.props.datasource,
      detail: {...detail}
    });
  }

  renderDetail = (type, detail) => {
    const DetailNodeTypes = {
      'text': DatasourceText,
      'number': DatasourceNumber,
      'date': DatasourceDate
    };
    const DetailNodeType = DetailNodeTypes[type];

    if (!DetailNodeType) {
      return (
        <div>Oops. unknown type of {type}</div>
      );
    }
    
    return (
      <DetailNodeType
        detail={detail}
        onChange={this.onDetailChange}>
      </DetailNodeType>
    );
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['datasource']);
    const {
      datasource: {
        id,
        field,
        type,
        detail
      }
    } = this.props;

    return (
      <KuiForm>
        <KuiFormRow
          id={makeId('type')}
          label="Datasource type"
        >
          <KuiSelect
            name="type"
            value={type}
            onChange={this.onTypeChange}
            options={[
              { value: 'text', text: 'Text' },
              { value: 'number', text: 'Number' },
              { value: 'date', text: 'Date' }
            ]}
          />
        </KuiFormRow>
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
        {this.renderDetail(type, detail)}
      </KuiForm>
    );
  }

  static propTypes = {
    datasource: PropTypes.object,
    onChange: PropTypes.func
  }
}