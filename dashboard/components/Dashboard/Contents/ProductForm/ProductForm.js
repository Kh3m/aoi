import React, { Component } from "react";

import classes from "./productForm.module.css";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";

class ProductForm extends Component {
  state = {
    productForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Product Name",
        },
        value: "",
      },
      price: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Product Price",
        },
        value: "",
      },
      sizes: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Sizes",
        },
        value: "",
      },
      colors: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Colors",
        },
        value: "",
      },
      quantity: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Quantity",
        },
        value: "",
      },

      category: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "null", displayValue: "---Select Category---" },
            { value: "men", displayValue: "Men" },
            { value: "women", displayValue: "Women" },
            { value: "kids", displayValue: "Kids" },
          ],
        },
        value: "",
      },

      brand: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "null", displayValue: "---Select Brand---" },
            { value: "nike", displayValue: "Nike" },
            { value: "clarks", displayValue: "Clarks" },
            { value: "Gucci", displayValue: "Gucci" },
          ],
        },
        value: "",
      },
      images: {
        elementType: "input",
        elementConfig: {
          type: "file",
          placeholder: "Product images",
        },
        value: "",
      },
      description: {
        elementType: "textarea",
        elementConfig: {
          placeholder: "Product description",
        },
        value: "",
      },
    },
  };
  //Input Change Handler
  inputChangeHandler = (event, inputIdentifier) => {
    const updatedProductForm = { ...this.state.productForm };
    const updatedFormElement = { ...updatedProductForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedProductForm[inputIdentifier] = updatedFormElement;
    this.setState({ productForm: updatedProductForm });
  };

  //Adding Product Handler
  addProductHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let inputElementIdentifier in this.state.productForm) {
      formData[inputElementIdentifier] = this.state.productForm[
        inputElementIdentifier
      ].value;
    }

    const product = {
      productData: formData,
    };
    console.log(product.productData);
  };
  render() {
    let search = null;
    if (this.props.update) {
      search = (
        <div>
          <form className={classes.search}>
            <input type="text" placeholder="Enter Product Code" />
            <input type="submit" value="Search" />
          </form>
        </div>
      );
    }

    const formElementArray = [];
    for (let key in this.state.productForm) {
      formElementArray.push({
        id: key,
        config: this.state.productForm[key],
      });
    }
    return (
      <div className={classes.FormsWrapper}>
        <div className={classes.Form}>
          <h2>{this.props.title}</h2>
          {search}
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

            <Button clicked={this.addProductHandler}>Add Product</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductForm;
