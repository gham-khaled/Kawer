export class User {
  constructor(public name: string,
              public family_name: string,
              public  email: string,
              public picture: string,
              public birthdate: string,
              public group: [string]
  ) {
  }
}
