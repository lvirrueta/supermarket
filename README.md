*Read this in other languages: [English](README.md), [Español](README.es.md).*

# Supermarket platform

## Description: 
The platform is a supermarket management system, it have 2 roles: admin and manager.

## Roles
### Admin
Admin is an user register directly in the database that acts with the task of register managers, he can visualize a summary of the supermarket. 
#### Views of admin:
- ##### Add and edit managers
    - Form to register or edit a manager
- ##### List of managers: 
    - Shows a list of registered managers
- ##### List of markets: 
    - Shows a list of registered markets
- ##### Detail of market: 
    - Shows a view with all details of a supermarket:
        - Supermarket name
        - Supermarket manager
        - Supermarket departments
        - Supermarket employees

### Manager
Manager is an user registered by the admin, and acts with the task register supermarket, departments and employees
#### Views of manager:
- ##### Register of supermarket: 
    - This view is only shown if manager has not yet registered the supermarket.
- ##### Add and edit department: 
    - Modal to register and edit a department 
- ##### List of departments: 
    - List of all departments registered 
- ##### Add and edit employee: 
    - Form to register or edit an employee
- ##### List of employees:  
    - List of all employees registered
  