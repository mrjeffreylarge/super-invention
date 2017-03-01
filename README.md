# super-invention

## environment setup steps

1. run `npm install`
  * this installs development environment deppendencies
  * _note: warning for minimatch update is [non issue](https://github.com/gulpjs/gulp/issues/1716)_
  * _note: warning for graceful-fs update is [non issue](https://github.com/gulpjs/gulp/issues/1571)_

2. run `bower install`
  * this installs front end code deppendencies

3. run `gulp`
  * this will run the default build tasks and starts watching sass and js files for changes
