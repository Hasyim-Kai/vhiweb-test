import DefaultLayout from '../../layout/default'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { fetchUsers } from '../../../infrastructure/user'
import UserListItem from '../../components/features/user/UserListItem'
import { User } from '../../../infrastructure/model/user'
import scrollToTop from '../../../util/ScrollToTop'


export default function UserList() {
  const [page, setPage] = useState<number>(1)
  function nextPage() { setPage(page + 1); scrollToTop() }
  function previousPage() { setPage(page - 1); scrollToTop() }
  const { isLoading, error, data } = useQuery({
    queryKey: ["user-list", page],
    queryFn: () => fetchUsers(page),
    keepPreviousData: true,
  })

  return <DefaultLayout>
    {isLoading ? <div>Loading</div>
      : error ? <div>Error</div>
        : data.data.map((user: User, index: number) => <UserListItem key={index} user={user} />)}

    <button onClick={previousPage}>back</button>
    <button onClick={nextPage}>next</button>
  </DefaultLayout>
}