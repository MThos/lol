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

  const escapeRegExpMatch = function(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  const isExactMatch = (str, match) => {
    return new RegExp(`\\b${escapeRegExpMatch(match)}\\b`).test(str)
  }

  if (unit.includes('health')) {
    return "color-red";
  } else if (isExactMatch(unit, 'ap')) {
    return "color-blue";
  } else if (isExactMatch(unit, 'ad')) {
    return "color-brown";
  } else if (isExactMatch(attribute, 'health')) {
    return "color-red";
  } else if (isExactMatch(attribute, 'magic')) {
    return "color-blue";
  } else if (isExactMatch(attribute, 'ap')) {
    return "color-blue";
  } else if (isExactMatch(attribute, 'physical')) {
    return "color-brown";
  } else if (isExactMatch(attribute, 'ad')) {
    return "color-brown";
  } else if (isExactMatch(attribute, 'shield')) {
    return "color-green";
  } else if (isExactMatch(attribute, 'speed')) {
    return "color-yellow";
  } else if (isExactMatch(attribute, 'stun')) {
    return "color-orange";
  } else if (isExactMatch(attribute, 'slow')) {
    return "color-orange";
  } else {
    return "";
  }
}

export function ModifierUnits(unit) {
  if (unit.includes('AD')) {
    return "AD Modifier: ";
  } else if (unit.includes('AP')) {
    return "AP Modifier: ";
  } else if (unit === "") {
    return "Baseline: ";
  } else {
    unit = unit.replace("%", "Percent");
    return `${unit}: `;
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

export function StatCrossReference(type) {
  if (type === "abilityPower") {
    return "Ability Power";
  } else if (type === "armor") {
    return "Armor";
  } else if (type === "armorPenetration") {
    return "Armor Penetration";
  } else if (type === "attackDamage") {
    return "Attack Damage";
  } else if (type === "attackSpeed") {
    return "Attack Speed";
  } else if (type === "cooldownReduction") {
    return "Cooldown Reduction";
  } else if (type === "criticalStrikeChance") {
    return "Critical Strike";
  } else if (type === "goldPer_10") {
    return "Gold Per 10";
  } else if (type === "healAndShieldPower") {
    return "Shield Power";
  } else if (type === "health") {
    return "Health";
  } else if (type === "healthRegen") {
    return "Health Regen";
  } else if (type === "lethality") {
    return "Lethality";
  } else if (type === "lifesteal") {
    return "Lifesteal";
  } else if (type === "magicPenetration") {
    return "Magic Penetration";
  } else if (type === "magicResistance") {
    return "Magic Resistance";
  } else if (type === "mana") {
    return "Mana";
  } else if (type === "manaRegen") {
    return "Mana Regen";
  } else if (type === "movespeed") {
    return "Move Speed";
  } else if (type === "abilityHaste") {
    return "Ability Haste";
  } else if (type === "omnivamp") {
    return "Omnivamp";
  } else if (type === "tenacity") {
    return "Tenacity";
  } else {
    return type;
  }
}

export function StatModCrossReference(type, value) {
  if (type === "flat") {
    return value;
  } else if (type === "percent") {
    return value + '%';
  } else if (type === "perLevel") {
    return value + '/LVL';
  } else if (type === "percentPerLevel") {
    return value + '%/LVL';
  } else if (type === "percentBase") {
    return value + '%';
  } else if (type === "percentBonus") {
    return value + '%';
  } else {
    return value;
  }
}