# Spring / Angular / Crud Project

To start Docker
```bash
$ docker build 
```

Install Angular Cli and creating application

```bash
$ node install angular/cli
$ ng new front
```

Adding Angular Material for the interface

```bash
$ ng add @angular/material
```

Creating modules and routers
[Command Docs](https://angular.io/cli/generate)

```bash
$ ng g m users --routing
```

Creating Interfaces in Angualr
```bash
$ ng g interface users/model/user
```

Creating Service in Angular
```bash
$ ng g s users/services/users
```