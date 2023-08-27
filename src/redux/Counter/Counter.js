// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, reset } from '../counter'

// const Counter = () => {

//     const dispatch = useDispatch()
//     const {value} = useSelector((state) => state.counter)

//   return (
//     <div className='bg-[#000000] w-full h-20 flex gap-2 items-center justify-center'>
//       <p className='text-white font-semibold text-2xl'>{value}</p>
//       <button className='bg-white text-[#000] p-2 rounded text-center text-base' onClick={()=>dispatch(increment())}>Increase</button>
//       <button className='bg-white text-[#000] p-2 rounded text-center text-base' onClick={()=>dispatch(decrement())}>Decrease</button>
//       <button className='bg-white text-[#000] p-2 rounded text-center text-base' onClick={()=>dispatch(reset())}>Reset</button>
//     </div>
//   )
// }

// export default Counter


// const initialState = {
//     value : 0
// }

// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers : {
//         increment: (state) => {
//             state.value += 1
//         },
//         decrement: (state) => {
//             state.value -= 1
//         },
//         reset: (state) =>{
//             state.value = 0
//         }
//     }
// })

// export const {increment, decrement, reset} = counterSlice.actions
// export default counterSlice.reducer