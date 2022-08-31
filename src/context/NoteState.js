// import NoteContext from './noteContext';
// import { useState } from 'react';
// import Menu_data from '../Components/MenuApi.js';
// const NoteState = (props) => {
//     const [menuData, setMenuData] = useState(Menu_data);

//     // function
//     const addToAoCart = (mainId,itemId) => {
//         console.log(mainId,itemId)
//         mainId = parseInt(mainId)
//         itemId = parseInt(itemId)
//         let newMenuData = [...menuData]
//         console.log(newMenuData)
//         newMenuData[mainId].aitem[itemId].quantity = 1
//         newMenuData[mainId].aitem[itemId].classlist = 'item_expand'
//         console.log(newMenuData)
//         setMenuData(newMenuData)
    
//     }

//     return  (
//         <NoteContext.Provider value={{menuData,addToAoCart}}>
//             {props.children}
//         </NoteContext.Provider>
//     )
// }

// export default NoteState;