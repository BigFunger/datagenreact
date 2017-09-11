import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiFormRow,
  KuiFieldNumber,
  KuiSelect
} from 'ui_framework/components';

export class DatasourceNumber extends React.Component {
  onChange = (field) => (event) => {
    this.props.onChange({
      ...this.props,
      [field]: event.target.value
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['datasource']);
    const {
      type,
      rangeMin,
      rangeMax,
      scalingFactor
    } = this.props;

    return (
      <div>
        <KuiFormRow
          id={makeId('type')}
          label="Numeric Type"
        >
          <KuiSelect
            name="type"
            value={type}
            onChange={this.onChange('type')}
            options={[
              { value: 'long', text: 'long' },
              { value: 'integer', text: 'integer' },
              { value: 'short', text: 'short' },
              { value: 'byte', text: 'byte' },
              { value: 'double', text: 'double' },
              { value: 'float', text: 'float' },
              { value: 'half_float', text: 'half_float' },
              { value: 'scaled_float', text: 'scaled_float' }
            ]}
          />
        </KuiFormRow>

        <KuiFormRow
          id={makeId('rangeMin')}
          label="Range Min"
        >
          <KuiFieldNumber
            name="rangeMin"
            value={rangeMin || ''}
            onChange={this.onChange('rangeMin')}
          />
        </KuiFormRow>

        <KuiFormRow
          id={makeId('rangeMax')}
          label="Range Max"
        >
          <KuiFieldNumber
            name="rangeMax"
            value={rangeMax || ''}
            onChange={this.onChange('rangeMax')}
          />
        </KuiFormRow>

        { type === 'scaled_float' &&
          <KuiFormRow
            id={makeId('scalingFactor')}
            label="Scaling Factor"
          >
            <KuiFieldText
              name="scalingFactor"
              value={scalingFactor || ''}
              onChange={this.onChange('scalingFactor')}
            />
          </KuiFormRow>
        }
      </div>
    );
  }

  static propTypes = {
    type: PropTypes.string,
    rangeMin: PropTypes.number,
    rangeMax: PropTypes.number,
    scalingFactor: PropTypes.string,
    onChange: PropTypes.func
  }
}