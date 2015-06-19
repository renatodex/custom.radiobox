// (function(window, document, undefined) {
  var $b = new Bridge_jQuery(jQuery);
  var CustomRadiobox = function() {
    var init = function() {
      var radiogroups = $b('[data-radiogroup]');

      radiogroups.each(function(i, radiogroup) {
        var radiogroup_options = $(radiogroup).children();

        $b(radiogroup_options).each(function(j, op) {
          var unique_id = ['radiogroup_',j].join('');
          var input = $b("<input/>")
            .attr('type', 'radio')
            .attr('id', unique_id)
            .attr('name', unique_id)
            .attr('value', $b(op).data('value'))
            .css('display', 'none');

          console.log($b(op).data)
          // console.log($(input).attr('value'));

          // console.log(radiogroup.attr('class'));
          $(input).before($(radiogroup));
          // $(input).appendTo("body");
        });
      });
    }

    init();

    return {
      init:init
    }
  }

  window.CustomRadiobox = new CustomRadiobox();
// })(this, this.document);
