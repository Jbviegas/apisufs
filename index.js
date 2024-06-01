import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorNome } from './servicos/servicos.js';


const app = express();


app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;// Busca pelo nome digitado como valor do parãmetro busca
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();//O parâmetro da função buscarUfsPorNome é o nome digitado como valor de busca
    if (resultado.length > 0) {/*Se o valor de resultado não for vazio, ou seja tiver um nome válido de tamanho maior que 0 o resultado será(resultado)*/
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada" });
    }/*Se o nome passado como valor do parâmetro busca for um nome que não existe na coleção de dados será impresso a mensagem:
( erro: Nenhuma UF encontrada) e o retorno será o código 404 */
});

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorId(req.params.iduf);/* iduf recebe o id digitado como valor na busca, esse valor é processado pela função e
 colocado em uf  */
    if (uf) {// uf contém todos os dados do objeto que contém o id colocado como valor na busca
        res.json(uf);//Essa resposta irá levar para o front-end todos os dados do objeto que contém o id colocado como valor na busca
    } else if (isNaN(parseInt(req.params.iduf))) {/* Se o id não for um número será exibido o código 400 e a mensagem de erro "Requisição inválida"
    ou seja a busca feita não é uma busca válida porque não é um número de id*/
        res.status(400).send({ "erro": "Requisição inválida" });
    } else {
        res.status(404).send({ "erro": "UF não encontrada" });
        /* Se o id for um número mas não for um número de id existente será exibido o código 404 e a mensagem de erro "UF não encontrada" ou seja
        o id buscado não foi encontrado*/
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});