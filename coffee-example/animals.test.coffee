require('should');

Snake = require('./animals').Snake
Horse = require('./animals').Horse

describe 'Animal', ->
  describe 'Snake', ->
    it 'should move slowly', ->
      snake = new Snake
      snake.step()
      snake.position.should.equal(5)
