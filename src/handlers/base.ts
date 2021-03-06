import {Client, Message} from 'discord.js'
import {BaseStore} from '../store/base'
import {ExtraData} from '../types'

export abstract class BaseHandler {
  _name = 'base'
  store: BaseStore
  client: Client
  constructor(client: Client, store: BaseStore) {
    this.client = client
    this.store = store
  }

  async onMessage(message: Message, extra: ExtraData): Promise<boolean> {
    return false
  }
}
