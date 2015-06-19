describe("custom radiobox", function() {
  jasmine.getFixtures().fixturesPath = "spec/fixtures";

  it("should sync custom.radiobox with generated radiobox group", function() {
      // loadFixtures("custom.radiobox.html");
      setFixtures('<div class="some-form"> <ul class="myradiobox" data-radiogroup="options"> <li data-value="a">Option 1</li><li data-value="b">Option 2</li><li data-value="c">Option 2</li></ul></div>');

      CustomRadiobox.init();

      expect($("#radiogroup_1")).toBeInDOM();
  });
});
