var child_process = require('child_process')
  , path = require('path');

child_process.spawn(
  process.execPath,
  ['--debug', path.join(__dirname, 'child.js')],
  {
    cwd : __dirname,
    stdio: 'inherit'
  }
);
