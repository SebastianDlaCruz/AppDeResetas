const date = new Date();

export const getCurrentDate = () => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

export const getTime = () => `${date.getHours()}:${date.getMinutes()}`;