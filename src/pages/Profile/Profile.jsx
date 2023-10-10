import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { getGlobalSate, updateGlobalSate } from "../../utils/Provider";
import { loadUserData } from "../../services/dataManager";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const token = getGlobalSate("token");

  function handleUpdateUser(firstName, lastName) {
    if (!firstName) return;
    setUser({ firstName, lastName });
    console.log(user);
    updateGlobalSate("user", JSON.stringify(user));
  }

  useEffect(() => {
    function setUserData() {
      let currentUser;
      if (!token) navigate("/signin");
      loadUserData(token)
        .then((response) => {
          currentUser = response;
          setUser(currentUser);
        })
        .catch((error) => console.log(error));
      updateGlobalSate("user", JSON.stringify(currentUser));
      return currentUser;
    }
    setUserData();
  }, [token, navigate]);

  return (
    <div className="body">
      <Header />
      <main className="main bg-dark">
        {editName ? (
          templateEditName()
        ) : (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {user.firstName}
            </h1>
            <button className="edit-button" onClick={() => setEditName(true)}>
              Edit Name
            </button>
          </div>
        )}

        <h2 className="sr-only">Accounts</h2>
        <Account
          amount={2082.79}
          description="Available Balance"
          title="Argent Bank Checking (x8349)"
        />
        <Account
          amount={10928.42}
          description="Available Balance"
          title="Argent Bank Savings (x6712)"
        />
        <Account
          amount={184.3}
          description="Current Balance"
          title="Argent Bank Credit Card (x8349)"
        />
      </main>
      <Footer />
    </div>
  );

  function templateEditName() {
    return (
      <div className="header">
        <h1>Welcome back</h1>
        <form className="editNameContainer">
          <input
            type="text"
            className="firstNameInput"
            placeholder={user.firstName}
            id="firstNameInput"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            className="lastNameInput"
            placeholder={user.lastName}
            id="lastNameInput"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <button
            type="submit"
            className="submitButton"
            onClick={() => handleUpdateUser({ firstName, lastName })}
          >
            Save
          </button>
          <button onClick={() => setEditName(false)} className="cancelButton">
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default Profile;
