<script src="assets/js/jquery.min.js"></script>

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
    console.log(recipeList.itemName)
}

function getAllItem(){
    for(var i=0;i<json.length;i++){
        console.log(recipeList[i]);
    }
}