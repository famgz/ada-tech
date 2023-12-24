import { FormEvent, useEffect, useRef, useState } from 'react';

export const Refs: React.FC = () => {
  // * useRef
  // react-hook-form.com -> biblioteca para formularios eficientes
  // O valor sera atualizado mas nao dispara re-renderizacao
  // E quando houver re-renderizacao, seu valor sera preservado
  // const ref = useRef(0); // { current: 0}
  const inputNameRef = useRef<HTMLInputElement>(null);// { current: null}
  const inputEmailRef = useRef<HTMLInputElement>(null);// { current: null}
  const inputPasswordRef = useRef<HTMLInputElement>(null);// { current: null}

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(inputNameRef.current?.value)
    console.log(inputEmailRef.current?.value)
    console.log(inputPasswordRef.current?.value)
  }

  // // toggle ira disparar re-renderizacao
  // const [toggle, setToggle] = useState(false)
  // function handleClickOnButton() {
  //   ref.current = ref.current + 1;
  //   console.log(ref.current)
  // }

  return (
    <form style={{ padding: '2rem' }} onSubmit={(event) => handleOnSubmit(event)}>
      <h1>useRef</h1>
      {/* <p>{`Valor da ref: ${ref.current}`}</p> */}

      {/* Ao inserir a ref dentro do elemento HTML, automaticamente a referencia ao elemento sera atribuido a ref */}
      {/* uso do useRef eh ideal para casos mais robustos como grandes formularios, para evitar que tudo re-renderize a cada caractere digitado */}
      <input type='text' placeholder='Nome Completo' ref={inputNameRef} /><br />
      <input type="email" placeholder='Email' ref={inputEmailRef} /><br />
      <input type="password" placeholder='Senha' ref={inputPasswordRef} /><br />
      <button style={{width: '100px'}} type='submit'>
        Enviar
      </button>
      {/* <button style={{width: '200px'}} onClick={handleClickOnButton}>Clique aqui para incrementar a ref</button> */}
      {/* <button style={{width: '200px'}} onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </form>
  );
};
