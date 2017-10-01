const Node = require('./node');

class LinkedList {
class LinkedList extends Node {
    constructor() {
      super(); // this.data = null, this.prev = null, this.next = null
      this._head = new Node();
      this._tail = new Node();
      this.elements = [];
      this.length = this.elements.length;
    }

    append(data) {
      var pos = this.elements.length;

      if (pos === 0) {
        this.elements.push(new Node(data));
        this._head = this.elements[pos];
        this._tail = this.elements[pos];
      } else {
        this.elements.push(new Node(data, pos - 1));
        this.elements[pos - 1].next = pos;
        this._tail = this.elements[pos];
      }

      this.length = this.elements.length;
      return this;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
      return this.elements[index].data;
    }

    insertAt(index, data) {
      var old = this.elements;
      var length = old.length;
      this.clear();
      for (var i = 0; i < length + 1; i++ ) {
        if (i < index ) {
          this.append(old[i].data);
        } else if (i === index) {
          this.append(data);
        } else {
          this.append(old[i - 1].data);
        }
      }
      return this;
    }

    isEmpty() {
      if (this.elements.length === 0) {
        return true;
      } return false;
    }

    clear() {
      this._head = new Node();
      this._tail = new Node();
      this.elements = [];
      this.length = this.elements.length;
      return this;
    }

    deleteAt(index) {
      var old = this.elements;
      var length = old.length;
      this.clear();
      for (var i = 0; i < length; i++ ) {
        if (i < index ) {
          this.append(old[i].data);
        } else if (i > index) {
          this.append(old[i].data);
        }
      }
      return this;
    }

    reverse() {
      var old = this.elements;
      var length = old.length;
      this.clear();
      for (var i = length - 1; i >= 0; i-- ) {
        this.append(old[i].data);
      }
      return this;
    }

    indexOf(data) {
      for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i].data === data) {
          return i
        }
      } return -1;
    }
}

module.exports = LinkedList;
