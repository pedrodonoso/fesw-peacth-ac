import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { CustomAnalisis, CustomGeneral, CustomPaciente} from "./layouts";

// Route Views
import {Calculo, Analisis, RegistrarVisita, Actualizar, Paciente} from "./views";
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
    layout: CustomGeneral,
    component: () => <Redirect to="/calculo" />,
    layout_props: {noNavbar: true, noFooter:true, hideLogoText:true}
  },
  {
    path: "/calculo",
    layout: CustomGeneral,
    component: Calculo,    
    layout_props: {noNavbar: false, noFooter:true, hideLogoText:true}
  },
  
  {
    path: "/analisis/dosis_gen",
    layout: CustomAnalisis,
    component: Analisis,
    layout_props: {noNavbar: false, noFooter:true, hideLogoText:true},
    component_props: { dosisGen: true}
  },
  {
    path: "/analisis/dis_gen",
    layout: CustomAnalisis,
    component: Analisis,
    layout_props: {noNavbar: false, noFooter:false, footer_props: { menuItems: []} , hideLogoText:true},
    component_props_: { dosisGen: false }
  },
  {
    path: "/registrar_visita",
    layout: CustomGeneral,
    component: RegistrarVisita,
    layout_props: {noNavbar: true, noFooter:true, hideLogoText:true}
  },
  {
    path: "/actualizar",
    layout: CustomGeneral,
    component: Actualizar,
    layout_props: {noNavbar: true, noFooter:true, hideLogoText:true}
  },
  {
    path: "/paciente/general",
    layout: CustomGeneral,
    component: Paciente,
    layout_props: {noNavbar: false, noFooter:true, hideLogoText:true},
    component_props: { dosisGen: true}
  },
  {
    path: "/paciente/genetico",
    layout: CustomGeneral,
    component: Paciente,
    layout_props: {noNavbar: false, noFooter:false, footer_props: { menuItems: []} , hideLogoText:true},
    component_props_: { dosisGen: false }
  },
  /*
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
