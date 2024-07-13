// When a user clicks the "Like" button below a post, the button is highlighted (to indicate that it is selected) 
// and the number of likes is increased. You're going to implement this feature in Angular and for that you'll need 
// to create a component. This component is a TypeScript class that encapsulates the data for rendering the like button
// (eg: the number of likes, and whether the button is in the on/off state). It also responds to user actions. 
// So, when the user clicks the "Like" button, the number of likes should be increased and the button should be 
// in the "selected/on" state. If the user clicks the button again, the number of likes should be decreased and the 
// button should be in the "unselected" state. 

//forget about the HTML. Your focus should be purely on defining a TypeScript class with the right members 
//(fields, properties, methods, constructor). 

//Allow the consumer of this class to pass the initial number of likes when creating an instance of this class. 

import { LikeComponent } from "./like.component";

let component = new LikeComponent(10, true);
//component._likesCount = 5;
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);

