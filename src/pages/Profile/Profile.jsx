import Account from '../../components/Account/Account'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useState } from 'react'
// import { useEffect, useState } from 'react'


function Profile() {
  const [editName, setEditName] = useState(false)
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Doe')

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
              {firstName}
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
  )

  function templateEditName() {
    return (
      <div className="header">
        <h1>Welcome back</h1>
        <form
          className="editNameContainer"
          
        >
          <input
            type="text"
            className="firstNameInput"
            placeholder={firstName}
            id="firstNameInput"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="lastNameInput"
            placeholder={lastName}
            id="lastNameInput"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit" className="submitButton">
            Save
          </button>
          <button onClick={() => setEditName(false)} className="cancelButton">
            Cancel
          </button>
        </form>
      </div>
    )
  }
}

export default Profile
