import Image from "next/image";
import kofi from "../public/kofi_button_stroke.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center my-10">
        <a
          href="https://ko-fi.com/jamesli_t"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={kofi} height={59.5} width={358} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
