import React, { Component } from "react";
import Link from "next/link";

import classes from "./Cart.module.css";
import CartItem from "../../components/Cart/cartItem";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import cartItem from "../../components/Cart/cartItem";
import Spacer from "../../components/Spacer";
const cartItems = [
  {
    image: "/images/mules.jpg",
    price: 21.84,
    size: "Men-US 7",
    name: "adidas Men's Adilette Shower ",
  },
  {
    image: "/images/hayes.jpg",
    price: 21.84,
    size: "Men-US 8",
    name: "adidas Men's Adilette Shower ",
  },
];

class Cart extends Component {
  state = {
    shippingForm: {
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name",
        },
        value: "",
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Last Name",
        },
        value: "",
      },
      address1: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Address 1",
        },
        value: "",
      },

      address2: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Address 2",
        },
        value: "",
      },
      country: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: null, displayValue: "---Please select your country---" },
            { value: "United State", displayValue: "United State" },
            { value: "United Kingdom ", displayValue: "United Kingdom" },
            { value: "Nigeria", displayValue: "Nigeria" },
            { value: "South Africa", displayValue: "South Africa" },
          ],
        },
        value: "",
      },
      state: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: null, displayValue: "---Please select your state---" },
            { value: "Texas", displayValue: "Texas" },
            { value: "Carlfonia", displayValue: "Carfonia" },
            { value: "Virginia", displayValue: "Virginia" },
            { value: "Florida", displayValue: "Florida" },
          ],
        },
        value: "",
      },

      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "City",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
      },
      phoneNumber: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Phone Number",
        },
        value: "",
      },
    },
  };
  //Input Change Handler
  inputChangeHandler = (event, inputIdentifier) => {
    const updatedshippingForm = { ...this.state.shippingForm };
    const updatedFormElement = { ...updatedshippingForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedshippingForm[inputIdentifier] = updatedFormElement;
    this.setState({ shippingForm: updatedshippingForm });
  };

  //Adding Product Handler
  addProductHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let inputElementIdentifier in this.state.shippingForm) {
      formData[inputElementIdentifier] = this.state.shippingForm[
        inputElementIdentifier
      ].value;
    }

    const product = {
      productData: formData,
    };
    console.log(product.productData);
  };
  render() {
    const formElementArray = [];
    for (let key in this.state.shippingForm) {
      formElementArray.push({
        id: key,
        config: this.state.shippingForm[key],
      });
    }
    return (
      <div className={classes.Checkout}>
        <div className={classes.Shipping}>
          <h3>Shipping address</h3>
          <form>
            {/* {this.props.type == "Update Product" ? <} */}
            {formElementArray.map((formElement, index) => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) =>
                  this.inputChangeHandler(event, formElement.id)
                }
              />
            ))}
          </form>
        </div>
        <div className={classes.OrderSummary}>
          {cartItems.map((item, index) => (
            <CartItem item={item} />
          ))}
          <div className={classes.Total}>
            <div>
              Shipping Costs <Spacer /> $ {10}{" "}
            </div>
            <div>
              Total Cost <Spacer /> $ {10}{" "}
            </div>
          </div>
          <Button>Checkout</Button>
        </div>
      </div>
    );
  }
}

export default Cart;
