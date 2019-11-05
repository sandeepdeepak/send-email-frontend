import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "./environment";

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  hostName = environment.hostName;

  uploadFile(file) {
    const formData = new FormData();
    formData.append('upload', file);
    return this.http.post(this.hostName + "/upload", formData);
  }


}
