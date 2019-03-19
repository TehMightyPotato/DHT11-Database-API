var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/entries/:id', (req, res) => {
    const id = req.params.id;
    const details = { 'id': '0' };
    db.collection('entries').find(details).toArray(function(err, result) {
    if (err){
      res.send({ 'error': 'An error has occurred' }); 
    } else {
        res.send(result);
      }
    });
  });
	app.post('/entries', (req, res) => {
		const entry = { id: req.body.id, time: req.body.time, temp: req.body.temp, hum: req.body.hum};
    		db.collection('entries').insertOne(entry, (err, result) => {
      			if (err) { 
        			res.send({ 'error': 'An error has occurred' }); 
      			} else {
        			res.send(result.ops[0]);
      			}
    		});
	});
};
