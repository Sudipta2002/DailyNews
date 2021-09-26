import React, { Component } from 'react'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      mode: "light",
    };
  }
  toggleShow = () => {
    if(this.state.mode==="light"){
      this.setState({
        mode: "dark",
      });
      document.body.style.backgroundColor="#042743";
    }else{
      this.setState({
        mode: "light",
      });
      document.body.style.backgroundColor="white";
    }
  };
    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`}>
                  <div className="container-fluid"> 
                    <a className="navbar-brand" href="/">Daily News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/about">About</a>
                        </li>
                      </ul>
                      {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                      </form> */}
                    </div>
                    <div class="form-check form-switch">
                      <input class="form-check-input" onClick={this.toggleShow} type="checkbox" id="flexSwitchCheckDefault"/>
                      <label class="form-check-label" for="flexSwitchCheckDefault">Enable</label>
                    </div>
                  </div>
                </nav>
            </div>
        )
    }
}
