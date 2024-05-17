window.addEventListener("load",()=>{
    const theme=localStorage.getItem("theme");
    const isDark = window.matchMedia("(prefers-color-scheme: dark)");


    function calculateSettingAsThemeString({ theme, isDark }) {
        if (theme !== null) {
          return theme;
        }
      
        if (isDark.matches) {
          return "dark";
        }
      
        return "light";
      }
      
      let currentThemeSetting = calculateSettingAsThemeString({ theme, isDark });


      const button = document.querySelector("[data-theme-toggle]");

      button.addEventListener("click", () => {
        const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
      
  
        const newCta = newTheme === "dark" ? "TURN ON THE LIGTHS" : "KILL THE LIGHTS";
        button.innerText = newCta;  
      
        
        
        document.querySelector("html").setAttribute("data-theme", newTheme);

        localStorage.setItem("theme", newTheme);

        currentThemeSetting = newTheme;
      });

    })