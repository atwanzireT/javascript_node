function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.fillRect(100, 200, 250, 80);
      ctx.fillRect(100, 280, 350, 100)
    }
  }