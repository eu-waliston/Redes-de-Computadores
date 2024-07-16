import React from "react"
import {Link} from "react-router-dom"
import "./Menu.scss"

const Menu = () => {
    return (
        <div className="menu--compoent">
            <div className="menu--icons">
                <Link className="icon">IPV4</Link>
                <Link className="icon">ARP</Link>
                <Link className="icon">RIP</Link>
                <Link className="icon">UDP</Link>
                <Link className="icon">TCP</Link>
                <Link className="icon">HTTP</Link>
                <Link className="icon">DNS</Link>
                <Link className="icon">SNMP</Link>
            </div>
        </div>
    )
}

export default Menu;