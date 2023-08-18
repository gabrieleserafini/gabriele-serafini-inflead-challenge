
export default function rearrangeOrderUsers(
    users: [],
    wish: []
  ): [] {
    const rearrangedItems: [] = [];
  
    for (const item of wish) {
      const matchingItem = users.find(element => element.id === item.id);
      if (matchingItem) {
        rearrangedItems.push(matchingItem);
      }
    }
  
    for (const item of users) {
      if (!rearrangedItems.some(element => element.id === item.id)) {
        rearrangedItems.push(item);
      }
    }
  
    return rearrangedItems;
}
  