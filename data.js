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
		id          : 1,
		description : 'Clean the Upside Down',
		assignedTo  : 1,
		completed   : false,
	},
	{
		id          : 2,
		description : 'Buy Eggos',
		assignedTo  : 3,
		completed   : false,
	},
	{
		id          : 3,
		description : 'Magnets',
		assignedTo  : 2,
		completed   : false,
	},
	{
		id          : 4,
		description : 'Find Will',
		assignedTo  : 2,
		completed   : false,
	},
	{
		id          : 5,
		description : 'Get a new shirt',
		assignedTo  : 1,
		completed   : false,
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
		res.status(200).json();
	}
});
router.post('/chores', (req, res) => {
	newChore = req.body;
	if (req.body.description && req.body.completed && req.body.id && req.body.assignedTo) {
		chores.push(newChore);
		res.status(200).json(newChore);
	} else {
		res.status(400).json({ message: 'You must have a id, description assignedTo, and completed.' });
	}
});
router.put('/chores/:id', (req, res) => {
	
});
router.delete('/chores/:id', (req, res) => {
	const choreId = req.params.id;
	if (choreId) {
		chores.splice(choreId, 1);
		res.status(201).json({ message: 'You have successfully deleted this chore.' });
	} else {
		res.stasstus(404).json({ message: 'This chore could not be deleted.' });
	}
});

module.exports = router;
