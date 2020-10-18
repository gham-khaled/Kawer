export class Field {
  public id: number;
  public name: string;
  public region: string;
  public description: string;
  public imageThumbnailPath: string;
  public imagesPath: string[];
  public amenities: string[];
  public fees: number;

  constructor(id: number, name: string, region: string, description: string, imageThumbnailPath: string, imagesPath: string[], amenities: string[], fees: number) {
    this.id = id;
    this.name = name;
    this.region = region;
    this.description = description;
    this.imageThumbnailPath = imageThumbnailPath;
    this.imagesPath = imagesPath;
    this.amenities = amenities;
    this.fees = fees;
  }
  // constructor(public name: string,
  //             public latitude: number,
  //             public longitude: number,
  //             public description: string,
  //             public main_image: string,
  //             public reservations: string[],
  //             public number_players: number,
  //             public amenities: string[],
  //             public price: number) {
  //
  // }
}
