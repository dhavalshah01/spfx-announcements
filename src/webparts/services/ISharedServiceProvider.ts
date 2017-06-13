import { IAnnouncements } from "../announcement/Announcements";
export interface ISharedServiceProvider {
    getAnnouncements(): Promise<IAnnouncements>;
    logCurrentEnvironment():String ;
}