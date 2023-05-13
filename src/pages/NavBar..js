import navcl from './NavBar.module.css'
import { Outlet } from 'react-router-dom';

function NavBarpg (){
    return(
        <div>
            <div className={navcl.navContainer}> 
                <p>NavBar</p>
            </div>
            <Outlet/>
        </div>
    );
}

export default NavBarpg;