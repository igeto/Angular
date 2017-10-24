import { Like } from './like.component';

let component = new Like(false, 10);

component.onClick();
component.onClick();

console.log(`Is clicked: ${component.isSelected} and then number of likes r ${component.numberOfLikes}`);