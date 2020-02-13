# MARKET

## Backend
 
Api Rest con Django Rest Framework
 
Endpoints:

```
Gestión de usuarios e Ítem con las vistas del framework
  admin/

Gestión de ítems.
  api/market/
       item/:slug  # GET -> Retrieve, SET, DELETE
       item/       # POST -> Create
       /           # GET -> List All

       seeder/     # GET -> Función para introducir un número fijo de ítems en base de datos

       quick/      # GET -> List All, ordenando el listado con el algoritmo quick_sort por precio de menor a mayor
       merge/      # GET -> List All, ordenando el listado con el algoritmo merge_sort por precio de menor a mayor

Gestión de usuarios
   api/api-auth/
       login       # POST -> obtain_jwt_token de la libreria rest_framework_jwt.views: devuelve TOKEN
       register    # POST -> vista propia para crear un usuario: devuelve TOKEN
       user        # POST -> verify_jwt_token de la libreria rest_framework_jwt.views: devuelve TOKEN si el usuario está validado
```
Funcionalidad:

_Market_

    El servidor provee de un CRUD completo de minerales. Cada mineral sólo podrá ser creado por un usuario logeado.
    Por lo que cada mineral estará relacionado con un usuario

    Los minerales generan un slug que se compone del nombre del mineral _ nombre del usuario
    
    Un middleware específico se encarga de proveer al request del usuario recogiendo el token del header de la petición http. Y cada vista gestiona los permisos para usuarios autentificados
    o solo lectura en algunos casos
    
    El modelo y el serializer, tienen las responsabilidad de mantener los slugs únicos. Y de preparar las respuesta adecuada para los clientes.

_Structures_

    Dos ejemplos de algoritmos de ordenación utilizados en dos endpoints para su uso desde el cliente.

_Authentication_

    Aprovechamos una librería que provee de la funcionalidad necesaria para la gestión del token.

    Para la creación del usuario, se ha usado una vista que después de guardar el usuario utiliza la misma librería para generar un TOKEN válido.
    
    Middleware reacondicionado del ejemplo de Tkinter, usando la librería JWT y recogiendo el mismo secreto que utiliza la librería anterior mencionada (guardado en Settings)

[GitHub de la libreria](https://github.com/jpadilla/django-rest-framework-jwt)

[Documentacion de la libreria](https://jpadilla.github.io/django-rest-framework-jwt/)

## Frontend

### Client

Frontend desarrollado con Angular 8

Ofrece una página de login, y una página de vista de todos los minerales.

Funcionalidad:

/authentication

    módulo que genera la vista para el registro del usuario.
    HTML y CSS gestionado por Material.ui y Jqwidgets
    A la respuesta del servidor, se encarga de guardar el token el localstorage

/core

    Módulo que gestiona los servicios para las peticiones al servidor.
    Además del servicio de auth-guard que sustituye el jwt a cada respuesta de un TOKEN válido.

/home

    Módulo que ofrece la vista de todos los minerales.
    Solo visible para usuarios logueados, gestionado por el router de angular y el servicio de auth-guard.
    Un resolver se encarga de proveer al componente a través del router con una promesa de la petición GetAll() a /api/market/

/models

    Modelos usados en la aplicación

    MineralModel
    
    UserLogin
    UserToken

/navbar

    componente insertado en el modulo de app, para la gestion del router de la pagina.
    routerLink

/store

    @ngrx/store
    
    Store global, que provee a toda la aplicación de los datos necesarios, tanto para el login de los usuarios (GetTokenSuccess), como para la respuesta de todos los minerales (GetAllMarketSuccess).
    
    Funcionalidad especial
    Selector de token, recoge de localStorage si no existe Token en el state debido a una recarga de la página.

### Seller

Frontend desarrollado con React/Redux

Ofrece una vista de registro del usuario

/components

    Home -> no tiene funcionalidad
    
    Login -> Formulario con usuario y password para el login.

/constants

    Actions para Redux

/reducers

    login -> Reducers necesario para el componente de login y registro (funcionalidad no implementada)

./middleware.js

    Gestiona todas las actions para procesar en caso de que alguna contenga un observable. Utilizado para el login, y guardado/borrado en LocalStorage

