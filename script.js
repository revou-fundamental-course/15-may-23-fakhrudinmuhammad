
function hitungLuas(){

    var sisiLuas = document.getElementById("sisi-luas").value;
    document.getElementById("nilai-sisi-luas").innerText = sisiLuas;

    var perhitunganLuas = document.getElementById("output-luas").value;
    document.getElementById("output-luas").innerText= sisiLuas * sisiLuas;
     
    document.getElementsByClassName("result-luas").visibility="visiblity";
    

console.log(sisiLuas);
console.log(perhitunganLuas);

    
}

function ResetLuas(){

    var Reset= document.getElementById("sisi-luas").value= 0;

    var sisiLuas = document.getElementById("sisi-luas").value;
    document.getElementById("nilai-sisi-luas").innerText = 0;
    
    var perhitunganLuas = document.getElementById("output-luas").value;
    document.getElementById("output-luas").innerText=0;
     
    
    document.getElementsByClassName("result-luas").visibility="visiblity";
       
}

function hitungKeliling(){

    var sisiKeliling = document.getElementById("sisi-keliling").value;

    document.getElementById("nilai-sisi-keliling").innerText = sisiKeliling;

    var perhitunganKeliling = document.getElementById("output-keliling").value;
    document.getElementById("output-keliling").innerText= sisiKeliling * 4;
     
    
    document.getElementsByClassName("result-keliling").visibility="visiblity";
    

console.log(sisiKeliling);
console.log(perhitunganKeliling);

    
}

function ResetKeliling(){

    var Reset= document.getElementById("sisi-keliling").value= 0;

    

    var sisiKeliling = document.getElementById("sisi-keliling").value;

    document.getElementById("nilai-sisi-keliling").innerText = 0;
    
    var perhitunganLuas = document.getElementById("output-keliling").value;
    document.getElementById("output-keliling").innerText=0;
     
    
    document.getElementsByClassName("result-keliling").visibility="visiblity";
    
 
}


/* pada java script saya membuat 4 buah function yang terdiri dari:
1. function hitungLuas
2. function ResetLuas
3. function hitungKeliling
4. function ResetKeliling

Setiap Function memiliki peran. Berikut peran dari function pada java script:

1. Function hitungLuas memiliki peran:
-untuk menulis ulang nilai sisi yang telah dimasukan pada box input.
-untuk menulis hasil akhir nilai luas persegi

2. Function ResetLuas memiliki peran:
-untuk menulis ulang nilai sisi dengan nilai 0 pada box input atau mereset nilai yang ada menjadi 0.
-mereset nilai sisi dan luas yang telah ditulis function hitungLuas

3. Function hitungKeliling memiliki peran:
-untuk menulis ulang nilai sisi yang telah dimasukan pada box input.
-untuk menulis hasil akhir nilai keliling persegi

4. Function ResetLuas memiliki peran:
-untuk menulis ulang nilai sisi dengan nilai 0 pada box input atau mereset nilai yang ada menjadi 0.
-mereset nilai sisi dan keliling yang telah ditulis function hitungKeliling

*/
