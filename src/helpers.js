export function ColorOptions(type, type_name) {
  try {
    if (type === "element") {    
      if (type_name.includes("magic")) {
        return "color-blue";
      } else if (type_name.includes("physical")) {
        return "color-brown"
      } else {
        return ""
      }
    } else if (type === "resource") {
      if (type_name.includes('mana')) {
        return "color-blue";
      } else if (type_name.includes('rage') || type_name.includes('health')) {
        return "color-red"
      } else if (type_name.includes('energy')) {
        return "color-yellow";
      } else {
        return ""
      }
    } else if (type === "shield") {
      if (type_name === "Yes") {
        return "color-green";
      } else {
        return "color-red";
      }
    } else {
      return ""
    }
  } catch (error) {
    console.log(error);
  }
}

export function HideEmptyDescriptions() {
  const description = document.getElementsByClassName('champion-spell-description-detail');
  for (const element of description) {
    if (element.innerHTML === "") {
      element.classList.add('empty');
    }
  }
}