// HERO BUTTON TO FEATURES
const homeBtn = document.querySelector(".home-button");

const hero = document.querySelector(".hero-content");
const features = hero ? hero.querySelectorAll(".feature-item") : [];
const expBtn = hero ? hero.querySelector(".explore-btn") : null;
const climateBtn = hero ? hero.querySelector(".climate-btn") : null;
const climateWrap = hero ? hero.querySelector(".climate-change") : null;
const featureArrow = hero ? hero.querySelector(".feature-arrow") : null;
const activitiesArrow = hero ? hero.querySelector(".activities-arrow") : null;
const systemItem = hero ? hero.querySelectorAll(".system-list-item") : [];
const activitiesItem = hero ? hero.querySelectorAll(".activities-item") : [];
const systemTabs = hero ? hero.querySelectorAll(".system-tab") : [];
const activitiesTabs = hero ? hero.querySelectorAll(".activities-tab") : [];
const featureTabs = hero ? hero.querySelectorAll(".feature-tab") : [];

if (expBtn) {
  expBtn.addEventListener("click", () => {
    hero.classList.add("animation-1");
  });
}

if (climateBtn && climateWrap) {
  climateBtn.addEventListener("click", () => {
    climateWrap.classList.add("active");
  });
}

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    if (hero) {
      hero.classList.remove("animation-1");
    }
    resetWebAnimation();
  });
}

if (featureArrow) {
  featureArrow.addEventListener("click", () => {
    resetWebAnimation();
  });
}
function resetWebAnimation() {
  if (hero) {
    hero.classList.remove("animation-2");
    hero.classList.remove("animation-3");
    hero.classList.remove("animation-earth");
    hero.classList.remove("animation-system");
    hero.classList.remove("animation-connection");
    hero.classList.remove("animation-climate");
    hero.classList.remove("animation-climate-feature");
    hero.classList.remove("animation-activities");
    hero.classList.remove("animation-act-expand");
    hero.classList.remove("animation-nasa");
    hero.classList.remove("animation-nasa-tab");
  }
  
  if (climateWrap) {
    climateWrap.classList.remove("active");
  }
  
  for (let i = 0; i < systemItem.length; i++) {
    systemItem[i].classList.remove("active");
  }
  for (let i = 0; i < activitiesItem.length; i++) {
    activitiesItem[i].classList.remove("active");
  }
  for (let i = 0; i < featureTabs.length; i++) {
    featureTabs[i].classList.remove("active");
  }
}

if (activitiesArrow) {
  activitiesArrow.addEventListener("click", () => {
    if (hero) {
      hero.classList.remove("animation-act-expand");
    }
  });
}

// FEATURE EXPAND
if (features && features.length > 0) {
  features.forEach((feature, index) => {
    feature.style.transitionDuration = 0.4 + index / 10 + "s";
    feature.addEventListener("click", () => {
      for (let i = 0; i < features.length; i++) {
        features[i].classList.remove("active");
      }
      for (let i = 0; i < featureTabs.length; i++) {
        featureTabs[i].classList.remove("active");
      }
      if (featureTabs[index]) {
        featureTabs[index].classList.add("active");
      }
      feature.classList.add("active");
      
      if (hero) {
        if (index == 0) {
          hero.classList.add("animation-2");
          hero.classList.add("animation-earth");
        } else if (index == 1) {
          hero.classList.add("animation-2");
          hero.classList.add("animation-connection");
          
          // FORCE HIDE ALL SYSTEM TABS WHEN IN CONNECTION VIEW
          for (let i = 0; i < systemTabs.length; i++) {
            systemTabs[i].classList.remove("active");
            systemTabs[i].style.display = "none";
            systemTabs[i].style.visibility = "hidden";
            systemTabs[i].style.opacity = "0";
            systemTabs[i].style.pointerEvents = "none";
          }
        } else if (index == 2) {
          hero.classList.add("animation-2");
          hero.classList.add("animation-climate");
        } else if (index == 3) {
          hero.classList.add("animation-2");
          hero.classList.add("animation-activities");
        } else if (index == 4) {
          hero.classList.add("animation-nasa");
        }
      }
    });
  });
}

// SYSTEM EXPAND - DISABLED FOR CONNECTION VIEW
if (systemItem && systemItem.length > 0) {
  systemItem.forEach((item, index) => {    item.addEventListener("click", () => {    
      // ONLY allow system expansion if NOT in connection view
      if (!hero || !hero.classList.contains("animation-connection")) {
        for (let i = 0; i < systemItem.length; i++) {
          systemItem[i].classList.remove("active");
        }
        for (let i = 0; i < systemTabs.length; i++) {
          systemTabs[i].classList.remove("active");
        }
        if (systemTabs.length > index) {
          systemTabs[index].classList.add("active");
        }
        item.classList.add("active");
        if (hero) {
          hero.classList.add("animation-system");
        }
      }
    });
  });
}

// ACTIVITIES EXPAND
if (activitiesItem && activitiesItem.length > 0) {
  activitiesItem.forEach((item, index) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < activitiesItem.length; i++) {
        activitiesItem[i].classList.remove("active");
      }
      for (let i = 0; i < activitiesTabs.length; i++) {
        activitiesTabs[i].classList.remove("active");
      }
      if (activitiesTabs[index]) {
        activitiesTabs[index].classList.add("active");
      }
      item.classList.add("active");
      if (hero) {
        hero.classList.add("animation-act-expand");
      }
    });
  });
}

// CLIMATE EXPAND
const climateContent = hero ? hero.querySelectorAll(".climate-content") : [];
climateContent.forEach((wrap) => {
  let features = wrap.querySelectorAll(".climate-features .card-box");
  let close = wrap.querySelector(".climate-feature-close");
  features.forEach((feature) => {
    feature.addEventListener("click", () => {
      if (hero) {
        hero.classList.add("animation-climate-feature");
      }
    });
  });
  if (close) {
    close.addEventListener("click", () => {
      if (hero) {
        hero.classList.remove("animation-climate-feature");
      }
    });
  }
});

const climateWarming = hero ? hero.querySelectorAll(".temperature-globe-wrap") : [];
climateWarming.forEach((wrap) => {
  let imgs = wrap.querySelectorAll(".temperature-globe-img .image");
  let input = wrap.querySelector("input");
  
  // Only proceed if input exists
  if (!input) return;
  
  let value = input.value - input.min;

  update();

  input.addEventListener("input", () => {
    value = input.value - input.min;
    update();
  });

  function update() {
    if (input.previousElementSibling) {
      input.previousElementSibling.textContent = input.value;
    }
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove("active");
    }
    imgs[value].classList.add("active");
  }
});

// custom tab
tabFunc(
  document.querySelectorAll(".bioscope-btn"),
  document.querySelectorAll(".bioscope-tab")
);

tabFunc(
  document.querySelectorAll(".nasa-tab-link"),
  document.querySelectorAll(".nasa-tab")
);
tabFunc(
  document.querySelectorAll(".climate-features button"),
  document.querySelectorAll(".climate-tab")
);
systemTabs.forEach((wrap) => {
  tabFunc(
    wrap.querySelectorAll(".system-inner-tab-links li"),
    wrap.querySelectorAll(".system-inner-tab")
  );
});
document.querySelectorAll(".climate-tab").forEach((wrap) => {
  tabFunc(
    wrap.querySelectorAll(".climate-element-nav li"),
    wrap.querySelectorAll(".climate-element-tab")
  );
  tabFunc(
    wrap.querySelectorAll(".climate-component-nav li"),
    wrap.querySelectorAll(".climate-component-tab")
  );
});

function tabFunc(tabLinks, tabs) {
  tabLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
        tabs[i].classList.remove("active");
      }
      link.classList.add("active");
      tabs[index].classList.add("active");
    });
  });
}

// NASA INNER TABS
const nasa = document.querySelectorAll(".nasa-resources");
nasa.forEach((wrap) => {
  let tabLink = wrap.querySelectorAll(".nasa-tab-link");
  let tabs = wrap.querySelectorAll(".nasa-tab");

  tabs.forEach((tab) => {
    let tabInnerLink = tab.querySelectorAll(".nasa-inner-tab-link");
    let tabInnertabs = tab.querySelectorAll(".nasa-inner-tab");
    let video = tab.querySelector(".nasa-tab-video");

    tabInnerLink.forEach((link, index) => {
      link.addEventListener("click", () => {
        let x = 0;

        if (link.classList.contains("active")) {
          for (let i = 0; i < tabInnerLink.length; i++) {
            tabInnerLink[i].classList.remove("fade");
          }
          link.classList.remove("active");
          tabInnertabs[index].classList.remove("active");
        } else {
          for (let i = 0; i < tabInnerLink.length; i++) {
            tabInnerLink[i].classList.add("fade");
            tabInnerLink[i].classList.remove("active");
            tabInnertabs[i].classList.remove("active");
          }
          link.classList.add("active");
          link.classList.remove("fade");
          tabInnertabs[index].classList.add("active");
        }

        for (let i = 0; i < tabInnerLink.length; i++) {
          if (!tabInnerLink[i].classList.contains("active")) {
            x++;
          }
        }
        if (x == tabInnerLink.length) {
          video.classList.add("active");
        } else {
          video.classList.remove("active");
        }
      });
    });
  });

  let close = wrap.querySelector(".nasa-tab-close");
  tabLink.forEach((link) => {
    link.addEventListener("click", () => {
      hero.classList.add("animation-nasa-tab");
    });
  });

  close.addEventListener("click", () => {
    hero.classList.remove("animation-nasa-tab");
  });
});

// CONNECTION
const connectionWrap = hero ? hero.querySelectorAll(".connection-wrap") : [];
connectionWrap.forEach((wrap) => {
  let introBtn = wrap.querySelector(".connection-intro button");
  let markers = wrap.querySelectorAll(".connection-marker");
  let titleClicked = false;
  let timeline = [];
  let popups = wrap.querySelectorAll(".connection-popup");
  popups.forEach((popup) => {
    let close = popup.querySelector(".connection-popup-close");
    if (close) {
      close.addEventListener("click", () => {
        popup.classList.remove("active");
      });
    }
  });

  let standard = {
    min: 0,
    value: 100,
    max: 100,
  };

  let system = {
    atm: {
      temperature: {
        min: 18,
        value: 0,
        max: 52,
      },
    },
    hyd: {
      water: {
        min: 20,
        value: 0,
        max: 150,
      },
    },
    cry: {
      glacier: {
        min: 40,
        value: 0,
        max: 80,
      },
    },
    geo: {
      coastal: {
        min: 0,
        value: 0,
        max: 100,
      },
    },
    bio: {
      trees: {
        min: 0,
        value: 0,
        max: 100,
      },
    },  };  
    // ACTION
  if (introBtn) {
    introBtn.addEventListener("click", () => {
      wrap.classList.add("intro");      // Initialize the connection system after clicking intro
      setTimeout(() => {
        updateSystemObejct();
        // updateFullSystem(); // Disabled to prevent errors
        console.log("Connection system initialized");
      }, 1000);
    });
  }  // SHOW HIDE THE CONTROLLER
  let showhideColtrol = wrap.querySelectorAll(".show-markers");
  showhideColtrol.forEach((btn) => {
    let text = btn.querySelector(".text");
    let icon = btn.querySelector("i");
    btn.addEventListener("click", () => {
      if (btn.classList.contains("btn-active")) {
        markers.forEach((marker) => {
          marker.classList.remove("active");
        });
        btn.classList.remove("btn-active");
        text.textContent = "Show";
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
        console.log("Hiding connection markers");
      } else {
        markers.forEach((marker) => {
          marker.classList.add("active");
        });
        btn.classList.add("btn-active");
        text.textContent = "Hide";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        console.log("Showing connection markers");
      }
    });  });
  // update the system
  updateSystemObejct();
  // updateFullSystem(); // Disabled to prevent errors - using manual updates instead

  markers.forEach((marker) => {
    // Removed initComps() call since we disabled slider functionality

    // Removed slider functionality since we removed the statistics panel
    // let connectionComps = marker.querySelectorAll(".connection-comp");
    // connectionComps.forEach((comp) => {
    //   let input = comp.querySelector("input");
    //   let compKey = comp.getAttribute("data-wrap");
    //   input.addEventListener("input", () => {
    //     // Slider functionality removed
    //   });
    // });

    // marker indecator action
    let ball = marker.querySelector(".connection-ball");
    let title = marker.querySelector(".connection-title");    ball.addEventListener("click", (event) => {
      // PREVENT DEFAULT BEHAVIOR AND STOP PROPAGATION
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      
      // Show simple popup with educational content
      let markerKey = marker.getAttribute("data-wrap");
      let popup = wrap.querySelector(`.connection-popup-${markerKey}`);
      if (popup) {
        // Hide all other popups first
        wrap.querySelectorAll('.connection-popup').forEach(p => p.classList.remove('active'));
        // Show this popup
        popup.classList.add("active");
        
        // Add visual feedback to marker
        markers.forEach(m => m.classList.remove('active'));
        marker.classList.add('active');
        
        console.log(`Clicked ${markerKey} system - popup should be visible`);
      }
      
      if (!titleClicked) {
        title.classList.add("pulse-btn");
      }
      
      // PREVENT ANY OTHER FUNCTIONALITY
      return false;
    });    title.addEventListener("click", (event) => {
      // PREVENT DEFAULT BEHAVIOR AND STOP PROPAGATION
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      
      // Show simple popup with educational content
      let markerKey = marker.getAttribute("data-wrap");
      let popup = wrap.querySelector(`.connection-popup-${markerKey}`);
      if (popup) {
        // Hide all other popups first
        wrap.querySelectorAll('.connection-popup').forEach(p => p.classList.remove('active'));
        // Show this popup
        popup.classList.add("active");
        
        // Add visual feedback to marker
        markers.forEach(m => m.classList.remove('active'));
        marker.classList.add('active');
        
        console.log(`Clicked ${markerKey} title - popup should be visible`);
      }
      
      title.classList.remove("pulse-btn");
      titleClicked = true;
      
      // PREVENT ANY OTHER FUNCTIONALITY
      return false;
    });
  });

  // FUNCTIONS  
  function updateFullSystem() {    updateTrees();
    updateSun();
    updateGlacier();
    updateLava();
    updateWater();
    
    // updatePopup(); // Disabled - using static educational content instead
  }

  function updatePopup() {
    // Simplified popup function - no longer auto-updates text since we have static educational content
    // This function is kept for compatibility but does nothing
    console.log("Popup update called - using static educational content");
    return; // Exit early to prevent any errors
  }

  function updateSystemObejct() {
    let systemKeysArray = Object.keys(system);

    for (let i = 0; i < systemKeysArray.length; i++) {
      let marker = system[systemKeysArray[i]];
      let markerArray = Object.keys(marker);

      for (let j = 0; j < markerArray.length; j++) {
        let compName = markerArray[j];
        let comp = marker[compName];

        let d = 1;
        if (
          compName == "temperature" ||
          compName == "water" ||
          compName == "coastal"
        ) {
          d = -1;
        }

        if (compName == "temperature" || compName == "water") {
          d = -1;
        }

        comp.value = getValue(comp, standard, d);
      }
    }
  }

  function getValue(y, x, d) {
    let value;
    if (d == -1) {
      value = ((y.max - y.min) / (x.max - x.min)) * x.value * d + y.max;
    } else {
      value = ((y.max - y.min) / (x.max - x.min)) * x.value * d + y.min;
    }
    return Math.round(value);
  }

  function getValueReverse(y, x, d) {
    let value;
    if (d == -1) {
      value = ((y.max - y.min) * (x.value - x.max)) / (d * (x.max - x.min));
    } else {
      value = ((y.max - y.min) * (x.value - x.min)) / (d * (x.max - x.min));
    }
    return Math.round(value);
  }
  function initComps() {
    // Disabled - no longer using slider controls since we removed the statistics panel
    return;
    /*
    markers.forEach((marker) => {
      let connectionComps = marker.querySelectorAll(".connection-comp");
      let markerKey = marker.getAttribute("data-wrap");
      if (markerKey) {
        connectionComps.forEach((comp) => {
          let currents = comp.querySelectorAll(".control-current");
          let input = comp.querySelector("input");
          let minHolder = comp.querySelector(".min");
          let maxHolder = comp.querySelector(".max");
          let compKey = comp.getAttribute("data-wrap");
          if (compKey) {
            let { min, value, max } = system[markerKey][compKey];

            // Only set properties if elements exist (since we removed the sliders)
            if (input) {
              input.min = min;
              input.max = max;
              input.value = value;
            }
            if (minHolder) minHolder.textContent = min;
            if (maxHolder) maxHolder.textContent = max;

            currents.forEach((current) => {
              current.textContent = value;
            });
          }
        });
      }
    });
    */
  }

  function updateComps(compName) {
    markers.forEach((marker) => {
      let connectionComps = marker.querySelectorAll(".connection-comp");
      let markerKey = marker.getAttribute("data-wrap");
      if (markerKey) {        connectionComps.forEach((comp) => {
          let currents = comp.querySelectorAll(".control-current");
          let input = comp.querySelector("input");
          let compKey = comp.getAttribute("data-wrap");
          if (compKey) {
            let { value } = system[markerKey][compKey];
            if (compName != compKey) {
              if (input) input.value = value;
            }
            currents.forEach((current) => {
              current.textContent = value;
            });
          }
        });
      }
    });
  }

  function updateTrees() {
    let {
      bio: { trees },
    } = system;
    let treeImgs = wrap.querySelectorAll(".connection-trees img");
    let currentTreesCount = Math.round(
      (treeImgs.length * (trees.value - trees.min)) / (trees.max - trees.min)
    );
    for (let i = 0; i < treeImgs.length; i++) {
      treeImgs[i].classList.remove("active");
    }
    for (let i = 0; i < currentTreesCount; i++) {
      treeImgs[i].classList.add("active");
    }
  }

  function updateSun() {
    let {
      atm: { temperature },
    } = system;
    let sun = wrap.querySelector(".sun");
    let content = wrap.querySelector(".connection-content");
    sun.style.opacity = temperature.value / temperature.max;
    content.style.backgroundColor = `rgba(255, 174, 0, ${
      (temperature.value / temperature.max) * 0.3
    })`;
  }

  function updateGlacier() {
    let {
      cry: { glacier },
    } = system;
    let itemImg = wrap.querySelectorAll(".connection-glaciers img");
    let currentItemCount = Math.ceil(
      (itemImg.length * (glacier.value - glacier.min)) /
        (glacier.max - glacier.min)
    );

    for (let i = 0; i < itemImg.length; i++) {
      itemImg[i].classList.remove("active");
    }
    for (let i = 0; i < currentItemCount; i++) {
      itemImg[i].classList.add("active");
    }
  }
  function updateLava() {
    let {
      geo: { coastal },
    } = system;
    let itemImg = wrap.querySelectorAll(".connection-lava img");
    let currentItemCount = Math.ceil(
      (itemImg.length * (coastal.value - coastal.min)) /
        (coastal.max - coastal.min)
    );

    for (let i = 0; i < itemImg.length; i++) {
      itemImg[i].classList.remove("active");
    }
    for (let i = 0; i < currentItemCount; i++) {
      itemImg[i].classList.add("active");
    }
  }
  function updateWater() {
    let {
      hyd: { water },
    } = system;
    let itemImg = wrap.querySelectorAll(".connection-water img");
    let currentItemCount = Math.ceil(
      (itemImg.length * (water.value - water.min)) / (water.max - water.min)
    );

    for (let i = 0; i < itemImg.length; i++) {
      itemImg[i].classList.remove("active");
    }
    for (let i = 0; i < currentItemCount; i++) {
      itemImg[i].classList.add("active");
    }
  }
});

// ACTIVITIES
// bioscope
const bioscopeWrap = hero ? hero.querySelectorAll(".bioscope-wrap") : [];
bioscopeWrap.forEach((wrap) => {
  let btnClicked = false;

  let btns = wrap.querySelectorAll(".bioscope-btn");
  let tabs = wrap.querySelectorAll(".bioscope-tab");
  let close = wrap.querySelector(".bioscope-close");
  let videos = wrap.querySelectorAll("video");
  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      wrap.classList.add("active");
      videos[index].currentTime = 0;
      videos[index].play();
      if (!btnClicked) {
        btnClicked = true;
        for (let i = 0; i < btns.length; i++) {
          btns[i].classList.remove("pulse-btn");
        }
      }
    });
  });
  close.addEventListener("click", () => {
    wrap.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  });
});

//========== PRELOADER ==========>
// Preloader logic moved to preloader.js for better organization
//========== PRELOADER// ==========>

//========== STICKY HEADER, BACK TO TOP ==========>
const headerArea = document.querySelectorAll(".header-area");
headerArea.forEach((area) => {
  let height;
  window.addEventListener("resize", () => {
    addHeaderHeight();
  });
  window.addEventListener("load", () => {
    addHeaderHeight();
  });
  function addHeaderHeight() {
    height = area.clientHeight;
    document.documentElement.style.setProperty("--header-h", height + "px");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > height) {
      area.classList.add("sticky");
    } else {
      area.classList.remove("sticky");
    }
  });
});
//========== STICKY HEADER, BACK TO TOP// ==========>

(function ($) {
  "use strict";

  //========== CLIMATE SLIDER ==========>

  // debounce from underscore.js
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // use x and y mousewheel event data to navigate flickity
  function slick_handle_wheel_event(e, slick_instance, slick_is_animating) {
    // do not trigger a slide change if another is being animated
    if (!slick_is_animating) {
      // pick the larger of the two delta magnitudes (x or y) to determine nav direction
      var direction =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      // console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

      if (direction > 0) {
        // next slide
        slick_instance.slick("slickNext");
      } else {
        // prev slide
        slick_instance.slick("slickPrev");
      }
    }
  }

  // debounce the wheel event handling since trackpads can have a lot of inertia
  var slick_handle_wheel_event_debounced = debounce(
    slick_handle_wheel_event,
    100,
    true
  );

  // init slider
  const climateSlider = $(".climate-slider");
  climateSlider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    appendDots: ".climate-slider-control",
    appendArrows: ".climate-slider-control",
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-angle-up"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-angle-down"></i></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  var climateSlider_is_animating = false;

  climateSlider.on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      climateSlider_is_animating = false;
    }
  );

  climateSlider.on("beforeChange", function () {
    climateSlider_is_animating = true;
  });

  climateSlider.on("wheel", function (e) {
    e.preventDefault();
    slick_handle_wheel_event_debounced(
      e.originalEvent,
      climateSlider,
      climateSlider_is_animating
    );
  });

  //========== CLIMATE SLIDER// ==========>

  //========== img SLIDER ==========>
  $(".img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
  });
  //========== img SLIDER// ==========>

  //========== NASA SLIDER// ==========>
})(jQuery);

// STAR WARS BACKGROUND TOGGLE
let isStarWarsMode = false;

function toggleStarWarsBackground() {
  console.log('Toggle function called');
  
  const starWarsBackground = document.getElementById('star-wars-background');
  const starryNightBackground = document.getElementById('starry-night-background');
  const toggleBtn = document.querySelector('.background-toggle-btn');
  
  // Check if elements exist
  if (!starWarsBackground) {
    console.error('Star Wars background element not found!');
    return;
  }
  if (!starryNightBackground) {
    console.error('Starry night background element not found!');
    return;
  }
  if (!toggleBtn) {
    console.error('Toggle button not found!');
    return;
  }
  
  const toggleIcon = toggleBtn.querySelector('i');
  
  isStarWarsMode = !isStarWarsMode;
  
  if (isStarWarsMode) {
    // Activate Star Wars mode
    starWarsBackground.classList.add('active');
    starryNightBackground.style.opacity = '0';
    toggleBtn.classList.add('active');
    toggleBtn.innerHTML = '<i class="fas fa-rocket me-2"></i> Active';
    toggleBtn.title = 'Deactivate Star Wars Background Theme';
    
    console.log('Star Wars mode activated!');
    
    // Add some dramatic effect
    document.body.style.transition = 'all 0.8s ease';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 800);
    
  } else {
    // Deactivate Star Wars mode
    starWarsBackground.classList.remove('active');
    starryNightBackground.style.opacity = '1';
    toggleBtn.classList.remove('active');
    toggleBtn.innerHTML = '<i class="fas fa-rocket me-2"></i> Star Wars Theme';
    toggleBtn.title = 'Activate Star Wars Background Theme';
    
    console.log('Normal mode activated!');
  }
}

// Helper functions for easy reference
window.getStarWarsToggle = function() {
  return document.getElementById('starwars-toggle');
};

window.activateStarWarsMode = function() {
  if (!isStarWarsMode) {
    toggleStarWarsBackground();
  }
};

window.deactivateStarWarsMode = function() {
  if (isStarWarsMode) {
    toggleStarWarsBackground();
  }
};

window.isStarWarsModeActive = function() {
  return isStarWarsMode;
};

// Add some Star Wars sound effects on toggle (optional)
function playStarWarsSound() {
  // This could be expanded to play actual sound effects
  console.log('*Lightsaber sound*');
}

// DEBUG: Test interconnections functionality
console.log("MAIN.JS LOADED - VERSION WITH ERROR FIXES - Timestamp: 1750469030");

window.testInterconnections = function() {
  console.log("Testing interconnections...");
  
  // Find connection wrap
  const connectionWrap = document.querySelector(".connection-wrap");
  if (!connectionWrap) {
    console.error("Connection wrap not found!");
    return;
  }
  
  // Add intro class if not present
  if (!connectionWrap.classList.contains("intro")) {
    connectionWrap.classList.add("intro");
    console.log("Added intro class to connection wrap");
  }
  
  // Test each marker
  const markers = connectionWrap.querySelectorAll(".connection-marker");
  console.log(`Found ${markers.length} connection markers`);
  
  markers.forEach((marker, index) => {
    const markerKey = marker.getAttribute("data-wrap");
    const popup = connectionWrap.querySelector(`.connection-popup-${markerKey}`);
    console.log(`Marker ${index}: ${markerKey}, popup found: ${!!popup}`);
    
    // Add visual indicator
    marker.style.border = "2px solid red";
    setTimeout(() => {
      marker.style.border = "";
    }, 2000);
  });
};

// FALLBACK INTERCONNECTIONS SYSTEM
// This provides a backup modal system for when the main interconnections don't work
window.addEventListener('load', function() {
  console.log("Setting up fallback interconnections system...");
  
  // Fallback data for each Earth system
  const fallbackData = {
    atm: {
      name: "Atmosphere",
      description: "The thin layer of gases surrounding Earth",
      currentValue: "Temperature: 22°C",
      impact: "Higher temperatures cause ice melting and weather changes",
      details: [
        "• Contains 78% Nitrogen, 21% Oxygen",
        "• Protects Earth from harmful radiation",  
        "• Controls weather patterns and climate",
        "• Being affected by greenhouse gas emissions"
      ]
    },
    hyd: {
      name: "Hydrosphere", 
      description: "All water on Earth including oceans, rivers, and groundwater",
      currentValue: "Water Level: 45%",
      impact: "Water level changes affect sea levels and weather patterns",
      details: [
        "• Covers 70% of Earth's surface",
        "• Essential for all life on Earth",
        "• Drives the water cycle through evaporation", 
        "• Rising sea levels threaten coastal areas"
      ]
    },
    cry: {
      name: "Cryosphere",
      description: "All frozen water on Earth including ice caps and glaciers",
      currentValue: "Glacier Coverage: 60%", 
      impact: "Melting glaciers contribute to sea level rise",
      details: [
        "• Stores 75% of world's fresh water",
        "• Reflects sunlight helping cool the planet",
        "• Melting at accelerated rates due to warming",
        "• Critical for global sea level stability"
      ]
    },
    geo: {
      name: "Geosphere",
      description: "The solid Earth including rocks, soil, and landforms",
      currentValue: "Volcanic Activity: 30%",
      impact: "Geological processes affect climate and ecosystems", 
      details: [
        "• Contains Earth's core, mantle, and crust",
        "• Provides essential minerals and resources",
        "• Tectonic activity shapes landscapes",
        "• Volcanic eruptions can affect global climate"
      ]
    },
    bio: {
      name: "Biosphere",
      description: "All living things on Earth and their ecosystems",
      currentValue: "Forest Coverage: 75%",
      impact: "Forests absorb CO2 and provide oxygen for life",
      details: [
        "• Includes all plants, animals, and microorganisms",
        "• Regulates atmospheric composition", 
        "• Maintains the balance of ecosystems",
        "• Being threatened by climate change and deforestation"
      ]
    }
  };

  // Create and show modal function
  function showSystemInfo(systemKey) {
    const data = fallbackData[systemKey];
    if (!data) return;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('system-info-modal');
    if (existingModal) existingModal.remove();

    // Create modal with beautiful styling
    const modal = document.createElement('div');
    modal.id = 'system-info-modal';
    modal.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; backdrop-filter: blur(10px);" onclick="this.parentElement.remove()">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); padding: 30px; border-radius: 20px; color: white; max-width: 500px; width: 90%; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.2);" onclick="event.stopPropagation()">
          <div style="text-align: right; margin-bottom: 20px;">
            <button onclick="this.closest('#system-info-modal').remove()" style="background: none; border: none; color: white; font-size: 24px; cursor: pointer; padding: 5px;">&times;</button>
          </div>
          <h2 style="margin: 0 0 15px 0; color: #4fc3f7;">${data.name}</h2>
          <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.5;">${data.description}</p>
          
          <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
            <h4 style="margin: 0 0 10px 0; color: #81c784;">Current Status</h4>
            <p style="margin: 0; font-weight: bold;">${data.currentValue}</p>
          </div>

          <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
            <h4 style="margin: 0 0 10px 0; color: #ffb74d;">Climate Impact</h4>
            <p style="margin: 0;">${data.impact}</p>
          </div>

          <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin: 15px 0;">
            <h4 style="margin: 0 0 10px 0; color: #f48fb1;">Key Facts</h4>
            ${data.details.map(detail => `<p style="margin: 5px 0;">${detail}</p>`).join('')}
          </div>

          <div style="text-align: center; margin-top: 20px;">
            <button onclick="this.closest('#system-info-modal').remove()" style="background: #4fc3f7; color: white; border: none; padding: 12px 30px; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold;">Close</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  }

  // Add fallback click handlers after DOM is ready
  setTimeout(() => {
    console.log("Adding fallback click handlers...");
    
    // Find all interconnection markers
    const markers = document.querySelectorAll('.connection-marker');
    console.log(`Found ${markers.length} interconnection markers`);

    markers.forEach(marker => {
      const systemKey = marker.getAttribute('data-wrap');
      if (!systemKey) return;
      
      // Make entire marker clickable as fallback
      marker.style.cursor = 'pointer';
      marker.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(`Fallback: Showing info for ${systemKey}`);
        showSystemInfo(systemKey);
      });
      
      // Also make components clickable as fallback
      const components = marker.querySelectorAll('.connection-comp, .connection-statistics-link');
      components.forEach(comp => {
        comp.style.cursor = 'pointer';
        comp.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          showSystemInfo(systemKey);
        });
      });
    });
    
    console.log("Fallback interconnections system ready!");
  }, 2000); // Delay to ensure main system has time to load
});
