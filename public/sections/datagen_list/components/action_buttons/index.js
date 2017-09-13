import { connect } from 'react-redux';
import { ActionButtons as PresentationComponent } from './action_buttons';
import { datagenFetchDataplans } from '../../../../store/actions/datagen_list';
import { kibanaIntegrationUrlChange } from '../../../../store/actions/kibana_integration';
import { kibanaIntegrationNotify } from '../../../../store/actions/kibana_integration';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNotify: () => {
      dispatch(kibanaIntegrationNotify({ message: 'test' }));
    },
    onRefresh: (field) => {
      dispatch(datagenFetchDataplans());
    },
    onNewDataplan: () => {
      const url = '/management/elasticsearch/datagenreact/edit';
      dispatch(kibanaIntegrationUrlChange({ url }));
    }
  };
}

export const ActionButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationComponent);