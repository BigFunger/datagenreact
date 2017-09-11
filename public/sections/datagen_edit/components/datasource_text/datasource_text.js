import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiFormRow,
  KuiFieldText,
  KuiSelect,
  KuiFieldNumber
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
      text
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

        <KuiFormRow
          id={makeId('text')}
          label="Text"
        >
          <KuiFieldText
            name="text"
            value={text || ''}
            onChange={this.onChange('text')}
          />
        </KuiFormRow>
      </div>
    );
  }

  static propTypes = {
    text: PropTypes.string,
    charset: PropTypes.string,
    method: PropTypes.string,
    length: PropTypes.number,
    onChange: PropTypes.func
  }
}