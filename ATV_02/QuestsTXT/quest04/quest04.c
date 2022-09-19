#include <stdio.h>

int main(){
    int c = 10; //declara variavel int com valor 10
    int *p; //declara ponteiro para int

    p = &c; //atribui ao ponteiro o endereço da variavel int

    printf("Conteudo apontado por p: %d \n", *p); //10

    *p = 12; //atribui um novo valor à posicao da memoria apontada por *p

    printf("Conteudo apontado por p: %d \n", *p); //12
    printf("Conteudo de count: %d \n", c); //12
    
    return 0;
}