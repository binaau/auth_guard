import { URLSearchParams } from "@angular/http";

export class User {
  barcode: string;
  password: string;
  username: string;
  oldpassword: string;
  newpassword: string;
  token_device: string;

  constructor(obj?: any) {
    if (obj) {
      console.log(obj);
      this.barcode = obj && obj.barcode;
      this.username = obj && obj.username;
      this.password = obj && obj.password;
      this.oldpassword = obj && obj.oldpassword;
      this.newpassword = obj && obj.newpassword;
    }
  }


  public generateUrlencodedParameters(): string {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('barcode', this.barcode);
    urlSearchParams.append('username', this.username);
    urlSearchParams.append('password', this.password);
    // urlSearchParams.append('token_device', this.token_device);

    return urlSearchParams.toString();
  }
  public generateUrlencodedParametersChangePass(token: string): string {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('oldpassword', this.oldpassword.toString());
    urlSearchParams.append('newpassword', this.newpassword.toString());
    urlSearchParams.append('token', token);
    return urlSearchParams.toString();
  }

}
