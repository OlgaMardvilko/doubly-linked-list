const Node = require('./node');

class LinkedList {
     constructor() {
		this.head = null;
		this.tail = null;
		this.lenght = 0;
	}  //он ('присваивает 0 этой длине   'it('assign 0 to this.length

    append(data) {
		var node = new Node(data);
		if (!this.head){
			this.head = node;
			this.tail = node;
		}else{
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	} 	//should assign any nodes to this._head and this._tail if list is empty
						//вставляем лист, если лист пуст должен назначать любые узлы this._head и this._tail
						//should add new data to the end of list
						// если лист не пуст, то должен добавить новые данные в конец списка
    head() {
		return this.head.data;
	}			//should return data from the this.head
						// должен возвращать данные из this.head
				
    tail() {
		return this.tail.data;
	}			//should return data from the this.tail
						//должен возвращать данные из this.tail

    at(index) {
		for (var i = 0; i < this.length; i++) {
            if (i === index) {
                return this.head.data[i];
            }
        }
	}		//should return Node.data by index
						//должен возвращать Node.data по индексу

    insertAt(index, data) {
		this.insertBefore(data, this.children[index]);
	}  //should insert data by index
								//следует вставлять данные по индексу

    isEmpty() {
		if (this.length === 0) {
            return true;
        } else {
            return false;
        }
	}			//should return true if list is empty
							//должен возвращать true, если список пуст

    clear() {
		this.head = null;
		this.tail = null;
		this.lenght = 0;
		return this;
		
	}				//should clear the list
							//должен очистить список

    deleteAt(index) {
		for (var i = 0; i < this.length; i++) {
            if (i === index) {
                this.removeChild(i);
            }
        }
	}		//should delete element by index
							//должен удалить элемент по индексу

    reverse() {
		var current = this.tail;
		while (current != null){
			this.append(current.data);
			current = current.Previous;
		}
	}			//should reverse the list

    indexOf(data) {
		var curr = this.head;
        var ind = 0;
        while (curr) {
            if (curr.data === data) {
                return ind;
            } else {
                curr = curr.next;
                ++ind;
            }
        }
        
        return -1;
	}		//should return index of element if data is found
							//должен возвращать индекс элемента, если данные найдены
							//should return -1 if data not found
				
}

module.exports = LinkedList;
