// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bodyParser = (value: any) => {
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}
