"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_isSelected, _numberOfLikes) {
        this._isSelected = _isSelected;
        this._numberOfLikes = _numberOfLikes;
    }
    Object.defineProperty(Like.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "numberOfLikes", {
        get: function () {
            return this._numberOfLikes;
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.onClick = function () {
        this._isSelected = !this._isSelected;
        this._numberOfLikes += this._isSelected ? 1 : -1;
    };
    return Like;
}());
exports.Like = Like;
