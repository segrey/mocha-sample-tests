class Animal

  position: 0

  constructor: (@name) ->

  step: ->
    this.position += this.move()

class Snake extends Animal
  move: ->
    return 5

class Horse extends Animal
  move: ->
    return 45

exports.Snake = Snake
exports.Horse = Horse
