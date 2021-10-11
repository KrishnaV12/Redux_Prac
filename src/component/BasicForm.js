import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import{bindActionCreators} from "redux";
import { passData } from '../action/action';
import reducers from '../reducer.js/combineReducer';
// import { actionCreators } from '../action/bindAction';
const BasicForm = () => {

    const myState = useSelector((state)=> state.reducer);
    const dispatch=useDispatch() ;
    // const {passData , unPassData}= bindActionCreators(actionCreators, dispatch);


    
    const [skill,setSkill]= useState("");
    const [skill1,setSkill1]= useState("");

    const [allEntry,setAllEntry]=useState([]);


    const submitForm=(e)=>{
        e.preventDefault();

        const newEntry={skill:skill, skill1,skill1 };

         setAllEntry([...allEntry,newEntry]);
         console.log(allEntry)

         dispatch()
  
    }

    return (
        <div>
        <form action="" onSubmit={submitForm}>
        <div>
        <label htmlFor="skill">InputSkill</label>
        <input type="text" name="skill" id="skill" autoComplete="off" 
        value={skill}
        onChange={(e)=> setSkill(e.target.value)}

        />
        
        </div>
        <div>
            
        <label htmlFor="skill1">InputSkill</label>
        <input type="text" name="skill1" id="skill1"  autoComplete="off"
         value={skill1}
         onChange={(e)=> setSkill1(e.target.value)} 
         />
         
        </div>
        <button type="submit" onClick={()=>dispatch(passData)}>generate</button>

        </form>
        <div>{
            allEntry.map((curElem)=>{
                return(
                    <div className="data">
                        <p>{curElem.skill}</p>
                        <p>{curElem.skill1}</p>
                    </div>
                )

            })
        }

        </div>

             
        </div>
    );
};

export default BasicForm;