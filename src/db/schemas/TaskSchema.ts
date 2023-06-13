import Realm from 'realm'
import { TaskProps } from '../../@types'

export class Task extends Realm.Object<TaskProps> {
  _id!: string
  tag_id!: string
  title!: string
  nrPlayed?: number

  static schema = {
    name: 'Task',
    properties: {
      _id: 'string',
      tag_id: 'string',
      title: 'string',
      nrPlayed: 'int?',
    },
    primaryKey: '_id',
  }
}
