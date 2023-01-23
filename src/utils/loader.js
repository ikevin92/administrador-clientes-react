import { obtenerCliente, obtenerClientes } from "../api/clientes";


export const loader = async () => {
  const clientes = await obtenerClientes();
  return clientes;
};


export const editarClienteLoader = async ({ params }) => {
  const cliente = await obtenerCliente(params.clienteId);

  if (Object.values(cliente).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No hay resultados'
    });
  }

  return cliente;
};
