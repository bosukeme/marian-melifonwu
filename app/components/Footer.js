import Icons from "./Icons";

const Footer = () => {
  return (
      <footer className="bg-[#0F1624] text-gray-400 text-sm text-center py-6 border-t border-[#1f2937]">
        <Icons />

        <p>
          &copy; {new Date().getFullYear()} Marian Melifonwu. All rights
          reserved.
        </p>
      </footer>
  );
};

export default Footer;
