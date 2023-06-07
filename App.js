import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState, useEffect } from "react";
import User from "./components/User/User";

function App() {
  const [inputs, setinputs] = useState({});
  const [users, setUsers] = useState([]);

  const handelChanges = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    console.log("users", users);
    console.log("inputs", inputs);
  }, []);

  const submitForm = useCallback(
    (event) => {
      event.preventDefault();
      setUsers((oldArray) => [...oldArray, inputs]);
    },
    [inputs, users]
  );

  const handleCallback = useCallback(
    (childData) => {
      setinputs((values) => ({ ...values, childData }));
    },
    [inputs]
  );

  const handleDelete = useCallback(
    (user) => {
      setUsers(users.filter((x) => x.enrollNo !== user.enrollNo, 1));
    },
    [users]
  );

  return (
    <div className="container">
      <div className="lableUser">User Regsister</div>
      <form id="user-form" onSubmit={submitForm}>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="inputUser4">User name</label>
            <input
              type="name"
              class="form-control"
              id="inputUserName"
              placeholder="User name"
              name="user"
              value={inputs.user || ""}
              onChange={handelChanges}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Email"
              name="email"
              value={inputs.email || ""}
              onChange={handelChanges}
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="inputEnrollNo4">Enroll no</label>
            <input
              type="number"
              class="form-control"
              id="inputEnrollNo"
              placeholder="User name"
              name="enrollNo"
              value={inputs.enrollNo || ""}
              onChange={handelChanges}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Mobile no</label>
            <input
              type="number"
              class="form-control"
              id="inputMobile"
              placeholder="Mobile No"
              name="mobile"
              value={inputs.mobile || ""}
              onChange={handelChanges}
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address"
              value={inputs.address || ""}
              onChange={handelChanges}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              name="city"
              value={inputs.city || ""}
              onChange={handelChanges}
            />
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="inputState">State</label>
              <select
                id="inputState"
                class="form-control"
                name="state"
                value={inputs.state || ""}
                onChange={handelChanges}
              >
                <option>Choose...</option>
                <option defaultValue value="Tamilnadu">
                  Tamilnadu
                </option>
                <option value="Karala">Karala</option>
                <option value="Koa">Koa</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label for="inputZip">Zip</label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                name="zip"
                value={inputs.zip || ""}
                onChange={handelChanges}
              />
            </div>
            <div class="form-group col-md-3">
              <label for="inputZip">Country</label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                name="country"
                value={inputs.country || ""}
                onChange={handelChanges}
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="gridCheck"
              name="checkMe"
            />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      {users.length > 0 && (
        <User
          userData={users}
          editCallBack={handleCallback}
          deleteCallback={handleDelete}
        ></User>
      )}
    </div>
  );
}

export default App;
