
// После удаления: длина массива 3, эелементов 2
var man1 = ['Ivan', 'Bob', 'Kate'];
function remove (arr, k) {delete arr [k]; return arr;}
console.log(remove(man1,0));

// тоже самое, что в первом варианте, но присвоили параметр андефаин
var man2 = ['Alex', 'Kevin', 'Den', 'Nik'];
function rem (arr, t) {arr[t]=undefined; return arr;}
console.log(rem(man2,0));