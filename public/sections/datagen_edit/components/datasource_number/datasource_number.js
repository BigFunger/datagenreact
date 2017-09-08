import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiFormRow,
  KuiFieldNumber
} from 'ui_framework/components';

export class DatasourceNumber extends React.Component {
  onLengthChange = (event) => {
    this.props.onChange({
      ...this.props,
      length: event.target.value
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['datasource']);
    const { length } = this.props;

    return (
      <div>
        <KuiFormRow
          id={makeId('length')}
          label="Length"
        >
          <KuiFieldNumber
            name="length"
            min={1}
            value={length}
            onChange={this.onLengthChange}
          />
        </KuiFormRow>
      </div>
    );
  }

  static propTypes = {
    length: PropTypes.number,
    onChange: PropTypes.func
  }
}