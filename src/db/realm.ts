import { createRealmContext } from '@realm/react'
import { Task, Tracker } from './schemas'

export const getRealm = async () =>
  await Realm.open({
    schema: [Task, Tracker],
    path: 'timer_db',
  })
