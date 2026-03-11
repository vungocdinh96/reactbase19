import { useAppDispatch, useAppSelector } from '@hooks/index';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  fetchCounterValue,
  selectCounterValue,
  selectCounterIsLoading,
  selectCounterError,
  selectCounterIsPositive,
} from '@store/counterSlice';

export function CounterExample() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(selectCounterValue);
  const isLoading = useAppSelector(selectCounterIsLoading);
  const error = useAppSelector(selectCounterError);
  const isPositive = useAppSelector(selectCounterIsPositive);

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleIncrementBy10() {
    dispatch(incrementByAmount(10));
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleFetch() {
    dispatch(fetchCounterValue());
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-xl font-bold">Redux Counter Example</h2>

      <p className={`text-4xl font-mono font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>{value}</p>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex gap-2">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={handleDecrement}>
          -
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={handleIncrement}>
          +
        </button>
        <button className="px-4 py-2 bg-blue-200 rounded" onClick={handleIncrementBy10}>
          +10
        </button>
        <button className="px-4 py-2 bg-yellow-200 rounded" onClick={handleReset}>
          Reset
        </button>
        <button className="px-4 py-2 bg-purple-200 rounded" onClick={handleFetch} disabled={isLoading}>
          {isLoading ? 'Loading…' : 'Fetch random'}
        </button>
      </div>
    </div>
  );
}
