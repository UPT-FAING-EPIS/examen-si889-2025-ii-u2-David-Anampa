/**
 * @fileoverview Clase Usuario para el sistema de biblioteca digital
 * @author Sistema Automatizado
 * @version 1.0.0
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Representa un usuario del sistema de biblioteca digital
 * @class Usuario
 * @classdesc Gestiona la información y operaciones de los usuarios
 */
class Usuario {
    /**
     * Crea una instancia de Usuario
     * @constructor
     * @param {string} nombre - Nombre completo del usuario
     * @param {string} email - Correo electrónico del usuario
     * @param {string} [tipo='estudiante'] - Tipo de usuario (estudiante, profesor, administrador)
     * @example
     * const usuario = new Usuario('Juan Pérez', 'juan@email.com', 'estudiante');
     */
    constructor(nombre, email, tipo = 'estudiante') {
        /**
         * Identificador único del usuario
         * @type {string}
         * @readonly
         */
        this.id = uuidv4();
        
        /**
         * Nombre completo del usuario
         * @type {string}
         */
        this.nombre = nombre;
        
        /**
         * Correo electrónico del usuario
         * @type {string}
         */
        this.email = email;
        
        /**
         * Tipo de usuario en el sistema
         * @type {string}
         * @default 'estudiante'
         */
        this.tipo = tipo;
        
        /**
         * Lista de libros prestados al usuario
         * @type {Array<string>}
         */
        this.librosPrestados = [];
        
        /**
         * Fecha de registro del usuario
         * @type {Date}
         * @readonly
         */
        this.fechaRegistro = new Date();
        
        /**
         * Estado activo del usuario
         * @type {boolean}
         * @default true
         */
        this.activo = true;
    }

    /**
     * Obtiene la información completa del usuario
     * @method
     * @returns {Object} Objeto con toda la información del usuario
     * @example
     * const info = usuario.obtenerInfo();
     * console.log(info.nombre); // 'Juan Pérez'
     */
    obtenerInfo() {
        return {
            id: this.id,
            nombre: this.nombre,
            email: this.email,
            tipo: this.tipo,
            librosPrestados: this.librosPrestados,
            fechaRegistro: this.fechaRegistro,
            activo: this.activo
        };
    }

    /**
     * Agrega un libro a la lista de préstamos del usuario
     * @method
     * @param {string} libroId - ID del libro a prestar
     * @throws {Error} Si el usuario ya tiene el libro prestado
     * @example
     * usuario.prestarLibro('libro-123');
     */
    prestarLibro(libroId) {
        if (this.librosPrestados.includes(libroId)) {
            throw new Error('El usuario ya tiene este libro prestado');
        }
        this.librosPrestados.push(libroId);
    }

    /**
     * Remueve un libro de la lista de préstamos del usuario
     * @method
     * @param {string} libroId - ID del libro a devolver
     * @throws {Error} Si el usuario no tiene el libro prestado
     * @example
     * usuario.devolverLibro('libro-123');
     */
    devolverLibro(libroId) {
        const index = this.librosPrestados.indexOf(libroId);
        if (index === -1) {
            throw new Error('El usuario no tiene este libro prestado');
        }
        this.librosPrestados.splice(index, 1);
    }

    /**
     * Verifica si el usuario puede prestar más libros
     * @method
     * @returns {boolean} True si puede prestar más libros
     * @example
     * if (usuario.puedePrestar()) {
     *     usuario.prestarLibro('nuevo-libro');
     * }
     */
    puedePrestar() {
        const limites = {
            'estudiante': 3,
            'profesor': 5,
            'administrador': 10
        };
        return this.librosPrestados.length < limites[this.tipo];
    }

    /**
     * Desactiva el usuario en el sistema
     * @method
     * @example
     * usuario.desactivar();
     */
    desactivar() {
        this.activo = false;
    }

    /**
     * Activa el usuario en el sistema
     * @method
     * @example
     * usuario.activar();
     */
    activar() {
        this.activo = true;
    }
}

module.exports = Usuario;