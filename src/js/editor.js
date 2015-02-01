var $ = require('jquery'),
    contentModule = require('./content-module'),
    titleModule = require('./title-module'),
    editorPopover = require('./editor-popover');

// Register events on ready
$(document).ready(function(){
  titleModule.init('.module-title');
  contentModule.init('.module-content');
  editorPopover.init('.module-content');
});