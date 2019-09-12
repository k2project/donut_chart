const svgStyle={
    radius: 100/(2*Math.PI), //circumference = 100 ; r = 100/(2*Math.PI)
    height:'500px',
    width:'500px',
    stroke:6,
    viewBox: "0 0 50 50",
    cp :25,
    bg:"#d2d3d4"
}

const colours = ['#FDF100', '#FBCB00', '#FD8E00','#F85100','#FD0100','#AA30A9','#791E9F','#7441FE', '#0F5FFE', '#188D7B','#23B44F', '#87E03A'];

class SliceData{
    constructor(slices, sliceIndex){
        this.slices = slices;
        this.sliceIndex = sliceIndex;
        this.randomColours=[];
    }

    getSlicesTotal(){
        let total = 0;
        for( let i=0 ; i<this.slices.length; i++){
            total += this.slices[i];
        }
        return total;
    }
    getPercentageBrakedown(){
        const percentageBrakedown = [];
        let total = this.getSlicesTotal();
        for( let i=0 ; i<this.slices.length; i++){
            let percentage = (this.slices[i] / total)*100
            percentageBrakedown.push(percentage)
        }
        return percentageBrakedown;
    }
    getDasharray(){
        const percentageBrakedown = this.getPercentageBrakedown();
        const percentage = percentageBrakedown[this.sliceIndex];
        return `${percentage} ${100-percentage}`;
    }
    getDashoffset(){
        let percentageBrakedown = this.getPercentageBrakedown();
        let offset = 0;
        for ( let i = 0; i<this.sliceIndex; i++){
            offset +=  percentageBrakedown[i];
        }
        offset = this.sliceIndex===0 ? 100 : 100 - offset;
        return `${offset}`
    }
    getSliceColour(){
        if(this.slices.length<colours.length){
            const colourOffset = Math.floor(colours.length /(this.slices.length<=colours.length? this.slices.length : colours.length));
            let index = this.sliceIndex * colourOffset;
            return colours[index];
        }else{
            //get random colour
            return this.getRandomColour();

        }

    }
    getRandomColour() {
      const letters = '0123456789ABCDEF';
      let colour = '#';
      for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
      }
      if(!this.randomColours.includes(colour)){
          this.randomColours.push(colour)
          return colour;
      }else{
          this.getRandomColour();
      }
    }

    getData(){
        return{
            dasharray : this.getDasharray(),
            dashoffset : this.getDashoffset(),
            sliceColour : this.getSliceColour()
        }
    }
}


export{colours, svgStyle, SliceData}
