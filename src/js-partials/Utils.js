// common utilities that can be shared across components

export const formatCategory = (cat) => {
  return cat.split(/(?=[A-Z])/).join(" "); 
}