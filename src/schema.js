const { gql } = require("apollo-server-express");

module.exports = gql`
	type Query {
		catalog(q: String): Catalog
	}
    type Autor {
        name: String
        lastname: String
    }
    type Price {
        currency: String,
        amount: Float,
        decimals: Float
    }
    type Items {
        id: String,
        title: String,
        price: Price,
        picture: String,
        condition: String,
        free_shipping: Boolean
    }
    
	type Catalog {
        autor: Autor,
        categories: [String],
        items: [Items]
	}
`;
