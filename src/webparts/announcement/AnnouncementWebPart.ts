// This line is required for the image path
require('set-webpack-public-path!')
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IWebPartContext
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './Announcement.module.scss';
import * as strings from 'announcementStrings';
import { IAnnouncementWebPartProps } from './IAnnouncementWebPartProps';
import { IAnnouncement, IAnnouncements } from './Announcements';
//The SharePoint Framework contains a logging API that can be used to log messages during the lifecycle of your webpart
// looks like not available with sp-client-base version 1.0.0.0
//import { Log } from '@microsoft/sp-client-base';
import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';

import { ISharedServiceProvider } from "./../services/ISharedServiceProvider";
import { MockServiceProvider } from "./../services/MockServiceProvider";
import { SharedServiceProvider } from "./../services/SharedServiceProvider";

export default class AnnouncementWebPart extends BaseClientSideWebPart<IAnnouncementWebPartProps> {
  private _sharedService: ISharedServiceProvider;
  private isDebug: boolean;
  public constructor(context: IWebPartContext) {
    super();
    this.isDebug =
      DEBUG && (Environment.type === EnvironmentType.Test || Environment.type === EnvironmentType.Local);
  }

  public render(): void {

    this.domElement.innerHTML = `
      <div class="${styles.announcements}">
        
        <header class="${styles.titleblock}">
							<h2>${escape(this.properties.description)}</h2>							
						</header>
          
          <div id="announcementListContainer">
            </div>
        </div>
      </div>`;

    // Based on the debug variable initialize the service  
    this._sharedService = this.isDebug
      ? new MockServiceProvider()
      : this.context.serviceScope.consume(SharedServiceProvider.serviceKey);

    this.renderWebpartData();
  }

  private renderWebpartData() {
    this._sharedService.getAnnouncements().then((response: IAnnouncements) => {
      this.renderHtmlFromData(response.value);
    }).catch((err) => {
      console.log('Error getting announcements : ' + err);
    });
  }

  private renderHtmlFromData(announcements: IAnnouncement[]): void {
    let html: string = '';
    //const announcementLogo: any = require('../images/announcement.png');
    let announcementLogo: string = String(require('./images/Announcement.png'));
    announcements.forEach((item: IAnnouncement) => {
      html += `      
        <ul class="${styles.announcementsList}">
            <li>    
              <div class="${styles.announcementIcon}">
              <img src="${announcementLogo}" />
              </div>        
                <div class="${styles.txt}">
									<h2>${item.Title}</h2>
									<p>${item.Body}</p>
								</div>            
            </li>
        </ul>`;
    });

    const listContainer: Element = this.domElement.querySelector('#announcementListContainer');
    listContainer.innerHTML = html;
  }
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.WebpartHeaderFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
