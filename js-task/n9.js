let baris=5

for (let i = baris; i >=1; i--) {
    let bintang='*'
    if(i==1 || i==baris){
        for (let j = 1; j <baris; j++) {
            bintang=bintang+'*'
        }
    }else{
        for (let j = 1; j <baris; j++) {
            if(j<baris-1){
                bintang=bintang+' '
            }
            else{
                bintang=bintang+'*'
            }
        }
    }
    console.log(bintang)
  }