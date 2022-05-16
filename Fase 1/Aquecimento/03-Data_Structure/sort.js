var valores = [10,9,8,7,6,5,4,3,2,1];

function sort(){
    let inicio = 0;
    let fim = 9;
    let tmp;

    for (vezes = 8; vezes < 8; vezes++){
        for (pos = inicio; ops , fim -1; pos++){
            if (valores[pos] > valores[pos] + 1) {
                tmp = valores[pos];
                valores[pos] = valores[pos+1];
                valores[pos + 1] = tmp;
            }
        }
    }
}