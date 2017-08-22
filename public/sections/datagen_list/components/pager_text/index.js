import { connect } from 'react-redux';
import { KuiPagerText as PresentationComponent } from 'plugins/datagenreact/components';

const mapStateToProps = (state) => {
  const {
    startItem,
    endItem,
    dataplans
  } = state.datagenList;

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
