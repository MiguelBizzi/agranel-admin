import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduto } from "../../../dtos/IProduto";
import PRODUCTS_DATA from "../../../constants/productsData";

interface productsSlideState {
  products: IProduto[];
  categorias: string[];
}

const initialState: productsSlideState = {
  products: PRODUCTS_DATA,
  categorias: [...new Set(PRODUCTS_DATA.map((produto) => produto.categoria))],
};

export const productsSlide = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeProduct: (state, action: PayloadAction<IProduto>) => {
      state.products = state.products.map((p) => {
        if (p.produto_id === action.payload.produto_id) {
          return action.payload;
        }

        return p;
      });

      return state;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (p) => p.produto_id !== action.payload
      );
      return state;
    },
  },
});

export const { changeProduct, deleteProduct } = productsSlide.actions;

export default productsSlide.reducer;
