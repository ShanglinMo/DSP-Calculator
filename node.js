class Node{
    constructor(item, amount, json){
        this.item = item
        this.amount = amount
        this.ingredients = [[],[]]
    }

    next(node, pos){
        this.ingredients[pos] = node
    }
}