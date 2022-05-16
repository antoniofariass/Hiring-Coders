//Sequence Search

var valores = [5,8,10,22,45,38];

function search(num){
    for (i=0; i< 6; i++){
        if (num == valores[o]) {
            return i;
        }
    }
    return -1;
}

//Binary Search 
//The elements must have in order 

function binSearch(num) {
    let inicio, fim;
    inicio = 0;
    fim = 9;
    while (inicio < fim) {
        meio = parseInt((inicio + fim) / 2);
        if (num == valores[meio]){
            return meio;
        }else{
            if(num > valores[meio]){
                inicio = meio +1;
            } else{
                fim = meio - 1;
            }
        }
    }
    return -1;
}
