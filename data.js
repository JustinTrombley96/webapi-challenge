const router = require('express').Router();

let people = [
	{
		id   : 1,
		name : 'Hopper',
	},
	{
		id   : 2,
		name : 'Joyce',
	},
	{
		id   : 3,
		name : 'Eleven',
	},
];
let chores = [
	{
		chore_id    : 1,
		description : 'Clean the Upside Down',
		assignedTo  : 1,
		completed   : 'false',
	},
	{
		chore_id    : 2,
		description : 'Buy Eggos',
		assignedTo  : 3,
		completed   : 'false',
	},
	{
		chore_id    : 3,
		description : 'Magnets',
		assignedTo  : 2,
		completed   : 'false',
	},
	{
		chore_id    : 4,
		description : 'Find Will',
		assignedTo  : 2,
		completed   : 'false',
	},
	{
		chore_id    : 5,
		description : 'Get a new shirt',
		assignedTo  : 1,
		completed   : 'false',
	},
];

router.get('/chores', (req, res) => {
	res.status(200).json(chores);
});
router.get('/people', (req, res) => {
	res.status(200).json(people);
});
router.get('/people/chores/:id', (req, res) => {
	const id = req.params.id;
	if (id) {
		res.status(200).json(chores.description);
	}
});

module.exports = router;
