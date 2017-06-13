## spfx-announcement

This is announcement webpart created using the SharePoint Framework and typescript. This webpart has been created as a part of the following blog post series.

Getting Started with SharePoint Framework (SPFx) (http://www.qipoint.com/blog/getting-started-with-sharepoint-framework-spfx/)

Setting up Developer Environment for SharePoint Framework (SPFx)  (http://www.qipoint.com/blog/setting-up-developer-environment-for-sharepoint-framework-spfx/)

Create your first Client Side Web Part using SharePoint Framework (SPFx) – Part 1 (http://www.qipoint.com/blog/create-your-first-client-side-web-part-using-sharepoint-framework-spfx-part-1/)

Create your first Client Side Web Part using SharePoint Framework (SPFx) – Part 2 (http://www.qipoint.com/blog/create-your-first-client-side-web-part-using-sharepoint-framework-spfx-part-2/)

##Screenshot

![Announcement Webpart using SharePoint Framework](https://github.com/dhavalshah01/spfx-announcements/blob/master/Screenshots/Announcement%20SharePoint%20SPFX%20Webpart.png)


## Applies to

* [SharePoint Framework](http://dev.office.com/sharepoint/docs/spfx/sharepoint-framework-overview)
* [Office 365 developer tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
spfx-ANNOUNCEMENT| [Dhaval Shah (SharePoint & .Net Consultant)](http://www.dhavalcodes.com/AboutMe)



## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---
### Building the code

To build and run this client-side project, you will need to clone and build the tutorials project.

Clone this repo by executing the following command in your console:

```
git clone https://github.com/dhavalshah01/spfx-announcements.git
```

Navigate to the cloned repo folder which should be the same as the repo name:

```
cd spfx-announcements
```


Now run the following command to install the npm packages:

```
npm install
```

This will install the required npm packages and depedencies to build and run the client-side project.

Once the npm packages are installed, run the command to preview your web parts in SharePoint Workbench:

```
gulp serve

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp build
gulp serve
