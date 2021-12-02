import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

import systemService from '../../../../services/system.service';
import constants from '../../../../data/constants'

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      registrado: undefined,
      user: constants.user,
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
    this.loggOut = this.loggOut.bind(this);
    
  }
  loggOut() {
    cookies.remove('jwt')
    constants.user = {}
    this.setState({
      ...this.state,
      registrado: false
    })
  }

  componentDidMount() {
    var jwt = constants.cookies.get('jwt')
    console.log(jwt)
    console.log("obteniendo info de usuario")
    if (jwt == undefined) { //no registrado
      this.setState({
        ...this.state,
        registrado: false
      })
    } else { //registrado
      this.setState({
        ...this.state,
        registrado: true
      })
      var data = {
        jwt: jwt
      }
      systemService.getSession(data)
        .then((result) => {
          console.log(result)
          var user = result.data

          this.setState({
            ...this.state,
            user: user
          })
          constants.user = user;
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
        {this.state.registrado ?
          <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
            <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
              <i className="material-icons mr-1 py-2" style={{ fontSize: '1.5rem' }} >person</i>
              {/*<img
                className="user-avatar rounded-circle mr-2"
                src={require("./../../../../images/avatars/0.jpg")}
                alt="User Avatar"
              />
              */}
              <span className="d-none d-md-inline-block">{this.state.user.last_name}</span>
            </DropdownToggle>
            <Collapse tag={DropdownMenu} right small open={this.state.visible}>
              
              {/*
              <DropdownItem tag={Link} to="user-profile">
                <i className="material-icons">&#xE7FD;</i> Profile
              </DropdownItem>
              <DropdownItem tag={Link} to="edit-user-profile">
                <i className="material-icons">&#xE8B8;</i> Edit Profile
              </DropdownItem>
              <DropdownItem tag={Link} to="file-manager-list">
                <i className="material-icons">&#xE2C7;</i> Files
              </DropdownItem>
              <DropdownItem tag={Link} to="transaction-history">
                <i className="material-icons">&#xE896;</i> Transactions
              </DropdownItem>
              */}
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/" className="text-danger" onClick={this.loggOut}>
                <i className="material-icons text-danger">&#xE879;</i> Cerrar sesión
              </DropdownItem>
            </Collapse>
          </NavItem>
          :
          null}
      </div>
    );
  }
}
