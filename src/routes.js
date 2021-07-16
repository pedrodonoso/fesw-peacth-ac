import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Calculo from "./views/Calculo";
import RegistrarVisita from "./views/Registrar_visita";
import CambiarVariable from "./views/Cambiar_variable";
/*
import BlogOverview from "./views/template/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/template/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/template/ComponentsOverview";
import Tables from "./views/template/Tables";
import BlogPosts from "./views/template/BlogPosts";
import TeamsList from './views/TeamsList';
import TeamForm from './views/TeamForm';
import AddNewPService from './views/AddNewPService';
import AllPService from './views/ShowAllPService';
*/

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/calculo" />
  },
  {
    path: "/calculo",
    layout: DefaultLayout,
    component: Calculo
  },
  
  {
    path: "/registrar_visita",
    exact: true,
    layout: DefaultLayout,
    component: RegistrarVisita
  },
  {
    path: "/modificar_variables",
    exact: true, 
    layout: DefaultLayout,
    component: CambiarVariable
  },
  /*
  {
    path: "/pservice/all-pservice",
    layout: DefaultLayout,
    component: AllPService
  },
  {
    path: "/pservice/add-new-pservice",
    layout: DefaultLayout,
    component: AddNewPService
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  */
 // ------- Template
  /*
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/team/teams-list",
    layout: DefaultLayout,
    component: TeamsList
  },
  {
    path: "/team/teams-form",
    layout: DefaultLayout,
    component: TeamForm
  },
  */
];
