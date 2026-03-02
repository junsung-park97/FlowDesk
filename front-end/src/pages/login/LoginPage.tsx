import LoginForm from "@/feature/auth/ui/LoginFrom";
import AuthLinks from "@/feature/auth/ui/AuthLinks";
import AuthHeader from "@/shared/ui/molecules/AuthHeader";
import Header from "@/shared/ui/organisms/Header";

const LoginPage = () => {
  return (
    <>
      
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="mx-auto flex w-full max-w-[476px] flex-col gap-14">
            <AuthHeader title="Login" subtitle1="만나서 반가워요 👋🏻" subtitle2="로그인 후 서비스를 이용해보세요." />
            <LoginForm />
            <AuthLinks />
          </div>
        </main>
      </div>
      
    </>
  );
};

export default LoginPage;
