import ContactNavBar from './ContactNavBar';
import Email from './Email';
import LetWork from './LetWork';

function Contact() {
  return (
    <div className="col-span-10 col-start-2 row-span-3 row-start-2 flex h-full w-full flex-col">
      <div className="absolute left-48 top-1/4 w-full font-st text-body font-normal">
        <svg width="201" height="162" viewBox="0 0 201 162" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="9.38885"
            width="118.762"
            height="40.4665"
            rx="20.2332"
            transform="rotate(9.08386 9.38885 0)"
            className="fill-green dark:fill-orange"
            fill={'currentColor'}
          />
          <path
            d="M55.5792 22.4763C52.3205 21.9553 49.8814 24.0363 49.3036 27.6504C48.7163 31.3238 50.5319 33.9028 53.7115 34.4112C56.0814 34.7901 58.5752 34.0141 59.1183 30.6172L59.2351 29.8865L54.1201 29.0687L54.3222 27.8047L60.7801 28.8373L59.555 36.4999L58.4293 36.3199L58.651 34.0464C57.6763 35.3286 55.7284 36.1109 53.4375 35.7446C49.4284 35.1036 47.1245 31.7782 47.8224 27.4136C48.5139 23.0886 51.765 20.4893 55.8136 21.1366C58.7957 21.6134 60.8348 23.6812 60.9773 26.337L59.4369 26.0907C59.1539 24.0606 57.6528 22.8079 55.5792 22.4763ZM71.0576 38.3188L62.5852 36.9642L64.846 22.8237L73.2986 24.1752L73.0902 25.4786L66.0595 24.3545L65.2449 29.4498L71.6239 30.4697L71.4186 31.7534L65.0396 30.7335L64.2155 35.8881L71.266 37.0153L71.0576 38.3188ZM74.1211 25.6435L74.3295 24.34L84.4608 25.9599L84.2524 27.2633L79.8878 26.5655L77.8354 39.4024L76.4134 39.1751L78.4659 26.3381L74.1211 25.6435Z"
            fill="#1B1B1B"
          />

          <rect
            x="76"
            y="73.3052"
            width="118.762"
            height="40.4665"
            rx="20.2332"
            transform="rotate(-11.8092 76 73.3052)"
            className="fill-orange dark:fill-yellow"
            fill={'currentColor'}
          />
          <path
            d="M130.33 75.7552L133.246 89.7752L131.836 90.0684L128.92 76.0485L130.33 75.7552ZM137.673 88.8543L136.263 89.1475L133.347 75.1276L134.776 74.8303L144.919 84.8958L142.491 73.2256L143.881 72.9364L146.798 86.9563L145.407 87.2455L135.245 77.1841L137.673 88.8543Z"
            fill="#1B1B1B"
          />

          <rect
            x="3.05743"
            y="112"
            width="118.762"
            height="40.4665"
            rx="20.2332"
            transform="rotate(4.3331 3.05743 112)"
            className="fill-yellow dark:fill-green"
            fill={'currentColor'}
          />
          <path
            d="M27.7091 127.81L27.83 126.496L38.0469 127.436L37.9259 128.751L33.5245 128.345L32.333 141.291L30.8991 141.159L32.0905 128.213L27.7091 127.81ZM51.1473 135.832C50.7496 140.154 47.661 142.942 43.6778 142.576C39.6747 142.207 37.167 138.904 37.5647 134.582C37.9625 130.26 41.0529 127.452 45.0361 127.818C49.0392 128.187 51.5469 131.49 51.1473 135.832ZM49.6736 135.696C50.0017 132.132 48.0545 129.502 44.9078 129.212C41.7611 128.923 39.3865 131.155 39.0584 134.719C38.7303 138.284 40.6576 140.912 43.8043 141.202C46.951 141.491 49.3473 139.241 49.6736 135.696ZM53.0497 138.196L53.9058 128.896L55.3397 129.028L54.4892 138.269C54.2582 140.778 55.5077 142.259 57.9972 142.488C60.427 142.712 61.9295 141.444 62.1568 138.974L63.0073 129.733L64.4412 129.865L63.5852 139.166C63.2882 142.392 61.1152 144.181 57.8689 143.882C54.5629 143.578 52.7509 141.443 53.0497 138.196ZM71.8986 145.153C67.9155 144.787 65.48 141.57 65.8833 137.188C66.2866 132.807 69.3099 130.073 73.3329 130.443C76.4 130.725 78.6393 132.799 78.9566 135.68L77.4231 135.539C77.0144 133.433 75.3773 132.017 73.1467 131.811C70.0199 131.524 67.7088 133.721 67.377 137.326C67.0471 140.911 68.9183 143.493 72.045 143.781C74.2955 143.988 76.1998 142.938 76.9931 141.083L78.5266 141.224C77.622 143.852 74.9657 145.436 71.8986 145.153ZM81.648 145.83L80.2141 145.698L81.5265 131.438L82.9605 131.57L82.3757 137.923L90.0831 138.632L90.6679 132.279L92.0819 132.409L90.7694 146.669L89.3554 146.539L89.9603 139.967L82.2529 139.257L81.648 145.83Z"
            fill="#1B1B1B"
          />
        </svg>
      </div>
      <div className="h-1/3 w-full">
        <ContactNavBar />
      </div>
      <div className="flex h-1/3 w-full justify-center ">
        <LetWork />
      </div>
      <div className="flex h-1/3 w-full justify-center">
        <Email />
      </div>
      <div className="absolute bottom-0 right-0 z-40 text-green dark:text-orange">
        <svg width="150" height="124" viewBox="0 0 150 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Clip path group">
            <mask id="mask0_524_1999" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="218">
              <g id="clip0_116_2">
                <path id="Vector" d="M200 0.187744H0V217.402H200V0.187744Z" fill="white" />
              </g>
            </mask>
            <g mask="url(#mask0_524_1999)">
              <g id="Group">
                <path
                  id="Vector_2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.2893 31.998C19.2658 42.8843 15.6458 58.0917 18.4294 72.0991C7.34132 79.8661 0 93.3994 0 108.795C-1.74156e-06 124.19 7.34132 137.724 18.4294 145.491C15.6458 159.498 19.2658 174.705 29.2893 185.592C39.3129 196.478 53.315 200.409 66.2123 197.387C73.3639 209.429 85.8246 217.402 100 217.402C114.175 217.402 126.636 209.429 133.788 197.387C146.685 200.409 160.687 196.478 170.711 185.592C180.734 174.705 184.354 159.498 181.571 145.491C192.659 137.724 200 124.19 200 108.795C200 93.3994 192.659 79.8661 181.571 72.0991C184.354 58.0917 180.734 42.8844 170.711 31.998C160.687 21.1118 146.685 17.1802 133.788 20.2034C126.636 8.16096 114.175 0.187744 100 0.187744C85.8246 0.187744 73.3638 8.16094 66.2123 20.2033C53.315 17.1802 39.3129 21.1118 29.2893 31.998Z"
                  fill={'currentColor'}
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Contact;
