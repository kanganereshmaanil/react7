import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
name : 'dataSlice',
initialState : [
    {name:'Ruchita',age:'21',course:'Infomation Technology',batch:'EA17'},
    {name:'Bharti',age:'23',course:'Electrical',batch:'EA14'},
    {name:'Vishal',age:'22',course:'Machanical',batch:'EA16'},
],
reducers : {
    editData:(state, action)=>{
        console.log(state)
       console.log(action.payload)
        state[action.payload.index] = action.payload.newObj;
        return(state)
    },
    addData:(state, action)=>{
      
      console.log(state)
      console.log(action.payload)
      state.push(action.payload)
      console.log(state)
      return (state)

    }
}
})
export const { editData, addData } = dataSlice.actions
export default dataSlice.reducer;
