import { Form, useNavigate } from 'react-router-dom';

export const Cliente = ({ cliente }) => {
  const { nombre, empresa, email, telefono, id } = cliente;

  const navigate = useNavigate();

  const handleEliminar = (e) => {
    if (!confirm('Deseas eliminar el registro?')) {
      e.preventDefault();
    }
  };

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-600 uppercase font-bold">Email:</span>{' '}
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-600 uppercase font-bold">Tel:</span>{' '}
          {telefono}
        </p>
      </td>

      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>
        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={handleEliminar}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};
