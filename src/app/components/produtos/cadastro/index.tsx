import { useState } from 'react'
import { Layout } from '../../layout'

export const CadastroProdutos: React.FC = () => {

    const [sku, setSku] = useState('')
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')

    const submit = () => {
        const produto = {
            sku,
            nome,
            preco,
            descricao
        }
        
        console.log(produto)
    }

    return (
        <Layout titulo="Cadastro de Produtos">
            <div className="columns">

                    {/* SKU do Produto */}
                <div className="field is-half column">
                    <label className="label has-text-black" htmlFor="InputSku">SKU</label>
                    <div className="control is-expanded">
                        <input className="input placeholder-gray is-hovered has-text-black has-background-white" 
                        id="InputSku"
                        value={sku}
                        onChange={event => setSku(event.target.value)}
                        type="text" 
                        placeholder="Digite o SKU do produto"/>
                    </div>
                </div>

                    {/* Preço */}
                <div className="field is-half column">
                    <label className="label has-text-black" htmlFor="InputPreco">Preço</label>
                    <div className="control is-expanded">
                        <input className="input placeholder-gray is-hovered has-text-black has-background-white" 
                        id="InputPreco"
                        value={preco}
                        onChange={event => setPreco(event.target.value)}
                        type="text" 
                        placeholder="Digite o preço do produto"/>
                    </div>
                </div>

            </div>
            
                {/* Nome do Produto */}
                <div className="columns">
                    <div className="field is-full column">
                        <label className="label has-text-black" htmlFor="InputNome">Nome do Produto</label>
                        <div className="control is-expanded">
                            <input className="input placeholder-gray is-hovered has-text-black has-background-white" 
                            id="InputNome"
                            value={nome}
                            onChange={event => setNome(event.target.value)}
                            type="text" 
                            
                            placeholder="Digite o nome do produto"/>
                        </div>
                    </div>
                </div>
            

                {/* Descrição do Produto */}
            <div className="columns">
                <div className="field column is-full">
                    <label className="label has-text-black" htmlFor="InputDescricao">Descrição do Produto</label>
                    <div className="control is-expanded">
                        <textarea className="textarea placeholder-gray is-hovered has-text-black has-background-white" 
                        id="InputDescricao"
                        value={descricao}
                        onChange={event => setDescricao(event.target.value)}
                        placeholder="Digite a descrição do produto"></textarea>
                    </div>
                </div>
            </div>

            {/* Botões */}
            <div className="field is-grouped">
                <div className="control">
                    <button onClick={submit} className="button is-link">Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>
            </div>
        </Layout>
    );
}