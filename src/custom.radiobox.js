(function(window, document, undefined) {
  $b = new Bridger_jQuery(jQuery);
  var CustomRadiobox = function() {
    var init = function() {

      var radiogroups = $b('[data-radiogroup]');

      radiogroups.each(function(i, radiogroup) {
        var radiogroup_options = $b(radiogroup).children();

        $b(radiogroup_options).each(function(j, op) {
          var unique_id = [$b(radiogroup).data("radiogroup"),'_',j].join('');
          var input = $b("<input/>")
            .attr('type', 'radio')
            .attr('id', unique_id)
            .attr('name', $b(radiogroups).data('radiogroup'))
            .attr('value', $b(op).data('value'))
            .css('display','none');

          // Sync elements
          input.data('nexus', $b(op));
          $b(op).data('nexus', input);

          $b(radiogroup).after(input);
        });
      });

      $b("[data-radiogroup] li").bind("click", function(e) {
        var value = $b(e.target).data('value');
        var radiogroup = $b(e.target).parent();
        var nexus = $b(e.target).data('nexus');

        $b(radiogroup).data('value', value);
        nexus.trigger('click');
        $b(e.target).parent().find('li').removeClass('is-selected');
        $b(e.target).addClass('is-selected');
      })
    }

    init();

    return {
      init:init
    }
  }

  window.CustomRadiobox = new CustomRadiobox();
})(this, this.document);
