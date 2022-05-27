import React, { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      telefone: '',
      cep: '',
    };
  }

    onChange = ({ target }) => {
      const { name, value } = target;
      const valorInput = value;
      this.setState(
        { [name]: valorInput },
      );
    };

    render() {
      const { nome,
        email,
        cpf,
        endereco,
        telefone,
        cep,
      } = this.state;
      return (
        <div>
          <form>
            <h2>informações do Comprador</h2>
            <label htmlFor="nome">
              Nome Completo:
              <input
                type="text"
                name="nome"
                value={ nome }
                onChange={ this.onChange }
                data-testid="checkout-fullname"
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                value={ email }
                onChange={ this.onChange }
                data-testid="checkout-email"
              />
            </label>
            <label htmlFor="cpf">
              CPF:
              <input
                type="text"
                name="cpf"
                value={ cpf }
                onChange={ this.onChange }
                data-testid="checkout-cpf"
              />
            </label>
            <label htmlFor="telefone">
              Telefone:
              <input
                type="text"
                name="telefone"
                value={ telefone }
                onChange={ this.onChange }
                data-testid="checkout-phone"
              />
            </label>
            <label htmlFor="cep">
              CEP:
              <input
                type="text"
                name="cep"
                value={ cep }
                onChange={ this.onChange }
                data-testid="checkout-cep"
              />
            </label>
            <label htmlFor="endereco">
              Endereço:
              <input
                type="text"
                name="endereco"
                value={ endereco }
                onChange={ this.onChange }
                data-testid="checkout-address"
              />
            </label>
          </form>
        </div>
      );
    }
}

export default Checkout;
