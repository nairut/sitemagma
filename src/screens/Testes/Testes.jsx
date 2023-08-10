import React from 'react'
import { Main } from '../Main'
import React, { useState } from 'react';
import { German } from '../German';
import { Magic } from './Magic';

export const Testes = () => {


  const [nome, setNome] = useState(<Main/>);


  return (
    <div>

<button onClick={() => setNome(

        <>
        <Magic/>
        <Magic/>
        <Magic/>
        </>
        
        
        )}>
          O nome com botão é
        </button>

        <div>
        {nome}
          </div>
      
   

    </div>
  )
}
