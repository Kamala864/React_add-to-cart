const initState = {
    products: [
        {id: 1, name: 'Dell XPS 13', image: 'image.jpg', price: '$1300',stock:9,createDate:1642854046215,category:["electronic","laptop"]},
        {"id":2,"name":"Dell XPS 15","image":"image.jpg","price":"$140","stock":3,"createDate":1642854046215,"category":["electronic","laptop"]},
        {"id":3,"name":"One Plus Nord 1","image":"image.jpg","price":"$1000","stock":4,"createDate":1642854046215,"category":["electronic","mobile"]},
        {"id":4,"name":"One Plu Nord 2","image":"image.jpg","price":"$1000","stock":6,"createDate":1642854046215,"category":["electronic","mobile"]},
        {"id":5,"name":"Dell Monitor","image":"image.jpg","price":"$1300","stock":7,"createDate":1642854046215,"category":["electronic","laptop"]},
        {"id":6,"name":"One Plus Watch","image":"image.jpg","price":"$100","stock":90,"createDate":1642854046215,"category":["electronic","watch"]},
        {"id":7,"name":"Macbook Pro 13","image":"image.jpg","price":"$1400","stock":33,"createDate":1642854046215,"category":["electronic","laptop"]},
        {"id":8,"name":"Macbook Pro 15","image":"image.jpg","price":"$2300","stock":5,"createDate":1642854046215,"category":["electronic","laptop"]},
        {"id":9,"name":"Fantech Keyboard","image":"image.jpg","price":"$100","stock":6,"createDate":1642854046215,"category":["electronic","keyboard"]},
        {"id":10,"name":"fantech headset","image":"image.jpg","price":"$13300","stock":7,"createDate":1642854046215,"category":["electronic","headseat"]},
        {"id":11,"name":"Dell XPS 13","image":"image.jpg","price":"$1300","stock":9,"createDate":1642854046215,"category":["electronic","laptop"]},
        {"id":12,"name":"Dell XPS 15","image":"image.jpg","price":"$140","stock":3,"createDate":1642854046215,"category":["electronic","laptop"]},
        {"id":13,"name":"One Plus Nord 1","image":"image.jpg","price":"$1000","stock":4,"createDate":1642854046215,"category":["electronic","mobile"]},
        {"id":14,"name":"One Plu Nord 2","image":"image.jpg","price":"$1000","stock":6,"createDate":1642854046215,"category":["electronic","mobile"]},
        {"id":15,"name":"Dell Monitor","image":"image.jpg","price":"$1300","stock":7,"createDate":1642854046215,"category":["electronic","laptop"]},
        {"id":16,"name":"One Plus Watch","image":"image.jpg","price":"$100","stock":90,"createDate":1642854046215,"category":["electronic","watch"]},
        {"id":17,"name":"Macbook Pro 13","image":"image.jpg","price":"$1400","stock":33,"createDate":1642854046215,"category":["electronic","laptop"]},
        {"id":18,"name":"Macbook Pro 15","image":"image.jpg","price":"$2300","stock":5,"createDate":1642854046215,"category":["electronic","laptop"]},
        {"id":19,"name":"Fantech Keyboard","image":"image.jpg","price":"$100","stock":6,"createDate":1642854046215,"category":["electronic","keyboard"]},
        {"id":20,"name":"fantech headset","image":"image.jpg","price":"$13300","stock":7,"createDate":1642854046215,"category":["electronic","headseat"]}
        

    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;