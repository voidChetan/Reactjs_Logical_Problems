import React, { useState } from 'react';

const GroceryApp = () => {
    const itemList = [
        {itemName: 'Sunflower Oil', price: '250'},
        {itemName: 'Iodised Salt', price: '120'},
        {itemName: 'White Label Sugar', price: '300'},
        {itemName: 'Peanuts Raw', price: '90'},
        {itemName: 'Raw Rice', price: '400'},
        {itemName: 'Chana Dal', price: '340'},
        {itemName: 'Filtered Groundnut Oil', price: '310'}
    ];
    let [selectedItem, setSelectedItem] = useState({itemName:'',price: '',quantity:''});
    let [cartItems, setCartItems] = useState([]);
    let [totalCost,setTotalCost] = useState(0);

    const changeSelectedItem = (event, key) => {
        setSelectedItem(prevObj=> ({...prevObj, [key]:  event.target.value }))
    }

    const addItem = () => {
        debugger;
        const item = itemList.find( x => x.itemName == selectedItem.itemName);
        if(item != undefined) {
            const lastToTAL = totalCost +   item.price * selectedItem.quantity;
            setTotalCost(lastToTAL)
            const newObj = {itemName: selectedItem.itemName , price: item.price, quantity: selectedItem.quantity};
            setCartItems(prevArray => [...prevArray, newObj ]);
            setSelectedItem(prevObj=> ({ ...prevObj,itemName:'',price:'',quantity:''}))
        }
       
    }

    return (
        <div>
            <div className="mt-2 p-3 bg-primary text-white rounded text-center">
                <h1>Grocery List App</h1>
                <p>Logic Building & Problem Solving </p>
            </div>
            <div className='row pt-1'>
                <div className="col-6">
                    <div className="myBox">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12">
                                <div className="row">
                                    <div className="col-5 col-md-5 col-sm-5 col-lg-5">
                                        <label>Select Item</label>
                                        <select value={selectedItem.itemName} className="form-select" onChange={(event)=>{changeSelectedItem(event,'itemName')}}>
                                            <option value="">Select Item</option>
                                            {
                                                itemList.map((item)=> {
                                                    return (<option value={item.itemName}> {item.itemName} - ₹({item.price}) </option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-5 col-md-5 col-sm-5 col-lg-5">
                                        <label>Enter Quantity</label>
                                        <input type="text" value={selectedItem.quantity} onChange={(event)=> {changeSelectedItem(event,'quantity')}} className="form-control" placeholder="Enter Quantity" />
                                    </div>
                                    <div className="col-2  col-md-2 col-sm-2 col-lg-2">
                                        <button className="btn btn-sm btn-success mt-4" disabled={!(selectedItem.itemName !== '' && selectedItem.quantity !=='')}  onClick={addItem} id="btnAdd">Add </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-12">
                                <table className="table table-bordered" id="tableItems">
                                    <thead>
                                        <tr>
                                            <th>Sr No</th>
                                            <th>Item Name</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map( (item, index) => {
                                                return (  <tr>
                                                    <td>{index+1}</td>
                                                    <td>{item.itemName}-(₹ {item.price}) </td>
                                                    <td class="text-end"> ₹ {item.price} * {item.quantity} = ₹ {item.price * item.quantity}</td>
                                                </tr>)
                                            })
                                        } 
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className="text-end" colspan="2">Total</td>
                                            <td className="text-end">
                                                <strong id="tot">₹ {totalCost}</strong>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div> 
                    </div> 
                </div>
                <div className='col-6'> 
                    <ul class="mt-5">
                        <li>Create Array of Grocery Items with their Prices</li>
                        <li>Show grocery item in dropdown and add textbox to Enter Quantity &amp; button to Add Them </li>
                        <li>On Add- Create Object of Grocery Item with Quantity and it's price and add it to New Array CartItems</li>
                        <li>Use For Loop on CartItems to Display Cart Items in Table and In footer Show Total</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GroceryApp;