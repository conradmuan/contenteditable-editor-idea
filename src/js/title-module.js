var $ = require('jquery'),
    keypress = require('keypress').keypress,
    titleModule;


titleModule = (function(){

  var listener;

  function moduleBlurred(ev){
    listener.unregister_combo("enter");
    if(!$(this).attr('contenteditable')){
      return;
    }
    if($(this).is(':empty')){
      $(this)
        .addClass('module-helper-text')
        .data('editedModule', false)
        .text($(this).data('contentOriginal'));
    }
  }

  function moduleFocused(ev){
    listener.simple_combo("enter", function(){
      return;
    });
    if(!$(this).attr('contenteditable') || $(this).data('editedModule')){
      return;
    }
    $(this)
      .removeClass('module-helper-text')
      .data({
        editedModule: true,
        contentOriginal: $(this).text()
      })
      .empty()
      .focus();
  }

  function publicInit(selector){
    if(typeof selector == "undefined"){
      throw "init(selector) requires selector";
    }
    listener = new window.keypress.Listener();
    $('body').on({
      focus: moduleFocused,
      blur: moduleBlurred
    }, selector);
  }

  return {
    init: publicInit
  }

}());

module.exports = titleModule;