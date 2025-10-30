/**
 * @fileoverview Clase Libro para el sistema de biblioteca digital
 * @author Sistema Automatizado
 * @version 1.0.0
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Representa un libro en el sistema de biblioteca digital
 * @class Libro
 * @classdesc Gestiona la información y estado de los libros
 */
class Libro {
    /**
     * Crea una instancia de Libro
     * @constructor
     * @param {string} titulo - Título del libro
     * @param {string} autor - Autor del libro
     * @param {string} isbn - Código ISBN del libro
     * @param {number} [anioPublicacion] - Año de publicación
     * @param {string} [categoria='General'] - Categoría del libro
     * @example
     * const libro = new Libro('El Quijote', 'Miguel de Cervantes', '978-84-376-0494-7', 1605, 'Literatura');
     */
    constructor(titulo, autor, isbn, anioPublicacion, categoria = 'General') {
        /**
         * Identificador único del libro
         * @type {string}
         * @readonly
         */
        this.id = uuidv4();
        
        /**
         * Título del libro
         * @type {string}
         */
        this.titulo = titulo;
        
        /**
         * Autor del libro
         * @type {string}
         */
        this.autor = autor;
        
        /**
         * Código ISBN del libro
         * @type {string}
         */
        this.isbn = isbn;
        
        /**
         * Año de publicación del libro
         * @type {number}
         */
        this.anioPublicacion = anioPublicacion;
        
        /**
         * Categoría del libro
         * @type {string}
         * @default 'General'
         */
        this.categoria = categoria;
        
        /**
         * Estado de disponibilidad del libro
         * @type {boolean}
         * @default true
         */
        this.disponible = true;
        
        /**
         * ID del usuario que tiene el libro prestado
         * @type {string|null}
         */
        this.prestadoA = null;
        
        /**
         * Fecha de préstamo del libro
         * @type {Date|null}
         */
        this.fechaPrestamo = null;
        
        /**
         * Fecha de registro del libro en el sistema
         * @type {Date}
         * @readonly
         */
        this.fechaRegistro = new Date();
    }

    /**
     * Obtiene la información completa del libro
     * @method
     * @returns {Object} Objeto con toda la información del libro
     * @example
     * const info = libro.obtenerInfo();
     * console.log(info.titulo); // 'El Quijote'
     */
    obtenerInfo() {
        return {
            id: this.id,
            titulo: this.titulo,
            autor: this.autor,
            isbn: this.isbn,
            anioPublicacion: this.anioPublicacion,
            categoria: this.categoria,
            disponible: this.disponible,
            prestadoA: this.prestadoA,
            fechaPrestamo: this.fechaPrestamo,
            fechaRegistro: this.fechaRegistro
        };
    }

    /**
     * Marca el libro como prestado a un usuario
     * @method
     * @param {string} usuarioId - ID del usuario que recibe el préstamo
     * @throws {Error} Si el libro no está disponible
     * @example
     * libro.prestar('usuario-123');
     */
    prestar(usuarioId) {
        if (!this.disponible) {
            throw new Error('El libro no está disponible para préstamo');
        }
        this.disponible = false;
        this.prestadoA = usuarioId;
        this.fechaPrestamo = new Date();
    }

    /**
     * Marca el libro como devuelto y disponible
     * @method
     * @throws {Error} Si el libro no está prestado
     * @example
     * libro.devolver();
     */
    devolver() {
        if (this.disponible) {
            throw new Error('El libro no está prestado');
        }
        this.disponible = true;
        this.prestadoA = null;
        this.fechaPrestamo = null;
    }

    /**
     * Verifica si el libro está vencido (más de 15 días prestado)
     * @method
     * @returns {boolean} True si el libro está vencido
     * @example
     * if (libro.estaVencido()) {
     *     console.log('Libro vencido, enviar recordatorio');
     * }
     */
    estaVencido() {
        if (this.disponible || !this.fechaPrestamo) {
            return false;
        }
        const diasPrestamo = (new Date() - this.fechaPrestamo) / (1000 * 60 * 60 * 24);
        return diasPrestamo > 15;
    }

    /**
     * Actualiza la información del libro
     * @method
     * @param {Object} nuevaInfo - Objeto con la nueva información
     * @param {string} [nuevaInfo.titulo] - Nuevo título
     * @param {string} [nuevaInfo.autor] - Nuevo autor
     * @param {string} [nuevaInfo.categoria] - Nueva categoría
     * @example
     * libro.actualizar({ categoria: 'Literatura Clásica' });
     */
    actualizar(nuevaInfo) {
        if (nuevaInfo.titulo) this.titulo = nuevaInfo.titulo;
        if (nuevaInfo.autor) this.autor = nuevaInfo.autor;
        if (nuevaInfo.categoria) this.categoria = nuevaInfo.categoria;
    }
}

module.exports = Libro;