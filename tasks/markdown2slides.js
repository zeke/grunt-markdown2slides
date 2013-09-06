/*
 * grunt-markdown2slides
 * https://github.com/zeke/grunt-markdown2slides
 *
 * Copyright (c) 2013 Zeke Sikelianos
 * Licensed under the MIT license.
 */

'use strict';

var markdown2slides = require('markdown2slides');

module.exports = function(grunt) {

  grunt.registerMultiTask('markdown2slides', 'Write your slideshow content in markdown without compromising stylability.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      // Accept an "array" with one value, or a string
      var mdFile = (typeof(f.src) === "object") ? f.src[0] : f.src;

      // Write the destination file.
      grunt.file.write(f.dest, markdown2slides(mdFile));

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};