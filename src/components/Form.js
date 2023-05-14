import { useRef } from 'react';
import formcl from './Form.module.css'

function FormPg (props){

    const nameInputRef = useRef();
    const categoryInputRef1 = useRef();
    const categoryInputRef2 = useRef();
    const categoryInputRef3 = useRef();
    const categoryInputRef4 = useRef();

    function submitHandler(event){
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredCategory = ((categoryInputRef1.current.selected && categoryInputRef1.current.value)||(categoryInputRef2.current.selected && categoryInputRef2.current.value)||(categoryInputRef3.current.selected && categoryInputRef3.current.value)||(categoryInputRef4.current.selected && categoryInputRef4.current.value));
        const enteredCategory1 = categoryInputRef1.current.selected;
        const enteredCategory2 = categoryInputRef2.current.selected;
        const enteredCategory3 = categoryInputRef3.current.selected;
        const enteredCategory4 = categoryInputRef4.current.selected;


        const itemData = {
            name: enteredName,
            category: enteredCategory,
            category1: enteredCategory1,
            category2: enteredCategory2,
            category3: enteredCategory3,
            category4: enteredCategory4,
        }

        props.onAddItem(itemData);
    }


    return(

        <form className={formcl.forms} onSubmit={submitHandler}>
        <div>
            <label htmlFor='ItemName' >Item Name</label>
            <input type="text" required id="ItemName" ref={nameInputRef} />  
        </div>
        <div>
            <label htmlFor='ItemCategory' >Item Category</label>
            <select className={formcl.customSelector}>
                <option>Choose an option</option>
                <option value= "Light" ref={categoryInputRef1}>Light</option>
                <option value= "TV" ref={categoryInputRef2}>TV</option>
                <option value= "Speaker" ref={categoryInputRef3}>Speaker</option>
                <option value= "AirConditioner" ref={categoryInputRef4}>Air Conditioner</option>
            </select>
            {/*<input type="text" required id="ItemCategory" ref={categoryInputRef}/>  */}
        </div>
        <div>
            <button>Create</button>
        </div>
        </form>

    );
}

export default FormPg