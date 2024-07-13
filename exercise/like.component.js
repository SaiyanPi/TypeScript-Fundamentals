"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        // assuming the isSelected is already true( meaningwe've already liked a post) 
        // so if we again like the post the isSelect should be change into false
        // and the like count should decrease by 1.
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    LikeComponent.prototype.onClick = function () {
        // if(this.isSelected == true){
        //     this.likesCount--;
        //     this.isSelected = false;
        // } else{
        //     this.likesCount++;
        //     this.isSelected = true;
        // }
        this._likesCount += (this._isSelected == true) ? -1 : +1; //if-else
        this._isSelected = !this._isSelected; //equivalent of line 8 and 11.
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
