import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navabar-dark bg-primary navbar-expand-md" style={{color: "white"}}>
                    <div className="navbar-brand">Employee Management App</div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent