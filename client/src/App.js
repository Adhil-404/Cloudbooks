import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLogin from './Components/Admin/AdminLogin';
import AdminForgetpassword from './Components/Admin/AdminForgetpassword';
import AdminResetpassword from './Components/Admin/AdminResetpassword';
import AdminRegistration from './Components/Admin/AdminRegistration';
import AdminDashboard from './Components/Admin/AdminDashboard';

function App() {
  return (
    <div className="App">
     <AdminLogin/>
     <AdminForgetpassword/>
     <AdminResetpassword/>
     <AdminRegistration/>
     <AdminDashboard/>
    </div>
  );
}

export default App;
