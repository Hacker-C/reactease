import { proxy } from 'valtio'
import { subscribeKey } from 'valtio/utils'
import { LocalStorageUtil } from '~/utils'

export const userSore = proxy({
  uname: LocalStorageUtil.getItem<string>('uname'),
  unames: LocalStorageUtil.getItem<string[]>('unames') ?? [],
  update: (newName: string) => {
    userSore.uname = newName
    LocalStorageUtil.setItem('uname', newName)
  }
})

subscribeKey(userSore, 'uname', (newUname) => {
  if (newUname && !userSore.unames.includes(newUname)) {
    userSore.unames.push(newUname)
    LocalStorageUtil.setItem('unames', userSore.unames)
  }
})
