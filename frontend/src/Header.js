import React,{Fragment} from "react";

export default function Header(props){
    return(
        <Fragment>
            <h2>Estudante de promagração de sistemas {props.title}</h2>
            <h5>React JS</h5>
        </Fragment>
    );
}