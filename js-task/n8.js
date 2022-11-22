let baris=5

for (let i = baris; i >=1; i--) {
    let bintang='*'
    for (let j = 1; j <i; j++) {
        bintang=bintang+'*'
    }
    console.log(bintang)
  }