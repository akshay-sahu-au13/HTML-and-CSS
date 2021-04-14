
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function printLeafNode(root) {
    if (root == null){
        return
    }

    if( !root.left && !root.right){
        console.log(root.data);
        return
    }

    if (root.left){
        printLeafNode(root.left);
    }

    if (root.right){
        printLeafNode(root.right);
    }
}


// driver code

let root;
root = new Node(50)
root.left = new Node(17)
root.right = new Node(72)
root.left.left = new Node(12)
root.left.right = new Node(23)
root.left.right.right = new Node(19)
root.right.left = new  Node(54)
root.right.right = new  Node(76)
root.left.left.left =  new Node(9)
root.left.left.right =  new Node(14)
root.right.left.right =  new Node(67)


printLeafNode(root);
