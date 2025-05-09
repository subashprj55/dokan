// sales/today

import { axiosAuth } from '@/utils/axios'
import { useQuery } from '@tanstack/react-query'

const useTodayRecord = () => {
  const getRecord = async () => {
    const response = await axiosAuth.get('/sales/today')
    return response.data
  }

  const { data, error, isPending } = useQuery({
    queryKey: ['sales-today-record'],
    queryFn: getRecord,
  })

  return { data, error, isPending }
}

export default useTodayRecord
