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

    const {
      datasource: {
        id,
        type,
        field
      }
    } = this.props;

    this.state = {
      id,
      type,
      field
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      datasource: {
        id,
        type,
        field
      }
    } = nextProps;

    this.setState({
      ...this.state,
      id,
      type,
      field
    });
  }

  onFieldChange = (event) => {
    this.setState({
      ...this.state,
      field: event.target.value
    });
  }
  
  onTypeChange = (event) => {
    this.setState({
      ...this.state,
      type: event.target.value
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['text']);
    const {
      datasource
    } = this.props;

    const {
      id,
      field,
      type
    } = this.state;

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
    datasource: PropTypes.object
  }
}