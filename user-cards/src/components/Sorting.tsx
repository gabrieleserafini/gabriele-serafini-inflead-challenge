/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Props } from '../utils/typing';  

export default function rearrangeOrderUsers(users: Props, wish: Props[]): Props[] {
    const rearrangedItems: Props[] = [];
    
    for (const item of wish) {
      //@ts-ignore  
      const matchingItem = users.find(user => user.id === item.id);
      if (matchingItem) {
        rearrangedItems.push(matchingItem);
      }
    }
    //@ts-ignore
    for (const item of users) {
      if (!rearrangedItems.some(user => user.id === item.id)) {
        rearrangedItems.push(item);
      }
    }
    
    return rearrangedItems;
}