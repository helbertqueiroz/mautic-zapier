const ContactUpdatedTrigger = require('./triggers/contactUpdated');
const ContactCreatedTrigger = require('./triggers/contactCreated');
const PointsChangedTrigger = require('./triggers/pointsChanged');

const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication: require('./authentication'),

  beforeRequest: [
  ],

  afterResponse: [
  ],

  resources: {
  },

  triggers: {
    [ContactUpdatedTrigger.key]: ContactUpdatedTrigger,
    [ContactCreatedTrigger.key]: ContactCreatedTrigger,
    [PointsChangedTrigger.key]: PointsChangedTrigger,
  },

  // If you want your searches to show up, you better include it here!
  searches: {
  },

  // If you want your creates to show up, you better include it here!
  creates: {
  }
};

// Finally, export the app.
module.exports = App;
