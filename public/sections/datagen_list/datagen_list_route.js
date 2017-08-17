import routes from 'ui/routes';
import React from 'react';
import { render } from 'react-dom';
import { DatagenList } from './components/datagen_list';
import { Provider } from 'react-redux';
import { store } from 'plugins/datagenreact/store';

routes
.when('/management/elasticsearch/datagenreact/', {
  template: '<div id="datagenReactRoot"></div>',
  controller: () => {
    render(
      <Provider store={store}>
        <DatagenList />
      </Provider>,
      document.getElementById('datagenReactRoot')
    );
  }
});
