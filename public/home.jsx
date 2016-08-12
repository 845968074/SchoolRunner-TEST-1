import React from 'react';
import {Link} from 'react-router'

class HomePage extends React.Component {
    render() {
        return (<div>
                <h1>校园Runner</h1>
            <nav className="navbar navbar-default" role="navigation">
                <div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/book">图书馆</Link></li>
                        <li><Link to="/delivery">取快递</Link></li>
                    </ul>
                </div>
            </nav>
            </div>)
    }
}

export default HomePage;