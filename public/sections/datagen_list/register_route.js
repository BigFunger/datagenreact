import routes from 'ui/routes';
import React from 'react';
import { render } from 'react-dom';
import { DatagenList } from './components';
import { Provider } from 'react-redux';
import { createIntegratedStore } from '../../store';

routes
.when('/management/elasticsearch/datagenreact/', {
  template: '<div id="datagenReactRoot"></div>',
  controller: ($injector) => {
    const store = createIntegratedStore($injector);

    render(
      <Provider store={store}>
        <DatagenList />
      </Provider>,
      document.getElementById('datagenReactRoot')
    );
  }
});

