function render() {
  const productsStore = localStorageUtil.getProducts();
  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

// https://www.npoint.io/docs/9b77ac1496ce0eab7304

fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;

    spinnerPage.handleClear();
    render();
  })
  .catch((error) => {
    spinnerPage.handleClear();
    errorPage.render();
  });
