import switchcl from './Switch.module.css'

function SwitchPg (props){
    return(
        <label className={switchcl.swtGn}>
            <input type='checkbox' checked={props.isToggled} onChange={() => props.setIsToggled()} />
            <span className={switchcl.slider}/>
        </label>
    );
}

export default SwitchPg;