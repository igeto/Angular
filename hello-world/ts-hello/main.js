"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.Like(false, 10);
component.onClick();
component.onClick();
console.log("Is clicked: " + component.isSelected + " and then number of likes r " + component.numberOfLikes);
