import { Form, useActionData, useNavigate } from 'react-router-dom';
import { Error, Formulario } from '../components';

export const NuevoCliente = () => {
  const navigate = useNavigate();

  const errores = useActionData();
  console.log(
    `🚀 ~ file: NuevoCliente.jsx:8 ~ NuevoCliente ~ errores`,
    errores,
  );

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method="post"
          noValidate
        >
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value={'Registrar cliente'}
          />
        </Form>
      </div>
    </>
  );
};
