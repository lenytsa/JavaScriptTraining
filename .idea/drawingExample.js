//draw 20 rows contained 15 stars
for(let j= 1; j<=20; j++){
    let stars = ' ';
    for(let i=1; i<=15; i++ ){   //print one line with starts
        stars = stars + '*';
    }
    console.log(stars);
}
console.log('-----------------------------')
//Create function pattern (n,m) that returns patern with stars (m: rows, n number of stars in row)
function pattern(n, m) {
    let stars = '';
for(let j=1; j<=m; j++){
        for(let i=1; i<=n; i++){
            stars = stars + '*';
      }
        if(j < m-1);{
        stars = stars + '\n';
            }
        }
return stars;
}
console.log(pattern(3,5));