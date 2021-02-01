<script 
src="assets/js/jquery.min.js"
src="tree.js">
</script>

var recipeList

function loadData(){
    var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "data/itemInfo.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })(); 
    recipeList = json.recipes
}

function getItem(itemName){
    return recipeList.itemName
    console.log(recipeList.itemName)
}

function getAllItem(){
    for(var i=0;i<json.length;i++){
        console.log(recipeList[i]);
    }
}

function makeNode(item, amount){
    var parent = new Node(item, amount, recipeList)
    if(recipeList[item].end){return parent}
    if(!recipeList[item].end){
        for(var n=0;n<recipeList[item].nOfRcp;n++){
            var igd = recipeList[item].recipes[n].ingredients
            for(var i=0;i<igd.length;i++){
                var child = makeNode(igd[i].name, igd[i].amount)
                parent.ingredients[n][i] = child
            }
        }   
        return parent
    }
}

function process(){

}