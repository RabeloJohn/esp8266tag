import navcl from './NavBar.module.css'
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function NavBarpg (){
    return(
        <div>
            <nav className={navcl.navMenu}>
                <ul>
                    <li><NavLink to='/' className={navcl.navigLink} > Home</NavLink></li>
                    <li><NavLink to='/additem' className={navcl.navigLink} >New tag</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

export default NavBarpg;