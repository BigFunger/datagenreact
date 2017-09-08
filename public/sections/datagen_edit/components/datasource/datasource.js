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
  onFieldChange = (event) => {
    this.props.onUpdate({
      ...this.props.datasource,
      field: event.target.value
    });
  }
  
  onTypeChange = (event) => {
    this.props.onUpdate({
      ...this.props.datasource,
      type: event.target.value
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['text']);

    const {
      datasource: {
        id,
        field,
        type
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
      </KuiForm>
    );
  }

  static propTypes = {
    datasource: PropTypes.object,
    onUpdate: PropTypes.func
  }
}