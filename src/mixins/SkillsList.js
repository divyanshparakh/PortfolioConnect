export default {
  data() {
    return {
      skillsList: [],
    };
  },
  created() {
    this.skillsList = this.skills();
  },
  methods: {
    skills() {
      return [
        {
          label: "react-js",
          name: "React JS",
          class: "react-js",
          svg:
            '<svg viewBox="0 0 24 24" class="react-js"><path d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z"/></svg>',
        },
        {
          label: "vue-js",
          name: "Vue JS",
          class: "vue-js",
          svg:
            '<svg viewBox="0 0 24 24" class="vue-js"><path d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z"/></svg>',
        },
        {
          label: "js",
          name: "Javascript",
          class: "js",
          svg:
            '<svg viewBox="0 0 24 24" class="js"><path d="M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z" /></svg>',
        },
        {
          label: "sad",
          name: "Sad",
          class: "sad",
          svg:
            '<svg viewBox="0 0 24 24" class="sad" <path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" /></svg>',
        },
        {
          label: "angular",
          name: "Angular",
          class: "angular",
          svg:
            '<svg viewBox="0.5 0 23 23" class="angular">    <path      d="M12,2.5L20.84,5.65L19.5,17.35L12,21.5L4.5,17.35L3.16,5.65L12,2.5M12,4.6L6.47,17H8.53L9.64,14.22H14.34L15.45,17H17.5L12,4.6M13.62,12.5H10.39L12,8.63L13.62,12.5Z"    />  </svg>',
        },
        {
          label: "c",
          name: "C",
          class: "c",
          svg:
            '    <svg viewBox="-20 -20 190 190" class="c">      <path        d="M269.05,262.17A71.12,71.12,0,1,1,265.13,171l-23.48,15.73a43.36,43.36,0,1,0,3.07,61.33Z"        transform="translate(-140 -147)"      />    </svg>',
        },
        {
          label: "cpp",
          name: "C++",
          class: "cpp",
          svg:
            '    <svg viewBox="-20 -20 190 190" class="cpp">      <path        d="M269.05,262.17A71.12,71.12,0,1,1,265.13,171l-23.48,15.73a43.36,43.36,0,1,0,3.07,61.33Z"        transform="translate(-140 -147)"      />      <polygon        points="100.47 64.81 100.47 79.44 87.2 79.44 87.2 91.35 70.86 91.35 70.86 79.44 57.25 79.44 57.25 64.81 70.86 64.81 70.86 51.88 87.2 51.88 87.2 64.81 100.47 64.81"      />      <polygon        points="151.88 64.81 151.88 79.44 138.6 79.44 138.6 91.35 122.27 91.35 122.27 79.44 108.65 79.44 108.65 64.81 122.27 64.81 122.27 51.88 138.6 51.88 138.6 64.81 151.88 64.81"      />    </svg>',
        },
        {
          label: "npm",
          name: "NPM",
          class: "npm",
          svg:
            '<svg  viewBox="-35 -25 325 325"  version="1.1"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  preserveAspectRatio="xMidYMid"  class="npm">  <g><path  d="M7.96444444,72.3626667 L129.706667,1.47911111 L251.448889,72.3626667 L251.448889,214.016 L129.706667,284.899556 L7.96444444,214.016 L7.96444444,72.3626667 Z"    ></path>        <path          class="white"          d="M133.12,143.132444 L246.328889,77.9377778 L250.88,209.351111 L133.12,280.462222 L133.12,143.132444 Z"          fill="rgb(48, 49, 49)"        ></path>        <path          d="M248.035556,73.9555556 L247.694222,213.219556 L129.592889,281.713778 L129.024,144.839111 L248.035556,73.9555556 L248.035556,73.9555556 Z M148.707556,156.216889 L149.048889,247.694222 L188.302222,224.824889 L188.188444,155.875556 L207.985778,144.156444 L207.985778,213.333333 L227.783111,201.728 L227.896889,109.112889 L148.707556,156.216889 L148.707556,156.216889 Z"        ></path>        <path          d="M137.443556,2.50311111 C131.982222,-0.568888889 123.221333,-0.568888889 117.76,2.50311111 L9.89866667,64.512 C4.43733333,67.584 0.113777778,75.3208889 0.113777778,81.4648889 L0.113777778,205.482667 C0.113777778,211.740444 4.55111111,219.363556 9.89866667,222.435556 L117.76,284.444444 C123.221333,287.516444 131.982222,287.516444 137.443556,284.444444 L245.304889,222.435556 C250.766222,219.363556 255.089778,211.626667 255.089778,205.482667 L255.089778,81.4648889 C255.089778,75.2071111 250.652444,67.584 245.304889,64.512 L137.443556,2.50311111 L137.443556,2.50311111 Z M233.130667,67.3564444 C238.592,70.4284444 238.592,75.5484444 233.130667,78.6204444 L138.695111,132.892444 C133.233778,135.964444 124.472889,135.964444 119.011556,132.892444 L23.2106667,77.824 C17.7493333,74.752 17.7493333,69.632 23.2106667,66.56 L117.646222,12.288 C123.107556,9.216 131.868444,9.216 137.329778,12.288 L233.130667,67.3564444 L233.130667,67.3564444 Z M8.53333333,90.4533333 C8.53333333,84.1955556 12.9706667,81.6924444 18.3182222,84.7644444 L114.915556,140.288 C120.376889,143.36 124.700444,151.096889 124.700444,157.240889 L124.700444,267.377778 C124.700444,273.635556 120.263111,276.138667 114.915556,273.066667 L18.3182222,217.543111 C12.8568889,214.471111 8.53333333,206.734222 8.53333333,200.590222 L8.53333333,90.4533333 L8.53333333,90.4533333 Z M143.132444,271.36 C137.671111,274.432 133.347556,271.928889 133.347556,265.671111 L133.347556,157.240889 C133.347556,150.983111 137.784889,143.36 143.132444,140.288 L236.885333,86.4711111 C242.346667,83.3991111 246.670222,85.9022222 246.670222,92.16 L246.670222,200.590222 C246.670222,206.848 242.232889,214.471111 236.885333,217.543111 L143.132444,271.36 L143.132444,271.36 Z"        ></path>      </g>    </svg>',
        },
        {
          label: "python",
          name: "Python",
          class: "python",
          svg:
            '    <svg viewBox="-2.5 0 51 50" class="python">      <path        class="blue"        d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"      />      <path        class="yellow"        d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"      />   </svg>',
        },
        {
          label: "html",
          name: "HTML",
          class: "html",
          svg:
            '<svg viewBox="-40 0 1100 1100" class="html">      <g transform="matrix(1 0 0 -1 0 800)">        <path          d="M554.6,716v-72.9h-49.4V790h54.1l29.4-54.1l34.1,54.1h49.4V643.1h-49.4V716l-34.1-54.1L554.6,716z M813.2,643.1H695.6V790H745v-98.7h68.2V643.1z M392.5,643.1v97.5h-44.7V790h137.5v-49.4h-43.5v-97.5H392.5z M236.2,691.3v-48.2h-49.4V790h49.4v-49.4h43.5V790H329V643.1h-49.4v48.2H236.2z M157.5,593.8h685.1l-58.8-705L500.6-190l-284.4,78.7L157.5,593.8z M710.9,368.2l9.4,83.4H279.7l24.7-259.7h303.2l-9.4-112.8l-97.5-23.5l-98.7,23.5l-4.7,74h-88.1l15.3-142.2l176.3-49.4l176.3,49.4L700.3,280H387.8l-9.4,88.1H710.9z"        />      </g>    </svg>',
        },
        {
          label: "java",
          name: "Java",
          class: "java",
          svg:
            '<svg viewBox="-30 20 340 340" class="java">      <g>        <path          d="M82.5539491,267.472524 C82.5539491,267.472524 69.35552,275.147869 91.9468218,277.745105 C119.315549,280.867375 133.303389,280.419607 163.463913,274.711273 C163.463913,274.711273 171.393396,279.683258 182.467491,283.989644 C114.855564,312.966982 29.4483782,282.311215 82.5539491,267.472524"          class="blue"        ></path>        <path          d="M74.2921309,229.658996 C74.2921309,229.658996 59.4888145,240.616727 82.0968727,242.955171 C111.333004,245.971316 134.421411,246.218007 174.373236,238.524975 C174.373236,238.524975 179.899113,244.127185 188.588218,247.190807 C106.841367,271.094691 15.79008,249.075898 74.2921309,229.658996"          class="blue"        ></path>        <path          d="M143.941818,165.514705 C160.601367,184.695156 139.564684,201.955142 139.564684,201.955142 C139.564684,201.955142 181.866124,180.117876 162.438982,152.772422 C144.294633,127.271098 130.380335,114.600495 205.706705,70.9138618 C205.706705,70.9138618 87.4691491,100.44416 143.941818,165.514705"          class="orange"        ></path>        <path          d="M233.364015,295.441687 C233.364015,295.441687 243.131113,303.489396 222.60736,309.715316 C183.580858,321.537862 60.1748945,325.107898 25.8932364,310.186356 C13.5698618,304.825251 36.67968,297.385425 43.9491491,295.824291 C51.5304727,294.180305 55.8629236,294.486575 55.8629236,294.486575 C42.15808,284.832116 -32.7195927,313.443607 17.8287709,321.637469 C155.681513,343.993251 269.121164,311.570618 233.364015,295.441687"          class="blue"        ></path>        <path          d="M88.9008873,190.479825 C88.9008873,190.479825 26.1287564,205.389265 66.6717091,210.803433 C83.7901964,213.095331 117.915462,212.576815 149.702284,209.913484 C175.680233,207.722124 201.765236,203.062924 201.765236,203.062924 C201.765236,203.062924 192.605091,206.985775 185.977949,211.510924 C122.233949,228.275665 -0.907636364,220.476509 34.5432436,203.328233 C64.5241018,188.83584 88.9008873,190.479825 88.9008873,190.479825"          class="blue"        ></path>        <path          d="M201.506444,253.422313 C266.305164,219.7504 236.344785,187.392 215.432844,191.751447 C210.307258,192.818269 208.021876,193.742662 208.021876,193.742662 C208.021876,193.742662 209.924655,190.761891 213.558924,189.471651 C254.929455,174.927127 286.746065,232.368873 200.204102,255.11936 C200.204102,255.120291 201.206691,254.223825 201.506444,253.422313"          class="blue"        ></path>        <path          d="M162.438982,0.371432727 C162.438982,0.371432727 198.325527,36.27008 128.402153,91.4720582 C72.3307055,135.753542 115.616116,161.001658 128.37888,189.848669 C95.6490473,160.318371 71.6297309,134.322735 87.7437673,110.128407 C111.395375,74.6132945 176.918342,57.3942691 162.438982,0.371432727"          class="orange"        ></path>        <path          d="M95.2683055,344.665367 C157.466996,348.646865 252.980131,342.45632 255.24224,313.025629 C255.24224,313.025629 250.893964,324.182575 203.838371,333.042967 C150.750487,343.033484 85.2740655,341.867055 46.4393309,335.464262 C46.4402618,335.463331 54.3892945,342.043927 95.2683055,344.665367"          class="blue"        ></path>      </g>    </svg>',
        },
        {
          label: "swift",
          name: "Swift",
          class: "swift",
          svg:
            '<svg viewBox="-50 0 1100 1100" class="swift">    <path      d="M614.1,66.1c123.2,73.7,237.4,192.3,284.3,342c14.9,47.6,32.1,117.7,21.3,182.4c-5,30.2-12.1,58.5-16.9,84.8c11.4,9.1,19,24.2,27.2,36.5c36.9,55.5,64.9,124.4,59.4,219.8c-14.2-4.6-23.5-27.4-34.8-36.5c-28.1-22.6-53.4-41.9-96.8-50c-54.2-10.2-100.6,19.7-132.4,38.2c-38.7,22.7-83.3,36.1-134.9,45.8c-63.6,12-152.3-1-203.7-15.2C259.1,878.3,153,817.7,80.4,727.2C56,696.8,29.2,668.9,10,633c0.3-0.3,0.6-0.6,0.8-0.8c104.5,63.4,245.5,138,421.7,101.8c41.6-8.5,102.4-17.8,123.9-44.9c-52-47.5-104.1-95.1-156.1-142.6c-15.2-15.2-30.6-30.6-45.8-45.8c-23.2-22.3-46.7-44.4-67-69.6C225,353.6,153.5,282.1,99.1,196.8c29.4,23.2,58.9,46.4,88.3,69.6C255.2,317.8,321,370.4,391,420c25.2,17.9,62.7,50.8,90.8,62c-33.4-37.9-66.8-75.8-100.1-113.7C327.9,299.4,278,226.7,228,154.3c46.6,41.3,93.4,82.6,140,123.9c33.9,28.6,67.9,57.2,101.8,85.7c43,31.4,86,62.8,129,94.2c32.3,22.9,64.5,45.8,96.8,68.7c19.2-22.2,16.8-86.3,22.9-124.8c2.6-16.7,1-39.4-1.7-55.2c-2-16.6-3.9-33.4-5.9-50c-13.9-63.1-32.4-122.3-61.1-171.4C637.9,105.7,626,86,614.1,66.1z"    />  </svg>',
        },
        {
          label: "php",
          name: "PHP",
          class: "php",
          svg:
            '<svg viewBox="-50 0 1100 1100" class="php">    <path      d="M688.5,452.3h-27.8l-21.8,81.5h20c21.5,0,37.9-4.1,48.7-12.1c10.9-8.1,18-18.6,21.6-32.1c3.4-12.6,2.2-21.7-3.5-27.7C719.7,455.6,706.9,452.3,688.5,452.3z"    />    <path      d="M349.3,452.3h-27.8l-21.8,81.5h20c21.5,0,37.9-4.1,48.7-12.1c10.9-8.1,18-18.6,21.6-32.1c3.4-12.6,2.2-21.7-3.5-27.7C380.5,455.6,367.6,452.3,349.3,452.3z"    />    <path      d="M500,241.6C229.4,241.6,10,357.3,10,500c0,142.7,219.4,258.4,490,258.4c270.6,0,490-115.7,490-258.4C990,357.3,770.6,241.6,500,241.6z M391.7,548c-19.9,14.3-44.4,21.5-73,21.5h-28.5L267.2,655h-40.5l63.9-238.5h67.1c31.3,0,52.3,6.7,64.3,20.5c12,13.8,15.1,32.3,9,55C424.9,514.8,411.7,533.7,391.7,548z M557.4,463.3c-1.9-3.5-15-7.6-29-7.6l-36.8,0L457.2,584h-39l66.6-248.5h39L501.3,419c10.6-0.1,29.4-0.3,42.7-0.3c19,0,41.9,6,49.9,19.4c7.4,12.4,8.2,29.9,2.2,52.2L571,584h-39l21.8-81.2C561,476,559.1,466.5,557.4,463.3z M770.2,492c-6.1,22.8-19.3,41.7-39.3,56c-19.9,14.3-44.4,21.5-73,21.5h-28.5L606.4,655h-40.5l63.9-238.5H697c31.3,0,52.3,6.7,64.3,20.5C773.3,450.8,776.3,469.3,770.2,492z"    />  </svg>',
        },
        {
          label: "docker",
          name: "Docker",
          class: "docker",
          svg:
            '    <svg viewBox="-20 0 1000 1000" class="docker">      <path        d="M519,383.2h100v102.3h50.6c23.5,0,47.4-4.1,69.6-11.6c10.8-3.7,23.1-8.8,33.9-15.3c-14.1-18.4-21.4-41.9-23.5-64.7c-2.9-31.2,3.5-71.9,24.5-96.4l10.6-12.3l12.5,10c31.6,25.3,58.2,60.8,62.9,101.3c38-11.2,82.7-8.6,116.2,10.8l13.7,8l-7.1,14.1c-28.4,55.3-87.6,72.5-145.6,69.4c-86.8,216-275.4,318.1-504.3,318.1c-118.2,0-226.6-44.1-288.5-149l-1-1.6l-9-18.4C13.6,601.7,6.7,551,11.4,500.6l1.4-15.1h85.5V383.2h100v-100h200.3v-100h120.1v200.1H519z"      />    </svg>',
        },
        {
          label: "dart",
          name: "Dart",
          class: "dart",
          svg:
            '<svg viewBox="-20 -15 300 300" class="dart">      <path        d="M70.534,69.696 L53.988,53.15 L54.058,172.75 L54.256,178.34 C54.338,180.97 54.826,183.938 55.64,187.014 L186.744,233.244 L219.516,218.724 L219.528,218.684 L70.534,69.696"        class="green"      ></path>      <path        d="M55.64,187.014 L55.648,187.022 C55.64,186.968 55.612,186.908 55.612,186.852 C55.612,186.908 55.62,186.96 55.64,187.014 L55.64,187.014 Z M219.516,218.724 L186.744,233.244 L55.648,187.022 C58.152,196.63 63.696,207.43 69.662,213.336 L112.446,255.876 L207.576,256 L219.528,218.684 L219.516,218.724 L219.516,218.724 Z"        class="green"      ></path>      <path        d="M3.034,130.116 C-1.202,134.638 0.902,143.966 7.722,150.838 L37.14,180.5 L55.64,187.014 C54.826,183.938 54.338,180.97 54.256,178.34 L54.058,172.75 L53.988,53.15 L3.034,130.116 Z"        class="blue"      ></path>      <path        d="M187.82,54.686 C184.744,53.9 181.794,53.414 179.12,53.33 L173.212,53.126 L53.988,53.142 L219.544,218.684 L219.558,218.684 L234.098,185.88 L187.82,54.686"        class="blue"      ></path>      <path        d="M187.67,54.654 C187.734,54.668 187.784,54.686 187.826,54.692 L187.82,54.686 C187.784,54.668 187.734,54.668 187.67,54.654 L187.67,54.654 Z M214.118,68.732 C208.11,62.674 197.452,57.168 187.826,54.692 L234.098,185.88 L219.558,218.684 L219.544,218.684 L255.076,207.336 L255.152,109.92 L214.118,68.732 L214.118,68.732 Z"        class="blue"      ></path>      <path        d="M181.338,36.298 L151.684,6.862 C144.826,0.068 135.494,-2.046 130.984,2.178 L53.988,53.142 L173.212,53.126 L179.12,53.33 C181.794,53.414 184.744,53.9 187.82,54.686 L181.338,36.298 L181.338,36.298 Z"        class="green"      ></path>    </svg>',
        },
        {
          label: "r",
          name: "R",
          class: "r",
          svg:
            '<svg viewBox="-25 -50 300 300" class="r">      <path        d="M149.333,149.333 C96,149.333 50.674,122.62 50.674,90.62 C50.674,58.62 90.667,32 144,32 C211.357,32 242.572,57.911 242.572,89.911 C242.572,121.911 208.165,149.333 149.333,149.333 M128,0 C58.667,0 0,37.333 0,85.333 C0,130.667 58.312,168.302 127.646,168.302 C196.979,168.302 256,133.333 256,85.333 C256,37.333 197.333,0 128,0"        class="grey"      ></path>      <path        d="M105.946,51.829 L105.946,192.938 L148.589,192.938 L148.589,138.063 C159.25,138.063 165.6,135.735 172.575,148.515 C183.236,166.807 196.562,192.938 196.562,192.938 L247.2,192.938 C247.2,192.938 215.218,140.676 212.553,138.063 C207.638,132.836 201.892,132.836 193.897,130.223 C209.888,127.61 224.796,120.975 229.979,106.759 C234.51,93.694 233.977,77.074 224.265,65.929 C215.854,57.11 207.223,51.829 185.901,51.829 L105.946,51.829 L105.946,51.829 Z M148.589,81.217 L176.573,81.217 C183.209,81.217 188.566,87.75 188.566,94.282 C188.566,100.815 183.236,107.348 176.573,107.348 L148.589,107.348 L148.589,81.217 L148.589,81.217 Z"        class="blue"      ></path>    </svg>',
        },
      ];
    },
  },
};
