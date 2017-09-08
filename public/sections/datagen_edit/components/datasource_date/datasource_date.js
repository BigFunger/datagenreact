import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiFormRow,
  KuiSelect
} from 'ui_framework/components';

export class DatasourceDate extends React.Component {
  onMethodChange = (event) => {
    this.props.onChange({
      ...this.props,
      method: event.target.value
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['datasource']);
    const { method } = this.props;

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
              { value: 'now', text: 'Now' },
              { value: 'value', text: 'Static value' },
              { value: 'range', text: 'Date Range' }
            ]}
          />
        </KuiFormRow>
      </div>
    );
  }

  static propTypes = {
    method: PropTypes.string,
    onChange: PropTypes.func
  }
}