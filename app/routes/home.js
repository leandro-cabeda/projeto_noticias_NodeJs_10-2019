module.exports = application => {

  application.get ('/', (req, res, next) => {
    
    application.app.controllers.home.index(application, req, res, next);

  });

};
