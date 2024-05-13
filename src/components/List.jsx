import { useSelector } from "react-redux";
import { addItem } from "../features/counter/counterSlice";

function List() {
  const { users } = useSelector((state) => state.counter);
  console.log(users);
  return (
    <div>
      {users.map((item) => {
        return (
          <div className="card w-96 bg-base-100  shadow-xl">
            <div className="card-body">
              <h1 className="card-title">Yosh: {item.item1}</h1>
              <h1 className="card-title">Familiya: {item.item2}</h1>
              <h1 className="card-title">Ism: {item.item3}</h1>
              <h1 className="card-title">Email: {item.item4}</h1>
            </div>
          </div>
        );
      })}
      ,
    </div>
  );
}

export default List;
