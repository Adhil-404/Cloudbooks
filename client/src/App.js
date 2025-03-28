import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLogin from './Components/Admin/AdminLogin';
import UserLogin from './Components/User/UserLogin';
import UserRegistration from './Components/User/UserRegistration';

function App() {
  return (
    <div className="App">
     {/* <AdminLogin/> */}
     <UserLogin/>
     <UserRegistration/>
    </div>
  );
}

export default App;
