import React from 'react'
import {buyCake} from './redux/index'
import {connect} from 'react-redux'
function CakeContainer(props) {
  return (
    <div>
        <h2>No of cakes {props.noofCakes}</h2>
        <button onClick={props.buyCake}>Buy 1 cake </button>
    </div>
  )
}

const mapStateToProps= state =>{
  return{
    noofCakes: state.noofCakes
  }
}

const mapDispatchToProps= dispatch =>{
return{
  buyCake:()=>{dispatch(buyCake(1))}  
}
}

export default connect (mapStateToProps,mapDispatchToProps) (CakeContainer)