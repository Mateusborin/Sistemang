export class Cliente {

    constructor(key: string, nome: string, dataNascimento: any) {
        this.key = key;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    key: string;
    nome: string;
    dataNascimento:any;

}