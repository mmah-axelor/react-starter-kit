import configureStore from './configureStore';

let store = null;

export default = (...options) => {
  if (store === null) {
    store = configureStore(...options);
  }
  return store;
}
