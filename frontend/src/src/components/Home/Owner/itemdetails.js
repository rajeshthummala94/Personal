import React,{ Component } from "react";

class ItemDetails extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        let item = this.props.itemsInOrder
        console.log("item in itemorders file:", item);
        let itemDetails=item.map((i) => {
            console.log("i",i)
        let {  itemName, itemQuantity, itemPrice, itemTotal } = i;
        return (
            <div>
                <div>
                    <span>
                        <h5 className="item-name">{itemName}</h5>
                        <p className="item-price" >Cost: ${itemPrice}</p>
                        <p className="item-quantity" >Quantity: {itemQuantity}</p>
                        <p className="item-total" > Total: ${itemTotal}</p>
                    </span>
                </div>
            </div>
        );
    })
    return itemDetails
}
}
export default ItemDetails;