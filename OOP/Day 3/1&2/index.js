class Point3D {
    constructor(x = 0, y = 0, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    print3DPoint() {
      console.log(`3DPoint: X=${this.x}, Y=${this.y}, Z=${this.z}`);
    }
    calculateDistance(P2) {
      if (!(P2 instanceof Point3D)) {
        throw new Error("Parameter must be an instance of Point3D.");
      }
  
      const dx = this.x - P2.x;
      const dy = this.y - P2.y;
      const dz = this.z - P2.z;
  
      return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
    }
  }
  
  const point1 = new Point3D(0, 0, 0);
  const point2 = new Point3D(3, 4, 5);
  
  point1.print3DPoint(); 
  point2.print3DPoint(); 
  
  const distance = point1.calculateDistance(point2);
  console.log(`Distance between points: ${distance.toFixed(2)}`);
  
  