var harga = 10000

if (harga < 0) {
    harga=0
}
if (harga >= 25000) {
    console.log('Mahal')
  } else if (harga >= 10000) {
    console.log('Sedang')
  } else {
    console.log('Murah')
  }