export interface I_Meme {
    id: number,
    titre: string,
    text: string,
    x: number,
    y:number,
    fontSize:number,
    fontWeight:string,
    underline: boolean,
    italic:boolean,
    frameX:number,
    frameY:number,
    color:string
  }

  export interface I_Image {
    url: string,
    title: string,
    h:number,
    w:number
  }