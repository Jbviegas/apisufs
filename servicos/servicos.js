import colecaoUf from '../dados/dados.js';

export const buscarUfs = () => {//função que retorna a coleção com todos os dados das UFs
    return colecaoUf;
}

export const buscarUfsPorNome = (nomeUf) => {/*o nome recebido como parâmetro da função buscarUfPorNome será o nomeUf que tem o valor da busca(req.query.busca)*/
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};/*Filter irá criar um novo array a partir da colecaoUf só com os nomes dos estados através de uf.nome e depois através do método includes irá
verificar se nesse novo array existe um nome igual ao nomeUf que foi o valor passado como parâmetro pra função  buscarUfsPorNome */


export const buscarUfPorId = (id) => {/*O id recebido como parâmetro da função buscarUfPorId será o iduf que tem o valor do id buscado(req.params.iduf)*/
    const idUF = parseInt(id);/*o valor de idUF passa a ser o valor do id buscado que é iduf que foi passado como parâmetro chamado id */
    return colecaoUf.find(uf => uf.id === idUF);/*O parseInt tranforma uma string em número, portanto a string idUF passou a ser o valor do id buscado */
    /* Find é usado para encontrar um único id através de uf.id que seja igual a idUF que é a string idUF que passou a ser o valor do id buscado */
}