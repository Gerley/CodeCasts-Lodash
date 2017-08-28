fetch('/cervejarias.json')
	.then(res => res.json())
	.then(setCervejarias)

function setCervejarias(list){
	const countries = list.map(c => c.country)
	const qty = _.countBy(countries)
	const base = _.zip(_.keys(qty), _.values(qty))
		.sort((a, b) => a[1] > b[1] ? -1 : 1)
		.map( a => {
			return {country: a[0], quantity: a[1]}
		})
	debugger
}