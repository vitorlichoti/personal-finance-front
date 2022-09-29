import React from 'react';

function Form() {
  return (
    <form>

      <label htmlFor='description-text'>
        Descrição
        {' '}
        <textarea
          type='textarea'
          id='description-text'
          name='description'
          // value=''
        />
        {' '}
      </label>

      <label htmlFor='amount-value'>
        Quantidade
        {' '}
        <input
          type=''
          id='amount-value'
          name='amount'
          // value=''
        />
        {' '}
      </label>

      <label>
        Tipo de Pagamento
        {' '}
        <select
          name='paymentType'
        >
          <option>Selecione uma opção</option>
          <option>Crédito</option>
          <option>Débito</option>
          <option>Dineiro</option>
        </select>
        {' '}
      </label>

      <button type='submit'>Enviar</button>

    </form>
  );
};

export default Form;
