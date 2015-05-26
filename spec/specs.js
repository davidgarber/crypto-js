describe('crypto', function() {
  it("returns a string with no spaces or punctuation", function(){
    expect(crypto("this ! sucks.")).to.equal("thissucks");
  });

});
