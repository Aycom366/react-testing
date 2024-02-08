import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter hook", () => {
  test("should render the initial count which is 0", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 5 },
    });
    expect(result.current.count).toBe(5);
  });

  //when testing a state change with react, you can use the act function from react-dom/test-utils
  test("should increment the count by 1", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrement the count by 1", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
