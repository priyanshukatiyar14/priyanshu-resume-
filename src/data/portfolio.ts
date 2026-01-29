// Portfolio data - All content centralized here
export const portfolioData = {
  personal: {
    name: "Priyanshu Katiyar",
    role: "Backend Software Developer",
    tagline: "Building Production-Grade SaaS & Fintech Solutions",
    location: "Noida, India",
    email: "priyanshukatiyar111@gmail.com",
    phone: "+91 6387139727",
    linkedin: "https://linkedin.com/in/priyanshukatiyar",
    github: "https://github.com/priyanshukatiyar",
    resumeUrl: "/resume.pdf",
  },

  about: {
    headline: "Crafting Scalable Backend Systems",
    description: `Backend-focused software developer with 1.5+ years of experience building production-grade SaaS products, 
    financial analysis tools, and security-focused document forensics systems. I specialize in designing 0-to-1 solutions, 
    leading engineering teams, and delivering scalable backend architectures using Python, Django Rest Framework, AWS, 
    and modern cloud-native technologies.`,
    highlights: [
      "Built PDF forensics tools detecting document tampering & fraud",
      "Designed financial analysis systems processing bank statements",
      "Led development teams delivering enterprise SaaS products",
      "Expertise in AWS cloud architecture & serverless systems",
    ],
  },

  skills: {
    languages: ["Python", "C++", "SQL"],
    frameworks: ["Django Rest Framework", "Flask", "LangChain"],
    databases: ["PostgreSQL", "MongoDB", "DynamoDB", "SQLite"],
    cloud: [
      "AWS S3",
      "Lambda",
      "EC2",
      "API Gateway",
      "SES",
      "Route 53",
      "SQS",
      "CloudWatch",
      "EventBridge",
      "RDS",
      "Step Functions",
      "RDS Proxies",
      "IAM",
      "VPC",
      "Textract",
    ],
    tools: ["Git", "GitHub Actions", "Linux", "Jira", "Postman", "Swagger"],
    payments: ["Stripe", "Outseta"],
  },

  experience: [
    {
      company: "BeFiSc / FinEye",
      location: "Noida",
      role: "Backend Developer (Python)",
      period: "Dec 2024 - Present",
      type: "current",
      highlights: [
        {
          title: "TamperProof - PDF Forensic Analysis Tool",
          description:
            "Designed and developed a 0-to-1 solution for PDF tampering detection with digital signature analysis, embedded file inspection, editor identification, and comprehensive forensic reporting.",
        },
        {
          title: "Bank Statement Analyzer",
          description:
            "Built end-to-end financial analysis tool with OCR, automated categorization, fraud detection, AML analysis, and financial health scoring across multiple account types.",
        },
        {
          title: "Account Aggregator (AA) APIs",
          description:
            "Implemented TSP module with consent management, secure data fetch, and ReBIT-compliant authentication flows.",
        },
        {
          title: "Team Leadership",
          description:
            "Led developer team, conducted code reviews, assigned tasks, and provided mentorship for quality deliverables.",
        },
      ],
    },
    {
      company: "Innow8 Apps",
      location: "Mohali",
      role: "Associate Software Developer (Python)",
      period: "Oct 2023 - Dec 2024",
      type: "past",
      highlights: [
        {
          title: "Kwipo - SaaS Employee Engagement Platform",
          description:
            "Developed SaaS application for employee engagement with automated desktop notifications, Salesforce integration, and Stripe payments. Built with Django, Lambda, Zappa, and AWS.",
        },
        {
          title: "Zeiss Lens Selector Tool",
          description:
            "Created medical-grade lens selection tool with complex decision algorithms based on patient prescriptions and daily activities using Django REST and Azure.",
        },
      ],
    },
    {
      company: "Innow8 Apps",
      location: "Mohali",
      role: "Software Development Intern",
      period: "Apr 2023 - Sep 2023",
      type: "past",
      highlights: [
        {
          title: "Stock Market Backend",
          description:
            "Built secure order APIs with real-time WebSocket streaming via Paytm Money integration.",
        },
        {
          title: "AI Meeting Scheduler",
          description:
            "Developed automated scheduling system using OpenAI API, reducing scheduling time by 75%.",
        },
      ],
    },
  ],

  projects: [
    {
      title: "TamperProof",
      subtitle: "Document Forensics Platform",
      problem: "Organizations need reliable methods to detect tampered PDFs and ensure document authenticity for compliance.",
      solution: "Built comprehensive forensic analysis tool detecting digital signature manipulation, embedded file modifications, and text alterations with detailed reporting.",
      tech: ["Python", "AWS Textract", "PostgreSQL", "Django REST"],
      impact: "Enables financial institutions to verify document authenticity, preventing fraud in loan applications and compliance documents.",
      featured: true,
    },
    {
      title: "Bank Statement Analyzer",
      subtitle: "Financial Intelligence Tool",
      problem: "Manual review of bank statements for loan processing is time-consuming and error-prone.",
      solution: "Automated OCR-based extraction with intelligent categorization, fraud detection, AML checks, and comprehensive financial health scoring.",
      tech: ["Python", "OCR", "AWS Lambda", "PostgreSQL"],
      impact: "Reduced statement analysis time from hours to minutes with improved accuracy in fraud detection.",
      featured: true,
    },
    {
      title: "Kwipo",
      subtitle: "SaaS Employee Engagement",
      problem: "Companies struggle to recognize and celebrate employee achievements in real-time across distributed teams.",
      solution: "Built desktop notification platform integrating with Salesforce to automatically celebrate sales achievements and milestones.",
      tech: ["Django", "Node.js", "Stripe", "AWS", "Pusher"],
      impact: "Improved employee engagement metrics and workplace positivity for enterprise clients.",
      featured: true,
    },
    {
      title: "Account Aggregator APIs",
      subtitle: "Secure Financial Data Pipeline",
      problem: "Financial institutions need secure, compliant methods to access customer financial data with proper consent.",
      solution: "Implemented ReBIT-compliant TSP module with consent management and secure data fetch flows.",
      tech: ["Python", "Django REST", "AWS", "Security"],
      impact: "Enabled compliant data sharing between financial institutions under India's AA framework.",
      featured: false,
    },
  ],

  achievements: [
    {
      title: "Star Performer of the Year 2023",
      description: "Recognized for significant contributions at Innow8 Apps",
      icon: "trophy",
    },
    {
      title: "0-to-1 Product Development",
      description: "Independently designed and delivered production-ready forensics tools",
      icon: "rocket",
    },
    {
      title: "Team Leadership",
      description: "Led development teams, mentored junior developers, and ensured quality deliverables",
      icon: "users",
    },
  ],

  education: {
    degree: "Bachelor of Engineering",
    field: "Electronics & Communication",
    institution: "Panjab University, Chandigarh",
    period: "2019 - 2023",
    cgpa: "8.36",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export type PortfolioData = typeof portfolioData;
