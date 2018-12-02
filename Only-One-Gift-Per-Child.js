let childs = [];

function handOutGift(name) {
  if (childs.includes(name))
    throw name;
  else
    childs.push(name);
}

handOutGift("Peter")
handOutGift("Peter"