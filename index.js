  
function Node (value) {6
	this.value = value;
	this.children = [];

	this.addChildren = (node) => {
		this.children.push(node);
		return this;
	}
}
  
 function averageBT(node) {
		let response = [];
		let queue = [node];
		
		while(queue.length > 0) {
			const sum = queue.reduce((acc, curr) => acc += curr.value, 0);
			const average = sum / queue.length;
			response.push(average);
			
			let nodeChildren = [];
			for (let item of queue) {
				nodeChildren = [...nodeChildren, ...item.children]
			}
			
			queue = nodeChildren;
		}
    return response;
 }

const root = new Node(7);
const a = new Node(3);
const b = new Node(10);
const c = new Node(4);
const d = new Node(1);
const e = new Node(3);
const f = new Node(2);

root.addChildren(a);
root.addChildren(b);
a.addChildren(c);
a.addChildren(d);
d.addChildren(e);
d.addChildren(f);

console.log(averageBT(root))
