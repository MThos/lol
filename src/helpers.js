export function ColorOptions(type, type_name) {
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
}

export function SpellColors(unit, attribute) {
  unit = unit.toLowerCase();
  attribute = attribute.toLowerCase();

  if (unit.includes('health')) {
    return "color-red";
  } else if (unit.includes('ap')) {
    return "color-blue";
  } else if (unit.includes('ad')) {
    return "color-brown";
  } else if (attribute.includes('health')) {
    return "color-red";
  } else if (attribute.includes('magic')) {
    return "color-blue";
  } else if (attribute.includes('ap')) {
    return "color-blue";
  } else if (attribute.includes('physical')) {
    return "color-brown";
  } else if (attribute.includes('ad')) {
    return "color-brown";
  } else if (attribute.includes('shield')) {
    return "color-green";
  } else if (attribute.includes('speed')) {
    return "color-yellow";
  } else if (attribute.includes('stun')) {
    return "color-orange";
  } else if (attribute.includes('slow')) {
    return "color-orange";
  } else {
    return "";
  }
}

export function ModifierUnits(unit) {
  if (unit.includes('AD')) {
    return " (AD Modifier %)";
  } else if (unit.includes('AP')) {
    return " (AP Modifier %)";
  } else if (unit === "") {
    return " (Baseline)";
  } else {
    return ` (${unit})`;
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

export function DecimalLimiter(value, fixed, round) {
  let new_value_array = [];
  
  if (Array.isArray(value)) {
    if (round) {
      value.forEach(item => new_value_array.push(Math.round(item.toFixed(fixed))));
    } else {      
      value.forEach(item => new_value_array.push(item.toFixed(fixed)));
    }
  }
  
  return new_value_array;
}