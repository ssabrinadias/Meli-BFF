const CatalogResolver = require("./catalog/resolver");
const ProductResolver = require("./product/resolver");
const DescriptionResolver = require("./productDetail/resolver");

module.exports = {
	Query: {
		catalog: CatalogResolver,
		product: ProductResolver,
		productDescription: DescriptionResolver
	}
};
