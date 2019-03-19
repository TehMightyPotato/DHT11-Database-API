const humRoutes = require('./hum_routes');

module.exports = function(app, db) {
	humRoutes(app, db);
};
