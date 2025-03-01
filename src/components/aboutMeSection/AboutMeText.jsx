import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      <h2 className="text-6xl text-[#D4D4D4] mb-10">About Me</h2>
      <p>
        Hey there! 👋 <br />
        I'm <span>Brijesh</span> – a passionate <span>Software Engineer</span> with 3+ years of experience crafting scalable, high-impact solutions, and a solid foundation in machine learning. 💻 
        I've worked with innovative teams at <span>Taboola</span> and <span>Ansh Softech</span>, where I built robust product integrations, automated workflows, and even dived into machine learning projects like music genre classification using CNNs, SVM, and more. 🚀
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Here’s a quick snapshot of my expertise:</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li><span className="font-semibold">Programming & Databases:</span> Python, C++, Java, JavaScript, TypeScript, Dart, SQL (MySQL, PostgreSQL), MongoDB, and more.</li>
        <li><span className="font-semibold">Frameworks & Libraries:</span> Spring Boot, PyTorch, TensorFlow, scikit-learn, React.js, Next.js, Node.js, Express.js, Flutter, etc.</li>
        <li><span className="font-semibold">Technologies:</span> Docker, Kubernetes, AWS, CI/CD, Git, Agile Methodology, and a suite of modern development tools.</li>
      </ul>
      <br />
      <p>
        I'm actively seeking <span>full-time opportunities</span> where I can leverage my technical and machine learning skills to drive innovation and solve challenging problems. Let’s connect and create impactful solutions together! 🤝
      </p>

     <br />


    </div>
  );
};

export default AboutMeText;
