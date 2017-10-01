const Node = require('./node');

class LinkedList extends Node {
    constructor() {
		super(); 
		this._head = new Node();
		this._tail = new Node();
		this.elements = [];
		this.length = this.elements.length;
    }

    append(data) {
		var position = this.elements.length;

		if (position === 0) {
			this.elements.push(new Node(data));
			this._head = this.elements[position];
			this._tail = this.elements[position];
		} 
		else {
			this.elements.push(new Node(data, position - 1));
			this.elements[position - 1].next = position;
			this._tail = this.elements[position];
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
		var list = this.elements;
		var length = list.length;
		this.clear();
		for (var i = 0; i < length + 1; i++ ) {
			if (i < index ) {
			this.append(list[i].data);
			} 
			else if (i === index) {
				this.append(data);
			} 
			else {
				this.append(list[i - 1].data);
			}
		}
		return this;
    }

    isEmpty() {
		if (this.elements.length === 0) {
			return true;
		} 
		else{
			return false;
		}
    }

    clear() {
		this._head = new Node();
		this._tail = new Node();
		this.elements = [];
		this.length = this.elements.length;
		return this;
    }

    deleteAt(index) {
		var list = this.elements;
		var length = list.length;
		this.clear();
		for (var i = 0; i < length; i++ ) {
			if (i < index ) {
				this.append(list[i].data);
			} 
			else if (i > index) {
				this.append(list[i].data);
			}
		}
		return this;
    }

    reverse() {
		var list = this.elements;
		var length = list.length;
		this.clear();
		for (var i = length - 1; i >= 0; i-- ) {
			this.append(list[i].data);
		}
		return this;
    }

    indexOf(data) {
		for (var i = 0; i < this.elements.length; i++) {
			if (this.elements[i].data === data) {
			return i
			}
		} 
	  return -1;
    }
}

module.exports = LinkedList;
