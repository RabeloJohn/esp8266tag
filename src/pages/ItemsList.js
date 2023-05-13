import listcl from './ItemsList.module.css'
import SingleItempg from '../components/SingleItem';

function ItemListPg () {
    return(
        <div className={listcl.listOrganiser}>
            <SingleItempg Title="Lamp1" Group="Light" />
            <SingleItempg Title="Lamp2" Group="Light"/>
        </div>
    );
}

export default ItemListPg;