import { pick } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiFormRow,
  KuiTextArea
} from 'ui_framework/components';

export class DatasourceScript extends React.Component {
  onChange = (valueField, valueProp = 'value') => (event) => {
    const {
      script
    } = this.props;

    this.props.onChange({
      script,
      [valueField]: event.target[valueProp]
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['datasource']);
    const {
      script
    } = this.props;

    return (
      <div>
        <KuiFormRow
          id={makeId('script')}
          label="Script"
          helpText="Will be executed using a eval() statement. Has access to the body object, and the last javascript statement should evaluate a new body object. Can not use ES6 syntax."
        >
          <KuiTextArea
            name="script"
            value={script}
            onChange={this.onChange('script')}
          />
        </KuiFormRow>
      </div>
    );
  }

  static propTypes = {
    script: PropTypes.string,
    onChange: PropTypes.func
  }
}