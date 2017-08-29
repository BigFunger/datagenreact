import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { DataplansHeader } from '../dataplans_header';
import { DataplansBody } from '../dataplans_body';
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
