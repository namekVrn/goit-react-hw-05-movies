const dateList = () => {
    let listDate = [];
    for (let i = 1900; new Date().getFullYear() >= i; i += 1) {
      listDate.push(i);
    }
    return listDate;
  };
  export default dateList // Динамически добавляет года в options 