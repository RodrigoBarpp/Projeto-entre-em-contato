let data =[
    {
        nome: 'João',
        setor: 'Vendas'
    },

    {
        nome: 'Maria',
        setor: 'Financeiro'
    },

    {
        nome: 'Pedro',
        setor: 'Marketing'
    },

    {
        nome: 'Juliana',
        setor: 'Logistica'
    },

    {
        nome: 'Francisco',
        setor: 'Qualidade'
    },

    {
        nome: 'Thiago',
        setor: 'SAC'
    },
];


const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.nome + ' ' + ' ' + ' -  ' + ' ' + item.setor + '</div>';
    
});

info.innerHTML = details.join('\n');