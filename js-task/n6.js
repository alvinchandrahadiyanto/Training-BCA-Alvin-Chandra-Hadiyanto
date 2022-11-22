var jarak = 3 //dalam km

if (jarak < 0) {
    jarak=0
}

if (jarak<=2) {
    let ongkos=5000
    console.log(ongkos)
  }else {
    let ongkos=5000+(jarak-2)*3000
    console.log(ongkos)
  }