const CatalogResolver = require("./catalog/resolver");

module.exports = {
	Query: {
		catalog: CatalogResolver
	}
};
