export const skills = {
  frontend: [
    { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
    { name: 'React', icon: 'SiReact', color: '#61DAFB' },
    { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
    { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
    { name: 'CSS3', icon: 'SiCss3', color: '#1572B6' },
    { name: 'GSAP', icon: 'SiGreensock', color: '#88CE02' },
    { name: 'Framer Motion', icon: 'SiFramer', color: '#0055FF' },
    { name: 'Three.js', icon: 'SiThreedotjs', color: '#000000' },
  ],
  backend: [
    { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
    { name: 'Express.js', icon: 'SiExpress', color: '#000000' },
    { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
    { name: 'REST APIs', icon: 'SiPostman', color: '#FF6C37' },
  ],
  aiml: [
    { name: 'Python', icon: 'SiPython', color: '#3776AB' },
    { name: 'OpenAI API', icon: 'SiOpenai', color: '#412991' },
    { name: 'LangChain', icon: 'SiChainlink', color: '#375BD2' },
    { name: 'Scikit-learn', icon: 'SiScikitlearn', color: '#F7931E' },
  ],
  blockchain: [
    { name: 'Solidity', icon: 'SiSolidity', color: '#363636' },
    { name: 'Ethers.js', icon: 'SiEthereum', color: '#3C3C3D' },
    { name: 'Web3.js', icon: 'SiWeb3dotjs', color: '#F16822' },
    { name: 'Hardhat', icon: 'SiHardhat', color: '#FFF100' },
  ],
  tools: [
    { name: 'Git', icon: 'SiGit', color: '#F05032' },
    { name: 'GitHub', icon: 'SiGithub', color: '#181717' },
    { name: 'Figma', icon: 'SiFigma', color: '#F24E1E' },
    { name: 'VS Code', icon: 'SiVisualstudiocode', color: '#007ACC' },
    { name: 'Vercel', icon: 'SiVercel', color: '#000000' },
  ],
}

export const allSkills = [
  ...skills.frontend,
  ...skills.backend,
  ...skills.aiml,
  ...skills.blockchain,
  ...skills.tools,
]
