import { useState } from "react";
import { useQuery } from "react-query";
import { User } from "../../../../infrastructure/model/user";
import { fetchUsers } from "../../../../infrastructure/user";
import scrollToTop from "../../../../util/scrollToTop";
import DefaultLayout from "../../../layout/default";
import UserListItem from "./UserListItem";
import s from "./user.module.scss";
import Loading from "../../global/Loading";

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
        <section className={s.list_container}>
            {isLoading ? <Loading />
                : error ? <div>Error</div>
                    : data.data.length === 0 ? <div>Cannot Found User</div>
                        : data.data.map((user: User, index: number) => <UserListItem key={index} user={user} />)}
        </section>
        <section className={s.page_btn}>
            {page > 1 && <button onClick={previousPage}>back</button>}
            <button onClick={nextPage}>next</button>
        </section>
    </DefaultLayout>
}