function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      //body of car
      ctx.beginPath();
      ctx.moveTo(50,100);
      ctx.lineTo(50,10);
      ctx.lineTo(240,10);
      ctx.lineTo(300,50);
      ctx.lineTo(350,50);
      ctx.lineTo(350,100);
      ctx.fill();
      ctx.stroke();
      
      // house
      ctx.moveTo(150,100);
      ctx.lineTo(50,10);
      ctx.lineTo(240,10);
      ctx.lineTo(300,50);
      ctx.lineTo(350,50);
      ctx.lineTo(350,100);
      ctx.closePath()

    }
  }