/**
 * @fileoverview Servicio principal para la gestión de la biblioteca digital
 * @author Sistema Automatizado
 * @version 1.0.0
 */

const Usuario = require('../models/Usuario');
const Libro = require('../models/Libro');

/**
 * Servicio principal para gestionar operaciones de la biblioteca
 * @class BibliotecaService
 * @classdesc Coordina las operaciones entre usuarios y libros
 */
class BibliotecaService {
    /**
     * Crea una instancia del servicio de biblioteca
     * @constructor
     * @example
     * const biblioteca = new BibliotecaService();
     */
    constructor() {
        /**
         * Almacén de usuarios registrados
         * @type {Map<string, Usuario>}
         * @private
         */
        this._usuarios = new Map();
        
        /**
         * Almacén de libros registrados
         * @type {Map<string, Libro>}
         * @private
         */
        this._libros = new Map();
        
        /**
         * Contador de operaciones realizadas
         * @type {number}
         * @private
         */
        this._operaciones = 0;
    }

    /**
     * Registra un nuevo usuario en el sistema
     * @method
     * @param {string} nombre - Nombre del usuario
     * @param {string} email - Email del usuario
     * @param {string} [tipo='estudiante'] - Tipo de usuario
     * @returns {Usuario} El usuario creado
     * @throws {Error} Si el email ya está registrado
     * @example
     * const usuario = biblioteca.registrarUsuario('Ana García', 'ana@email.com', 'profesor');
     */
    registrarUsuario(nombre, email, tipo = 'estudiante') {
        // Verificar si el email ya existe
        for (const usuario of this._usuarios.values()) {
            if (usuario.email === email) {
                throw new Error('El email ya está registrado');
            }
        }
        
        const usuario = new Usuario(nombre, email, tipo);
        this._usuarios.set(usuario.id, usuario);
        this._operaciones++;
        
        return usuario;
    }

    /**
     * Registra un nuevo libro en el sistema
     * @method
     * @param {string} titulo - Título del libro
     * @param {string} autor - Autor del libro
     * @param {string} isbn - ISBN del libro
     * @param {number} [anioPublicacion] - Año de publicación
     * @param {string} [categoria='General'] - Categoría del libro
     * @returns {Libro} El libro creado
     * @throws {Error} Si el ISBN ya está registrado
     * @example
     * const libro = biblioteca.registrarLibro('Cien años de soledad', 'Gabriel García Márquez', '978-84-376-0495-4');
     */
    registrarLibro(titulo, autor, isbn, anioPublicacion, categoria = 'General') {
        // Verificar si el ISBN ya existe
        for (const libro of this._libros.values()) {
            if (libro.isbn === isbn) {
                throw new Error('El ISBN ya está registrado');
            }
        }
        
        const libro = new Libro(titulo, autor, isbn, anioPublicacion, categoria);
        this._libros.set(libro.id, libro);
        this._operaciones++;
        
        return libro;
    }

    /**
     * Realiza el préstamo de un libro a un usuario
     * @method
     * @param {string} usuarioId - ID del usuario
     * @param {string} libroId - ID del libro
     * @throws {Error} Si el usuario o libro no existen, o si no se puede realizar el préstamo
     * @example
     * biblioteca.prestarLibro('usuario-123', 'libro-456');
     */
    prestarLibro(usuarioId, libroId) {
        const usuario = this._usuarios.get(usuarioId);
        const libro = this._libros.get(libroId);
        
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        
        if (!libro) {
            throw new Error('Libro no encontrado');
        }
        
        if (!usuario.activo) {
            throw new Error('Usuario inactivo');
        }
        
        if (!usuario.puedePrestar()) {
            throw new Error('Usuario ha alcanzado el límite de préstamos');
        }
        
        libro.prestar(usuarioId);
        usuario.prestarLibro(libroId);
        this._operaciones++;
    }

    /**
     * Procesa la devolución de un libro
     * @method
     * @param {string} usuarioId - ID del usuario
     * @param {string} libroId - ID del libro
     * @throws {Error} Si el usuario o libro no existen, o si no se puede realizar la devolución
     * @example
     * biblioteca.devolverLibro('usuario-123', 'libro-456');
     */
    devolverLibro(usuarioId, libroId) {
        const usuario = this._usuarios.get(usuarioId);
        const libro = this._libros.get(libroId);
        
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        
        if (!libro) {
            throw new Error('Libro no encontrado');
        }
        
        libro.devolver();
        usuario.devolverLibro(libroId);
        this._operaciones++;
    }

    /**
     * Busca libros por título, autor o categoría
     * @method
     * @param {string} termino - Término de búsqueda
     * @returns {Array<Libro>} Lista de libros que coinciden
     * @example
     * const resultados = biblioteca.buscarLibros('García Márquez');
     */
    buscarLibros(termino) {
        const terminoLower = termino.toLowerCase();
        const resultados = [];
        
        for (const libro of this._libros.values()) {
            if (libro.titulo.toLowerCase().includes(terminoLower) ||
                libro.autor.toLowerCase().includes(terminoLower) ||
                libro.categoria.toLowerCase().includes(terminoLower)) {
                resultados.push(libro);
            }
        }
        
        return resultados;
    }

    /**
     * Obtiene estadísticas del sistema
     * @method
     * @returns {Object} Objeto con estadísticas del sistema
     * @example
     * const stats = biblioteca.obtenerEstadisticas();
     * console.log(`Total usuarios: ${stats.totalUsuarios}`);
     */
    obtenerEstadisticas() {
        const librosDisponibles = Array.from(this._libros.values()).filter(libro => libro.disponible).length;
        const librosPrestados = this._libros.size - librosDisponibles;
        
        return {
            totalUsuarios: this._usuarios.size,
            totalLibros: this._libros.size,
            librosDisponibles,
            librosPrestados,
            operacionesRealizadas: this._operaciones
        };
    }

    /**
     * Obtiene libros vencidos
     * @method
     * @returns {Array<Object>} Lista de libros vencidos con información del usuario
     * @example
     * const vencidos = biblioteca.obtenerLibrosVencidos();
     */
    obtenerLibrosVencidos() {
        const vencidos = [];
        
        for (const libro of this._libros.values()) {
            if (libro.estaVencido()) {
                const usuario = this._usuarios.get(libro.prestadoA);
                vencidos.push({
                    libro: libro.obtenerInfo(),
                    usuario: usuario ? usuario.obtenerInfo() : null
                });
            }
        }
        
        return vencidos;
    }
}

module.exports = BibliotecaService;