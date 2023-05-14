import footercl from './Footer.module.css'
import { Outlet } from 'react-router-dom';

function FooterPg(){
    return(
        <div>
            <Outlet />
            <div className={footercl.footerDiv}>
                <p className={footercl.footerP}>Project by J. Rabelo</p>
            </div>
        </div>
    );
}

export default FooterPg;