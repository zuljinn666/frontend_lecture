var employees = [{
    name: 'Василий',
    expirence: '323 days',
    isFrontender: true,
    isBackender: false,
    company: 'Simbirsoft'
}, {
    name: 'Петр',
    expirence: '3 days',
    isFrontender: true,
    isBackender: true,
    company: 'Yandex'
},{
    name: 'Николай',
    expirence: '145 days',
    isFrontender: true,
    isBackender: false,
    company: 'Google'
}, {
    name: 'Сергей',
    expirence: '659 days',
    isFrontender: true,
    isBackender: false,
    company: 'Apple'
}, {
    name: 'Борис',
    expirence: '490 days',
    isFrontender: true,
    isBackender: false,
    company: 'Microsoft'
}, {
    name: 'Алексей',
    expirence: '23 days',
    isFrontender: true,
    isBackender: true,
    company: 'Simbirsoft'
}, {
    name: 'Александр',
    expirence: '678 days',
    isFrontender: true,
    isBackender: false,
    company: 'Simbirsoft'
}, {
    name: 'Андрей',
    expirence: '345 days',
    isFrontender: true,
    isBackender: false,
    company: null
}, {
    name: 'Test',
    expirence: 'Invalid days',
    isFrontender: true,
    isBackender: false,
    company: null
}];

/**
 * 1. Есть ли в массиве хотя бы один Fullstack (фронтендер и бекендер одноврменно)
 */

var fullstack = employees.some(function(employee) {
  return employee.isFrontender && employee.isBackender;
});

console.log('1.Fullstack is present:', fullstack);

/**
 * 2. Являются ли все разработчики фронтедерами
 */

var allFrontend = employees.every(function(employee) {
  return employee.isFrontender;
});

console.log('\n2.All in frontend:', allFrontend);

/**
 * 3. Всех работающих в Симбирсофт
 */

var simbirsoftEmployees = employees.filter(function(employee) {
  return employee.company && employee.company == 'Simbirsoft';
});

console.log('\n3.Simbirsoft employees:\n', simbirsoftEmployees);

/**
 * 4. Все ли работают в компании (у всех ли поле 'company' заполнено)
 */

var allInCompany = employees.every(function(employee) {
  return employee.company;
});

console.log('\n4.All in company:', allInCompany);

/**
 * 5. Всех с опытом больше года
 */

var experienced = employees.filter(function(employee) {
  if (!employee.expirence) { return; }

  var experienceValue = parseInt(employee.expirence);
  if (isNaN(experienceValue)) { return; }

  if (experienceValue <= 365) { return; }

  return employee;
});

console.log('\n5.Experience over 1 year:\n', experienced);

/**
 * 6. Добавить объектам метод для преобразования в строковый тип - должно вернуть '<company>_<name>'
 */

function stringify() {
  var argsArray = [this.company, this.name];
  return argsArray.join('_');
}

console.log('\n6.Demonstrate toString() method:');

employees = employees.map(function(employee) {
  employee.toString = stringify;
  console.log(employee.toString());
  return employee;
});

/**
 * 7. Добавить объектам метод для преобразования в численный тип - должно вернуть '<кол-во лет опыта>'
 */

function numeralize() {
  var experienceValue = parseInt(this.expirence);
  if (isNaN(experienceValue)) { return '[Invalid object attribute]'; }
  return experienceValue;
}

console.log('\n7.Demonstrate toNumber() method:');

employees = employees.map(function(employee) {
  employee.toNumber = numeralize;
  console.log(employee.toNumber());
  return employee;
});
