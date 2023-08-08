import React from 'react'
import { Main } from '../Main'
import React, { useState } from 'react';
import { German } from '../German';

export const Testes = () => {


  const [nome, setNome] = useState(<Main/>);


  return (
    <div>

<button onClick={() => setNome(<German/>)}>
          O nome com botão é
        </button>

        <div>
        {nome}
          </div>
      
   

    </div>
  )
}
