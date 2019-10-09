import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import NavBar from "../Navbar/navbar";


const Price=/^\d+(,\d{3})*(\.\d{1,2})?$/

const AddItemSchema = Yup.object().shape({
  itemName: Yup.string()
    .required("Item Name is required"),
  itemType: Yup.string()
    .required("Item type is required"),
  cuisineName: Yup.string()
    .required("Cuisine name is required"),
  itemPrice: Yup.string()
    .matches(Price, 'Price is not valid')
    .required("Price is required")
})


class EditItem extends Component{
   constructor(props){
       super(props)
       console.log(props.location.item)
       this.state={
           itemId: props.location.item.itemId,
           itemName:props.location.item.itemName,
           itemType:props.location.item.itemType,
           itemPrice:props.location.item.itemPrice,
           itemDesc:props.location.item.itemDesc,
           cuisineName:props.location.item.cuisineName,
           itemImage:"",
           itemImagePreview:""
       }
       console.log(this.state)
   }

   editItem=(details)=>{
    // console.log("Inside edit items",details);
    const data = {
           itemId: this.state.itemId,
           itemName:details.itemName,
           itemType:details.itemType,
           itemPrice:details.itemPrice,
           itemDesc:details.itemDesc,
           cuisineName:details.cuisineName
        //    itemImage:"",
        //    itemImagePreview:""
        }
        console.log("Inside edit items",data);
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios.post('http://localhost:3001/restaurant/updateitem',data)
        .then(response => {
            console.log("inside success" )
            console.log("Status Code : ",response.status);
            if(response.status === 200){
                console.log("success",response)
            alert("success")
            // console.log(response)
            }
        })
        .catch(error => {
            console.log("In error");
            console.log(error);
            alert("Update failed! Please try again")
        })
    }


    render(){
        return(
            <div>
                <NavBar/>
            <div className="col-md-7"> 
             
                <span  className="font-weight-bold">Edit Item</span>
                {/* <button className="btn btn-link" id="btn-edit" onClick={this.edit}>Edit</button> */}
                    <Formik
                    enableReinitialize
                    initialValues={
                        {
                            itemName:this.state.itemName,
                            itemPrice:this.state.itemPrice,
                            itemType:this.state.itemType,
                            itemDesc:this.state.itemDesc,
                            cuisineName:this.state.cuisineName
                           }}
                    validationSchema={AddItemSchema}
                    onSubmit={(values, actions) => {
                        this.editItem(values);
                        actions.setSubmitting(false);
                    }}
                    >
                    {({ touched, errors, isSubmitting }) => (
                        <Form id="profile-form">
                            <div className="form-group text-left col-sm-5">
                            <br/>
                            <label htmlFor="itemName">Item Name</label>
                                <Field
                                    type="text"
                                    name="itemName"
                                    id="itemName"
                                    //   onChange={this.userNameChangeHandler}
                                    //   value={this.state.userName}
                                    //   autofocus="true"
                                    className={`form-control ${
                                    touched.itemName && errors.itemName ? "is-invalid" : ""
                                    }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="itemName"
                                    align="text-left"
                                    className="invalid-feedback"
                                />
                            </div>
                            
                            <div className="form-group text-left col-sm-5">
                            <label htmlFor="itemPrice">Item Price</label>
                                <Field
                                    type="itemPrice"
                                    name="itemPrice"
                                    // onChange={this.passwordChangeHandler}
                                    // value={this.state.password}
                                 
                                    className={`form-control ${
                                    touched.itemPrice && errors.itemPrice ? "is-invalid" : ""
                                    }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="itemPrice"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="form-group text-left col-sm-5">
                            <label htmlFor="itemType">Section</label>
                                <Field
                                    type="itemType"
                                    name="itemType"
                                    //   onChange={this.userEmailChangeHandler}
                                    //   value={this.state.userEmail}
                                 
                                    className={`form-control ${
                                    touched.itemType && errors.itemType ? "is-invalid" : ""
                                    }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="itemType"
                                    align="text-left"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="form-group text-left col-sm-5">
                            <label htmlFor="itemDesc">Item Description</label>
                                <Field
                                    type="textarea"
                                    name="itemDesc"
                                    //   onChange={this.userPhoneChangeHandler}
                                    //   value={this.state.userPhone}
                                  
                                    //   autofocus="true"
                                    className={`form-control ${
                                    touched.itemDesc && errors.itemDesc ? "is-invalid" : ""
                                    }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="itemDesc"
                                    align="text-left"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="form-group text-left col-sm-5" id="userAddress">
                            <label htmlFor="cuisineName">Cuisine Name</label>
                                <Field
                                    type="text"
                                    name="cuisineName"
                                    //   onChange={this.userAdrChangeHandler}
                                    //   value={this.state.userAdr}
                                    
                                    //   autofocus="true"
                                    className={`form-control ${
                                    touched.cuisineName && errors.cuisineName ? "is-invalid" : ""
                                    }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="cuisineName"
                                    align="text-left"
                                    className="invalid-feedback"
                                />
                            </div>

                            <br/>
                                <div className="formholder">
                <span>
                    <button className="btn btn-primary" type="submit" id="btn-editItem">Save</button> 
                {/* &nbsp; <a href="/account" className="btn btn-outline-primary font-weight-bold" id="btn-cancel-profile" name="cancel">Cancel</a> */}
                </span>
                </div>  
                 {/* <div className="form-group">
                    <label htmlFor="ProfileImage"><strong>Profile Image : </strong></label><br />
                    <input type="file" name="ProfileImage" id="ProfileImage" className="btn btn-sm photo-upload-btn" onChange={this.handleChange}/>
                </div>   */}
                 </Form>
                 
             )}
            </Formik>
            </div>
    </div>
        )
    }
}

export default EditItem;