import routes from 'ui/routes';
import React from 'react';
import './styles.less';
import { render } from 'react-dom';
import { DatagenEdit } from './components/datagen_edit';
import { Provider } from 'react-redux';
import { createIntegratedStore } from '../../store';

const template = '<div id="datagenReactRoot"></div>';

const controller = ($injector) => {
  const store = createIntegratedStore($injector);
  const $route = $injector.get('$route');
  const { id } = $route.current.params;

  render(
    <Provider store={store}>
      <DatagenEdit id={id} />
    </Provider>,
    document.getElementById('datagenReactRoot')
  );
};

routes
.when('/management/elasticsearch/datagenreact/edit/:id', {
  template,
  controller
})
.when('/management/elasticsearch/datagenreact/edit', {
  template,
  controller
});
