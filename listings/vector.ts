import { Vertex } from "../graph/graph";

export class Vector {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  static fromVertex = (v: Vertex): Vector => {
    return new Vector(v.x, v.y);
  };

  public get x(): number {
    return this._x;
  }

  public set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }

  public set y(value: number) {
    this._y = value;
  }

  public dist(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public mul(k: number) {
    this._x *= k;
    this._y *= k;
  }
}


