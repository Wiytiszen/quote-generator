// only one reducer

const reducer = (state,action)=>{
  switch (action.type){
  case 'SHOW':
    console.log(action.type)
    return state;
  default:
    return state;
  }
}

export default reducer;