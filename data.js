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
		completed   : true,
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
	const completed = req.query.completed || 'completed';
	// const response = chores.sort((a, b) => (a[completed] < b[completed] ? -1 : 1));
	if (completed) {
		const filter = completed === 'true' ? true : false;
		const result = chores.filter(chore => chore.completed === filter);
		res.status(200).json(result);
	} else {
		res.status(200).json(chores);
	}
});
router.get('/people', (req, res) => {
	res.status(200).json(people);
});
router.get('/people/chores/:id', (req, res) => {
	const personId = Number(req.params.id);
	const choreDescription = req.body.description;
	if (personId && !choreDescription) {
		const chore = chores.filter(chore => chore.assignedTo === personId);
		res.status(200).json(chore);
	} else {
		res.status(404).json({
			message : 'This specific ID does not exist.',
		});
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
	const choreId = Number(req.params.id);
	req.body.id = choreId;
	const correctId = chores.findIndex(chore => chore.id === choreId);
	if (correctId !== -1) {
		chores.splice(correctId, 1, req.body);
		res.status(200).json({ message: 'You successfully changed the data.' });
	} else {
		res.status(404).json({ message: 'This chore could not be changed.' });
	}
});
router.delete('/chores/:id', (req, res) => {
	const choreId = Number(req.params.id);
	req.body.id = choreId;
	const correctId = chores.findIndex(chore => chore.id === choreId);
	if (correctId != -1) {
		chores.splice(correctId, 1);
		res.status(201).json({ message: 'You have successfully deleted this chore.' });
	} else {
		res.status(404).json({ message: 'This chore could not be deleted.' });
	}
});

module.exports = router;
