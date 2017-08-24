import { connect } from 'react-redux';
import { KuiPagerText as PresentationComponent } from '../../../../components/pager_text';

const mapStateToProps = (state) => {
  const {
    datagenList: {
      dataplans,
      table: {
        startItem,
        endItem
      }
    }
  } = state;

  const totalItems = dataplans.length;

  return {
    startItem,
    endItem,
    totalItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export const KuiPagerText = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);
