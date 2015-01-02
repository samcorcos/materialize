Package.describe({
  name: 'samcorcos:materialize',
  summary: 'Materialize CSS for Meteor. Updated regularly.',
  version: '1.0.0',
  git: 'https://github.com/samcorcos/materialize'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('samcorcos:materialize.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('samcorcos:materialize');
  api.addFiles('samcorcos:materialize-tests.js');
});
