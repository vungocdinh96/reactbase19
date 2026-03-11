# Redux Toolkit Guideline

> Global state management using Redux Toolkit in this project.

---

## Setup

### Store — `src/store/index.ts`

```ts
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    // register new slices here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Provider — `src/main.tsx`

```tsx
import { Provider } from 'react-redux';
import { store } from '@store/index';

<Provider store={store}>
  <App />
</Provider>
```

---

## Typed Hooks

Always use the typed wrappers from `@hooks/index` — never use raw `useDispatch` / `useSelector`.

```ts
// src/hooks/useAppDispatch.ts
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// src/hooks/useAppSelector.ts
export const useAppSelector = useSelector.withTypes<RootState>();
```

**Usage:**

```tsx
import { useAppDispatch, useAppSelector } from '@hooks/index';

const dispatch = useAppDispatch();
const value = useAppSelector(state => state.global.currentPath);
```

---

## Slice Convention

### File naming

| Rule | Example |
|---|---|
| Suffix `Slice` | `globalSlice.ts`, `authSlice.ts` |
| Located in `src/store/` | `src/store/globalSlice.ts` |

### Slice template

```ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  value: string;
}

const initialState = {
  value: '',
} satisfies ExampleState as ExampleState;

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = exampleSlice.actions;
export default exampleSlice.reducer;
```

### Register in store

```ts
// src/store/index.ts
import exampleReducer from './exampleSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});
```

---

## Selectors

- Define selectors **at the bottom of the slice file**
- Use `createSelector` for derived/computed values
- Prefix all selectors with `select`

```ts
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './index';

const selectGlobal = (state: RootState) => state.global;

export const selectCurrentPath = createSelector(selectGlobal, g => g.currentPath);
```

---

## Async Thunks

Use `createAsyncThunk` for API calls. Handle all three states (`pending`, `fulfilled`, `rejected`) in `extraReducers`.

```ts
export const fetchData = createAsyncThunk('slice/fetchData', async (id: string, { rejectWithValue }) => {
  try {
    const res = await api.get(id);
    return res.data;
  } catch {
    return rejectWithValue('Failed to fetch data');
  }
});

// in createSlice:
extraReducers: builder => {
  builder
    .addCase(fetchData.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
},
```

---

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Slice file | `camelCase` + `Slice` suffix | `globalSlice.ts` |
| Slice name | `camelCase` | `name: 'global'` |
| Reducer key in store | `camelCase` | `global: globalReducer` |
| Actions | `camelCase` verb | `updateCurrentPath` |
| Selectors | `camelCase` + `select` prefix | `selectCurrentPath` |
| State type/interface | `PascalCase` | `interface GlobalSlice` |
| Boolean state fields | verb prefix | `isLoading`, `hasError` |

---

## Current Slices

| Slice | File | State keys |
|---|---|---|
| `global` | `src/store/globalSlice.ts` | `currentPath` |

---

## Rules

- Use Redux Toolkit only — no plain `createStore` or hand-written reducers
- Never mutate state outside Immer (RTK handles this inside `reducers`)
- No `Context API` for complex/shared global state — use a slice instead
- Keep slice files focused: one feature domain per slice
- Avoid storing server-fetched data in Redux — use TanStack Query for that; reserve Redux for true UI/global state
