// Components/ExpenseForm.js
import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "../input";
import { useState } from "react";
import Button from "../Button";
import { getFormattedDate } from "../date";

export default function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}) {
  // ถ้าไม่มี defaultValues = Add mode → ใส่วันที่วันนี้
  const today = getFormattedDate(new Date());

  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : today, // ✅ ได้ YYYY-MM-DD แล้ว
    description: defaultValues ? defaultValues.description : "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((cur) => ({ ...cur, [inputIdentifier]: enteredValue }));
  }

  function isValidDateString(dateString) {
    const parts = dateString.split("-");
    if (parts.length !== 3) return false;

    const [yStr, mStr, dStr] = parts;
    const year = +yStr,
      month = +mStr,
      day = +dStr;

    const currentYear = new Date().getFullYear();

    const yearIsValid = year >= 2000 && year <= currentYear;
    const monthIsValid = month >= 1 && month <= 12;
    const dayIsValid = day >= 1 && day <= 31;

    return yearIsValid && monthIsValid && dayIsValid;
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = isValidDateString(inputValues.date);
    const descriptionIsValid = expenseData.description.trim().length > 0;

    // console.log("amount:", expenseData.amount, "isValid:", amountIsValid);
    // console.log("date:", inputValues.date, "isValid:", dateIsValid);
    // console.log(
    //   "desc:",
    //   expenseData.description,
    //   "isValid:",
    //   descriptionIsValid
    // );

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }

    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>

      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />

      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { marginTop: 40 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: { flexDirection: "row", justifyContent: "space-between" },
  rowInput: { flex: 1 },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  button: { minWidth: 120, marginHorizontal: 8 },
});
