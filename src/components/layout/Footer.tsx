import { Trans } from "react-i18next";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col items-center justify-center text-center mt-10 mb-5"
    >
      <hr className="w-full" />

      <section className="container mt-5">
        {/* <div className="flex gap-4 justify-center mb-4">
          <SocialLink
            href={personal_data.social_links.youtube}
            label="YouTube"
            className="text-red-600 hover:text-red-800"
          >
            <FaYoutube />
          </SocialLink>
          <SocialLink
            href={personal_data.social_links.twitter}
            label="Twitter"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaTwitter />
          </SocialLink>
          <SocialLink
            href={personal_data.social_links.instagram}
            label="Instagram"
            className="text-pink-500 hover:text-pink-700"
          >
            <FaInstagram />
          </SocialLink>
        </div> */}

        <h3>
          <Trans
            i18nKey="footer.copyright"
            values={{ year: 2025 }}
            components={{
              creator: (
                <a
                  href="https://www.linkedin.com/in/foroozan-iraji/"
                  className="text-primary hover:border-b-2"
                />
              ),
            }}
          />
        </h3>
      </section>
    </footer>
  );
};
