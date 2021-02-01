<script src="assets/js/jquery.min.js"></script>

function loadData(){
    var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "data/itemInfo_EN.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })(); 
    return json.recipes
}

function makeChain(item, amount){
    var parent = new Node(item, amount, recipeList)
    for(var n=0;n<recipeList[item].recipes.length;n++){
            var factor = amount / recipeList[item].recipes[n].production_speed
            var igd = recipeList[item].recipes[n].ingredients
            if(recipeList[item].recipes[n].end){
                for(var i=0;i<igd.length;i++){
                    parent.ingredients[n][i] = new Node(igd[i].name, igd[i].amount*factor, recipeList)
                }
            } else {
                for(var i=0;i<igd.length;i++){
                var child = makeChain(igd[i].name, igd[i].amount*factor)
                parent.ingredients[n][i] = child
                }
            }
        } 
    return parent 
}