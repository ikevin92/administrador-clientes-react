import { redirect } from "react-router-dom";
import { actualizarCliente, agregarCliente, eliminarCliente } from "../api";

export const action = async ({ request }) => {

  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  const email = formData.get('email');

  // validaciones
  const errores = [];

  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios');
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!regex.test(email)) {
    errores.push('El email no es valido');
  }

  // retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarCliente(datos);
  return redirect('/');
};


export const editarClienteAction = async ({ params, request }) => {
  console.log('ingreso editarClienteAction');
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  const email = formData.get('email');

  // validaciones
  const errores = [];

  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios');
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!regex.test(email)) {
    errores.push('El email no es valido');
  }

  // retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  // actualizar el cliente
  await actualizarCliente(params.clienteId, datos);
  return redirect('/');

};


export const eliminarClienteAction = async ({ params }) => {
  await eliminarCliente(params.clienteId);
  return redirect('/');
};
