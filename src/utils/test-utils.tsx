import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { render, configure } from "@testing-library/react";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import rootApi from "../app/rootApi";
import { matchReducer, playerReducer } from "../app/slices";
import { RootState } from "../app/types/store";
import matchesData from "../fixtures/match";
import playersData from "../fixtures/player";

configure({ testIdAttribute: "data-test-id" });

const enhanceRender =
  <T extends typeof render>(renderMethod: T) =>
  (
    ui: Parameters<T>[0],
    {
      initialState = {
        matchSlice: {
          matches: matchesData,
        },
        playerSlice: {
          players: playersData,
        },
      } as RootState,
      store = configureStore({
        reducer: {
          [rootApi.reducerPath]: rootApi.reducer,
          playerSlice: playerReducer,
          matchSlice: matchReducer,
        },
        preloadedState: initialState,
        middleware: (getDefaultMiddlewares) =>
          getDefaultMiddlewares({
            serializableCheck: false,
            immutableCheck: false,
          }).concat([rootApi.middleware]),
      }),
      options,
      wrapper: customWrapper,
    }: {
      initialState?: RootState;
      store?: EnhancedStore;
      options?: Parameters<T>[1];
      wrapper?: (params: { children: React.ReactNode }) => React.ReactNode;
    } = {}
  ) => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>
        <BrowserRouter>
          {customWrapper ? customWrapper({ children }) : children}
        </BrowserRouter>
      </Provider>
    );
    return renderMethod(ui, { wrapper: Wrapper, ...options }) as ReturnType<T>;
  };

export * from "@testing-library/react";

const customRender = enhanceRender(render);

export { customRender as render };
