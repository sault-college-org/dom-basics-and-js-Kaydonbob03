class AppetizerItem {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  createItem() {
    const item = document.createElement("div");
    item.setAttribute("class", `appetizer-item text-center ${this.id}`);

    const itemContent = document.createElement("div");
    itemContent.setAttribute("class", "appetizer-content");

    const itemTitle = document.createElement("h1");
    itemTitle.innerHTML = this.title;
    itemTitle.setAttribute("class", "appetizer-title");

    const itemDescription = document.createElement("p");
    itemDescription.innerHTML = this.description;
    itemDescription.setAttribute("class", "appetizer-description");

    itemContent.appendChild(itemTitle);
    itemContent.appendChild(itemDescription);

    item.appendChild(itemContent);

    return item;
  }
}

const Appetizers = () => {
  const appetizersContent = document.createElement("div");
  appetizersContent.setAttribute("class", "appetizers container");

  const appetizersHeader = document.createElement("h1");
  appetizersHeader.setAttribute("class", "text-center my-3 pt-5 mb-5");
  appetizersHeader.innerHTML = "APPETIZERS";
  appetizersContent.appendChild(appetizersHeader);

  const appetizersFlexBox = document.createElement("div");
  appetizersFlexBox.setAttribute("class", "appetizers-flexbox");

  const calamari = new AppetizerItem(
    "calamari",
    "Fried Calamari",
    "Our fresh in house Fried Calamari is a great appetizer to share with the family to get started. Crispy on the outside, tender on the inside. The Fried Calamari is made to perfection to make sure it will always satisfy that craving."
  );
  appetizersFlexBox.appendChild(calamari.createItem());

  const garlicBread = new AppetizerItem(
    "garlicBread",
    "Garlic Bread",
    "Our freshly made Garlic bread is one of our most famous appetizers! This garlic bread is made fresh each day to ensure the freshest bread experience."
  );
  appetizersFlexBox.appendChild(garlicBread.createItem());

  const nachos = new AppetizerItem(
    "nachos",
    "Nachos",
    "Our most famous appetizer, the Nachos! This infamous nachos served on a platter are perfect for sharing with the whole party. And if the basic nachos are just not spicy enough to satisfy that spice craving, we also have the option to add all sorts of hot peppers. These peppers range from Jalapeño peppers at a meager 2,500 Scoville units all the way up to Thai peppers with a massive heat of 50,000 Scoville units."
  );
  appetizersFlexBox.appendChild(nachos.createItem());

  appetizersContent.appendChild(appetizersFlexBox);

  return appetizersContent;
};

export default Appetizers;
