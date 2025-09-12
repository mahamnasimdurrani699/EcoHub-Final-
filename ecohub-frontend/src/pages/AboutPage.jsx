import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-lightBackground text-secondary flex items-center justify-center py-4 font-sans">
      <div className="max-w-4xl bg-white shadow-light rounded-2xl p-8 flex flex-col md:flex-row items-center border border-accent/40">
        
        <div className="w-44 h-44 md:w-72 md:h-72 overflow-hidden rounded-full border-4 border-accent shadow-md">
          <img
            src="/girl.jpg"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left">
          <h2 className="text-2xl font-bold text-accent">
            Maham Durrani & Syeda Aiza
          </h2>
          <h4 className="text-darkAccent font-semibold mt-2">Web Developers</h4>
          <p className="text-secondary mt-4 leading-relaxed">
            Passionate web developers dedicated to crafting user-friendly and
            efficient digital experiences. With a strong foundation in modern
            web technologies, we build scalable and responsive applications
            tailored to your needs.
          </p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="mailto:mahamdurrani168@gmail.com"
              className="text-accent hover:text-darkAccent transition font-medium"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-linkText hover:text-darkAccent transition font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
