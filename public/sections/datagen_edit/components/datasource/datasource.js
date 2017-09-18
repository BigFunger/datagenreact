import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiForm,
  KuiFormRow,
  KuiSelect,
  KuiTextArea,
  KuiFieldNumber,
  KuiFieldText,
  KuiButtonEmpty,
  KuiSpacer,
  KuiHorizontalRule
} from 'ui_framework/components';
import {
  DatasourceText,
  DatasourceNumber,
  DatasourceDate,
  DatasourceScript
} from '../../components';

export class Datasource extends React.Component {
  onChange = (field, valueProp = 'value') => (event) => {
    this.props.onChange({
      ...this.props.datasource,
      [field]: event.target[valueProp]
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
      'date': DatasourceDate,
      'script': DatasourceScript
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
        type,
        detail
      },
      onDelete
    } = this.props;

    return (
      <KuiForm>
        <KuiFormRow
          id={makeId('type')}
          label="Datasource type"
        >
          <KuiSelect
            name="type"
            value={type || ''}
            onChange={this.onChange('type')}
            options={[
              { value: 'text', text: 'Text' },
              { value: 'number', text: 'Number' },
              { value: 'date', text: 'Date' },
              { value: 'script', text: 'Script' }
            ]}
          />
        </KuiFormRow>
        {this.renderDetail(type, detail)}
        <KuiHorizontalRule margin="medium" />
        <div>
          <KuiButtonEmpty
            type="danger"
            size="small"
            onClick={() => onDelete(id)}
          >
            Delete
          </KuiButtonEmpty>
        </div>
      </KuiForm>
    );
  }

  static propTypes = {
    datasource: PropTypes.object,
    onChange: PropTypes.func
  }
}