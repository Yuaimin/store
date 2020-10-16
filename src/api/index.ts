import { get } from '@/plugins/axios'

export const getIndex = () => get('/api/exam')
