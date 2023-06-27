//llamo a una variable de entorno

const URL_usuario = import.meta.env.VITE_API_USUARIOS;
const URL_recetas = import.meta.env.VITE_API_RECETAS;

export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );

    if (usuarioBuscado) {
      //si encontere el mail es correcto
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      }
    } else {
      //el mail no existe

      console.log("el mail no existe");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const obtenerListaRecetas = async () => {
  try {
    const respuesta = await fetch(URL_recetas);
    const listaProductos = await respuesta.json();
     return listaProductos;
  } catch (error) {
    console.log(error);
  }
};
export const crearReceta = async (receta) => {
  try {
    const respuesta = await fetch(URL_recetas, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(receta)
    });
    return respuesta; //status de la respuesta 201
  } catch (error) {
    console.log(error);
  }
};