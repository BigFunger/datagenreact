import routes from 'ui/routes';
import React from 'react';
import { render } from 'react-dom';
import { DatagenEdit } from './components/datagen_edit';
import { Provider } from 'react-redux';
import { createIntegratedStore } from '../../store';

routes
.when('/management/elasticsearch/datagenreact/edit/:id', {
  template: '<div id="datagenReactRoot"></div>',
  controller: ($injector) => {
    const store = createIntegratedStore($injector);
    const $route = $injector.get('$route');
    const id = $route.current.params.id;

    render(
      <Provider store={store}>
        <DatagenEdit id={id} />
      </Provider>,
      document.getElementById('datagenReactRoot')
    );
  }
});
