Package.describe({
  summary: "Login service for LinkedIn accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth2-helper', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files(
    ['linkedin_login_button.css', 'linkedin_configure.html', 'linkedin_configure.js'],
    'client');

  api.add_files('linkedin_common.js', ['client', 'server']);
  api.add_files('linkedin_server.js', 'server');
  api.add_files('linkedin_client.js', 'client');
});
