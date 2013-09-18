# grunt-markdown2slides

Write your slide deck in markdown without compromising stylability.

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

### Usage

```sh
npm install grunt-markdown2slides --save-dev
```

Then add it to your Gruntfile:

```coffee
# Gruntfile.coffee
module.exports = (grunt) ->

  grunt.initConfig

    markdown2slides:
      basic:
        src: ['src/index.md']
        dest: "public/index.html"

  grunt.loadNpmTasks 'grunt-markdown2slides'
```

```js
// or Gruntfile.js
module.exports = function(grunt) {
  grunt.initConfig({
    markdown2slides: {
      basic: {
        src: ['src/index.md'],
        dest: "public/index.html"
      }
    }
  });
  grunt.loadNpmTasks('grunt-markdown2slides');
};
```