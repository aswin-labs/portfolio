export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#000000] flex flex-col md:flex-row items-center px-6 md:px-20 py-20 relative overflow-hidden"
    >
      <div className="w-full md:w-1/2 z-10">
        <div className="mb-6">
          <h2 className="text-white font-black text-4xl md:text-5xl tracking-wide mb-2">
            ABOUT
          </h2>
          <div className="h-0.75 w-42 bg-cyan-400" />
        </div>

        <p className="text-gray-400 text-sm mb-12 tracking-wide">
          aswinvtk2001@gmail.com
        </p>

        <p className="text-gray-300 text-md md:text-base leading-relaxed max-w-prose tracking-wide">
          I’m an aspiring video editor with a strong passion for creating
          engaging, creative, and visually compelling content. I enjoy editing
          cinematic videos and social media content that capture attention and
          deliver impactful storytelling. I continuously work on improving my
          skills in video transitions, color grading, sound design, pacing, and
          motion effects to create clean and professional-quality edits.
          <br />
          <br />
          As a beginner in the field, I’m highly motivated to learn, explore new
          editing styles, and gain hands-on experience through real projects. I
          believe every project is an opportunity to grow creatively and
          technically while delivering content that connects with audiences in
          an effective and visually appealing way.
        </p>
      </div>

      {/* Mobile Image */}
      <div className="w-full mt-12 md:hidden">
        <img
          src="https://i.ibb.co/LdvpQYry/profile-img.jpg"
          alt="About"
          className="w-full h-100 object-cover rounded-2xl"
        />
      </div>

      {/* Desktop Image */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
        <img
          src="https://i.ibb.co/LdvpQYry/profile-img.jpg"
          alt="About"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}