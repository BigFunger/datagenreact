import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiTitle,
  KuiSideNav,
  KuiFlexGroup,
  KuiFlexItem,
  KuiHorizontalRule,
  KuiButton
} from 'ui_framework/components';
import {
  Datasource,
  PageSidebar
} from '../../components';

export class Datasources extends React.Component {
  render = () => {
    const {
      showEditor,
      totalDatasources,
      onAddDatasouce
    } = this.props;

    return (
      <div>
        <KuiFlexGroup>
          <KuiFlexItem>
            <KuiTitle size="small">
              <h2>{totalDatasources} Data { totalDatasources === 1 ? 'source' : 'sources'}</h2>
            </KuiTitle>
          </KuiFlexItem>
          <KuiFlexItem grow={false}>
            <KuiFlexGroup gutterSize="small">
              <KuiFlexItem>
                <KuiButton
                  size="small"
                  onClick={onAddDatasouce}
                >
                  Add data source
                </KuiButton>
              </KuiFlexItem>
            </KuiFlexGroup>
          </KuiFlexItem>
        </KuiFlexGroup>
        <KuiHorizontalRule margin="medium" />
        <KuiFlexGroup>
          <KuiFlexItem grow={false} style={{width: 200}}>
            <PageSidebar />
          </KuiFlexItem>
          <KuiFlexItem>
            {showEditor && <Datasource />}
          </KuiFlexItem>
        </KuiFlexGroup>
      </div>
    );
  }

  static propTypes = {
    showEditor: PropTypes.bool,
    totalDatasources: PropTypes.number,
    onAddDatasouce: PropTypes.func
  }
}