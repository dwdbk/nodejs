// attraper 404 et transmettre au gestionnaire d'erreurs
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    //transmettre l'erreur au prochain itinéraire correspondant.
    next(err);
});
// erreur de gestion, trace de pile d'impression
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});