// context/expenses-context.js
import { createContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DUMMY_EXPENSES } from "../data/expense-data";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    }
    case "UPDATE": {
      const idx = state.findIndex((ex) => ex.id === action.payload.id);
      const updated = { ...state[idx], ...action.payload.data };
      const copy = [...state];
      copy[idx] = updated;
      return copy;
    }
    case "DELETE":
      return state.filter((ex) => ex.id !== action.payload);
    case "SET":
      return action.payload; // แทนที่ทั้งรายการ (ตอนโหลดจากเครื่อง)
    default:
      return state;
  }
}

async function saveExpensesToDevice(expenses) {
  // แปลง Date → ISO string ให้เก็บง่าย
  const serializable = expenses.map((e) => ({
    ...e,
    date: new Date(e.date).toISOString(),
  }));
  await AsyncStorage.setItem("expenses", JSON.stringify(serializable));
}

async function loadExpensesFromDevice() {
  const raw = await AsyncStorage.getItem("expenses");
  if (!raw) return null;
  const parsed = JSON.parse(raw);
  // แปลงกลับเป็น Date object
  return parsed.map((e) => ({ ...e, date: new Date(e.date) }));
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  // โหลดครั้งแรก
  useEffect(() => {
    (async () => {
      try {
        const loaded = await loadExpensesFromDevice();
        if (loaded && loaded.length > 0) {
          dispatch({ type: "SET", payload: loaded });
        }
      } catch (e) {
        console.log("Load expenses error:", e);
      }
    })();
  }, []);

  // เซฟทุกครั้งที่รายการเปลี่ยน
  useEffect(() => {
    (async () => {
      try {
        await saveExpensesToDevice(expensesState);
      } catch (e) {
        console.log("Save expenses error:", e);
      }
    })();
  }, [expensesState]);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
