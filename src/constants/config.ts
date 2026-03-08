type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Nilesh Jagadale — Portfolio',
    fullName: 'Nilesh Jagadale',
    email: 'njagadale717@gmail.com',
  },
  hero: {
    name: 'Nilesh Jagadale',
    p: ['I develop mobile and web applications while showcasing my skills and experience through an interactive animated career journey.'],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Senior Full-Stack Engineer | TypeScript & React Ecosystem Specialist.',
      content: `Results-driven Software Developer with expertise in full-stack development using JavaScript, TypeScript, React.js, Next.js, React Native, and Node.js. Proven ability to design and develop scalable applications, implement robust APIs, and deliver seamless user experiences across web and mobile platforms. Passionate about solving complex problems, learning new technologies, and collaborating with teams to deliver high-quality software solutions.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'My Animated Career Journey',
      h2: 'Resume Book.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
