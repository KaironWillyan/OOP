class Postagem{
    id: number;
    texto: string;
    qtdCurtidas : number;
    
    constructor(id: number, texto: string, qtdCurtidas: number){
        this.id = id
        this.texto = texto
        this.qtdCurtidas = qtdCurtidas
    }

    curtir(){
        return this.qtdCurtidas++
    }
    toString(){
        console.log(`
        id: ${this.id}
        texto: ${this.texto}
        curtidas: ${this.qtdCurtidas}
        `);
    }
}

class MicroBlog{
    postagens : Postagem[] = [];

    incluir(post : Postagem){
        this.postagens.push(post);
    }
    excluirPost(id : number){
        for(let i = 0; i < this.postagens.length; i++){
            if(this.postagens[i].id == id){
                this.postagens.splice(i, 1);
                break;
            }
        }
    }
    postMaisCurtido(){
        let post = this.postagens.reduce((maiorPostagem, postagemAtual) => postagemAtual.qtdCurtidas > maiorPostagem.qtdCurtidas ? maiorPostagem = postagemAtual : maiorPostagem = maiorPostagem);

        return [post];
    }
    curtir(id : number){
        this.postagens[id].curtir();
    }
    toString(){
        let text: string = ''
        this.postagens.forEach((postagem) => text += `${postagem.toString()}\n`)
        return text
        
    }
}

let timeLine = new MicroBlog()

timeLine.incluir(new Postagem(1, 'texto exemplo', 100))
timeLine.incluir(new Postagem(2, 'asasgsaghah', 60))
timeLine.incluir(new Postagem(3, '681486488', 50))

console.log(timeLine.toString())