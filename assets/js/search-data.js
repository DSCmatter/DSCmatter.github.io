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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-some-photos-from-games-played-in-2025",
        
          title: "Some photos from Games played in 2025",
        
        description: "Memory",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/SS/";
          
        },
      },{id: "post-important-links",
        
          title: "Important Links",
        
        description: "Some links that may help someday",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Important-Links/";
          
        },
      },{id: "post-resume-101-dscmatter",
        
          title: 'RESUME 101 | DSCmatter <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This is where it all began.Our ancestors needed some way — a document, really — to verify a candidate’s abilities and determine whether they were eligible for a job.So they came up with what we now know as a CV or Resume.Now, having a good or bad resume doesn’t necessarily define a candidate’s worth — but it does help assess whether they might be capable of doing the job.In essence, a resume is just a filtering tool — used to weed out most candidates in what’s known as the initial screening stage.",
        section: "Posts",
        handler: () => {
          
            window.open("https://dscmatter.github.io/aboutblog/posts/resume-101/", "_blank");
          
        },
      },{id: "post-clair-obscur-expedition-33-the-best-turn-based-rpg-ever-dscmatter",
        
          title: 'Clair Obscur: Expedition 33, The Best Turn Based RPG ever | DSCmatter <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The GOAT of 2025A really, really great game from such a small team — truly a contender for GOTY!My playtime was around 36 hours, and it was one hell of a journey.Although I don’t usually write much about games, this was one unforgettable experience!And since I’ve started this blog, I figured I might as well write something.Turn-based RPGs hold a special place in my heart.As someone who has played Persona 3 Reload, Refantazio, and the Pokémon games, this one felt like a fresh take—almost like a AAA-quality title from a smaller team.",
        section: "Posts",
        handler: () => {
          
            window.open("https://dscmatter.github.io/aboutblog/posts/expedition-33/", "_blank");
          
        },
      },{id: "books-thousand-eons-of-world",
          title: 'Thousand Eons of World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Thousand_eons_of_world/";
            },},{id: "news-first-edition-of-my-portfolio-blog-page",
          title: 'First edition of my portfolio/blog page 💀',
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
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/660897315925655557", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%61%73%61%6E%74.%6D%6F%67%69%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/DSCmatter", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/vasant-mogia", "_blank");
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
