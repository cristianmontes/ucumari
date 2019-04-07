var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Hola Crisito montes y Jennifer' });
});
router.get('/recibidos', function(req, res, next) {
  res.render('partials/mails', { title: 'Recibidos', valor2: 'valorcito2' });
});

router.get('/enviados', function(req, res, next) {
  res.render('partials/mails', { title: 'Enviados', valor2: 'valorcito2' });
});

router.get('/borrador', function(req, res, next) {
  res.render('partials/mails', { title: 'Borrador', valor2: 'valorcito2' });
});

router.get('/spam', function(req, res, next) {
  res.render('partials/mails', { title: 'Spam', valor2: 'valorcito2' });
});
router.get('/papelera', function(req, res, next) {
  res.render('partials/mails', { title: 'Papelera', valor2: 'valorcito2' });
});

router.get('/edita', function(req, res, next) {
  res.render('partials/compose', { title: 'Hola Crisito montes y Jennifer' });
});

router.get('/read-mail', function(req, res, next) {
  res.render('partials/read-mail', { title: 'Hola Crisito montes y Jennifer' });
});
module.exports = router;
