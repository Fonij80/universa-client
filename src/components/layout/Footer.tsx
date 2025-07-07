import { useTranslation } from "react-i18next";
import { SocialLink } from "../ui/extra";
import { socialLinks_list } from "../../constants/socialLinks";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      id="footer"
      className="flex flex-col items-center justify-center text-center mt-10 mb-5"
    >
      <hr className="w-full" />

      <section className="container mt-5">
        <div className="flex gap-4 justify-center mb-4">
          {socialLinks_list.map(({ href, label, icon: Icon, className }) => (
            <SocialLink
              key={label}
              href={href}
              label={label}
              className={className}
            >
              <Icon />
            </SocialLink>
          ))}
        </div>

        <h3>{t("footer.copyright")}</h3>
      </section>
    </footer>
  );
};
