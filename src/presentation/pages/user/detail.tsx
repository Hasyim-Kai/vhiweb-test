import { Link, useParams } from 'react-router-dom'
import DefaultLayout from '../../layout/default'
import { useQuery } from 'react-query';
import { fetchUsersDetail } from '../../../infrastructure/user';


export default function UserDetail() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["user-list", id],
    queryFn: () => fetchUsersDetail(id),
  })

  return <DefaultLayout>
    <Link to={-1}>Go back</Link>
    {isLoading ? <div>Loading</div>
      : error ? <div>Error</div>
        : <section>
          <img src={data.data.avatar} alt="Profile Photo" />
          <h1>{data.data.first_name}</h1>
          <p>{data.data.last_name}</p>
          <p>{data.data.email}</p>
        </section>}
  </DefaultLayout>
}