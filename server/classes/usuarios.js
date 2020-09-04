class Usuarios {
  constructor() {
    this.peronsonas = [];
  }

  agregarPersona(id, nombre, sala) {
    let persona = {
      id,
      nombre,
      sala,
    };
    this.peronsonas.push(persona);
    return this.peronsonas;
  }

  getPersona(id) {
    let persona = this.peronsonas.filter((persona) => persona.id === id)[0];
    return persona;
  }

  getPersonas() {
    return this.peronsonas;
  }

  getPersonasPorSala(sala) {
    let personasEnSala = this.peronsonas.filter(
      (persona) => persona.sala === sala
    );
    return personasEnSala;
  }

  borrarPersona(id) {
    let personaBorrada = this.getPersona(id);
    this.peronsonas = this.peronsonas.filter((persona) => persona.id !== id);
    return personaBorrada;
  }
}

module.exports = {
  Usuarios,
};
