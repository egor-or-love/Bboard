import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BbService {
  private url: String = 'http://localhost:8000';
  constructor() { }
}
