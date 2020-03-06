const fetch = require("node-fetch");

const getCatalogItems = async queryData => {
    const url = `${process.env.BASE_URL}/items/?q=${queryData}`;
	const headers = {
        "Content-Type": "application/json"
	};
	try {
        const res = await fetch(url, headers);
		const data = await res.json();
		return data;
	} catch (err) {
		return console.log(err);
	}
};

module.exports = async (_, {q}) => {
	const data = await getCatalogItems(q);
	return data;
};
