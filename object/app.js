const kisiler = [ { name: 'Ahmet', surname: 'Can', job: 'developer', age: 30, }, 
{ name: 'Mehmet', surname: 'Baki', job: 'tester', age: 35, }, 
{ name: 'Nur', surname: 'Ersan', job: 'team lead', age: 40, }, 
{ name: 'Merve', surname: 'Veli', job: 'developer', age: 26, }];

// ? Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.
kisiler.filter((x) => x.age < 33 ).forEach((y) => console.log(y.name));
// bu bir Json formatında bir dizi oldugu için her bir listenin elemanını filter ile dolaştım.
// daha sonra age 33 den küçük olanları filtreledim. ve sonra forEach ile bunları yazdırdım.
// filterın içindeki x arrayın her bir objesini temsil eder.



// ? 33 yasindan kücüklerin isimlerini diziye saklayiniz.
const empty =  []
const newArr = kisiler.filter((x) => x.age <33).map((y)=> empty.push(y.name))
console.log(empty);

// ? Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak yeni diziye saklayiniz.

const kisiler2 = [ { name: 'Ahmet', surname: 'Can', job: 'developer', age: 30, }, { name: 'Mehmet', surname: 'Baki', job: 'tester', age: 35, }, { name: 'Nur', surname: 'Ersan', job: 'team lead', age: 40, }, { name: 'Merve', surname: 'Veli', job: 'developer', age: 26, },

{ name: 'Ruzgar', surname: 'Kuzey', job: 'tester', age: 24, }, ];

const empty2 = [];
kisiler2.filter((x) => x.job === "developer").map((y)=> empty2.push(y.name) +  empty2.push(y.age))
console.log(empty2);



const newBee = kisiler2.filter((x) => x.job ==="developer").map((y) => ({yeniYas : y.age , yeniIsim : y.name}));
//! bunu bir nesnede saklayın dediği için mapten sonra {} ile yeni bir obje oluşturduk. 
console.log(newBee);



