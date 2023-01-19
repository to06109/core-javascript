import { insertLast } from './insert.js'

// 구조 분해 할당에 기본값 쓰기
const createUserCard = ({
  id = '',
  name = '',
  email = '',
  website = '',
} = {}) => {
  return /* html */ ` <article class="user-card" data-index="user-${id}">
          <h3 class="user-${name}">${name}</h3>
          <div class="user-resouce-info">
            <div>
              <a class="user-email" href="mailto:${email}">
                ${email}
              </a>
            </div>
            <div>
              <a
                class="user-website"
                href="http://${website}"
                target="_blank"
                rel="noopener noreferer"
              >
                ${website}
              </a>
            </div>
          </div>
          <button class="delete">삭제</button>
        </article>`
}

// createUserCard({
//   id: 1,
//   name: 'tiger',
//   email: 'tiger@euid.dev',
//   website: 'tiger.com',
// })

const createSpinner = (
  size = 100,
  loadingMessage = '유저 정보를 가져오는중...',
) => {
  return /* html */ `      <figure class="loadingSpinner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; background: #fff; display: block;"
          width="${size}"
          height="${size}"
          viewBox="0 0 ${size} ${size}"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient
              id="ldio-lq80p508k7s-gradient"
              x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <stop offset="10%" stop-color="black" stop-opacity="0"></stop>
              <stop offset="100%" stop-color="white" stop-opacity="1"></stop>
            </linearGradient>
            <mask
              id="ldio-lq80p508k7s-mask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="100"
              height="100"
            >
              <rect
                x="22"
                y="8"
                width="56"
                height="54"
                fill="url(#ldio-lq80p508k7s-gradient)"
              ></rect>
            </mask>
            <path
              id="ldio-lq80p508k7s-steam"
              d="M0-4c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0 c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9h0c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9"
              stroke-width="6"
              stroke-linecap="round"
              fill="#f00"
              stroke="#f8b26a"
            ></path>
          </defs>
          <g mask="url(#ldio-lq80p508k7s-mask)">
            <use x="29" y="18" xlink:href="#ldio-lq80p508k7s-steam">
              <animate
                attributeName="y"
                values="4;-14"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.5s"
              ></animate>
            </use>
            <use x="47" y="18" xlink:href="#ldio-lq80p508k7s-steam">
              <animate
                attributeName="y"
                values="0;-18"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.25s"
              ></animate>
            </use>
            <use x="64" y="18" xlink:href="#ldio-lq80p508k7s-steam">
              <animate
                attributeName="y"
                values="-4;-22"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.3333333333333333s"
              ></animate>
            </use>
          </g>
          <path
            d="M81.2,52.5l-5.2,0V49c0-1.6-1.3-3-3-3H20c-1.6,0-3,1.3-3,3v11.6C17,71.3,25.7,80,36.5,80h20.1 c7.1,0,13.3-3.8,16.7-9.5h8.3c5.2,0,9.3-4.4,9-9.6C90.2,56.1,86,52.5,81.2,52.5z M81.5,67.5h-6.8c0.8-2.2,1.3-4.5,1.3-7v-5h5.5 c3.3,0,6,2.7,6,6S84.8,67.5,81.5,67.5z"
            fill="#f8b26a"
          ></path>
          <path
            d="M78.8,88H19.2c-1.1,0-2-0.9-2-2s0.9-2,2-2h59.5c1.1,0,2,0.9,2,2S79.9,88,78.8,88z"
            fill="#d1d1d1"
          ></path>
        </svg>
        <figcaption>${loadingMessage}</figcaption>
      </figure>`
}

export const renderUserCard = (target, data) => {
  insertLast(target, createUserCard(data))
}

export const renderSpinner = (target) => {
  insertLast(target, createSpinner())
}
