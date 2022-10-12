*Read this in other languages: [English](README.md), [Español](README.es.md).*

# Supermarket platform

## Descripción: 
La plataforma a desarrollar se trata de un sistema de gestión de supermercados, cuenta con 2 roles: administrador y encargado.

## Roles
### Administrador
El administrador es un usuario registrado directamente en la base de datos, funge con la tarea de registrar a los encargados del supermercado y podrá visualizar un resumen de todos los supermercados
#### Vistas del administrador:  
- ##### Agregar y editar encargados: 
    - Formulario para registrar o editar un encargado
- ##### Lista de encargados: 
    - Mostrara una lista con todos los encargados registrados 
- ##### Lista de supermercados: 
    - Mostrara una lista con todos los supermercados registrados
- ##### Detalles del supermercado:
    - Mostrara una vista con todos los detalles de un supermercado
        - Nombre del supermercado
        - Encargado del supermercado
        - Departamento del supermercado
        - Trabajadores del supermercado

### Encargado
El encargado es un usuario registrado por el administrador, funge con la función de registrar los datos del supermercado, sus departamentos, y sus trabajadores.
#### Vistas del Encargado: 
- ##### Registro de supermercado:
    - Esta vista solo es mostrada si aun no se ha registrado un supermercado, no se podrá navegar a otra vista, hasta que complete el registro 
- ##### Agregar y editar departamento: 
    - Modal para registrar o editar un departamento
- ##### Lista de departamentos: 
    - Lista con todos los departamentos del supermercado registrados 
- ##### Agregar o editar trabajador:
    - Formulario para agregar o editar un trabajador
- ##### Lista de trabajadores: 
    - Mostrara una lista con todos los trabajadores registrados
