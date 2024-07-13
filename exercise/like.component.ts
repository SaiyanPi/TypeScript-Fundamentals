export class LikeComponent{
    constructor(private _likesCount: number, private _isSelected: boolean){
    }

    // assuming the isSelected is already true( meaningwe've already liked a post) 
    // so if we again like the post the isSelect should be change into false
    // and the like count should decrease by 1.
    get likesCount(){
        return this._likesCount;
    }
    get isSelected(){
        return this._isSelected;
    }
    onClick(){
        // if(this.isSelected == true){
        //     this.likesCount--;
        //     this.isSelected = false;
        // } else{
        //     this.likesCount++;
        //     this.isSelected = true;
        // }
        this._likesCount += (this._isSelected == true)? -1 : +1; //if-else
        this._isSelected = !this._isSelected; //equivalent of line 8 and 11.
    }
}