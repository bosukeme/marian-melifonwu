import Image from "next/image";
import { Twitter, Linkedin,  } from "lucide-react";

const Icons = () => {
    return (
      <section className="flex justify-center gap-6 py-2 bg-[#0f1624]  ">
        {[
          {
            href: "https://www.linkedin.com/in/marian-melifonwu-b7524721b",
            icon: (
              <Linkedin className="w-6 h-6 hover:scale-110 transition-transform text-white" />
            ),
            alt: "LinkedIn",
          },
  
        ].map((social) => (
          <a
            key={social.alt}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.alt}
          >
            {social.icon}
          </a>
        ))}
      </section>
    );
}

export default Icons;