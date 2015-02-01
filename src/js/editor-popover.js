var $ = require('jquery'),
    bootstrap = require('bootstrap'),
    editorPopover;

editorPopover =(function(){

  function tempHandler(ev){
    $(this)
      .parents('.btn-group')
      .parents()
      .parents('.popover')
      .prev('.module-content')
      .empty()
      .text('[swap module]')
      .removeClass('module-helper-text')
      .data('editedModule', true);
  }

  function publicInit(selector){
    if(typeof selector == "undefined"){
      throw "init(selector) requires selector";
    }

    // left popover
    $('body').popover({
      content: '<div class="btn-group"><button class="btn btn-default picture-btn"><span class="glyphicon glyphicon-picture" aria-hidden="true"></span></button><button class="btn btn-default video-btn"><span class="glyphicon glyphicon-film"></span></button></div>',
      placement: "left",
      title: 'Swap Module',
      html: true,
      trigger: 'focus',
      selector: selector
    });

    $('body').on('click', '.picture-btn', tempHandler);
    $('body').on('click', '.video-btn', tempHandler)
  }

  return {
    init: publicInit
  }

}());

module.exports = editorPopover;