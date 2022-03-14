import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import * as api from '../services/api';
import ProductCards from './ProductCards';
// import ShowItem from './ShowItem';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      inputName: '',
    };
  }

  /*     componentDidMount = () => {
      const { match: { params: { id } } } = this.props;
    } */

  /*  esta  function faz a captura do valor digitado no input
  e muda o estado inicial do inputName */
  onChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputName: value,
    });
  }

  /*  Recebemos auxilio do nosso ilustríssimo Sugano  */
  /* esta function passa para a API os valor buscado dentro do input
  e insere um novo valor ao estado products */
  getProductsApi = async () => {
    const { inputName } = this.state;
    const items = await api.getProductsFromCategory(inputName);
    this.setState({
      products: items,
    });
  }

  productId = async () => {
    const { id } = this.state;
    await api.getProductDetails(id);
  }

  render() {
    /*  importamos os estados abaixo para serem utilizado na renderização dos cards  */
    const {
      products, inputName,
    } = this.state;

    return (
      <>
        <div className="search-box">
          <input
            type="text"
            name=""
            placeholder="Pesquise aqui o seu produto"
            data-testid="query-input"
            value={ inputName }
            onChange={ this.onChange } /* utilizado para capturar o valor do input como explicado acima */
          />
        </div>

        <button
          type="submit"
          onClick={ this.getProductsApi } /* utilizado para executar o filtro */
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {/* verifica se o estado products esta vazio caso sim retorna a msg
        caso não retorna os cards */}
        {products.length > 0
          ? products.map((item) => (
            <ProductCards
              key={ item.id }
              id={ item.id }
              title={ item.title }
              thumbnail={ item.thumbnail }
              price={ item.price }
              onClick={ this.productId }
            />
          ))
          : <h3> Nenhum produto encontrado </h3>}

        <Link
          data-testid="shopping-cart-button"
          to="/shoppingcart"
        >
          <h1><AiOutlineShoppingCart /></h1>
        </Link>
        <p>Você ainda não realizou nenhuma busca</p>
      </>
    );
  }
}

SearchBar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SearchBar;
