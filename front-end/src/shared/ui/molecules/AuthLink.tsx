  interface AuthLinkProps {
    question: string;
    linkText: string;
    href: string;
  }

const AuthLink = ({question, linkText, href}: AuthLinkProps) => {
 
    return (
        <>
        <div className="flex justify-between">
              <span>{question}</span>
              <a href={href}>{linkText}</a>
        </div>
        </>
    );
};

export default AuthLink;