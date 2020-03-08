const CatalogResolver = require("./catalog/resolver");
const ProductResolver = require("./product/resolver");

module.exports = {
	Query: {
		catalog: CatalogResolver,
		product: ProductResolver
	}
};
