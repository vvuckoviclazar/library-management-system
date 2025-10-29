import MembersLi from "../membersLi";
import membersData from "../membersData";
import Btn from "../btn.tsx";

export default function MembersPage() {
  const members = membersData;
  return (
    <section>
      <header className="page-header">
        <h1 className="page-h1">Members</h1>
        <Btn className="add-new-btn">+ ADD NEW MEMBER</Btn>
      </header>
      <ul>
        <li className="members-page-li">
          <p className="members-page-p P">Membership No.</p>
          <p className="members-page-p">Name</p>
          <p className="members-page-p">Phone</p>
          <p className="members-page-p">Email</p>
          <p className="members-page-p">Fine</p>
          <p className="members-page-p">Actions</p>
        </li>
        {members.map((m) => (
          <MembersLi
            key={m.id}
            id={m.id}
            name={m.name}
            phone={m.phone}
            email={m.email}
            fine={m.fine}
          />
        ))}
      </ul>
    </section>
  );
}
