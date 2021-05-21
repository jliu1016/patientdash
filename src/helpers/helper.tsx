export   const getAge = (date: Date) => {
    let timeDiff = Date.now() - date.getTime();
    if (timeDiff < 0) {
      return 0
    }
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
  }