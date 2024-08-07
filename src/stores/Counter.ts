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
    }
  },
});
