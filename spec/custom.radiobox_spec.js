describe("custom radiobox", function() {
  jasmine.getFixtures().fixturesPath = "spec/fixtures";

  beforeEach(function() {
    // setFixtures('<div class="some-form"> <ul class="myradiobox" data-radiogroup="options"> <li data-value="a">Option 1</li><li data-value="b">Option 2</li><li data-value="c">Option 2</li></ul></div>');
    loadFixtures("custom.radiobox.html");
    CustomRadiobox.init();
  })

  it("should sync custom.radiobox with generated radiobox group", function() {
      expect($("#radiogroup_0").attr('name')).toEqual('options');
      expect($("#radiogroup_0")).toBeInDOM();
  });

  it("should tie custom.radiobox option with html input radio", function() {
      expect($(".myradiobox").children().first().data('nexus')).toEqual($("#radiogroup_0"));
      expect($("#radiogroup_0").data('nexus')).toEqual($(".myradiobox").children().first());
  })

  it("should store selected value at radiogroup level", function() {
    var option1 = $(".myradiobox").children().first();
    option1.trigger('click');
    expect($(".myradiobox").data('value')).toEqual('a');
  });

  it("should select nexus input when option is clicked", function() {
    var option1 = $(".myradiobox").children().first();
    var nexus1 = option1.data('nexus');
    option1.trigger('click');
    expect(nexus1).toBeChecked();
  });
});
