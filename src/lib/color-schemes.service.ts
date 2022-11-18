import {Injectable} from '@angular/core';


interface ColorItem {
  color: string;
  name: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class ColorSchemesService {

  public schemes: { [key: string]: { [key: string]: any } } = {
    white: {
      background: '#ffffff',
      font: '#282626',
      tableHeader: '#d5d5d5',
      topPaneBackground: '#efefef',
      invertIcons: 'invert(0%)',
      invertLogo: 'invert(0%)',
      tableLineHover: '#f1f1f1',
      formBackground: 'gainsboro',
      inputBackground: 'white',
      buttonBackground: '#c1c1c1',
      groupBackground: '#f5f4f4',
    }, black: {
      background: '#282626',
      font: '#ffffff',
      tableHeader: '#494848',
      topPaneBackground: '#171717',
      invertIcons: 'invert(100%)',
      invertLogo: 'invert(100%)',
      tableLineHover: '#171717',
      formBackground: '#3b3b3b',
      inputBackground: '#e2e1e1',
      buttonBackground: 'black',
      groupBackground: '#1f1f1f',
    },
  };


  private _current = localStorage.getItem('colorScheme') || 'white';

  constructor() {
  }

  style: any;


  set current(current: string) {
    localStorage.setItem('colorScheme', current);
    this._current = current;
  }

  get current(): string {
    return this._current;
  }


  initColors(style: any) {
    this.style = style;
    this.refreshStyle();
  }

  public refreshStyle() {
    const scheme = this.schemes[this._current];
    Object.keys(scheme).forEach(color => {
      this.style.setProperty('--' + color, scheme[color]);
    });
  }
}
