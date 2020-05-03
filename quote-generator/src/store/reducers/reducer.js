// only one reducer

const reducer = (state,action)=>{
  switch (action.type){
  case 'SHOW':
    const ranNumber =Math.floor(Math.random() * 100);
    const {author, quote} =(action.payload.quotes[ranNumber]);
    const newState = {
    quote,
    author
    }
    return newState;
  default:
    return state;
  }
}

export default reducer;