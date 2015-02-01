var $ = require('jquery'),
    keypress = require('keypress').keypress,
    sortable = require('sortable'),
    contentModule;

contentModule = (function(){

  var listener,
      sort;

  function createContentModule(position){
    // todo: handlebars or some shit
    // 
    // what if position is specified
    var html = '<div class="module-container">' + "\n" +
          '<div contenteditable="true" data-module-content-type="body" class="module-helper-text module-content">' + "\n" +
            '<span>Text module</span>' + "\n" +
          '</div>' + "\n" +
          '<div class="module-controls hidden">' + "\n" +
            '<span class="grabbable glyphicon glyphicon-menu-hamburger"></span>' + "\n" +
            '<span class="removeable glyphicon glyphicon-remove"></span>' + "\n" +
          '</div>' + "\n" +
        '</div>';
    $(position).after(html).next().find('.module-content').focus();
  }


  // This doesn't belong in this class
  function keyboardCaptureEnter(trigger){
    trigger = (typeof trigger === 'undefined' ? true : trigger);
    if(trigger){
      return listener.simple_combo("enter",function(e){
        createContentModule($(':focus').parents('.module-container'));
      });
    } else {
      listener.unregister_combo("enter");
    }
  }

  function moduleFocused(ev){
    // If this module isn't content editable
    // or if the module has already been edited
    // do not run the rest of this function
    keyboardCaptureEnter(true);
    if(!$(this).attr('contenteditable') || $(this).data('editedModule')){
      return;
    }
    $(this)
      .removeClass('module-helper-text')
      .data({
        editedModule: true,
        contentOriginal: $(this).text()
      })
      .empty();
  }

  function moduleBlurred(ev){
    keyboardCaptureEnter(false);
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

  function publicInit(selector){
    if(typeof selector == "undefined"){
      throw "init(selector) requires selector";
    }

    listener = new window.keypress.Listener();
    $('body').on({
      focus: moduleFocused,
      blur: moduleBlurred
    }, selector);

    $('body').on({
      mouseenter: function(ev){
        $(this).find('.module-controls').removeClass('hidden');
      },
      mouseleave: function(ev){
        $(this).find('.module-controls').addClass('hidden');
      }
    }, '.module-container');

    $('body').on('click', '.removeable', function(ev){
      $(this).parents('.module-container').remove();
    });

    // sorting
    sort = new sortable( $('#modules')[0], {
      handle: '.grabbable',
      draggable: '.module-container'
    });

  }

  return {
    init: publicInit,
    create: createContentModule
  }
}());

module.exports = contentModule;