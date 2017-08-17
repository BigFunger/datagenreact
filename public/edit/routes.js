// import routes from 'ui/routes';
// import { Dataplan } from 'plugins/datagenreact/lib/dataplan';
// import datasourceRegistryProvider from 'plugins/datagenreact/datasource_registry';
// import { DatagenProvider } from 'plugins/datagenreact/service';

// routes
// .when('/management/elasticsearch/datagenreact/', {
//   template: '<datagen-edit></datagen-edit>',
//   resolve: {
//     init: (Private) => {
//       const service = Private(DatagenProvider);
//       return service.init();
//     },
//     dataplan: (Private) => {
//       const datasourceRegistry = Private(datasourceRegistryProvider);

//       const dataplan = new Dataplan(datasourceRegistry);
//       window.dataplan = dataplan;
//       return dataplan;
//     }
//   }
// });
