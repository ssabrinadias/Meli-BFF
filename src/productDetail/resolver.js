const fetch = require("node-fetch");

const getDetail = async id => {
	const url = `${process.env.BASE_URL}/items/${id}/description`;
	console.log(url)
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

module.exports = async (_, {id}) => {
	const data = await getDetail(id);
	return data;
};
