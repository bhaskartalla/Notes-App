import type { CollectionType, DBType } from '@/types'
import { collections, tablesDB } from './config'

const db: DBType = {}

collections.forEach((collection: CollectionType) => {
  db[collection.name] = {
    listRows: async () => {
      return await tablesDB.listRows({
        databaseId: collection.dbId,
        tableId: collection.tableId,
      })
    },
  }
})

export { db }
