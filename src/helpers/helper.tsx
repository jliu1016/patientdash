export const getAge = (date: Date) => {
  let timeDiff = Date.now() - date.getTime();
  if (timeDiff < 0) {
    return 0
  }
  return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
}

export const getFullName = (name: any) => {
  const lastName = name[0].family ? name[0].family : ''
  const firstName = name[0].given.join(' ')
  return firstName + ' ' + lastName
}