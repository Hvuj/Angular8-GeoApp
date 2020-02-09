import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    "id": 1,
    "name": 'road test 1',
    "date": new Date('06/01/2019'),
    "distance": 6.21,
    "comments": 'Nice day for a road trip 1',
    "gpxData":'../../assets/gpx/1.gpx',
  },
  {
    "id": 2,
    "name": 'road test 2',
    "date": new Date('10/02/2019'),
    "distance": 6.22,
    "comments": 'Nice day for a road trip 2',
    "gpxData":'../../assets/gpx/2.gpx',
  },  {
    "id": 3,
    "name": 'road test 3',
    "date": new Date('02/03/2019'),
    "distance": 6.23,
    "comments": 'Nice day for a road trip 3',
    "gpxData":'../../assets/gpx/3.gpx',
  },
  {
    "id": 4,
    "name": 'road test 4',
    "date": new Date('01/04/2019'),
    "distance": 6.24,
    "comments": 'Nice day for a road trip 4',
    "gpxData":'../../assets/gpx/4.gpx',
  }
]
