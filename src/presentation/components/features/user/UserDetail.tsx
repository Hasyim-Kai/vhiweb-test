import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchUsersDetail } from "../../../../infrastructure/user";
import DefaultLayout from "../../../layout/default";
import s from "./user.module.scss";
import scrollToTop from "../../../../util/scrollToTop";
import { useEffect } from "react";

export default function UserDetail() {
    const { id } = useParams();
    const { isLoading, error, data } = useQuery({
        queryKey: ["user-list", id],
        queryFn: () => fetchUsersDetail(id),
    })
    useEffect(() => {
      scrollToTop()
    }, [])
    

    return <DefaultLayout isBack>
        {isLoading ? <div>Loading</div>
            : error ? <div>Error</div>
                : <section className={s.detail_container}>
                    <div className={s.photo_profile}>
                        <img src={data.data.avatar} alt="Profile Photo" />
                    </div>
                    <div>
                        <h1>{data.data.first_name}</h1>
                        <p>{data.data.last_name}</p>
                        <p>{data.data.email}</p>
                    </div>
                </section>}
    </DefaultLayout>
}