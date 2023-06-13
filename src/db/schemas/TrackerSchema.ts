import Realm from 'realm'
import { TrackerProps } from '../../@types'
import { Task } from './TaskSchema'

export class Tracker extends Realm.Object<TrackerProps> {
  _id!: string
  start_time: Date = new Date()
  end_time!: Date
  task?: Task

  static schema = {
    name: 'Traker',
    properties: {
      _id: 'string',
      start_time: { type: 'date', default: new Date() },
      end_time: 'date',
      task: 'Task?',
    },
    primaryKey: '_id',
  }
}
