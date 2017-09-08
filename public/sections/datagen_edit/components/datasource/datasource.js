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
import { DatasourceText } from '../datasource_text';
import { DatasourceNumber } from '../datasource_number';

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
      detail
    });
  }

  renderDetail = (type, detail) => {
    switch(type) {
      case 'number':
        return (
          <DatasourceNumber
            detail={detail}
            onChange={this.onDetailChange}
          ></DatasourceNumber>
        );
      default:
        return (
          <DatasourceText
            detail={detail}
            onChange={this.onDetailChange}
          ></DatasourceText>
        );
    }
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
          <KuiFieldText
            name="type"
            value={type}
            onChange={this.onTypeChange}
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