/**
 * @fileoverview Punto de entrada principal del sistema de biblioteca digital
 * @author Sistema Automatizado
 * @version 1.0.0
 */

const BibliotecaService = require('./services/BibliotecaService');

/**
 * Función principal que demuestra el uso del sistema
 * @function main
 * @example
 * main();
 */
function main() {
    console.log('🏛️  Sistema de Biblioteca Digital');
    console.log('==================================');
    
    // Crear instancia del servicio
    const biblioteca = new BibliotecaService();
    
    try {
        // Registrar usuarios
        const usuario1 = biblioteca.registrarUsuario('María González', 'maria@email.com', 'estudiante');
        const usuario2 = biblioteca.registrarUsuario('Dr. Carlos Ruiz', 'carlos@email.com', 'profesor');
        
        console.log('✅ Usuarios registrados:');
        console.log(`   - ${usuario1.nombre} (${usuario1.tipo})`);
        console.log(`   - ${usuario2.nombre} (${usuario2.tipo})`);
        
        // Registrar libros
        const libro1 = biblioteca.registrarLibro(
            'El Principito', 
            'Antoine de Saint-Exupéry', 
            '978-84-376-0494-7', 
            1943, 
            'Literatura Infantil'
        );
        
        const libro2 = biblioteca.registrarLibro(
            'Algoritmos y Estructuras de Datos', 
            'Niklaus Wirth', 
            '978-84-376-0495-4', 
            1976, 
            'Informática'
        );
        
        console.log('\\n📚 Libros registrados:');
        console.log(`   - ${libro1.titulo} por ${libro1.autor}`);
        console.log(`   - ${libro2.titulo} por ${libro2.autor}`);
        
        // Realizar préstamos
        biblioteca.prestarLibro(usuario1.id, libro1.id);
        biblioteca.prestarLibro(usuario2.id, libro2.id);
        
        console.log('\\n📖 Préstamos realizados:');
        console.log(`   - "${libro1.titulo}" prestado a ${usuario1.nombre}`);
        console.log(`   - "${libro2.titulo}" prestado a ${usuario2.nombre}`);
        
        // Buscar libros
        const resultados = biblioteca.buscarLibros('Algoritmos');
        console.log('\\n🔍 Búsqueda "Algoritmos":');
        resultados.forEach(libro => {
            console.log(`   - ${libro.titulo} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
        
        // Mostrar estadísticas
        const stats = biblioteca.obtenerEstadisticas();
        console.log('\\n📊 Estadísticas del sistema:');
        console.log(`   - Total usuarios: ${stats.totalUsuarios}`);
        console.log(`   - Total libros: ${stats.totalLibros}`);
        console.log(`   - Libros disponibles: ${stats.librosDisponibles}`);
        console.log(`   - Libros prestados: ${stats.librosPrestados}`);
        console.log(`   - Operaciones realizadas: ${stats.operacionesRealizadas}`);
        
        console.log('\\n✨ Sistema funcionando correctamente');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

// Ejecutar si es el archivo principal
if (require.main === module) {
    main();
}

module.exports = { main };