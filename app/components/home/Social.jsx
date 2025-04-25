import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home-social">
      <Link href="https://github.com/babaygt" className="home-social-icon">
        <FaGithub />
      </Link>

      <Link
        href="https://www.linkedin.com/in/yigitbaba/"
        className="home-social-icon"
      >
        <FaLinkedin />
      </Link>

      <Link
        href="mailto:yigitbaba.contact@gmail.com"
        target="_blank"
        className="home-social-icon"
      >
        <FaEnvelope />
      </Link>
    </div>
  );
};
export default Social;
