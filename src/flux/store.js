import { EventEmitter } from "events";

import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";
import getNavbarItems from "../data/navbar-nav-items";
import getActualizarNavbarItems from "../data/navbar-actualizar-nav-items";
import getPacienteNavbarItems from "../data/navbar-paciente-nav-items";


let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
  navbarItems: getNavbarItems(),
  actualizarNavbarItems: getActualizarNavbarItems(),
  pacienteNavbarItems: getPacienteNavbarItems(),
};

class Store extends EventEmitter {
  constructor() {
    super();

    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      default:
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE);
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getSidebarItems() {
    return _store.navItems;
  }

  getNavbarItems() {
    return _store.navbarItems;
  }
  
  getActualizarNavbarItems() {
    return _store.actualizarNavbarItems;
  }

  getPacienteNavbarItems() {
    return _store.pacienteNavbarItems;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new Store();
