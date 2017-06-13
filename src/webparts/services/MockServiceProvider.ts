import { ISharedServiceProvider } from './ISharedServiceProvider';
import { IAnnouncement, IAnnouncements } from "../announcement/Announcements";

export class MockServiceProvider implements ISharedServiceProvider {
    constructor() {
    }
    private static mockAnnouncements: IAnnouncement[] = [
        { Title: 'Announcment #1', Body: 'Some Announcment description 1', Id: '1' },
        { Title: 'Announcment #2', Body: 'Some Announcment description 2', Id: '2' },
        { Title: 'Announcment #3', Body: 'Some Announcment description 3', Id: '3' }
    ];
    public getAnnouncements(): Promise<IAnnouncements> {
        var announcements: IAnnouncements = { value: MockServiceProvider.mockAnnouncements };
        return new Promise<IAnnouncements>((resolve) => {

            resolve(announcements);
        });
    }
    public logCurrentEnvironment(): String {
        return "Mock Environment Data";
    }
}