const students = [
    {id : 21, name: 'Omar Sani'},
    {id : 31, name: 'Manna'},
    {id : 41, name: 'Sakib Khan'},
    {id : 71, name: 'Deepjol'},
];
const names= students.map(s=>s.name);
const ids = students.map(s=>s.id);
const bigger = students.filter(s=>s.id>40);
console.log(bigger);
console.log(ids);
console.log(names);