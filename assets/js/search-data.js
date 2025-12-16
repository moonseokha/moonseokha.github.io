// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "/* denotes equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "📄 You can find more detailed information about me here — check the CV file for full details. ↗️",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
          
            title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
          
          description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
          section: "Posts",
          handler: () => {
            
              window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
            
          },
        },{id: "post-displaying-external-posts-on-your-al-folio-blog",
          
            title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
          
          description: "",
          section: "Posts",
          handler: () => {
            
              window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
            
          },
        },{id: "post-a-post-with-redirect",
          
            title: "a post with redirect",
          
          description: "you can also redirect to assets like pdf",
          section: "Posts",
          handler: () => {
            
              window.location.href = "/assets/pdf/example_pdf.pdf";
            
          },
        },{id: "post-a-post-with-diagrams",
          
            title: "a post with diagrams",
          
          description: "an example of a blog post with diagrams",
          section: "Posts",
          handler: () => {
            
              window.location.href = "/blog/2021/diagrams/";
            
          },
        },{id: "post-a-distill-style-blog-post",
          
            title: "a distill-style blog post",
          
          description: "an example of a distill-style blog post and main elements",
          section: "Posts",
          handler: () => {
            
              window.location.href = "/blog/2021/distill/";
            
          },
        },{id: "post-welcome",
          
            title: "Welcome",
          
          description: "",
          section: "Posts",
          handler: () => {
            
              window.location.href = "/blog/2018/welcome/";
            
          },
        },{id: "post-welcome",
          
            title: "Welcome",
          
          description: "",
          section: "Posts",
          handler: () => {
            
              window.location.href = "/blog/2018/welcome/";
            
          },
        },{id: "post-post-with-header-image",
          
            title: "Post with Header Image",
          
          description: "",
          section: "Posts",
          handler: () => {
            
              window.location.href = "/blog/2018/header-image/";
            
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-learning-temporal-cues-by-predicting-objects-move-for-multi-camera-3d-object-detection-has-been-accepted-to-icra-2024",
          title: '📄✨ Our paper “Learning Temporal Cues by Predicting Objects Move for Multi-camera 3D...',
          description: "",
          section: "News",},{id: "news-our-paper-visiontrap-vision-augmented-trajectory-prediction-guided-by-textual-descriptions-has-been-accepted-to-eccv-2024",
          title: '📄✨ Our paper “VisionTrap: Vision-Augmented Trajectory Prediction Guided by Textual Descriptions” has been...',
          description: "",
          section: "News",},{id: "news-our-paper-who-should-have-been-focused-transferring-attention-based-knowledge-from-future-observations-for-trajectory-prediction-has-been-accepted-to-icpr-2024",
          title: '📄✨ Our paper “Who Should Have Been Focused: Transferring Attention-based Knowledge from Future...',
          description: "",
          section: "News",},{id: "news-started-a-research-internship-at-naver-labs-focusing-on-real-time-3d-occupancy-prediction-for-autonomous-driving",
          title: '💼 Started a research internship at NAVER LABS, focusing on real-time 3D occupancy...',
          description: "",
          section: "News",},{id: "news-our-paper-mitigating-trade-off-stream-and-query-guided-aggregation-for-efficient-and-effective-3d-occupancy-prediction-has-been-released-on-arxiv-the-work-was-done-during-my-internship-at-naver-labs",
          title: '💼📄 Our paper “Mitigating Trade-off: Stream and Query-guided Aggregation for Efficient and Effective...',
          description: "",
          section: "News",},{id: "news-our-paper-image-guided-semantic-pseudo-lidar-point-generation-for-3d-object-detection-has-been-accepted-to-wacv-2026",
          title: '📄✨ Our paper “Image-Guided Semantic Pseudo-LiDAR Point Generation for 3D Object Detection” has...',
          description: "",
          section: "News",},{id: "news-our-paper-super-ad-semantic-uncertainty-aware-planning-for-end-to-end-robust-autonomous-driving-has-been-released-on-arxiv",
          title: '📄 Our paper “SUPER-AD: Semantic Uncertainty-aware Planning for End-to-End Robust Autonomous Driving” has...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%6D%6F%6F%6E%39%36@%6B%6F%72%65%61.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HhvS9d4AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/hahamoon96", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/moonseokha", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
