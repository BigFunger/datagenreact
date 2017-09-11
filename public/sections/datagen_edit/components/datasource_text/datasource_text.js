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
  onMethodChange = (event) => {
    this.props.onChange({
      ...this.props,
      method: event.target.value
    });
  }

  onLengthChange = (event) => {
    this.props.onChange({
      ...this.props,
      length: event.target.value
    });
  }

  onCharsetChange = (event) => {
    this.props.onChange({
      ...this.props,
      charset: event.target.value
    });
  }

  onTextChange = (event) => {
    this.props.onChange({
      ...this.props,
      text: event.target.value
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
            onChange={this.onMethodChange}
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
              onChange={this.onLengthChange}
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
              onChange={this.onCharsetChange}
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
            onChange={this.onTextChange}
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