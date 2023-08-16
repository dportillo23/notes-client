const options = { month: 'long', day: 'numeric', year: 'numeric' } as const;

export const toFormattedLocalString = (date: Date | string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString(undefined, options)
}