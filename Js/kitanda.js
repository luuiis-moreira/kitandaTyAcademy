function Kitana() {
    const produtos = [
        { descricao: "Maçã", valor: 5.99 },
        { descricao: "Pera", valor: 7.99 },
        { descricao: "Abacate", valor: 4.59 },
        { descricao: "Banana", valor: 2.99 },
        { descricao: "Kiwi", valor: 12.29 },
        { descricao: "Laranja", valor: 2.59 },
        { descricao: "Acerola", valor: 3.79 },
        { descricao: "Jabuticaba", valor: 8.19 },
        { descricao: "Morango", valor: 5.97 },
        { descricao: "Abacaxi", valor: 6.99 },
        { descricao: "Ameixa", valor: 15.65 },
        { descricao: "Açai", valor: 45.98 },
    ];
    const totalCompra = document.querySelector('#mostraTotalCompra');
    const cestaCliente = document.querySelector('#cestaDoCliente');
    const cesta = [];
    let soma = 0;

    this.inicia = () => {
        this.addProdutoLista();
        this.addItemCesta();
    };

    this.addProdutoLista = () => {
        for (produto of produtos) {
            let li = this.criaLI();
            let btn = document.createElement('button')
            li.innerText += produto.descricao;
            btn.innerText = produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            li.appendChild(btn);
            li.setAttribute('data-preco', produto.valor);
            li.setAttribute('class', 'item--produto');
            document.querySelector('#produtos').appendChild(li);
        };
    };
    this.addProdutoCesta = (el) => {
        cesta.push(el.innerText);
    }
    this.fazerSoma = (el) => {
        soma += Number(el.dataset.preco);
    }
    this.criaLI = () => {
        let li = document.createElement('li');
        return li;
    }
    this.removeBRL = (el) => {
        let posicao = el.innerText.indexOf('R');
        let palavra = el.innerText.slice(0, posicao)
        return palavra;
    }
    this.addItemCesta = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            const palavra = this.removeBRL(el);
            if (el.classList.contains('item--produto')) {
                if (cesta.indexOf(el.innerText) !== -1) {
                    alert(`${palavra} já foi adicionado na cesta e vai ser removido da lista!`);
                    el.remove();
                } else {
                    let li = this.criaLI();
                    this.addProdutoCesta(el);
                    this.fazerSoma(el);
                    li.innerText = palavra;
                    cestaCliente.appendChild(li);
                    totalCompra.value = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                };
            };
        });
    };
};
const cesta = new Kitana();
cesta.inicia();