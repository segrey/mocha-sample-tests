describe('call back with error', function(){

  before(function(){
    throw new Error('this hook should not be displayed');
  });

  it('should not display this error', function(done){
    throw new Error('this should not be displayed');
  });
});
