import { Injectable } from '@angular/core';
import { UiIcon } from '../shared/ui-icon';
import { UiComponent } from '../shared/ui-component';
import { SBBComponentsMapping } from '../sbb-components-mapping';

@Injectable({
  providedIn: 'root'
})
export class IconUiService {

  getUiIconByRouterLink(name: any): UiIcon {
    return SBBComponentsMapping.icons
      .map(item => new UiIcon(item.name, item.selector, item.tags))
      .find((uiIcon) => uiIcon.name.localeCompare(name, 'en', { sensitivity: 'base' }) === 0);
  }

  getUiComponentByRouterLink(name: any): UiComponent {
    const foundUiIcon: UiIcon = SBBComponentsMapping.icons
      .map(item => new UiIcon(item.name, item.selector, item.tags))
      .find(uiIcon => uiIcon.name.localeCompare(name, 'en', { sensitivity: 'base' }) === 0);
    return new UiComponent(foundUiIcon.name,
      foundUiIcon.name,
      foundUiIcon.name,
      'Subtitel goes here ...',
      true,
      false,
      ['Davide Aresta', 'Stefan Meili'],
      'Description goes here ...',
      'Source goes here ...',
      'Import text.');
  }

  getUiIconsBySearchValue(searchValue: any) {

    if (searchValue.length > 0) {
      return SBBComponentsMapping.icons.filter(uiIcon =>
        (new RegExp(searchValue, 'ig').test(uiIcon.name)) ||
        (new RegExp(searchValue, 'ig').test(uiIcon.selector)) ||
        uiIcon.tags.find(tag => (new RegExp(searchValue, 'ig').test(tag))))
        .map(item => new UiIcon(item.name, item.selector, item.tags))
        .map(uiIcon => {
          if (new RegExp(searchValue, 'ig').test(uiIcon.name)) {
            uiIcon.label = uiIcon.label.replace(new RegExp(searchValue, 'ig'), m => `<b>${m}</b>`);
          }
          return uiIcon;
        })
        .sort((a, b) => a.name.localeCompare(b.name));
    }

    return this.getAll();

  }

  getAll(): Array<UiIcon> {
    return SBBComponentsMapping.icons
      .map(item => new UiIcon(item.name, item.selector, item.tags))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}