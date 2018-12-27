export class Api {
  public static readonly PROTOCOL: string = 'http';
  public static readonly DOMAIN: string = 'xx.xxx.xx.xx';
  public static readonly PORT = 'xx';
  public static readonly VERSION: string = 'v1';
  public static readonly URLS: any = {

    Login_mobile: 'Login_mobile',
    mobile_usersforgetpassword:'mobile_usersforgetpassword',
    mobile_registergetdata:'mobile_registergetdata',
    mobile_userschangepassword:'mobile_userschangepassword',
    resetPasswordRequestt:'resetPasswordRequest',
    resetPasswordd: 'resetPassword'
  };

  public static getUrl(url: string): string {
    return Api.PROTOCOL + '://' + Api.DOMAIN + ':' + Api.PORT + '/' + Api.VERSION + '/' + url;

  }
}
