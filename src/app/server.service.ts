import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-type': 'application/json'});
    // return this.http.post('https://yizhang-http-practice.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://yizhang-http-practice.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }

  getServers() {
    return this.http.get('https://yizhang-http-practice.firebaseio.com/data.json');
  }

}
