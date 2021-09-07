(function(){


    self.Board= function(width,height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.gameOver=false;
        this.bars=[];

    }

    self.Board.prototype ={

        get elements(){
             elements = this.bars;
            elements.push(ball);
            return elements;
        }

     }
    

})();

(function(){
    self.BoardView = function(canvas,board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
    }
})

function main(){

};