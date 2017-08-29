import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  DataplansHeader,
  DataplansBody
} from '../../components';
import {
  KuiTable
} from 'ui_framework/components';

export class Dataplans extends React.Component {
  render = () => {
    return (
      <KuiTable>
        <DataplansHeader />
        <DataplansBody />
      </KuiTable>
    );
  }
}
