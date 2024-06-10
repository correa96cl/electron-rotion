import { ipcMain } from 'electron'
import { IPC } from '@shared/constants/ipc'
import { FetchAllDocumentsResponse } from '../shared/types/ipc'

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: [
        { id: '1', title: 'Pessoasss', content: '' },
        { id: '2', title: 'Jucundas', content: '' },
        { id: '3', title: 'e bebadas', content: '' },
      ],
    }
  },
)
