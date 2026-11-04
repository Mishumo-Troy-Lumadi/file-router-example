import { useParams } from "react-router";

export default function User() {
  const { id } = useParams();

  return (
    <div className="p-5">
      <p>User {id}</p>
    </div>
  );
}
