import { pick } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { createHtmlIdGenerator } from '../../../../lib/html_id_generator';
import {
  KuiFormRow,
  KuiSelect,
  KuiFieldText,
  KuiSwitch,
  KuiFieldNumber
} from 'ui_framework/components';

export class DatasourceDate extends React.Component {
  onChange = (field, valueProp = 'value') => (event) => {
    this.props.onChange({
      ...pick(this.props, [
        'method',
        'value',
        'startDate',
        'endDate',
        'applyNormalDistribution',
        'initialOffset',
        'distributionWindow',
        'distributionOffset'
      ]),
      [field]: event.target[valueProp]
    });
  }

  render = () => {
    const makeId = createHtmlIdGenerator(['datasource']);
    const {
      method,
      value,
      startDate,
      endDate,
      applyNormalDistribution,
      initialOffset,
      distributionWindow,
      distributionOffset
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
              { value: 'now', text: 'Now' },
              { value: 'value', text: 'Static value' },
              { value: 'range', text: 'Date Range' }
            ]}
          />
        </KuiFormRow>
        
        { method === 'value' &&
          <KuiFormRow
            id={makeId('value')}
            label="Date"
          >
            <KuiFieldText
              name="value"
              value={value || ''}
              onChange={this.onChange('value')}
            />
          </KuiFormRow>
        }
        
        { method === 'range' &&
          <KuiFormRow
            id={makeId('startDate')}
            label="Start Date"
          >
            <KuiFieldText
              name="startDate"
              value={startDate || ''}
              onChange={this.onChange('startDate')}
            />
          </KuiFormRow>
        }
        
        { method === 'range' &&
          <KuiFormRow
            id={makeId('endDate')}
            label="End Date"
          >
            <KuiFieldText
              name="endDate"
              value={endDate || ''}
              onChange={this.onChange('endDate')}
            />
          </KuiFormRow>
        }
        
        { method === 'range' &&
          <KuiFormRow
            id={makeId('applyNormalDistribution')}
          >
            <KuiSwitch
              label="Apply Normal Distribution"
              checked={applyNormalDistribution || false}
              onChange={this.onChange('applyNormalDistribution', 'checked')}
            />
          </KuiFormRow>
        }

        { method === 'range' &&
          applyNormalDistribution &&
          <KuiFormRow
            id={makeId('initialOffset')}
            label="Initial Offset"
          >
            <KuiFieldNumber
              name="initialOffset"
              value={initialOffset || ''}
              onChange={this.onChange('initialOffset')}
            />
          </KuiFormRow>
        }

        { method === 'range' &&
          applyNormalDistribution &&
          <KuiFormRow
            id={makeId('distributionWindow')}
            label="Distribution Window"
          >
            <KuiFieldNumber
              name="distributionWindow"
              value={distributionWindow || ''}
              onChange={this.onChange('distributionWindow')}
            />
          </KuiFormRow>
        }

        { method === 'range' &&
          applyNormalDistribution &&
          <KuiFormRow
            id={makeId('distributionOffset')}
            label="Offset"
          >
            <KuiFieldNumber
              name="distributionOffset"
              value={distributionOffset || ''}
              onChange={this.onChange('distributionOffset')}
            />
          </KuiFormRow>
        }
      </div>
    );
  }

  static propTypes = {
    method: PropTypes.string,
    value: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    applyNormalDistribution: PropTypes.bool,
    initialOffset: PropTypes.number,
    distributionWindow: PropTypes.number,
    distributionOffset: PropTypes.number,
    onChange: PropTypes.func
  }
}