import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLogin from './Components/Admin/AdminLogin';
import UserLogin from './Components/User/UserLogin';
import UserRegistration from './Components/User/UserRegistration';
import AdminForgetpassword from './Components/Admin/AdminForgetpassword';
import AdminResetpassword from './Components/Admin/AdminResetpassword';
import AdminRegistration from './Components/Admin/AdminRegistration';
import AdminDashboard from './Components/Admin/AdminDashboard';
import UserDashboard from './Components/User/UserDashboard';


function App() {
  return (
    <div className="App">

     
     {/* <UserLogin/> */}
     {/* <UserRegistration/> */}
     <UserDashboard/>

     {/* <AdminLogin/> */}
     {/* <UserLogin/> */}
     {/* <UserRegistration/> */}

     {/* <AdminLogin/> */}
     {/* <AdminForgetpassword/> */}
     {/* <AdminResetpassword/> */}
     {/* <AdminRegistration/>  */}
     {/* <AdminDashboard/>  */}
     

    </div>
  );
}

export default App;
