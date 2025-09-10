export function getFormattedDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 01-12
  const day = date.getDate().toString().padStart(2, "0"); // 01-31

  return `${year}-${month}-${day}`;  // ✅ เปลี่ยนเป็น YYYY-MM-DD
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
