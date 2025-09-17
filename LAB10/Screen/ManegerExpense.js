// Screen/ManageExpense.js
import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ExpensesContext } from "../context/expenses-context";
import ExpenseForm from "../Components/ExpenseForm";
import IconButton from "../IconButton";
import { GlobalStyles } from "../colors";
import { storeExpense, updateExpense, deleteExpense } from "../filename";
import LoadingOverlay from "../Components/LoadingOverlay";
import ErrorOverlay from "../Components/ErrorOverlay";

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (e) => e.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        await updateExpense(editedExpenseId, {
          ...expenseData,
          date: expenseData.date.toISOString(),
        });
        expensesCtx.updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense({
          ...expenseData,
          date: expenseData.date.toISOString(),
        });
        expensesCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (err) {
      setError("Could not save data - please try again later!");
      setIsSubmitting(false);
    }
  }

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expensesCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (err) {
      setError("Could not delete expense - please try again later!");
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color="white"
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  deleteContainer: {
    marginTop: 16,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.colors.primary200,
    paddingTop: 8,
  },
});
