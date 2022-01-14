let num = prompt('Введите номер кредитной карты');
num = num.replace( /\d(?=\d{4})/g, "*");
document.write(num);
