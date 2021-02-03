class Node{
    constructor(item, amount, json){
        this.item = item
        this.amount = amount
        this.ingredients = []
        this.factory
        if(json[item] == undefined){
            this.ingredients = null
        } 
        else {
            for(var i=0;i<json[item].recipes.length;i++){
                this.ingredients.push([])
            }
        }
    }
}