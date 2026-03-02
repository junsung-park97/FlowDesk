interface AuthHeaderProps {
    title: string;
    subtitle1: string;
    subtitle2: string;
}

const AuthHeader = ({title, subtitle1, subtitle2}: AuthHeaderProps) => {
    return (
        <>
        <div className="title flex flex-col items-center gap-4">
            <h2 className="text-4xl font-bold">{title}</h2>
            <div className="flex flex-col gap-1 items-center">
              <span>{subtitle1}</span>
              <span>{subtitle2}</span>
            </div>
          </div>
        </>
    );
};

export default AuthHeader;