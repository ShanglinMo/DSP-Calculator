<script src="assets/js/jquery.min.js"></script>
function calc(item, amount){
    var factor = amount / 60
    var igdList = []
    for(var i=0;i<item.ingredients.length;i++){
        igdList.push(item.ingredients[i].name)
        igdList.push(factor * item.ingredients[i].amount)
    }

}