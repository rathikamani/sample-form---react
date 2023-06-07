import { useMemo } from "react";

const User = (props) => {
  const { userData } = props;
  // const addressCombine = () => useMemo(() => {
  //     console.log();
  //    // let address = user.address + user.city + user.zip + user.state;
  //     return (<td>sd</td>)
  // });
  const onEditUser = (user) => {
    console.log(user);
    props.editCallBack(user);
  };

  const onDeleteUser = (user) => {
    props.deleteCallback(user);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Enroll no</th>
          <th scope="col">UserName</th>
          <th scope="col">email</th>
          <th scope="col">mobile</th>
          <th scope="col">Address</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => {
          return (
            <tr>
              <td>{user.enrollNo}</td>
              <td>{user.user}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              {/* {addressCombine} */}
              <td>{user.address}</td>
              <td>
                <button onClick={() => onEditUser(user)}>Update</button>
              </td>
              <td>
                <button onClick={() => onDeleteUser(user)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default User;
