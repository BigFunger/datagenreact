import React from 'react';
import PropTypes from 'prop-types';
import {
  KuiBottomBar,
  KuiFlexGroup,
  KuiFlexItem,
  KuiButton,
  KuiButtonEmpty
} from 'ui_framework/components';

export class BottomBar extends React.Component {
  render = () => {
    const {
      bottomBarVisible,
      onSave,
      onDiscard
    } = this.props;

    if (!bottomBarVisible) {
      return null;
    }

    return (
      <KuiBottomBar>
        <KuiFlexGroup>
          <KuiFlexItem />
          <KuiFlexItem grow={false}>
            <KuiFlexGroup gutterSize="small">
              <KuiFlexItem>
                <KuiButtonEmpty
                  type="ghost"
                  size="small"
                  iconType="check"
                  onClick={onSave}
                >
                  Save
                </KuiButtonEmpty>
              </KuiFlexItem>
              <KuiFlexItem>
                <KuiButtonEmpty
                  type="ghost"
                  size="small"
                  iconType="cross"
                  onClick={onDiscard}
                >
                  Discard
                </KuiButtonEmpty>
              </KuiFlexItem>
            </KuiFlexGroup>
          </KuiFlexItem>
        </KuiFlexGroup>
      </KuiBottomBar>
    );
  }
  
  static propTypes = {
    onSave: PropTypes.func,
    onDiscard: PropTypes.func
  }
}