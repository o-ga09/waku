import { LoginForm } from "../components/form/loginform.js";

function LoginPage() {
  return (
    <div className="container mx-auto p-4 font-IbmPlexSans">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center">ログイン</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
