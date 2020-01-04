function tugas24() {
  function normal() {
    var numbers = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    numbers = numbers.toString();
    return numbers;
  }
    console.log("Sebelumnya:", normal());

    // fungsi ascending
    function asc() {
      var numbers = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
      numbers = numbers.sort();
      numbers = numbers.toString();
      return numbers;
    }
    console.log("Ascending:", asc());

    // fungsi descending
    function desc() {
      var numbers = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
      numbers = numbers.sort();
      numbers = numbers.reverse();
      numbers = numbers.toString();
      return numbers;
    }
    console.log("Descending:", desc());

    // fungsi filter
    function filter10() {
      var numbers = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
      numbers = numbers.sort();
      numbers = numbers.reverse();
      numbers = numbers.filter(number => {
        return number > 10;
      })
      numbers = numbers.toString();
      return numbers;
    }
    console.log("Filter >10 :", filter10());
}
tugas24();
