const { gql } = require("apollo-server-express");

module.exports = gql`
	type Query {
		catalog(q: String): Catalog
        product(id: String): Product
        productDescription(id: String): Description
	}
    type Autor {
        name: String
        lastname: String
    }
    type Price {
        currency: String,
        amount: Float,
        decimal: Float
    }
    type State {
        name: String,
        id: String
    }
    
    type Items {
        id: String,
        title: String,
        price: Price,
        picture: String,
        condition: String,
        free_shipping: Boolean,
        state: State,
    }
    # replicated to maintain the data contract
    type Item {
        id: String,
        title: String,
        price: Price,
        picture: String,
        condition: String,
        free_shipping: Boolean,
        sold_quantity: Int,
        state: State,
    }
	type Catalog {
        autor: Autor,
        categories: [String],
        items: [Items],
        error: String
	}
	type Product {
        autor: Autor,
        item: Item
	}
	type Description {
        description: String,
	}
`;
