import addcl from './AddItem.module.css'
import FormPg from '../components/Form';
import { useNavigate } from 'react-router-dom';


function AddItemPg () {

    const history = useNavigate();

    function addItemHandler(itemData){
        fetch('https://esptag-ffbd3-default-rtdb.firebaseio.com/items.json',
        {
            method: 'POST',
            body: JSON.stringify(itemData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            history('/')
          })
    }

    return( 
        <div className={addcl.addItemOrganiser}>
            <FormPg onAddItem={addItemHandler} />
        </div>
    );  
}

export default AddItemPg;