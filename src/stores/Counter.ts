import { Cart } from "@/Interfaces/Cart";
import { Product } from "@/Interfaces/Product";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    //** @type {Number} */
    count: 0,
    cart: [] as Cart[],
    nextId: 0,
    totalPrice: 0
  }),
  actions: {
    increment() {
      this.count++;
    },
    addCart(data: Product) {
      if (this.cart.length > 0) {
        const exsistingProduct = this.cart.find(
          (cartItem) => cartItem.id == data.id
        );
        if (exsistingProduct) {
          exsistingProduct.count++;
          this.totalPrice += exsistingProduct.price
        } else {
          this.cart.push({ id: data.id, count: 1, price: data.price });
          this.totalPrice += data.price
        }
      } else {
        this.cart.push({ id: data.id, count: 1 ,price: data.price});
        this.totalPrice += data.price
      }
    },
    removeCart(data: Product) {
      if (this.cart.length > 0) {
        const existingProductIndex = this.cart.findIndex(
          (cartItem) => cartItem.id == data.id
        );
    
        if (existingProductIndex !== -1) {
          const existingProduct = this.cart[existingProductIndex];
    
          existingProduct.count--;
          this.totalPrice -= existingProduct.price;
    
          // Remove the product from the cart if its count reaches 0
          if (existingProduct.count === 0) {
            this.cart.splice(existingProductIndex, 1); // Remove specific product
          }
        }
      }
    }
  },
});
