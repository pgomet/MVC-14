const router = require('./home-routes.js');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);

router.use('/', homeRoutes);

module.exports = router