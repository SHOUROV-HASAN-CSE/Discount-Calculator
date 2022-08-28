document.getElementById('discount-btn').addEventListener('click', function () {
  const inputData = document.getElementById('input');
  const inputString = inputData.value;
  const input = parseFloat(inputString);
  inputData.value = '';
  //  VALUE-1 INPUT WORK DONE
  const discountData = document.getElementById('discount');
  const discountString = discountData.value;
  const discount = parseFloat(discountString);
  //  VALUE-2 INPUT WORK DONE
  const priceInput = document.getElementById('price');
  // Condition Apply
  if (isNaN(inputString) || isNaN(discountString)) {
    alert('Please Provide a Valid Number.');
    discountData.value = '';
    return;
  } else if (discount > 100) {
    alert('Please Provide lowest of 100 number ');
    discountData.value = '';
    return;
  }
  //  PRICE INPUT WORK DONE
  const priceDiscount = discount / 100;
  const sum = input * priceDiscount;
  const total = input - sum;
  //  PRICE SUMATION WORK DONE
  priceInput.innerText = total;

})