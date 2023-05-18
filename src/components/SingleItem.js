import sitmcl from './SingleItem.module.css'
import SwitchPg from './Switch';
import { useState, useContext } from 'react';
import { ItmCxt } from '../store/itemsContext';
import Light from '../assets/bulb.svg' 
import TV from '../assets/tv.svg'
import Speaker from '../assets/speaker.svg' 
import AirConditioner from '../assxets/airconditioner.svg'  

function SingleItempg(props){

    const [isToggled, setIsToggled] = useState(true);
    const setUserItem = useContext(ItmCxt)


    function IconImg(props){
        const item1 = props.Group1;
        const item2 = props.Group2;
        const item3 = props.Group3;
        const item4 = props.Group4;


        if(item1){
            return <img src={Light} alt='' />
        }
        else if(item2){
            return (
            <div className={sitmcl.sliderOrganiser}>
                <img src={TV} alt='' />
                <p>Adjust volume</p>
                <input type="range" />
            </div>
            )
        }
        else if(item3){
            return (
                <div className={sitmcl.sliderOrganiser}>
                    <img src={Speaker} alt='' />
                    <p>Adjust volume</p>
                    <input type="range" />
                </div>
                )
        }
        else if(item4){
            return (
                <div className={sitmcl.sliderOrganiser}>
                    <img src={AirConditioner} alt='' />
                    <p>Adjust temperature</p>
                    <input type="range" />
                </div>
                )
        }
        else{
            console.log(item3)
            console.log(item4)
        }
    }

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


    function deleteItemHandler(K){
        fetch('https://esptag-ffbd3-default-rtdb.firebaseio.com/items/'+K+'.json',
        {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            setUserItem.setDelete();
            
          })
    }




    return (
    <div className={sitmcl.singleItemOrganiser}>
        <div className={sitmcl.singleItemContainer}>
                <p className={sitmcl.siTitle}>{props.Title}</p>
                <p className={sitmcl.siGroup}>{props.Group}</p>
                <IconImg Group1={props.Group1} Group2={props.Group2} Group3={props.Group3} Group4={props.Group4}/>
            <SwitchPg isToggled={isToggled} setIsToggled={switchSelection}/>
            <button onClick={() => deleteItemHandler(props.K)}>Delete</button>
            
            {/*<button onClick={TOn}>Turn On</button>
            <button onClick={TOff}>Turn Off</button>*/}
        </div>
    </div>
    );

}

export default SingleItempg;