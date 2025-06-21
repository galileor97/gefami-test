// 1. Tampilkan deret angka berkelipatan 5 mulai dari 50 sampai dengan 100
// - Jika angka <=60 maka tampilkan tulisan “KURANG” di sebelah angka tsb.
// - Jika >60 dan <=70 maka tampilkan tulisan “CUKUP” di sebelah angka tsb.
// - Jika >70 dan <=80 maka tampilkan tulisan “BAIK” di sebelah angka tsb.
// - Jika >80 maka tampilkan tulisan “LUAR BIASA” di sebelah angka tsb.

for (let i = 50; i <= 100; i += 5) {
  let status = "";

  if (i <= 60) {
    status = "KURANG";
  } else if (i <= 70) {
    status = "CUKUP";
  } else if (i <= 80) {
    status = "BAIK";
  } else {
    status = "LUAR BIASA";
  }

  console.log(`${i} - ${status}`);
}



//2. Buatlah deret bilangan Fibonacci sebanyak 20
// 0 1 1 2 3 5 8 … dan seterusnya

function generateFibonacci(n) {
  const fibonacci = [0, 1]; 

  for (let i = 2; i < n; i++) {
    const next = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(next);
  }

  return fibonacci;
}

const hasil = generateFibonacci(20);
console.log(hasil.join(" ")); 

// 3. Buatlah tampilan berikut sesuai variable x :
// - Jika variable x=1 maka tampil :
// *
// - Jika variable x=2 maka tampil :
// *
// * *
// - Jika variable x=3 maka tampil :
// *
// * *
// * * *
// - … dan seterusnya

let x = 5; 

for (let i = 1; i <= x; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row.trim());
}


// 4. Buatlah tampilan terbilang dari variable x yang berupa 4 digit angka ( lebih besar dari 2000 ) :
// Contoh : 2234 = Dua Ribu Dua Ratus Tiga Puluh Empat
// 8500 = Delapan Ribu Lima Ratus
// 7001 = Tujuh Ribu Satu

function terbilang(x) {
  const satuan = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];

  if (x < 2000 || x > 9999) {
    return "Masukkan angka 4 digit lebih besar dari 2000.";
  }

  const ribuan = Math.floor(x / 1000);
  const ratusan = Math.floor((x % 1000) / 100);
  const puluhan = Math.floor((x % 100) / 10);
  const satu = x % 10;

  let hasil = "";

  // Ribuan
  hasil += satuan[ribuan] + " Ribu";

  // Ratusan
  if (ratusan > 0) {
    hasil += " " + satuan[ratusan] + " Ratus";
  }

  // Puluhan dan satuan
  if (puluhan > 0) {
    if (puluhan === 1) {
      if (satu === 0) {
        hasil += " Sepuluh";
      } else if (satu === 1) {
        hasil += " Sebelas";
      } else {
        hasil += " " + satuan[satu] + " Belas";
      }
    } else {
      hasil += " " + satuan[puluhan] + " Puluh";
      if (satu > 0) {
        hasil += " " + satuan[satu];
      }
    }
  } else if (satu > 0) {
    hasil += " " + satuan[satu];
  }

  return hasil.trim();
}

// Contoh penggunaan
let angka = 2234;
console.log(`${angka} = ${terbilang(angka)}`);

angka = 8500;
console.log(`${angka} = ${terbilang(angka)}`);

angka = 7001;
console.log(`${angka} = ${terbilang(angka)}`);
