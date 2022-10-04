import React from "react";
import {connect} from 'react-redux'
import {buyIcecream} from '../redux'

function IcecreamContainer(props) {
  return (
    <div>
      <h2>Number of Icecream - {props.numberOfIcecream}</h2>
      <button onClick={props.buyIcecream}>buy Icecream</button>
    </div>
  );
}

const mapStateToProps =state=>{
return{
  numberOfIcecream: state.icecream.numberOfIcecream
}

}

const mapDispatchToProps =dispatch=>{
  return{
    buyIcecream: ()=>dispatch(buyIcecream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (IcecreamContainer);
