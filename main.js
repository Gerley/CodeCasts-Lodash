fetch('/cervejarias.json')
	.then(res => res.json())
	.then(setCervejarias)

function setCervejarias(list){
	const countries = list.map(c => c.country)
	const qty = _.countBy(countries)
	debugger
}