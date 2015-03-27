/**
 * Created by Su on 2015/3/17.
 */
var cartController = function ($scope) {
    /*
     * 虚拟数据
     */
    $scope.cart = [
        {
            id:1000,
            name:'iphone5s',
            quantity:3,
            price:4300
        },
        {
            id:1001,
            name:'iphone6',
            quantity:4,
            price:5300
        },
        {
            id:1002,
            name:'ipad',
            quantity:2,
            price:2300
        },
        {
            id:1003,
            name:'ipod',
            quantity:8,
            price:1500
        }
    ]
    /*
     * 计算总价格
     */
    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total += item.price * item.quantity;
        });
        return total;
    }
    /*
     * 计算总购买数
     */
    $scope.totalCount = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += item.quantity;
        })
        return total;
    }
    /*
     * 删除
     */
    $scope.remove = function (id) {
//          alert(id);
        var _index = -1;    //防止找不到
        angular.forEach($scope.cart,function(item,key){
//                console.log(key)

            // 标记当前点击的索引
            if(item.id === id){
                _index = key;

            }
        })

        if( _index !== -1 ){
            alert(_index)
            $scope.cart.slice(_index,1);    //删除当前索引 1位
        }
    }
};