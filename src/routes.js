import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout,Custom } from "./layouts";

// Route Views
import {Calculo, Analisis, RegistrarVisita} from "./views";

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
var noNavbar = true;
export default [
  {
    path: "/",
    exact: true,
    layout: Custom,
    component: () => <Redirect to="/calculo" />,
    layout_props: {noNavbar: true, noFooter:true}
  },
  {
    path: "/calculo",
    layout: Custom,
    component: Calculo,    
    layout_props: {noNavbar: true, noFooter:true}
  },
  
  {
    path: "/analisis/dosis_gen",
    layout: Custom,
    component: Analisis,
    layout_props: {noNavbar: false, noFooter:true},
    component_props: { dosisGen: true}
  },
  {
    path: "/analisis/dis_gen",
    layout: Custom,
    component: Analisis,
    layout_props: {noNavbar: false, noFooter:false, footer_props: { menuItems: []}},
    component_props_: { dosisGen: false }
    
  },
  {
    path: "/registrar_visita",
    layout: Custom,
    component: RegistrarVisita,
    layout_props: {noNavbar: true, noFooter:true}
  },
  {
    path: "/actualizar",
    layout: Custom,
    component: RegistrarVisita,
    layout_props: {noNavbar: true, noFooter:true}
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
