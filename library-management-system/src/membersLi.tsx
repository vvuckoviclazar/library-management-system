import Btn from "./btn.tsx";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

type MembersLiProps = {
  id: number;
  name: string;
  phone: number;
  email: string;
  fine: number;
};
function MembersLi({ id, name, phone, email, fine }: MembersLiProps) {
  return (
    <li className="members-li">
      <p className="members-p">{id}</p> <p className="members-p">{name}</p>
      <p className="members-p">{phone}</p> <p className="members-p">{email}</p>
      <p className="members-p">{fine}</p>
      <div className="li-btn-div">
        <Btn className="edit-members-btn">
          <MdModeEditOutline size={23} />
        </Btn>
        <Btn className="delete-members-btn">
          <MdDelete size={23} />
        </Btn>
      </div>
    </li>
  );
}

export default MembersLi;
