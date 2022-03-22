'use strict'

const Queue = require('./Queue')

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal) {

    if (animal === 'cat') {
      this.catQueue.enqueue(animal)
    }
    else if (animal === 'dog') {
      this.dogQueue.enqueue(animal)
    }
    else {
      return 'we do not accept that animal at our shelter'
    }
  }

  dequeue(pref) {
    if (pref !== 'cat' && pref !== 'dog') {
      return null;
    }

    if (this.dogQueue.isEmpty() && this.catQueue.isEmpty()) {
      return 'the animal shelter is already empty'
    }

    if (pref === 'cat') {
      let cat = this.catQueue.dequeue();
      return cat;
    }
    if (pref === 'dog') {
      let dog = this.dogQueue.dequeue();
      return dog;
    }

  }
}

module.exports = AnimalShelter;