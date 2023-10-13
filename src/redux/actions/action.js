// in action.js ishme hm data ko add or remove ka function likhnge 
// redux me phle action ka kaam aata hai fir reducer ka fir last me store ka jo ki main hota hai

export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove iteams
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// remove individual iteam

export const REMOVE = (iteam) => {
  return {
    type: "RMV_ONE",
    payload: iteam,
  };
};
