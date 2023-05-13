import sitmcl from './SingleItem.module.css'
import SwitchPg from './Switch';
import { useState } from 'react';

function SingleItempg(props){

    const [isToggled, setIsToggled] = useState(true);


    function switchSelection(){
        setIsToggled(current => !current);
        if (isToggled){
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://192.168.0.51/gpio/1');
            xhr.send();
        }
        else{
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://192.168.0.51/gpio/0');
            xhr.send();
        }
    }


    {/*function TOff (){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://192.168.0.51/gpio/1');
        xhr.send();
    }


    function TOn (){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://192.168.0.51/gpio/0');
        xhr.send();
    } */}

    return (
    <div className={sitmcl.singleItemOrganiser}>
        <div className={sitmcl.singleItemContainer}>
            <p>{props.Title}</p>
            <p>{props.Group}</p>
            <SwitchPg isToggled={isToggled} setIsToggled={switchSelection}/>
            {/*<button onClick={TOn}>Turn On</button>
            <button onClick={TOff}>Turn Off</button>*/}
        </div>
    </div>
    );

}

export default SingleItempg;