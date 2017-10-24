
export class Like {

    constructor (private _isSelected: boolean, private _numberOfLikes: number) {}

    get isSelected() {
        return this._isSelected;
    }
    get numberOfLikes() {
        return this._numberOfLikes;
    }

    onClick () {
        this._isSelected = !this._isSelected;
        this._numberOfLikes += this._isSelected ? 1 : -1;
    }
}