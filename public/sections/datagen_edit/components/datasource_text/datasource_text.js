import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiFormRow,
  KuiFieldText
} from 'ui_framework/components';

export class DatasourceText extends React.Component {  
  onTextChange = (event) => {
    this.props.onChange({
      ...this.props,
      text: event.target.value
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['datasource']);
    const { text } = this.props;

    return (
      <div>
        <KuiFormRow
          id={makeId('text')}
          label="Text specific field"
        >
          <KuiFieldText
            name="text"
            value={text}
            onChange={this.onTextChange}
          />
        </KuiFormRow>
      </div>
    );
  }

  static propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func
  }
}