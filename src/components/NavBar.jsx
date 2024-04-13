export default function NavBar({handleLogout}) {
    return (
        <div className="navigation">
            <button onClick={() => handleLogout()} className="item">Logout</button>
        </div>
    )
}
