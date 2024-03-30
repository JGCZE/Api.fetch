import User from "@/app/components/User/User";
import { getUser } from "../../api/fetchUser";

const OneUser = async ( props ) => {
  const id = props.params.id;
  const user = await getUser(id);

  return (
    <div>
      <User user={user} />
    </div>
  )
}

export default OneUser;